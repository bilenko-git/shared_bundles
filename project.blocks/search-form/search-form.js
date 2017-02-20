modules.define('search-form', ['i-bem-dom', 'input'], function(provide, bemDom, Input) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this._domEvents('input').on('pointerenter pointerleave', function(e) {
                        // console.log(e)
                        debugger;
                        this._onInputHover(e);
                    });
                }
            }
        },
        _onInputHover: function(e) {
            debugger;
            this.findChildElem('input').setMod('input', 'hovered');
        }
    }));

});
