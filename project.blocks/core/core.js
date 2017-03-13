modules.define('core', ['i-bem-dom', 'attach', 'button', 'checkbox', 'control', 'dropdown',/* 'icon', 'image',*/ 'input', 'link', 'menu', 'modal', 'popup', 'progressbar', 'radio', 'select', 'spin', 'textarea', 'form'], function(provide, bemDom, Attach, Button, Checkbox, Control, Dropdown,/* Icon, Image,*/ Input, Link, Menu, Modal, Popup, Progressbar, Radio, Select, Spin, Textarea, Form) {

	provide(bemDom.declBlock(this.name, {
		onSetMod: {
			js: {
				inited: function() {
					console.log('core inited');
					this._attachBlock = Attach;
					this._buttonBlock = Button;
					this._checkboxBlock = Checkbox;
					this._controlBlock = Control;
					this._dropdownBlock = Dropdown;
/*					this._iconBlock = Icon;
					this._imageBlock = Image;
*/					this._inputBlock = Input;
					this._linkBlock = Link;
					this._menuBlock = Menu;
					this._modalBlock = Modal;
					this._popupBlock = Popup;
					this._progressbarBlock = Progressbar;
					this._radioBlock = Radio;
					this._selectBlock = Select;
					this._spinBlock = Spin;
					this._textareaBlock = Textarea;
					this._formBlock = Form;

				}
			}
		},
		_returnBlock: function(blockName, collection) {
			var collection = collection !== undefined || false;
			var blockNameCamelized = '_' + blockName.replace(/-(.)/,blockName.substr(blockName.indexOf('-')+1,1).toUpperCase())+ 'Block';
			// console.log(blockNameCamelized);return;
			return collection === true ? this.findChildBlocks(this[blockNameCamelized]) : this.findChildBlock(this[blockNameCamelized]);
		}
	}));

});
