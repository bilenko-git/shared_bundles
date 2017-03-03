modules.define('action-main', ['i-bem-dom', 'popup', 'BEMHTML', 'jquery', 'info-modal', 'input', 'next-tick'], function(provide, bemDom, Popup, bemHtml, $, InfoModal, input, nextTick) {
	provide(bemDom.declBlock(this.name, {
		onSetMod: {
			js: {
				inited: function(e) {
					this._domEvents().on('click', function(e) {
						e.preventDefault();
						this[this.params.action](this.params.actionParams, this);
					});
				}
			}
		},
		connectTariff: function() {
			var ctx = this;
			nextTick(function() {
				InfoModal.show(bemHtml.apply(ctx._modalForm('authentication', {'title' : ctx.params.title})));
			})
		},
		_requestForm: function() {
            InfoModal.show(bemHtml.apply(requestForm));
            // return requestForm;
		},
		authEntrance: function(actionParams, _this) {
			var form = $(_this.domElem[0].form),
				formAuth = {
					phone: '375256257224', // form.find('[name="phone"]').val()+form.find('[name="codePhone"]').val(),
					password: '34704844' //form.find('[name="password"]').val()
				};

            if(false) {
                var authObj = {
                    'data' : {
                        'access_token' : "c19e8df9-9f5c-483e-a440-90ae894d9aab",
                        'expires_in' : "599",
                        'refresh_token' : "d67c354e-c46d-4cd5-acdb-522b1901ef55",
                        'time' : "0.476393"
                    },
                    'time' : '0.476393'
                }

                sessionStorage.setItem('authentication', JSON.stringify(authObj));
                console.log(sessionStorage.authentication);
            } else {
                $.ajax({
                    type: "POST",
                    url: "api/authentication",
                    data: { formAuth },
                    success: function (data) {
                    },
                    error: function (xhr, status) {
                        console.log(xhr);
                        console.log(status);
                    }
                });
            }
		},
        _modalForm: function(modal, data) {
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
                            content: 'Подключение тарифного плана ' + '&laquo;' + data['title'] + '&raquo;'
                        }, {
                            elem: 'button-group',
                            elemMods: { vert: true, size: 'm' },
                            content: {
                                elem: 'head-title',
                                content: 'Пожалуйста, авторизуйтесь'
                            }
                        }, {
                            elem: 'button-group',
                            elemMods: { vert: true, inner: true, size: 'm' },
                            content: [{
                                elem: 'button-group',
                                elemMods: { inner: true },
                                content: [{
                                    elem: 'label',
                                    tag: 'span',
                                    content: 'Ваш номер life:)'
                                }, {
                                    block: 'select',
                                    mods: { mode: 'radio', theme: 'life-light', size: 'm' },
                                    text: 25,
                                    options: [
                                        { val: 25, text: '25' },
                                        { val: 29, text: '29' },
                                        { val: 44, text: '44' }
                                    ],
                                    name: 'codePhone',
                                }, {
                                    block: 'input',
                                    mods: { theme: 'life-light', size: 'm' },
                                    placeholder: '1234567',
                                    name: 'phone'
                                }]
                            }, {
                                elem: 'button-group',
                                elemMods: { inner: true },
                                content: [{
                                    elem: 'label',
                                    tag: 'span',
                                    content: 'Пароль'
                                }, {
                                    block: 'input',
                                    mods: { theme: 'life-light', size: 'm', width: 'available', type: 'password' },
                                    placeholder: '1234567',
                                    name: 'password'
                                }, {
                                    block : 'dropdown',
                                    mods : { switcher : 'link', theme : 'islands', size : 'm' },
                                    switcher : '',
                                    popup : 'Переход в личный кабинет на сайте в котором <br> можно управлять ...',
                                    mix: { block: 'tooltip', js: true },
                                    js: { tooltip: 'main' }
                                }]
                            }, {
                                elem: 'text-error',
                                content: 'Вы ввели неправильный номер или пароль. Проверьте и попробуйте ещё раз'
                            }, {
                                elem: 'button-group',
                                mods: 'inner',
                                content: {
                                    block: 'button',
                                    mods: { view: 'main', type: 'submit' },
                                    mix: [
                                        { block: 'form', elem: 'submit' },
                                        { block: 'action-main', js: { 'action': 'authEntrance', 'actionParams': { 'a': '1' } } },
                                    ],
                                    text: 'Войти'
                                }
                            }]
                        },{
                            elem: 'button-group',
                            elemMods: { size: 'xl' },
                            content: ['Перейти на тариф можно и с помощью USSD - ', { tag: 'span', cls: 'ussd-call', content: '*115*9#' }]
                        }]
                    }
                },
                'subcriber_and_not_subcriber' : {
                    block: 'wrapper',
                    content: {
                        block: 'form',
                        action: '',
                        method: 'post',
                        enctype: 'multipart/form-data',
                        content: [{
                            elem: 'title',
                            content: 'Подключение тарифного плана ' + '&laquo;' + data['title'] + '&raquo;'
                        }, {
                            elem: 'button-group',
                            elemMods: { wide: 'center' },
                            content: [{
                                block: 'button',
                                mods: { view: 'main', type: 'link' },
                                url: 'tarifAction2',
                                mix: { block: 'form', elem: 'submit' },
                                content: 'Я не абонент life:)'
                            }, {
                                block: 'button',
                                name: 'action',
                                val: 'change',
                                js: { action: 'tarifAction1' },
                                mods: { view: 'main', type: 'submit' },
                                mix: [
                                    { block: 'form', elem: 'submit' }, 
                                    { block: 'action-main', js: { 'action': 'connectTariff', 'actionParams': { 'a': '1' } } }
                                ],
                                content: 'Я абонент life:)'
                            }]
                        }]
                    }
                }, 
                'clientRedirectForm' : {
                    block: 'wrapper',
                    content: {
                        block: 'form',
                        action: '',
                        method: 'post',
                        enctype: 'multipart/form-data',
                        content: [{
                            elem: 'title',
                            content: 'Подключение тарифного плана ' + '&laquo;' + data['title'] + '&raquo;'
                        }, {
                            elem: 'button-group',
                            elemMods: { vert: true, size: 'l' },
                            content: {
                                elem: 'head-title',
                                content: 'Подключиться на тариф можно в ближайшем салоне'
                            }
                        }, {
                            elem: 'button-group',
                            elemMods: { inner: true, vert: true },
                            content: [{
                                elem: 'button-group',
                                elemMods: { inner: true, size: 'xl' },
                                content: [{
                                    block: 'button',
                                    mods: { view: 'main', type: 'submit' },
                                    mix: { block: 'form', elem: 'submit' },
                                    text: 'Купить SIM-карту'
                                }, {
                                    block: 'button',
                                    mods: { view: 'main', type: 'submit' },
                                    mix: { block: 'form', elem: 'submit' },
                                    text: 'Перенести номер в life:)'
                                }]
                            }]
                        }]
                    }
                },
                'changeTarifConfirmForm' : {
                    block: 'wrapper',
                    content: [{
                        block: 'form',
                        action: '',
                        method: 'post',
                        enctype: 'multipart/form-data',
                        content: [{
                            elem: 'title',
                                content: 'Подключение тарифного плана ' + '&laquo;' + data['title'] + '&raquo;'
                            }, {
                                elem: 'button-group',
                                elemMods: { wide: 'center' },
                                content: {
                                    elem: 'head-title',
                                    content: 'После смены тарифного плана'
                                }
                            }, {
                            elem: 'button-group',
                            elemMods: { inner: true, vert: true, size: 'xl' },
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
                                            content: ['все бонусные и дополнительные счета, включая ', { block: 'link', url: '#', content: 'lifepoints'}]
                                        }]
                                    }, {
                                        tag: 'h3',
                                        content: 'обнулятся:'
                                    }, {
                                        tag: 'ul',
                                        content: [{
                                            tag: 'li',
                                            content: ['услуга ', { block: 'link', url: '#', content: 'Карманы'}, ' и накопленные минуты,']
                                        }, {
                                            tag: 'li',
                                            content: 'минуты и интернет из текущего тарифного плана'
                                        }]
                                    }]
                                }
                        }] 
                    }, {
                        elem: 'button-group',
                        elemMods: { wide: 'center' },
                        content: [{
                            block: 'button',
                            mods: { view: 'main', type: 'submit' },
                            mix: { block: 'form', elem: 'submit' },
                            text: 'Подтвердить'
                        }, {
                            block: 'link',
                            mix: { block: 'form', elem: 'cancel' },
                            content: 'Отменить'
                        }]
                    }]
                }, 
                'fillBalanceForm' : {
                    block: 'wrapper',
                    content: {
                        block: 'form',
                        action: '',
                        method: 'post',
                        enctype: 'multipart/form-data',
                        content: [{
                                elem: 'title',
                                content: 'Подключение тарифного плана ' + '&laquo;' + data['title'] + '&raquo;'
                        }, {
                            elem: 'button-group',
                            elemMods: { vert: true, wide: 'center', size: 'xl' },
                            content: {
                                elem: 'text',
                                content: [ 'В настоящий момент на вашем счету недостаточно денег ', { tag: 'br' }, 'для перехода на тариф &laquo;Семья 3&raquo;. Пополните пожалуйста баланс' ]
                            }
                        }, {
                            elem: 'button-group',
                            elemMods: { vert: true, inner: true, size: 'xl' },
                            content: {
                                block: 'button',
                                mods: { view: 'main', type: 'submit' },
                                mix: { block: 'form', elem: 'submit' },
                                text: 'Пополнить баланс'
                            }
                        }]
                    }
                }, 
                'debtObligationForm' : {
                    block: 'wrapper',
                    content: {
                        block: 'form',
                        action: '',
                        method: 'post',
                        enctype: 'multipart/form-data',
                        content: [{
                            elem: 'title',
                            content: 'Подключение тарифного плана ' + '&laquo;' + data['title'] + '&raquo;'
                        }, {
                            elem: 'button-group',
                            elemMods: { size: 'xl' },
                            content: {
                                elem: 'text',
                                content: 'Нам очень жаль, но при наличии обязательств (например смартфона в рассрочку) переход невозможен до их погашения'
                            }
                        }]
                    }
                }
            };

            return modals[modal];
        }
	}));
});
