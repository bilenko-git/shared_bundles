modules.define('action-main', ['i-bem-dom', 'popup', 'BEMHTML', 'jquery', 'info-modal', 'input'], function(provide, bemDom,  Popup, bemHtml, $, InfoModal, input) {
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this._domEvents().on('click', function(e) {
                        this[this.params.action]();
                    });
                }
            }
        },
        tiriff: function() {    
            this[this.params.actionParams.method]();
        },
        toPlugSMP1: function() {
            InfoModal.show(bemHtml.apply(this.auth()));
            console.log('SMP1');
        },
        toPlugSMP2: function() {
            console.log('SMP2');
        },
        toPlugSMP3: function() {
            console.log('SMP3');
        },
        toPlugSMPN: function() {
            console.log('SMPN');
        },
        auth: function() {
            var tarifActionTitle = this.params.title || 'def';
            var authForm = {
                block: 'form',
                action: '',
                method: 'post',
                enctype: 'multipart/form-data',
                content: [{
                    elem: 'title',
                    content: 'Подключение тарифного плана ' + '&laquo;' + tarifActionTitle + '&raquo;'
                }, {
                    elem: 'button-group',
                    elemMods: { vert: true },
                    content: [{
                        elem: 'head-title',
                        content: 'Пожалуйста, авторизуйтесь'
                    }, {
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
                            ]
                        }, {
                            block: 'input',
                            mods: { theme: 'life-light', size: 'm' },
                            placeholder: '1234567'
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
                            placeholder: '1234567'
                        }, {
                            block : 'dropdown',
                            mods : { switcher : 'link', theme : 'islands', size : 'm' },
                            switcher : { block: 'tooltip'},
                            popup : {
                                block: 'popup',
                                mix: { block: 'tooltip', js: true },
                                content: 'Пароль от личного кабинета life:)'
                            },
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
                            mix: { block: 'form', elem: 'submit' },
                            text: 'Войти'
                        }
                    }, {
                        elem: 'button-group',
                        elemMods: { wide: true },
                        content: ['Перейти на тариф можно и с помощью USSD - ', { tag: 'span', cls: 'ussd-call', content: '*115*9#'}]
                    }]
                }]
             };
        
            return authForm;
        }
    }));
});
