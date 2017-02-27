modules.define('form', ['i-bem-dom', 'BEMHTML', 'modal', 'popup', 'input', 'checkbox', 'button', 'select', 'next-tick'], function(provide, bemDom, bemHtml, Modal, Popup, Input, Checkbox, Button, Select, nextTick) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                // this._domEvents().on('pointerenter', this._isValid);
                this._domEvents('submit').on('click', function(e) {
                	// debugger;
                	this._onSubmit(e, Button, Modal, Popup, bemDom, nextTick);
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
    _onSubmit: function(e, Button, Modal, Popup, bemDom, nextTick ) {
    	e.preventDefault();

    	var actionId = e.bemTarget.domElem.data('bem').button.action;
    	var parentBlock = e.bemTarget.findParentBlock('tarif', { block: 'tarif' });
    	console.log('111');
    	console.log(parentBlock);
    	debugger;
    	if(actionId === '/api/getAuth' ) {
    		debugger;
		var tarifActionTitle = this.params.title || 'def';
		var authForm = bemHtml.apply({
			block: 'form',
			action: '',
			method: 'post',
			enctype: 'multipart/form-data',
			content: [{
				elem: 'title',
				content: 'Подключение тарифного плана ' + '&laquo;' + tarifActionTitle + '&raquo;'
			}, {
				elem: 'button-group',
                    elemMods: { vert: true },
				content: [{
					elem: 'button-group',
					elemMods: { inner: true },
					content: [{
						elem: 'label',
						tag: 'span',
						content: 'Ваш номер life:)'
					}, {
						block: 'select',
						mods: { mode: 'radio', theme: 'life-light', size: 'm' },
						text: 25,
						options: [
						{ val: 25, text: '25'},
						{ val: 29, text: '29'},
						{ val: 44, text: '44'}
						]
					}, {
						block: 'input',
						mods: { theme: 'life-light', size: 'm' },
						placeholder: '1234567'
					}]
				}, {
					elem: 'button-group',
					elemMods: { inner: true },
					content: [{
						elem: 'label',
						tag: 'span',
						content: 'Пароль'
					}, {
						block: 'input',
						mods: { theme: 'life-light', size: 'm', width: 'available', type: 'password' },
						placeholder: '1234567'
					}, {
						block: 'tooltip'
					}]
				}, {
					elem: 'button-group',
					elemMods: { inner: true },
					content: 'Вы ввели неправильный номер или пароль. Проверьте и попробуйте ещё раз'
				}, {
					elem: 'button-group',
					mods: 'inner',
					content: {
						block: 'button',
						mods: { view: 'main', type: 'submit' },
						mix: { block: 'form', elem: 'submit' },
						text: 'Войти'
					}
				}]
			}]
		});
		// debugger;
		console.log(bemDom);
		debugger;
		// modules.require(['next-tick'], function(nextTick) {
			// nextTick(function(){
				var parentModal = this.findParentBlock(Modal);
				parentModal.toggleMod('autoclosable');
				if ( parentModal !== null) {
					// parentModal.setContent(authForm);
					// debugger;
					// parentModal.setMod('autoclosable', true);
					nextTick(function() {
						parentModal.setContent(authForm);
					})
					// parentModal.setMod('visible');
					// var renderedForm = bemDom.update(this.domElem, authForm);
				}
				parentModal.toggleMod('autoclosable', true);
				// debugger;
				// parentModal.toggleMod('visible');
				// debugger;
			// });
		// })
		// var renderedForm = bemDom.update(this.domElem, authForm);
	}
    	// console.log(e);
    	// console.log(Button);
    	// console.log(this);
    	// debugger;
    }
}));

});
