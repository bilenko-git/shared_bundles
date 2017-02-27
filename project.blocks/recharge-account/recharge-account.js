modules.define('recharge-account', ['i-bem-dom', 'modal', 'popup', 'BEMHTML', 'jquery'], function(provide, bemDom, Modal, Popup, bemHtml, $) {
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this._domEvents('').on('click', function(e) {
                        console.log('___sd');

                  
                        var tarifAction1 = '/api/getAuth';
                        var tarifAction2 = '/desktop.bundles/main-user/main-user.html';

                        var modal = bemHtml.apply({
                            block: 'modal',
                            mods : { visible: false, theme : 'life-light', autoclosable: true },
                            content: {
                                block: 'form',
                                action: '',
                                method: 'post',
                                enctype: 'multipart/form-data',
                                content: [{
                                    elem: 'title',
                                    content: 'Подключение тарифного плана ' + '&laquo;&raquo;'
                                }, {
                                    elem: 'button-group',
                                    content: [{
                                        block: 'button',
                                        mods: { view: 'main', type: 'link' },
                                        url: tarifAction2,
                                        mix: { block: 'form', elem: 'submit' },
                                        content: 'Я не абонент life:)'
                                    }, {
                                        block: 'button',
                                        name: 'action',
                                        val: 'change',
                                        js: { action: tarifAction1 },
                                        mods: { view: 'main', type: 'submit' },
                                        mix: { block: 'form', elem: 'submit' },
                                        content: 'Я абонент life:)'
                                    }]
                                }]
                            }
                        });

                        modal =  '<button class="button button_theme_red button_size_s button__control recharge-account i-bem recharge-account_js_inited button_js_inited button__control_js_inited" data-bem="{&quot;button&quot;:{},&quot;recharge-account&quot;:{}}" role="button" type="button"><span class="button__text">Пополнить</span></button>';

                        console.log(modal);
                        if( !this._modalWindow) {
                            this._modalWindow = bemDom.append(this.domElem, modal);
                            this.findChildBlock(Modal).toggleMod('visible');
                        } else {
                            this._modalWindow = bemDom.replace(this._modalWindow, modal);
                            this._modalWindow.bem(Modal).setMod('visible');
                        }
                    });
                }
            }
        }
    }));
});
