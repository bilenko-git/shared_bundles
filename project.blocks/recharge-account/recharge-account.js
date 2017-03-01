modules.define('recharge-account', ['i-bem-dom', 'popup', 'BEMHTML', 'jquery', 'info-modal', 'input'], function(provide, bemDom,  Popup, bemHtml, $, InfoModal, input) {
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this._domEvents('').on('click', function(e) {
                        var title = 'Пополнить счет',
                        
                            html = bemHtml.apply({
                                block: 'modal',
                                mods : { visible: false, theme : 'life-light', autoclosable: true },
                                content: {
                                    block: 'form',
                                    action: '',
                                    method: 'post',
                                    enctype: 'multipart/form-data',
                                    content: [{
                                        block : 'input',
                                        mods : { theme : 'life-light', size : 'm' },
                                        placeholder : 'Enter your name',
                                        id : 'Unique_1'
                                    }]
                                }
                            });

                        InfoModal.show(html);
                    });
                }
            }
        }
    }));
});
