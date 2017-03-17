modules.define('input', ['i-bem-dom'], function(provide, bemDom) {
	provide(bemDom.declBlock(this.name, {
		onSetMod: {
			js: {
				inited: function(){
					this._events().on('change_name', function(e) {
						this.toggleMod('hidden');
					});
					this.__base.apply(this, arguments);
				},
			}
		}
	}))
});