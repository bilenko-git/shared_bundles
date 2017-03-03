/**
 * @module modal
 */

modules.define(
	'modal',
	['i-bem-dom'],
	function(provide, bemDom, Modal) {

		/**
		 * @exports
		 * @class modal
		 * @bem
		 */
		provide(Modal.declMod({ modName: 'theme', modVal: 'islands' }, /** @lends modal.prototype */ {
			onSetMod: {
				'visible': {
					'true': function() {
						// console.log(bemDom);
						this
						// Apply the animation only at first opening, otherwise the animation will be played when block
						// initialized.
							.setMod('has-animation')
							.__base.apply(this, arguments);
						this._domEvents('close-button').on('click', function() {
							this.toggleMod('visible');
						});
					},
					'': function() {
						console.log('close');
						this._emit('modal_destruct')
						// this.__base.apply(this, arguments);
						bemDom.destruct(this.domElem);
						// this.setContent('');
					}
				}
			},
			_setTitle: function(title) {
				this.findChildElem('title').domElem.text(title);
				return this;
			}
		}));
	});
