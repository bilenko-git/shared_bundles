modules.define('form', ['i-bem-dom', 'BEMHTML', 'modal', 'popup', 'input', 'checkbox', 'button', 'select', 'next-tick'], function(provide, bemDom, bemHtml, Modal, Popup, Input, Checkbox, Button, Select, nextTick) {

    provide(bemDom.declBlock(this.name, {
	   onSetMod: {
		  js: {
			 inited: function() {
				// this._domEvents().on('pointerenter', this._isValid);
				this._domEvents('submit').on('click', function(e) {
				    // debugger;
				    //this._onSubmit(e, Button, Modal, Popup, bemDom, nextTick);
				});
				this._domEvents('action').on('click', function(e) {
					//this._onSubmit(e, Button, Modal, Popup, bemDom, nextTick);
				});
			 }
		  }
	   },
	   _isValid: function(e, ctx) {
		  console.log(e);
		  console.log(ctx);
	   },
	   _isValidField: function(e, ctx, field, valType) {
		  return isValidField;
	   },
	   _onSubmit: function(e, Button, Modal, Popup, bemDom, nextTick) {
		  e.preventDefault();

		  // var actionId = e.bemTarget.domElem.data('bem').button.action;
		  // debugger;
		  var actionId = e.bemTarget.params.actionId;
		  var parentBlock = e.bemTarget.findParentBlock('tarif', { block: 'tarif' });
		  // console.log('111');
		  console.log(parentBlock);
		  // debugger;


			 console.log(bemDom);
			 var parentModal = this.findParentBlock(Modal);
			 parentModal.toggleMod('autoclosable');
			 if (parentModal !== null) {
				nextTick(function() {
					   parentModal.setContent(authForm);
				    })
			 }
			 parentModal.toggleMod('autoclosable', true);

	   }
    }));

});
