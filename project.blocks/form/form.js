modules.define('form', ['i-bem-dom', 'input', 'checkbox', 'button', 'select'], function(provide, bemDom, Input, Checkbox, Button, Select) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this._domEvents().on('pointerenter', this._isValid);
            }
        }
    },
    _isValid: function(e, ctx) {
    	console.log(e);
    	console.log(ctx);
    },
    _isValidField: function(e, ctx, field, valType) {
    	return isValidField;
    }
}));

});
