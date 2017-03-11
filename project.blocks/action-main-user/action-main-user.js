modules.define('action-main-user', ['i-bem-dom', 'button', 'link', 'input', 'dropdown', 'modal', 'popup', 'BEMHTML', 'jquery', 'next-tick' ], function(provide, bemDom, Button, Link, Input, Dropdown, Modal, Popup, bemHtml, $, nextTick) {

	provide(bemDom.declBlock(this.name, {
		onSetMod: {
			js: {
				inited: function() {
					var action = this.params.action;
					var actionParams = this.params.actionParams;
					this._domEvents().on( 'click pointerpress', function(e) {
						nextTick(function() {

							switch (action) {
								case 'modalClose':	this._modalClose(e, Modal, actionParams);
												break;
								case 'modalShow':	this._modalShow(e, Modal, actionParams);
												break;
								case 'buyMore':	this._buyMore();
												break;
								case 'userLogout':	this._userLogout();
												break;
								case 'allServices':	this._allServices();
												break;
								case 'changeTarif':	this._changeTarif();
												break;
								case 'fillBalance':	this._fillBalance();
												break;
								case 'changeUserName':	this._changeUserName();
												break;
								case 'addUserPhoto':	this._addUserPhoto();
												break;
								case 'changeProfileColor':	this._changeProfileColor();
												break;
								case 'deleteUser':	this._deleteUser();
												break;
								case 'redirect':	this._redirect(e, Link, Button);
												break;
								case 'redistribute':	this._redistribute();
												break;
								case 'saveChanges':	this._saveChanges();
												break;

							}
						});
					});
					// this.params.
				}
			}
		},
		_templates: function(bemHtml, template, templateVars) {
			var templates = {
				'changeTarifForm' : {},
				'form_type_line': {},
				'button': {},
				'link': {},
			};
			return bemHtml.apply(templates[template])
		},
		_modalClose: function(Modal, params) {
			console.log('_modalClose triggered');
		},
		_modalShow: function(Modal, params) {
			console.log('_modalShow triggered');
		},
		_buyMore: function(params) {
			console.log('_buyMore triggered');
		},
		_userLogout: function(params) {
			console.log('_userLogout triggered');
		},
		_allServices: function(params) {
			console.log('_allServices triggered');
		},
		_changeTarif: function(params) {
			console.log('_changeTarif triggered');
		},
		_fillBalance: function(params) {
			console.log('_fillBalance triggered');
		},
		_changeUserName: function(params) {
			console.log('_changeUserName triggered');
		},
		_addUserPhoto: function(params) {
			console.log('_addUserPhoto triggered');
		},
		_changeProfileColor: function(params) {
			console.log('_changeProfileColor triggered');
		},
		_deleteUser: function(params) {
			console.log('_deleteUser triggered');
		},
		_redirect: function(e, Link, params) {
			e.preventDefault();
			console.log(e.bemTarget);
			console.log('_redirect triggered');
			debugger;
		},
		_redistribute: function(params) {
			console.log('_redistribute triggered');
		},
		_saveChanges: function(params) {
			console.log('_saveChanges triggered');
		},
		_validateInput: function(Input) 
		{
			console.log('_validateInput triggered');
		}

	}));
});
