(function() {
    console.log('38');
    var profile = '';

    if (sessionStorage.profile && (profile = JSON.parse(sessionStorage.profile)) && profile.status) {
        $('.my-tariff__phone, .user__phone').html(profile.data.msisdn);
        $('.my-tariff__tariff').html('тариф ' + profile.data.tariff.name);

        $('.user-balance__price').html(profile.data.tariff.cost);
        $('.user__name').html(profile.data.userName);
        $('[name="userName"]').val(profile.data.userName);
        
        if( profile.data.photoUrl ) {
            $('.user__photo').css({'background-image': 'url(/assets/img/users/'+profile.data.photoUrl+')'});
        }
    }
})();

modules.define('action-user', [
    'i-bem-dom', 'popup', 'BEMHTML', 'jquery', 'croppie', 'loader_type_js', 'info-modal', 
    'input', 'next-tick', 'form'
    ], function(provide, bemDom, Popup, bemHtml, $, Croppie, Loader, InfoModal, input, nextTick, Form) {
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this._domEvents().on('click', function(e) {
                        e.preventDefault();

                        this.Form = Form;
                        this.bemDom = bemDom;
                        this.input = input;
                        this.Croppie = Croppie;
                        this[this.params.action](this.params.actionParams, this);
                    });
                }
            }
        },
        send_recharge_account: function() {
            console.log(this);
        },
        rechargeAccount: function() {
            var ctx = this;

            InfoModal.show(bemHtml.apply(ctx._template('recharge_account', {
                'title': '',
                'typeTariff': ''
            })));
        },
        ask_minutes: function() {
            var ctx = this;

            InfoModal.show(bemHtml.apply(ctx._template('ask_minutes', {
                'title': '',
                'typeTariff': ''
            })));
        },
        ask_mb: function() {
            var ctx = this;

            InfoModal.show(bemHtml.apply(ctx._template('ask_mb', {
                'title': '',
                'typeTariff': ''
            })));
        },
        change_name: function() {
            var inp = $('.user__name').html(bemHtml.apply({
                block: 'input',
                mix: [
                    { block : 'inforamtion', elem : 'input-phone' }
                ],
                mods: { theme: 'life-light', size: 's' },
                maxLength: '10',
                name: 'userName',
                autocomplete: false,
                js: true
            }));

            $(function() {
                $('[name="userName"]', inp).val(JSON.parse(sessionStorage.profile).data.userName).click().focus();
                $('.buttons-user').removeClass('hide');
            });
        }, 
        cancelProfile: function() {
            var profile = JSON.parse(sessionStorage.profile);
            
            console.log('cancelProfile');
            $('.buttons-user, .colors').addClass('hide');
            $('.user__name').html(profile.data.userName);
            
            if( profile.data.photoUrl ) {
                $('.user__photo').html('').css({'background-image': 'url(/assets/img/users/'+profile.data.photoUrl+')'});
            }
        },
        saveProfile: function() {
            $('.spiner').removeClass('spiner_hide');
            
            var _this = this,
                dataUser = [];

            var userName = $('.user__name input');
            if( userName.length ) {
                var userNameVal = userName.val();
                if( userNameVal.trim() ) {
                    dataUser.push({"key":"userName","value":userNameVal});
                } else {
                    console.error('Error - user name');
                    return false;
                }
            }
            
            if( !$('.colors.hide').length ) {
                dataUser.push({"key":"color","value": (_this.hexc($('.colors .active').css('background-color')))});
            }
      
            if( window.$uploadCrop ) {
                window.$uploadCrop.result({
                    type: 'canvas',
                    size: 'viewport'
                }).then(function (resp) {
                    console.log('3k3');
                    dataUser.push({"key":"photoUrl","value": JSON.parse(sessionStorage.profile).data.userId+'.png'});
                    
                    $('.user__photo').html(_this.popupResult({
                        src: resp
                    }));
                    window.$uploadCrop = '';
                    _this.upProfileAjax( dataUser, resp );
                });
            } else {
                _this.upProfileAjax( dataUser, '' );
            }
        },
        upProfileAjax: function( dataUser, url_img) {
            var _this = this;
                profile = JSON.parse(sessionStorage.profile);

            $.ajax({
                type: "POST",
                url: "api/update_user",
                data: {
                    'access_token' : JSON.parse(sessionStorage.authentication).data.access_token,
                    'url_img' : url_img,
                    'userIdTo' : profile.data.userId,
                    'data' : JSON.stringify({
                        'userIdTo' : profile.data.userId,
                        'params' : dataUser
                    })
                },
                success: function(data) {
                    var data = JSON.parse(data, _this);
                    console.log(data);
                    
                    if (data['status']) {
                        $.each(dataUser, function(index, val) {
                            profile['data'][val['key']] = val['value'];
                        });
                        sessionStorage.setItem('profile', JSON.stringify(profile));
                        
                        $('.user__name').html( JSON.parse(sessionStorage.profile).data.userName);
                        $('.buttons-user, .colors').addClass('hide');
                    } else {

                    }
                    
                    $('.spiner').addClass('spiner_hide');
                }
            });
        },
        hexc: function(colorval) {
            var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            delete(parts[0]);

            for (var i = 1; i <= 3; ++i) {
                parts[i] = parseInt(parts[i]).toString(16);
                if (parts[i].length == 1) parts[i] = '0' + parts[i];
            }
            return '#' + parts.join('');
        },
        popupResult: function (result) {
            var html;
            if (result.html) {
                html = result.html;
            }
            if (result.src) {
                html = '<img src="' + result.src + '" />';
            }
            return html;
        },
        add_photo: function() {
            var _this = this;
            window.$uploadCrop = '';

            $(function() {
                var inputPhoto = $('[name="photo"]');
                inputPhoto.click();
                
                function readFile(input) {
                    if (input.files && input.files[0]) {
                        var reader = new FileReader();
                        
                        reader.onload = function (e) {
                            window.$uploadCrop.bind({
                                url: e.target.result,
                            });
                            
                            $('.buttons-user').removeClass('hide');
                        }
                        reader.readAsDataURL(input.files[0]);
                        
                        var el = $('.user__photo');
                        el.html('');
                        window.$uploadCrop = new  _this.Croppie(el[0], {
                            viewport: { width: 60, height: 60, type: 'circle' },
                            boundary: { width: 60, height: 60 },
                            showZoomer: true,
                            enableOrientation: true,
                        });
                    }
                }

                inputPhoto.on('change', function () { readFile(this); });
            });
        },
        select_color: function() {
            $('.buttons-user').removeClass('hide');
            
            var colorStr = '',
                colorsObj = {"colors":[
                    "#e23e97","#f390bc","#f7941d","#ffd231",
                    "#8ec63f","#c9dc4f","#16b893","#89d0c8",
                    "#2151a3","#5bb3e5","#50368f","#233333"
                ]};

            $.each(colorsObj['colors'], function(key, val) {
                var active = '';

                if(val === JSON.parse(sessionStorage.profile).data.color) {
                    active = 'active';
                }
                colorStr += '<div class="'+active+'" style="background-color: '+val+'"></div>';
            });

            var colors =  $('.colors').removeClass('hide').html(colorStr);

            $('div', colors).bind('click', function(e) {
                $('.active', colors).removeClass('active');
                $(this).addClass('active');
            });
        },
        _template: function(modal, data) {
            var modals = {
                'recharge_account': {
                    block: 'wrapper',
                    content: {
                        block: 'modal-recharge-account',
                        action: '',
                        method: 'post',
                        enctype: 'multipart/form-data',
                        content: [{
                            elem: 'title',
                            content: 'Запрос на пополнение счета'
                        }, {
                            elem: 'message',
                            content: 'Введите необходимую сумму и отправьте запрос<br> пользователю, в группе которого вы состоите'
                        }, {
                            elem: 'button-group',
                            elemMods: { inner: true },
                            content: [{
                                block: 'input',
                                mods: { theme: 'life-light', size: 'a' },
                                maxLength: '10',
                                name: 'price',
                                autocomplete: false
                            }, {
                                elem: 'label',
                                tag: 'span',
                                content: 'руб'
                            }]
                        }, {
                            elem: 'text-error',
                            elemMods: { hidden: true },
                            content: ''
                        }, {
                            block: 'button',
                            mix: [
                                { block: 'modal-recharge-account', elem: 'send' },
                                { block: 'action-main', js: { 'action': 'send_recharge_account', 'actionParams': 'data' } }
                            ],
                            text: 'Отправить запрос'
                        }]
                    }
                },
                'ask_minutes': {
                    block: 'wrapper',
                    content: {
                        block: 'modal-recharge-account',
                        action: '',
                        method: 'post',
                        enctype: 'multipart/form-data',
                        content: [{
                            elem: 'title',
                            content: 'Запрос на увеличение минут'
                        }, {
                            elem: 'message',
                            content: 'Введите необходимо количество минут и отправьте запрос<br> полозователю, в группе которого вы состоите'
                        }, {
                            elem: 'button-group',
                            elemMods: { inner: true },
                            content: [{
                                block: 'input',
                                mods: { theme: 'life-light', size: 'a' },
                                maxLength: '10',
                                name: 'minutes',
                                autocomplete: false
                            }, {
                                elem: 'label',
                                tag: 'span',
                                content: 'мин'
                            }]
                        }, {
                            elem: 'text-error',
                            elemMods: { hidden: true },
                            content: ''
                        }, {
                            block: 'button',
                            mix: [
                                { block: 'modal-recharge-account', elem: 'send' },
                                { block: 'action-main', js: { 'action': 'send_recharge_account', 'actionParams': 'data' } }
                            ],
                            text: 'Отправить запрос'
                        }]
                    }
                },
                'ask_mb': {
                    block: 'wrapper',
                    content: {
                        block: 'modal-recharge-account',
                        action: '',
                        method: 'post',
                        enctype: 'multipart/form-data',
                        content: [{
                            elem: 'title',
                            content: 'Запрос на увеличение МБ'
                        }, {
                            elem: 'message',
                            content: 'Введите необходимо количество МБ и отправьте запрос<br> полозователю, в группе которого вы состоите'
                        }, {
                            elem: 'button-group',
                            elemMods: { inner: true },
                            content: [{
                                block: 'input',
                                mods: { theme: 'life-light', size: 'a' },
                                maxLength: '10',
                                name: 'mb',
                                autocomplete: false
                            }, {
                                elem: 'label',
                                tag: 'span',
                                content: 'МБ'
                            }]
                        }, {
                            elem: 'text-error',
                            elemMods: { hidden: true },
                            content: ''
                        }, {
                            block: 'button',
                            mix: [
                                { block: 'modal-recharge-account', elem: 'send' },
                                { block: 'action-main', js: { 'action': 'send_recharge_account', 'actionParams': 'data' } }
                            ],
                            text: 'Отправить запрос'
                        }]
                    }
                }
            };

            return modals[modal];
        }
    }));
});
