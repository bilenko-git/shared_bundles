modules.define('pc-block', ['i-bem-dom'], function(provide, bemDom) {
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this._domEvents('head').on('click', function(e) {
                        this.toggleMod('opened');
                    });
                }
            }
        }
    }));
});
