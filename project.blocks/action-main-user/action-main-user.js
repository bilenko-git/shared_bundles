modules.define('action-main-user', ['i-bem-dom', 'button', 'link', 'input', 'dropdown', 'modal', 'popup', 'BEMHTML', 'jquery', 'next-tick' ], function(provide, bemDom, Button, Link, Input, Dropdown, Modal, Popup, bemHtml, $, nextTick) {

	provide(bemDom.declBlock(this.name, {
		onSetMod: {
			js: {
				inited: function() {
					var action = this.params.action;
					var actionParams = this.params.actionParams;
					this._domEvents().on( 'click pointerpress', function(e) {
						switch (action) {
							case 'modalClose':	this._modalClose(e, Modal, actionParams);
											break;
							case 'modalShow':	this._modalShow(bemHtml, 'changeTarifForm', Modal, actionParams);
											break;
							case 'changeTarifModal':	this._changeTarifModal(bemHtml, 'changeTarifForm', Modal, actionParams);
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
							case 'redirect':	this._redirect(e, nextTick, Link, Button, actionParams);
											break;
							case 'redistribute':	this._redistribute();
											break;
							case 'saveChanges':	this._saveChanges();
											break;

						}
					});
					// this.params.
				}
			}
		},
		_templates: function(bemHtml, template, templateVars) {
			var templates = {
				'changeTarifForm' : {
					block: 'wrapper',
					content: {
						block: 'form',
						action: '',
						method: 'post',
						enctype: 'multipart/form-data',
						content: [{
							elem: 'title',
							elemMods: { size: 'm' },
							content: templateVars['form-title']
						},{
							elem: 'head-title',
							elemMods: { size: 'm' },
							content: templateVars['head-title']
						}, {
							elem : 'button-group',
							elemMods: { inner: true, size: 's' },
							content: [{
								elem: 'button-group',
								elemMods: { type: 'list', 'w-sep': 'right' },
								content: [{
									elem: 'text',
									elemMods: { size: 'm' },
									content: 'Другой тарифный план'
								}, {
									elem: 'text',
									elemMods: { size: 'm' },
									content: 'линейки &laquo;Семья&raquo;'
								},{
									block: 'button',
									mix: { block: 'action-main-user', js: { action: 'redirect' , actionParams: { redirectUrl: 'http://multidev.life.com.by'}} },
									mods: { view: 'main' },
									text: 'Перейти'
								}]
							}, {
								elem: 'button-group',
								elemMods: { type: 'list', 'w-sep': true },
								content: [{
									elem: 'text',
									elemMods: { size: 'm' },
									content: 'Любой иной'
								}, {
									elem: 'text',
									elemMods: { size: 'm' },
									content: 'тарифный план life:)'
								}, {
								block: 'button',
								mix: { block: 'action-main-user', js: { action: 'redirect' , actionParams: { redirectUrl: 'https://issa.life.com.by/ru/'}} },
								mods: { view: 'main' },
								text: 'Перейти'
							}]
							}]
						}, {
							elem : 'button-group',
							elemMods: { inner: true, wide: 'center' },
							content: {
								block: 'button',
								mix: [{ block: 'action-main-user', js: { action: 'modalCancel', actionParams: {} } }, { block: 'form', elem: 'cancel', elemMods: { size: 'm' } }],
								mods: { type: 'link' },
								text: 'Отмена'
							}
						}, {
							elem : 'button-group',
							elemMods: { inner: true, wide: 'center' },
							content: {
								block: 'button',
								mix: [{ block: 'action-main-user', js: { action: 'modalCancel', actionParams: {} } }, { block: 'form', elem: 'cancel', elemMods: { size: 'm' } }],
								mods: { type: 'link' },
								text: 'Отмена'
							}
						}]
					}
				},
				'form_type_line': {},
				'button': {},
				'link': {},
			};
			return bemHtml.apply(templates[template])
		},
		_modalClose: function(Modal, params) {

			console.log('_modalClose triggered');
		},
		_modalShow: function(Modal, content, params) {
				// if( !this._modalWindow) {
			var modal = bemHtml.apply({
				block: 'modal',
				mods: { visible: false, theme: 'life-light', autoclosable: true, size: 'm' },
				content: content
			});
				// debugger;
			if (!this._modalWindow) {
				// debugger;
				this._modalWindow = bemDom.append(this.domElem, modal);
				this.findChildBlock(Modal).toggleMod('visible');
			} else {
				this._modalWindow = bemDom.replace(this._modalWindow, modal);
				// debugger;
				this._modalWindow.bem(Modal).setMod('visible');
			}
				// Modal(mod)
				// console.log(this.findChildBlock(Modal));

				// var modalWindow = this.findChildBlock(Modal);
				// modalWindow.toggleMod('visible');
				// modalWindow.toggleMod('visible');
				// debugger;
			console.log('_modalShow triggered');
		},
		_changeTarifModal: function(bemHtml, template, Modal, params) {
			var content = this._templates(bemHtml, 'changeTarifForm', {
				'form-title': 'Смена тарифного плана',
				'head-title': 'Перейти на другой тарифный план'

			});
			this._modalShow(Modal, content, params);
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
		_redirect: function(e,nextTick, Link, Button, params) {
			console.log('_redirect triggered');
			// if(this.findChildBlock(Button) == null) {
				var ctx = this;
				nextTick(function() {
					e.preventDefault();
					location.href = ctx.domElem.attr('href') || params['redirectUrl'];
				});
			// }
			// debugger;
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
		},
		_getSessionAuth: function(el) {
			if (sessionStorage.authentication) {
				return JSON.parse(sessionStorage.authentication).data[el];
			}
			return false;
		},
		_getSessionProfile: function(el) {
			if (sessionStorage.authentication) {
				return JSON.parse(sessionStorage.profile).data[el];
			}
			return false;
		}


	}));
});
