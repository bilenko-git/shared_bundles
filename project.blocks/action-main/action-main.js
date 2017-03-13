        var k = 0;
        modules.define('action-main', ['i-bem-dom', 'popup', 'BEMHTML', 'jquery', 'info-modal', 'input', 'next-tick', 'form'], function (provide, bemDom, Popup, bemHtml, $, InfoModal, input, nextTick, Form) {
            provide(bemDom.declBlock(this.name, {
                onSetMod: {
                    js: {
                        inited: function (e) {
                            if (k++ === 1) {
                                this.switchButtons();
                            }

                            this._domEvents().on('click', function (e) {
                                e.preventDefault();
                                this.Form = Form;
                                this.bemDom = bemDom;
                                this[this.params.action](this.params.actionParams, this);
                            });
                        }
                    }
                },
                imNotASubscriber: function () {
                    var ctx = this;

                    nextTick(function () {
                        InfoModal.show(bemHtml.apply(ctx._modalForm('subcriber_and_not_subcriber', {'title': 'Я не абонент life:)'})));
                    });
                    console.log('39');
                },
                conrolTariffsFamilyAndMultinet: function () {
                    var ctx = this;

                    if (ctx.getSessionAuth('access_token')) {
                        ctx.checkProfile();
                    } else {
                        nextTick(function () {
                            InfoModal.show(bemHtml.apply(ctx._modalForm('authentication', {'title': ''})));
                            ctx.validationFormAuth();
                        });
                    }
                },
                goToManagement: function () {
                    var ctx = this;

                    if (ctx.getSessionAuth('access_token')) {
                        if (this.getSessionProfile('role') === 'ROLE_BUNDLE_CHIEF') {
                            window.location = "http://multidev.life.com.by/main";
                        } else {
                            window.location = "http://multidev.life.com.by/user";
                        }
                    } else {
                        nextTick(function () {
                            InfoModal.show(bemHtml.apply(ctx._modalForm('authentication', {'title': ''})));
                            ctx.validationFormAuth();
                        });
                    }
                },
                connectTariff: function (actionParams, _this) {
                    var ctx = this;

                    nextTick(function () {
                        if (ctx.getSessionAuth('access_token')) {
                            //ajax(smp1 or smp2 ...)

                            //Подключение тарифного плана ' + '&laquo; Семья 2 &raquo;
                            InfoModal.show(bemHtml.apply(ctx._modalForm('changeTarifConfirmForm', {
                                'title': ctx.params.actionParams.title,
                                'typeTariff': ctx.params.actionParams.typeTariff
                            })));
                        } else {
                            InfoModal.show(bemHtml.apply(ctx._modalForm('authentication', {
                                'title': ctx.params.actionParams.title,
                                'typeTariff': ctx.params.actionParams.typeTariff
                            })));

                            ctx.validationFormAuth();
                        }
                    });
                },
                _requestForm: function () {
                    var ctx = this;
                    var title = ctx.params.actionParams.title;

                    InfoModal.show(bemHtml.apply(ctx._modalForm('subcriber_and_not_subcriber', {'title': title})));
                },
                authEntrance: function (actionParams, _this) {
                    var ctx = this,
                        form = this.findParentBlock(_this.Form),
                        phoneCode = $('[name="codePhone"]', form.domElem).val(),
                        phoneNumber = $('[name="phone"]', form.domElem).val().trim(),
                        formAuth = {
                            phone: '375' + phoneCode + phoneNumber,
                            password: $('[name="password"]', form.domElem).val().trim()
                        };

                    if (!phoneNumber && !formAuth['password']) {
                        _this.getMessage('ERR-02', '.form__text-error');
                        form.findChildElem('text-error').setMod('hidden', 'on');
                    } else if (phoneNumber.length < 7) {
                        _this.getMessage('ERR-03', '.form__text-error');
                        form.findChildElem('text-error').setMod('hidden', 'on');
                    } else {
                        $('.spiner').removeClass('spiner_hide');
                        
                        $.ajax({
                            type: "POST",
                            url: "api/authentication",
                            data: {formAuth},
                            success: function (data) {
                                var data = JSON.parse(data, _this);
                                console.log(data);

                                if (data['code'] && data['code'] === 'SUCCESS') {
                                    console.log('kkkk');
                                    form.findChildElem('text-error').setMod('hidden', 'off');
                                    sessionStorage.setItem('authentication', JSON.stringify(data));
                                    _this.getProfile(actionParams);
                                } else {
                                    _this.getMessage('ERR-01', '.form__text-error');
                                    form.findChildElem('text-error').setMod('hidden', 'on');
                                    $('.spiner').addClass('spiner_hide');
                                }
                           }
                        });
                    }
                },
                getProfile: function(actionParams, _this) {
                    var ctx = this;
                    
                    $.ajax({
                        type: "POST",
                        url: "api/get_profile",
                        data: {
                            access_token: ctx.getSessionAuth('access_token')
                        },
                        success: function (data) {
                            console.log(JSON.parse(data)['status']);
                            if ( data && JSON.parse(data).status ) {
                                sessionStorage.setItem('profile', data);
                                ctx.switchButtons();

                                if (actionParams['typeTariff']) {
                                    InfoModal.show(bemHtml.apply(ctx._modalForm('changeTarifConfirmForm', {
                                        'title': ctx.params.actionParams.title,
                                        'typeTariff': ctx.params.actionParams.typeTariff
                                    })));
                                } else {
                                    ctx.checkProfile();
                                }
                            }

                            $('.spiner').addClass('spiner_hide');
                        }
                    });
                },
                checkProfile: function () {
                    var familyTariff = {'SMP1': true, 'SMP2': true, 'SMP3': true, 'SMPN': true},
                        notFamilyTariff = {'SMP': true};

                    if (!notFamilyTariff[this.getSessionProfile('tariff')['code']]) {
                        console.log('family');
                        if (this.getSessionProfile('role') === 'ROLE_BUNDLE_CHIEF') {
                            window.location = "http://multidev.life.com.by/main";
                        } else {
                            window.location = "http://multidev.life.com.by/user";
                        }
                    }
                },
                subcriber: function () {
                    var ctx = this;
                    nextTick(function () {
                        InfoModal.show(bemHtml.apply(ctx._modalForm('clientRedirectForm', {
                            'title': ctx.params.actionParams.title
                        })));
                    });
                    console.log('subcriber');
                },
                validationFormAuth: function () {
                    var form = $('.modal');

                    $('[name="phone"]', form).bind('past input propertychange', function (index, value) {
                        if (this.value.length === 0) {
                            this.selectionStart = 0;
                            this.selectionEnd = 0;
                        } else {
                            this.selectionStart = this.selectionEnd;
                        }

                        if (this.selectionStart === this.selectionEnd) {
                            if (this.selectionEnd !== 0) {
                                var lastIncorrectText = this.value.search(/[^0-9]+/g),
                                        lastInputText = this.value.replace(/[^0-9]+/g, '');
                            }

                            var caretPosition = getCaret(this);
                            $(this).val(lastInputText);

                            if (caretPosition !== 0) {
                                if (this.setSelectionRange) {
                                    this.focus();

                                    if (lastIncorrectText !== -1) {
                                        caretPosition = caretPosition - 1;
                                    }

                                    this.setSelectionRange(caretPosition, caretPosition);
                                }
                            }
                        }
                    });

                    function getCaret(el) {
                        if (el.selectionEnd) {
                            return el.selectionEnd;
                        } else if (document.selection) {
                            el.focus();

                            var r = document.selection.createRange();
                            if (r === null) {
                                return 0;
                            }

                            var re = el.createTextRange(),
                                    rc = re.duplicate();
                            re.moveToBookmark(r.getBookmark());
                            rc.setEndPoint('EndToStart', re);

                            return rc.text.length;
                        }
                        return 0;
                    }
                },
                notSubcriber: function () {
                    var ctx = this;
                    
                    nextTick(function () {
                        InfoModal.show(bemHtml.apply(ctx._modalForm('authentication', {
                            'title': ctx.params.actionParams.title
                        })));
                        
                        ctx.validationFormAuth();
                    });
                    console.log('notSubcriber');
                },
                _modalForm: function (modal, data) {
                    console.log(data);
                    var modals = {
                        'authentication': {
                            block: 'wrapper',
                            content: {
                                block: 'form',
                                action: '',
                                method: 'post',
                                enctype: 'multipart/form-data',
                                content: [{
                                        elem: 'title',
                                        content: ''
                                    }, {
                                        elem: 'button-group',
                                        elemMods: {vert: true, size: 'm'},
                                        content: {
                                            elem: 'head-title',
                                            content: 'Пожалуйста, авторизуйтесь'
                                        }
                                    }, {
                                        elem: 'button-group',
                                        elemMods: {vert: true, inner: true, size: 'm'},
                                        content: [{
                                                elem: 'button-group',
                                                elemMods: {inner: true},
                                                content: [{
                                                        elem: 'label',
                                                        tag: 'span',
                                                        content: 'Ваш номер life:)'
                                                    }, {
                                                        block: 'select',
                                                        mods: {mode: 'radio', theme: 'life-light', size: 'm'},
                                                        text: 25,
                                                        options: [
                                                            {val: 25, text: '25'},
                                                            {val: 29, text: '29'},
                                                            {val: 33, text: '33'},
                                                            {val: 44, text: '44'}
                                                        ],
                                                        name: 'codePhone',
                                                    }, {
                                                        block: 'input',
                                                        attrs: {type: 'number'},
                                                        mods: {theme: 'life-light', size: 'm', type: 'number'},
                                                        placeholder: '1234567',
                                                        maxLength: '7',
                                                        name: 'phone',
                                                        autocomplete: false
                                                    }]
                                            }, {
                                                elem: 'button-group',
                                                elemMods: {inner: true},
                                                content: [{
                                                        elem: 'label',
                                                        tag: 'span',
                                                        content: 'Пароль'
                                                    }, {
                                                        block: 'input',
                                                        mods: {theme: 'life-light', size: 'm', width: 'available', type: 'password'},
                                                        //placeholder: 'пароль',
                                                        maxLength: '50',
                                                        name: 'password',
                                                        autocomplete: false
                                                    }, {
                                                        block: 'dropdown',
                                                        mods: {switcher: 'link', theme: 'islands', size: 'm', 'tooltipS': true},
                                                        switcher: '',
                                                        popup: 'Переход в личный кабинет на сайте в котором <br> можно управлять ...',
                                                        mix: {block: 'tooltip', js: true},
                                                        js: {tooltip: 'TXT-03'}
                                                    }]
                                            }, {
                                                elem: 'text-error',
                                                elemMods: {hidden: true},
                                                content: ''
                                            }, {
                                                elem: 'button-group',
                                                mix: {block: 'button-aut-enter'},
                                                mods: 'inner',
                                                content: {
                                                    block: 'button',
                                                    mods: {view: 'main', type: 'submit'},
                                                    mix: [
                                                        {block: 'form', elem: 'submit'},
                                                        {block: 'action-main', js: {'action': 'authEntrance', 'actionParams': data}},
                                                    ],
                                                    text: 'Войти'
                                                }
                                            }]
                                    }, {
                                        elem: 'button-group-center',
                                        elemMods: {size: 'xl'},
                                        content: ['Перейти на тариф можно с помощью USSD - ', {
                                                tag: 'span',
                                                cls: 'ussd-call',
                                                content: '*115*9#'
                                            }, {
                                                tag: 'i',
                                                cls: 'ussd-call-img',
                                            }]
                                    }, {
                                        elem: 'im-not-a-subscriber',
                                        content: 'Я ещё не абонент life:) ',
                                        mix: {block: 'action-main', js: {'action': 'subcriber', 'actionParams': {'type': ''}}},
                                        mods: {action: true},
                                    }]
                            }
                        },
                        'subcriber_and_not_subcriber': {
                            block: 'wrapper',
                            content: {
                                block: 'form',
                                action: '',
                                method: 'post',
                                enctype: 'multipart/form-data',
                                content: [{
                                        elem: 'title',
                                        content: data['title']
                                    }, {
                                        elem: 'button-group',
                                        elemMods: {wide: 'center'},
                                        content: [{
                                                block: 'button',
                                                mods: {view: 'main', type: 'submit'},
                                                mix: [
                                                    {block: 'form', elem: 'submit'},
                                                    {block: 'action-main', js: {'action': 'subcriber', 'actionParams': {'title': data['title']}}}
                                                ],
                                                content: 'Я не абонент life:)'
                                            }, {
                                                block: 'button',
                                                mods: {view: 'main', type: 'submit'},
                                                mix: [
                                                    {block: 'form', elem: 'submit'},
                                                    {block: 'action-main', js: {'action': 'notSubcriber', 'actionParams': {'title': data['title']}}}
                                                ],
                                                content: 'Я абонент life:)'
                                            }]
                                    }]
                            }
                        },
                        'clientRedirectForm': {
                            block: 'wrapper',
                            content: {
                                block: 'form',
                                action: '',
                                method: 'post',
                                enctype: 'multipart/form-data',
                                content: [{
                                        elem: 'title',
                                        content: data['title']
                                    }, {
                                        elem: 'button-group',
                                        elemMods: {vert: true, size: 'l'},
                                        content: {
                                            elem: 'head-title',
                                            content: 'Подключиться на тариф можно в ближайшем салоне'
                                        }
                                    }, {
                                        elem: 'button-group',
                                        elemMods: {inner: true, vert: true},
                                        content: [{
                                                elem: 'button-group',
                                                elemMods: {inner: true, size: 'xl', 'buttons': true},
                                                content: [{
                                                        block: 'button',
                                                        mods: {view: 'main', type: 'link'},
                                                        mix: {block: 'form', elem: 'submit'},
                                                        text: 'Купить SIM-карту',
                                                        url: 'http://www.life.com.by/private/salons'
                                                    }, {
                                                        block: 'button',
                                                        mods: {view: 'main', type: 'link'},
                                                        mix: {block: 'form', elem: 'submit'},
                                                        text: 'Перенести номер в life:)',
                                                        url: 'http://www.life.com.by/private/services/polnyiy_perenos_nomera/'
                                                    }]
                                            }]
                                    }]
                            }
                        },
                        'changeTarifConfirmForm': {
                            block: 'wrapper',
                            content: [{
                                    block: 'form',
                                    action: '',
                                    method: 'post',
                                    enctype: 'multipart/form-data',
                                    content: [{
                                            elem: 'title',
                                            content: ''
                                        }, {
                                            elem: 'button-group',
                                            elemMods: {wide: 'center'},
                                            content: {
                                                elem: 'head-title',
                                                content: 'После смены тарифного плана'
                                            }
                                        }, {
                                            elem: 'button-group',
                                            elemMods: {inner: true, vert: true, size: 'xl'},
                                            content: {
                                                elem: 'text',
                                                content: [{
                                                        tag: 'h3',
                                                        content: 'продолжат действовать:'
                                                    }, {
                                                        tag: 'ul',
                                                        content: [{
                                                                tag: 'li',
                                                                content: 'все услуги, которые вы подключали дополнительно к вашему текущему тарифному плану'
                                                            }, {
                                                                tag: 'li',
                                                                content: ['все бонусные и дополнительные счета, включая ', {block: 'link', url: '#', content: 'lifepoints'}]
                                                            }]
                                                    }, {
                                                        tag: 'h3',
                                                        content: 'обнулятся:'
                                                    }, {
                                                        tag: 'ul',
                                                        content: [{
                                                                tag: 'li',
                                                                content: ['услуга ', {block: 'link', url: '#', content: 'Карманы'}, ' и накопленные минуты,']
                                                            }, {
                                                                tag: 'li',
                                                                content: 'минуты и интернет из текущего тарифного плана'
                                                            }]
                                                    }]
                                            }
                                        }]
                                }, {
                                    block: 'change-tariff-footer-modal',
                                    content: [{
                                        elem: 'question',
                                        content: 'Перейти на тирифный план "' + data['title'] + '"?'
                                    }, {
                                        elem: 'buttons',
                                        content: [{
                                                block: 'button',
                                                mods: {view: 'main', type: 'submit'},
                                                mix: [
                                                    {block: 'form', elem: 'submit'},
                                                    {block: 'action-main', js: {'action': 'confirmTariffChange', 'actionParams': data}}
                                                ],
                                                text: 'Подтвердить'
                                            }, {
                                                block: 'link',
                                                mix: [
                                                    {block: 'form', elem: 'cancel'},
                                                    {block: 'modal__close-button'}
                                                ],
                                                content: 'Отменить'
                                            }]
                                    }, {
                                        elem: 'message',
                                        content: ''
                                    }]
                                }]
                        },
                        'fillBalanceForm': {
                            block: 'wrapper',
                            content: {
                                block: 'form',
                                action: '',
                                method: 'post',
                                enctype: 'multipart/form-data',
                                content: [{
                                        elem: 'title',
                                        content: data['title']
                                    }, {
                                        elem: 'button-group',
                                        elemMods: {vert: true, wide: 'center', size: 'xl'},
                                        content: {
                                            elem: 'text',
                                            content: ['В настоящий момент на вашем счету недостаточно денег ', {tag: 'br'}, 'для перехода на тариф &laquo;Семья 3&raquo;. Пополните пожалуйста баланс']
                                        }
                                    }, {
                                        elem: 'button-group',
                                        elemMods: {vert: true, inner: true, size: 'xl'},
                                        content: {
                                            block: 'button',
                                            mods: {view: 'main', type: 'submit'},
                                            mix: {block: 'form', elem: 'submit'},
                                            text: 'Пополнить баланс'
                                        }
                                    }]
                            }
                        },
                        'debtObligationForm': {
                            block: 'wrapper',
                            content: {
                                block: 'form',
                                action: '',
                                method: 'post',
                                enctype: 'multipart/form-data',
                                content: [{
                                        elem: 'title',
                                        content: data['title']
                                    }, {
                                        elem: 'button-group',
                                        elemMods: {size: 'xl'},
                                        content: {
                                            elem: 'text',
                                            content: 'Нам очень жаль, но при наличии обязательств (например смартфона в рассрочку) переход невозможен до их погашения'
                                        }
                                    }]
                            }
                        }
                    };

                    return modals[modal];
                },
                confirmTariffChange: function (actionParams) {
                    var _this = this;
                    $('.spiner').removeClass('spiner_hide');
                    
                    $.ajax({
                        type: "POST",
                        url: "api/confirm_tariff_change",
                        data: {
                            'msisdn': _this.getSessionProfile('msisdn'),
                            'tariff': actionParams['typeTariff'],
                            'access_token': _this.getSessionAuth('access_token')
                        },
                        success: function (data) { 
                            console.log(data);
                            var data = JSON.parse(data).data;
                            
                            console.log(data);
                            if ( data['success'] ) {
                                _this.ToChengeTariffInSessionStorage(actionParams['typeTariff']);
                                $('.change-tariff-footer-modal__message').html('');
                            } else {
                                $('.change-tariff-footer-modal__message').html( data.error ? data.error : data.message );
                            }

                            $('.spiner').addClass('spiner_hide');
                        }
                    });
                },
                ToChengeTariffInSessionStorage: function( newTariff ) {
                    var profile = JSON.parse(sessionStorage.profile);
                    
                    profile.data.tariff.code = newTariff;
                    sessionStorage.setItem('profile', JSON.stringify(profile));
                    $('.modal__close-button').click();
                },
                getSessionAuth: function (el) {
                    if (sessionStorage.authentication) {
                        return JSON.parse(sessionStorage.authentication).data[el];
                    }

                    return false;
                },
                getSessionProfile: function (el) {
                    if (sessionStorage.profile) {
                        return JSON.parse(sessionStorage.profile).data[el];
                    }

                    return false;
                },
                exit: function (actionParams, _this) {
                    console.log(_this);
                    console.log('exit');
                    sessionStorage.setItem('authentication', '');
                    sessionStorage.setItem('profile', '');
                    location.reload();
                },
                switchButtons: function () {
                    $('.button-exit')[(this.getSessionAuth('access_token') ? 'remove' : 'add') + 'Class']('hide');
                    $('.button-line')[((this.getSessionProfile('tariff')['code'] == 'SMP') ? 'add' : 'remove') + 'Class']('hide');
                },
                getMessage: function (tooltipIndex, domEl) {
                    var _this = this,
                            tooltips = sessionStorage.tooltips;

                    if (!tooltips) {
                        $.ajax({
                            type: "POST",
                            url: "api/tooltip",
                            success: function (tooltips) {
                                tooltips = JSON.parse(JSON.parse(tooltips).data);
                                sessionStorage.setItem('tooltips', JSON.stringify(tooltips));
                                _this._appendMessage(tooltips, tooltipIndex, domEl);
                            }
                        });
                    } else {
                        _this._appendMessage(JSON.parse(tooltips), tooltipIndex, domEl);
                    }
                },
                _appendMessage: function (tooltips, tooltipIndex, domEl) {
                    var tooltipDes = '';

                    for (var tooltip in tooltips) {
                        if (tooltipIndex == tooltips[tooltip]['key']) {
                            tooltipDes = tooltips[tooltip]['description']
                            continue;
                        }
                    }

                    $(domEl).html(tooltipDes);
                }
            }));
        });
