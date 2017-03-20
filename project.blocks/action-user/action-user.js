(function() {
    console.log('38');
    var profile = '';

    if (sessionStorage.profile && (profile = JSON.parse(sessionStorage.profile)) && profile.status) {
/*        $('.my-tariff__phone, .user__phone').html(profile.data.msisdn);
        $('.my-tariff__tariff').html('тариф ' + profile.data.tariff.name);

        $('.user-balance__price').html(profile.data.tariff.cost);
        $('.user__name').html(profile.data.name);
        $('[name="userName"]').val(profile.data.name);*/
    }

/*    $('[name="userName"]').on('keypress', function(e) {
        if (e.which == 13) {
            console.log($(this).val());
        }
    });*/
})();

modules.define('action-user', ['i-bem-dom', 'popup', 'BEMHTML', 'jquery', 'info-modal', 'input', 'next-tick', 'form'], function(provide, bemDom, Popup, bemHtml, $, InfoModal, input, nextTick, Form) {
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this._domEvents().on('click', function(e) {
                        e.preventDefault();

                        this.Form = Form;
                        this.bemDom = bemDom;
                        this.input = input;
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
            //this._emit('change_name');
            console.log(this);
        
            //this.input2.findMixedBlock().setMod('hidden', 'on');
           // this.findMixedBlock(input).setMod('hidden', 'on');
        },
        add_photo: function() {
            console.log('add_photo');
        },
        select_color: function() {
            console.log('select_color');
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
