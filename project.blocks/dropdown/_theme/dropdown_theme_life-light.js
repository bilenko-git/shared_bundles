modules.define('dropdown', ['i-bem-dom', 'popup' ], function(provide, bemDom, Popup, Dropdown) {

	provide(Dropdown.declMod({ modName: 'theme', modVal: 'life-light' }, {
		onSetMod: {
			js: {
				inited: function() {
					// console.log(bemDom);
					// this._events().on('checkbox_trigger', function(e) {
						// this._popup.setMod('autoclosable');
						// e.stopPropagation();
						// this.toggleMod('opened');
						// debugger;
					// })
					// debugger;
				},
			},
/*			'opened': {
				'': function() {
					// debugger;

					// bemDom.destruct(this.findMixedBlock(Popup).domElem);
				}
			}
*/		}
	}));

});
