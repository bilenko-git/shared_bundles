modules.define('recharge-account', ['i-bem-dom', 'popup', 'BEMHTML', 'jquery', 'info-modal'], function(provide, bemDom,  Popup, bemHtml, $, InfoModal) {
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this._domEvents('action').on('click', function(e) {
                        var html = bemHtml.apply({
                            block: 'my-modal-content',
                            content: 'asdfas',
                        });

                        InfoModal.show(html);
                        //console.log(InfoModal.getModal());
                        //InfoModal.clear();
                    });
                }
            }
        }
    }));
});
