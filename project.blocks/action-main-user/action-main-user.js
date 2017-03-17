modules.define('action-main-user', ['i-bem-dom', 'button', 'link', 'input', 'dropdown', 'modal', 'popup', 'BEMHTML', 'jquery', 'next-tick', 'core' ], function(provide, bemDom, Button, Link, Input, Dropdown, Modal, Popup, bemHtml, $, nextTick, Core) {

	provide(bemDom.declBlock(this.name, {
		onSetMod: {
			js: {
				inited: function() {
					if (this.__self.prototype._Core === undefined) {
						this.__self.prototype._Core = this.findParentBlock(Core);
					}
					// console.log(this._Core);
					// console.log(this._Core._returnBlock('input', true).filter( function(e){return e.getName() === 'ne'; }))
					if(this.__self.prototype._input === undefined) {
						this.__self.prototype._input = this._Core._returnBlock('input', true).filter( function(e){return e.getName() === 'phone'; });
						if(this._input && this._input._entities.length !== 0 ) {
							this._domEvents(this._input).on('input change keypress', function(e) {
								this._validateInput(e);
							});
						}
					}

					// this.findMixedBlock()_domEvents().on('input change keypress', function)
					var action = this.params.action;
					var actionParams = this.params.actionParams;
					this._domEvents().on( 'pointerclick', function(e) {
						// debugger;
						switch (action) {
							case 'modalClose':	this._modalClose(e, Modal, actionParams);
											break;
							case 'modalCancel':	this._modalCancel(e, Modal, actionParams);
											break;
							case 'modalShow':	this._modalShow(bemHtml, template, Modal, actionParams);
											break;
							case 'changeTarifModal':	this._changeTarifModal(bemHtml, 'changeTarifForm', Modal, actionParams);
											break;
							case 'buyMore':	this._buyMore(bemHtml, 'buyMoreForm', {
								'form-title': '',
								'head-title': ''
							}, actionParams);
											break;
							case 'userLogout':	this._userLogout(actionParams);
											break;
							case 'showInviteForm':	this._showInviteForm(actionParams);
											break;
							case 'sendInvite':	this._sendInvite(actionParams);
											break;
							case 'allServices':	this._allServices(actionParams);
											break;
							case 'changeTarif':	this._changeTarif(actionParams);
											break;
							case 'fillBalance':	this._fillBalance(actionParams);
											break;
							case 'changeUserName':	this._changeUserName(actionParams);
											break;
							case 'addUserPhoto':	this._addUserPhoto(actionParams);
											break;
							case 'changeProfileColor':	this._changeProfileColor(actionParams);
											break;
							case 'showDeleteUserForm':	this._showDeleteUserForm(actionParams);
											break;
							case 'deleteUser':	this._deleteUser(actionParams);
											break;
							case 'redirect':	this._redirect(e, nextTick, Link, Button, actionParams);
											break;
							case 'redistribute':	this._redistribute(actionParams);
											break;
							case 'saveChanges':	this._saveChanges(actionParams);
											break;
							case 'notifyUser': this._notifyUser(actionParams);
											break;
							case 'addActionsBlock': this._addActionsBlock(e, actionParams, bemHtml);
											break;
							case 'setMenuCheckBoxVal': this._setMenuCheckBoxVal(e, actionParams, bemHtml);
											break;
							case 'buyMoreVoiceTraffic': this._buyMoreVoiceTraffic(e, actionParams, bemHtml);
											break;
							case 'buyMoreInternetTraffic': this._buyMoreInternetTraffic(e, actionParams, bemHtml);
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
						}, (function(templateVars){ return templateVars['head-title'] === '' ? '' : {
							elem: 'head-title',
							elemMods: { size: 'm' },
							content: templateVars['head-title']
						} })(templateVars), {
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
									mix: [ { block: 'action-main-user', js: { action: 'redirect' , actionParams: { redirectUrl: 'http://multidev.life.com.by'}} }, { block: 'form', elem: 'button', elemMods: { view: 'modal' } }],
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
								// mix: { block: 'action-main-user', js: { action: 'changeTarifModal', actionParams: {}}},
								mix: [{ block: 'action-main-user', js: { action: 'redirect' , actionParams: { redirectUrl: 'https://issa.life.com.by/ru/'}} }, { block: 'form', elem: 'button', elemMods: { view: 'modal' } } ],
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
							elemMods: { inner: true, wide: 'center', size: 's' },
							content: [{
								elem: 'button-group',
								elemMods: { type: 'line' },
								content: [{
									block: 'icon',
									mods: { 'tooltip-small': 'warning' },
								}, {
									elem: 'button-group',
									elemMods: { type: 'list-lm' },
									content: [{
										elem: 'text',
										elemMods: { size: 'm' },
										content: 'После того, как вы смените тарифный план,'
									}, {
										elem: 'text',
										elemMods: { size: 'm' },
										content: 'все минуты и МБ у всех пользователей обнулятся'
									}]

								}]
							}]
						}]
					}
				},
				'actionsBlock': {
					block: 'actions',
					mods: { view: 'simple' },
					innerMods: { 'w-sep': 'bottom' },
					content: [{
						elem: 'group',
						content: [{
							block: 'userinfo',
							content: [{
								block: 'dropdown',
								mods: { switcher: 'button', theme: 'life-light' },
								switcher: { block: 'button', mods: { 'icon-only': 'menu', theme: 'islands' }, icon: { block: 'icon', mods: { 'type': 'menu-toggle' } } },
								popup: {
									block: 'menu',
									mix: { block: 'userinfo', elem: 'menu' },
									mods: { theme: 'life-light', focused: 'false' },
									content: [,
										{ elem: 'item', val: '1', mix: { block: 'action-main-user', js: { action: 'addUserPhoto', actionParams: { userId: 'user-2' } } }, content: 'Добавить фото' },
										{ elem: 'item', val: '1', mix: { block: 'action-main-user', js: { action: 'changeProfileColor', actionParams: { userId: 'user-2' } } }, content: 'Выбрать цвет профиля' },
										{ elem: 'item', val: '1', mix: { block: 'action-main-user', js: { action: 'setMenuCheckBoxVal', actionParams: { userId: 'user-2' } } }, content: [{
											block: 'checkbox',
											mods: {
												theme: 'shared',
												type: 'button',
												view: 'plain'
											},
											icon: {
												block: 'icon',
												mods: { type: 'checkbox' }
											},
											name: 'need_send',
											val: '1',
											text: [{
													tag: 'span',
													cls: 'checkbox-line',
													content: 'Получать уведомление'
												}, {
													tag: 'span',
													cls: 'checkbox-line',
													content: 'об окончании мин/Мб'
												}]
											}]
										},
									]
								},
							}, {
								block: 'icon',
								mix: { block: 'userinfo', elem: 'avatar' },
								url: '/assets/img/user-avatar.png'
							}]
						}, {
							block: 'form',
							mods: { view: 'line' },
							action: '',
							method: 'post',
							enctype: 'multipart/form-data',
							content: [{
								elem: 'button-group',
								elemMods: { type: 'list' },
								content: [{
									elem: 'button-group',
									elemMods: { type: 'line' },
									content: [{
										block: 'form',
										elem: 'label',
										elemMods: { size: 's' },
										content: 'Имя'
									}, {
										block: 'input',
										name: 'username',
										mods: { theme: 'life-light', size: 's', width: 'available' },
										placeholder: '',
									}]
								}, {
									elem: 'button-group',
									elemMods: { type: 'line' },
									content: [{
										tag: 'span',
										block: 'form',
										elem: 'label',
										elemMods: { size: 's' },
										content: 'Номер life:)'
									}, {
										block: 'select',
										mods: { mode: 'radio', theme: 'life-light', size: 's' },
										text: '25',
										options: [
										{ val: '25', text: '25' },
										{ val: '29', text: '29' },
										{ val: '33', text: '33' },
										{ val: '44', text: '44' }
										]
									}, {
										block: 'input',
										name: 'phone',
										maxLength: 7,
										mods: { theme: 'life-light', size: 's' },
										placeholder: '123',
										type: 'search',
										val: ''
									}]
								}]
							}, {
								elem: 'button-group',
								elemMods: { type: 'list' },
								content: [{
									elem: 'button-group',
									elemMods: { type: 'line' },
									content: [{
										block: 'button',
										mix: { block: 'action-main-user', js: { 'action': 'sendInvite', 'actionParams': {} } },
										mods: { view: 'main' },
										text: 'Отправить приглашение'
									}, {
										block: 'dropdown',
										mods: { switcher: 'button', theme: 'islands' },
										switcher: { block: 'button', mods: { 'icon-only': true }, icon: { block: 'icon', mods: { 'tooltip-small': 'question' } } },
										popup: ['Пользователь получит SMS вида: &laquo;Абонент ИМЯ хочет добавить вас в свою группу. В течение 48 часов вы можете подтвердить вступление. Приняв приглашение, вы перейдете на тарифный план ', { block: 'link', url: '#', content: '&laquo;Семья&raquo;'}, 'Условия текущего тарифного плана будут аннулированы. Подключенные дополнительные услуги будут действовать согласно правилам на тарияном плане ', { block: 'link', url: '#', content: '&laquo;Семья&raquo;'}, 'Перейти к приглашению &mdash; USSD *555*1#',{ block: 'icon', mods: { type: 'phone' }}],
										mix: { block: 'tooltip', js: true },
										js: { tooltip: 'main' }
									}]
								}]
							}, {
								elem: 'button-group',
								elemMods: { type: 'list' },
								content: [{
									elem: 'text',
									elemMods: { size: 's'},
									content: 'Как только пользователь примет приглашение,',
								}, {
									elem: 'text',
									elemMods: { size: 's'},
									content: 'вы сможете распределить ему мин и МБ'
								}]
							}]
						}]
					}]
				},
				'buyMoreForm': {
					block: 'wrapper',
					content: {
						block: 'form',
						action: '',
						method: 'post',
						enctype: 'multipart/form-data',
						content: [(function(templateVars) {
							return templateVars['form-title'] === '' ? '' : {
								elem: 'title',
								elemMods: { size: 'm' },
								content: templateVars['form-title']
							}
						})(templateVars), (function(templateVars){
							return templateVars['form-title'] === '' ? '' : {
								elem: 'head-title',
								elemMods: { size: 'm' },
								content: templateVars['head-title']
							}

						})(templateVars), {
							elem: 'button-group',
							elemMods: { type: 'line-sl', 'w-sep': 'vert' },
							content: [{
								block: 'icon',
								mix: { block: 'balance', elem: 'info-icon', elemMods: { size: 'm' } },
								mods: { std: true, 'SMPN-lev2': true },
							}, {
								block: 'balance',
								content: [{
									elem: 'info-value',
									content: [ '100 мин', {
										elem: 'info-desc',
										content: 'на все сети'
									}]
								}]
							}, {
								block: 'balance',
								content: [{
									elem: 'info-value',
									mix: {
										block: 'c-balance',
										elem: 'info-value',
										elemMods: { size: 'm' }
									},
									content: ['3,60 ', {
										block: 'c-balance',
										elem: 'info-value',
										elemMods: { size: 's' },
										content: 'руб/мес'
									}]
								}]
							}, {
								block: 'button',
								mix: { block: 'action-main-user', js: { action: 'buyMoreVoiceTraffic', actionParams: {} } },
								mods: { view: 'main' },
								text: 'Активировать'
							}]
						}, {
							elem: 'button-group',
							elemMods: { type: 'line-sl' },
							content: [{
								block: 'icon',
								mix: { block: 'balance', elem: 'info-icon', elemMods: { size: 'm' } },
								mods: { std: true, 'SMPN-lev3': true, },
										// balance__info-icon icon icon_std icon_SMPN-lev3
									}, {
										block: 'balance',
										content: [{
											elem: 'info-value',
											content: ['1 000 МБ ', {
												elem: 'info-desc',
												content: 'трафика'
											}]
										}]
									}, {
										block: 'balance',
										content: [{
											elem: 'info-value',
											mix: {
												block: 'c-balance',
												elem: 'info-value',
												elemMods: { size: 'm' }
											},
											content: ['1,60 ', {
												block: 'c-balance',
												elem: 'info-value',
												elemMods: { size: 's' },
												content: 'руб/мес'
											}]
										}]
									}, {
										block: 'button',
										mix: { block: 'action-main-user', js: { action: 'buyMoreInternetTraffic', actionParams: {} } },
										mods: { view: 'main' },
										text: 'Активировать'
									}]
								}]
							}
						},
				'deleteUserForm': {
					block: 'wrapper',
					content: {
						block: 'form',
						action: '',
						method: 'post',
						enctype: 'multipart/form-data',
						content: [(function(templateVars) {
							return templateVars['form-title'] === '' ? '' : {
								elem: 'title',
								elemMods: { size: 'm' },
								content: templateVars['form-title']
							}
						})(templateVars), (function(templateVars){
							return templateVars['form-title'] === '' ? '' : {
								elem: 'head-title',
								elemMods: { size: 'm' },
								content: templateVars['head-title']
							}
						})(templateVars), {
							elem: 'button-group',
							//form__button-group form__button-group_inner form__button-group_wide_center form__button-group_size_s
							elemMods: { inner: true, wide: 'center', size: 's'},
							content: [{
								elem: 'button-group',
								elemMods: { type: 'line' },
								content: [{
									block: 'icon',
									mods: { 'tooltip-small': 'warning' }
								}, {
									elem: 'button-group',
									elemMods: { type: 'list-lm' },
									content: [{
										elem: 'text',
										elemMods: { size: 'm' },
										content: 'При удалении пользователя все его'
									}, {
										elem: 'text',
										elemMods: { size: 'm' },
										content: 'неизрасходованные минуты и МБ вернутся к вам'
									}]
								}]
							}]
						},{
							elem: 'button-group',
							elemMods: { inner: true, wide: 'center', size: 's' },
							content: {
								elem: 'text',
								elemMods: { size: 'm' },
								content: 'Вы действительно хотите удалить пользователя Анна?'
							}
						}, {
							elem: 'button-group',
							elemMods: { inner: true, wide: 'center', size: 's' },
							content: [{
								block: 'button',
								mods: { view: 'main' },
								text: 'Удалить'
							}, {
								block: 'button',
								mix: [{ block: 'action-main-user', js: { action: 'modalCancel', actionParams: {} } }, { block: 'form', elem: 'cancel', elemMods: { size: 'm' } }],
								mods: { type: 'link' },
								text: 'Отмена'
							}]
						}]
					}
				},
				'saveChangesForm': {
					block: 'form',
					mods: { view: 'line-bottom' },
					action: '',
					method: 'post',
					enctype: 'multipart/form-data',
					content: [{
						block: 'control-group',
						mods: { type: 'line', size: 'l', theme: 'shared' },
						content: [{
							block: 'button',
							mix: { block: 'actions', elem: 'button', elemMods: { save: 'profile', inactive: true } },
							mods: { view: 'main' },
							text: 'Сохранить изменения'
						}, {
							block: 'dropdown',
							mods: { switcher: 'button', theme: 'islands' },
							switcher: { block: 'button', mods: { 'icon-only': true }, icon: { block: 'icon', mods: { 'tooltip-small': 'question' } } },
							popup: 'Переход в личный кабинет на сайте в котором <br> можно управлять ...',
							mix: { block: 'tooltip', js: true },
							js: { tooltip: 'TXT-08' }
						}]
					}, {
						block: 'control-group',
						mods: { type: 'line', size: 'l', theme: 'shared' },
						content: [{
							block: 'checkbox',
							mods: {
								theme: 'shared',
								type: 'button',
								view: 'plain'
							},
							icon: {
								block: 'icon',
								mods: { type: 'checkbox' }
							},
							name: 'need_save',
							val: '1',
							text: [{
								tag: 'span',
								cls: 'checkbox-line',
								content: 'Распределить'
							}, {
								tag: 'span',
								cls: 'checkbox-line',
								content: 'всем поровну'
							}]
						}, {
							block: 'checkbox',
							mods: { theme: 'shared', type: 'button', view: 'plain' },
							icon: { block: 'icon', mods: { type: 'checkbox' } },
							name: 'auto_transfer',
							val: '1',
							text: [{
								tag: 'span',
								cls: 'checkbox-line',
								content: 'Автоматически применить данное'
							}, {
								tag: 'span',
								cls: 'checkbox-line',
								content: 'распределение в следующем месяце'
							}]
						}]
					}]
				},
				'changeUserNameForm': {},
				'addUserPhotoForm': {},
				'changeProfileColor': {},
				'button': {},
				'link': {},
			};
			return bemHtml.apply(templates[template]);
		},
		_modalClose: function(Modal, params, actionParams) {
			this._Core.findChildBlock(this._Core._returnBlock('button'),true);
			console.log('_modalClose triggered');
		},
		_modalShow: function(Modal, content, params, actionParams) {

			// var buttons = this._Core._returnBlock('button',true);
			// console.log(buttons);
			// debugger;
				// if( !this._modalWindow) {
			var modal = bemHtml.apply({
				block: 'modal',
				mods: { visible: false, theme: 'life-light', autoclosable: true, size: 'm' },
				content: content
			});
			var ctx = this;
				// debugger;
			if (!this.__self.prototype._modalWindow) {
				// debugger;
				this.__self.prototype._modalWindow = bemDom.append(this._Core.domElem, modal);
				this._Core._returnBlock('modal').toggleMod('visible');
				nextTick( function() {
					ctx._Core._events(ctx._Core._returnBlock('modal')).on({
						modName: 'visible',
						modVal: ''
					}, function() {
						// debugger;
							bemDom.destruct(ctx.__self.prototype._modalWindow)
							ctx.__self.prototype._modalWindow = null;
					});
				});
			} else {
				// debugger;
				// this._modalWindow = bemDom.replace(this._modalWindow, modal);
				nextTick(function() {
					ctx._Core._returnBlock('modal').delMod('autoclosable').setContent(bemHtml.apply({ block: 'button', mods: { view: 'plain', theme: 'islands', size: 'xl' }, icon: {
						block: 'spin',
						mods: { visible: true, theme: 'islands', size: 's' },
					}, text: 'Дождитесь окончания запроса...',}));
					bemDom.destruct(ctx._Core._returnBlock('modal').findChildElem('close-button').domElem);
					setTimeout(function() {
						nextTick( function() {
							ctx._Core._returnBlock('modal').toggleMod('visible');
						});
					},
					3000);
				});
				// debugger;
				// this._modalWindow.bem(Modal).setMod('visible');
			}
				// Modal(mod)
				// console.log(this.findChildBlock(Modal));

				// var modalWindow = this.findChildBlock(Modal);
				// modalWindow.toggleMod('visible');
				// modalWindow.toggleMod('visible');
				// debugger;
			console.log('_modalShow triggered');
		},
		_modalCancel: function(bemHtml) {
			this.findParentBlock(this._Core._modalBlock).toggleMod('visible');
			console.log('_modalCancel triggered');
		},
		_changeTarifModal: function(bemHtml, template, Modal, params, actionParams) {
			var content = this._templates(bemHtml, 'changeTarifForm', {
				'form-title': 'Смена тарифного плана',
				'head-title': 'Перейти на другой тарифный план'
			});
			this._modalShow(Modal, content, params);
			var ctx = this;
			// console.log(ctx._Core.);
			// nextTick(function(){
				// ctx._Core._events(ctx._Core._returnBlock('modal')).on({
				// 	modName: 'visible',
				// 	modVal: ''
				// }, function(e) {
				// 	bemDom.destruct(._returnBlock('modal').domElem);
				// });
			// });

		},
		_buyMore: function(bemHtml, template, params, actionParams) {
			var params = params || '';
			var content = this._templates(bemHtml, 'buyMoreForm', {
				'form-title': 'Докупить мин/МБ',
				'head-title': ''
			});
			this._modalShow(Modal, content, params);
			console.log('_buyMore triggered');
		},
		_buyMoreVoiceTraffic: function(bemHtml, params, actionParams) {
			console.log('_buyMoreVoiceTraffic triggered');
		},
		_buyMoreInternetTraffic: function() {
			console.log('_buyMoreInternetTraffic triggered');
		},
		_userLogout: function(actionParams) {
			this._sessionLogout();
			location.assign(actionParams['redirectUrl']);
			console.log('_userLogout triggered');
		},
		_deleteUser: function(params, actionParams) {
			console.log('delete user triggered');
		},
		_allServices: function(params, actionParams) {
			console.log('_allServices triggered');
		},
		_changeTarif: function(params, actionParams) {
			console.log('_changeTarif triggered');
		},
		_fillBalance: function(params, actionParams) {
			// debugger;
			window.open('https://payment.webpay.by/epay/life', '_blank');
			console.log('_fillBalance triggered');
		},
		_changeUserName: function(params, actionParams) {
			// debugger;
			var userinfoPhone = this.findParentBlock(this._Core._dropdownBlock).findParentBlock(this._Core._userinfoBlock);
				userinfoPhone._emit('change_phone');
				this
					._events(userinfoPhone.findChildElem('name').findChildBlock(this._Core._inputBlock))
					.on({ modName: 'focused', modVal: '' }, function(e) {
						userinfoPhone._emit('phone_changed');
					});
			// ._emit('change_name');
			// debugger;
			console.log('_changeUserName triggered');
		},
		_addUserPhoto: function(params, actionParams) {
			console.log('_addUserPhoto triggered');
		},
		_changeProfileColor: function(params, actionParams) {
			console.log('_changeProfileColor triggered');
		},
		_showDeleteUserForm: function(params, actionParams) {
			var params = params || '';
			var content = this._templates(bemHtml, 'deleteUserForm', {
				'form-title': 'Удаление пользователя',
				'head-title': ''
			});
			var ctx = this;
			nextTick(function() {
				ctx._modalShow(Modal, content, params);
			})
			console.log('_deleteUser triggered');
		},
		_redirect: function(e,nextTick, Link, Button, params, actionParams) {
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
		_showInviteForm: function(params, actionParams) {
			console.log('_sendInvite triggered');
		},
		_sendInvite: function(params, actionParams) {
			console.log('_sendInvite  triggered');
		},
		_sendApiRequest: function(api, params, actionParams) {
			/**
			 * 
			 * 
			 */
			console.log('_apiRequest triggered');
		},
		_redistribute: function(params, actionParams) {
			console.log('_redistribute triggered');
		},
		_saveChanges: function(params, actionParams) {
			console.log('_saveChanges triggered');
		},
		_validateInput: function(e, input) {
			console.log('_validateInput triggered');

 /**
  * validate input value
  *
  */
	  		var changeValue = function(targetValue, valueInput, valueLengthDo) {
	  			var caret = getCaret(document.getElementsByName(targetValue)[0]);
	  			document.getElementsByName(targetValue)[0].value = valueInput;
	  			if (valueLengthDo !== valueInput.length) {
	  				setCaretToPos(document.getElementsByName(targetValue)[0], caret - 1);
	  			} else {
	  				setCaretToPos(document.getElementsByName(targetValue)[0], caret);
	  			}
	  		};

	  		var getCaret = function (el) {
	  			if (el.selectionStart) {
	  				return el.selectionStart;
	  			} else if (document.selection) {
	  				el.focus();

	  				var r = document.selection.createRange();
	  				if (r === null) {
	  					return 0;
	  				}

	  				var re = el.createTextRange(),
	  				    rc = re.duplicate();
	  				re.moveToBookmark(r.getBookmark());
	  				rc.setEndPoint('EndToStart', re);

	  				return rc.text.length;
	  			}
	  			return 0;
	  		};

	  		var setSelRange = function(input, selectionStart, selectionEnd) {
	  			if (input.setSelectionRange) {
	  				input.focus();
	  				input.setSelectionRange(selectionStart, selectionEnd);
	  			} else if (input.createTextRange) {
	  				var range = input.createTextRange();
	  				range.collapse(true);
	  				range.moveEnd('character', selectionEnd);
	  				range.moveStart('character', selectionStart);
	  				range.select();
	  			}
	  		};

	  		var setCaretToPos = function(input, pos) {
	  			setSelRange(input, pos, pos);
	  		};


	  		// console.log(this);

	  		var ctx = e.target;

			var targetValue = e.target.name;
			var valueInput = e.target.value;
			if (targetValue === 'phone') {
				var valueLengthDo = valueInput.length;
				dataValue = ctx.value;
				if (dataValue.length === 0) {
					ctx.selectionStart = 0;
					ctx.selectionEnd = 0;
				} else {
					ctx.selectionStart = ctx.selectionEnd;
				}
				var valSelectionStart = ctx.selectionStart;
				var valSelectionEnd = ctx.selectionEnd;
				if (valSelectionStart === valSelectionEnd) {
					// console.log('text: '+textBeforeInput);
					if (ctx.selectionEnd !== 0) {
						var lastInputText = ctx.value.charAt(ctx.selectionEnd - 1);
						var textBeforeInput = ctx.value.substring(0, ctx.selectionEnd - 1).replace(/[^0-9]/g, '');
						var textAfterInput = ctx.value.substring(ctx.selectionEnd, ctx.value.length);
					} else {
						var lastInputText = "";
						var textBeforeInput = "";
						var textAfterInput = ctx.value.substring(ctx.selectionEnd, ctx.value.length);
					}

					if (valueInput.length <= Number($(e.target).attr("maxlength")) ) {
						lastInputText = lastInputText.replace(/[^0-9]+/g, '');
					} else {
						lastInputText = "";
					}
					var fullValue = "" + textBeforeInput + lastInputText + textAfterInput;
					$(ctx).val(fullValue);
					if (lastInputText !== "") {
						setCaretToPos(e.target, valSelectionEnd);
					} else {
						setCaretToPos(e.target, valSelectionEnd - 1);
					}
				}
			}
		},
		_getSessionAuth: function(el) {
			if (sessionStorage.authentication) {
				return JSON.parse(sessionStorage.authentication).data[el];
			}
			return false;
		},
		_sessionLogout: function() {
			sessionStorage.removeItem('authentication');
			return 'logout';
		},
		_getSessionProfile: function(el) {
			if (sessionStorage.authentication) {
				return JSON.parse(sessionStorage.profile).data[el];
			}
			return false;
		},
		_addActionsBlock: function(e, params, bemHtml, actionParams) {
			console.log('_addActionsBlock triggered');
			var templateVars = {};
			var userlistSize = this._Core._returnBlock('userinfo', true).size();
			if(userlistSize < 9 ) {
				bemDom.before(this.findParentBlock(this._Core._actionsBlock).domElem, this._templates(bemHtml, 'actionsBlock', templateVars));
				if(userlistSize === 8) {
					this.findParentBlock(this._Core._actionsBlock).findChildElem('add-user').toggleMod('hidden');
				}
			}
			// console.log(this._Core._returnBlock('userinfo', true).size());
			// if(this._Core._returnBlock('userinfo', true).size() === 9 ) {
			// }

		},
		_setMenuCheckBoxVal: function(e, params, bemHtml, actionParams) {
			var ctx = this;
			// console.log(ctx.findParentBlock(ctx._Core._dropdownBlock));
			// console.log(bemDom);
			// debugger;
			ctx.findParentBlock(ctx._Core._dropdownBlock)._emit('checkbox_trigger');
				nextTick(function() {
					// ctx.findParentBlock(ctx._Core._dropdownBlock).toggleMod('opened');
					ctx.findParentBlock(ctx._Core._menuBlock).toggleMod('focused');
					ctx.findChildBlock(ctx._Core._checkboxBlock).toggleMod('focused');
				});
			// nextTick(function(){

			// });
			// e.preventDefault();
			// nextTick(function() {
				// ctx.findParentBlock(ctx._Core._popupBlock).delMod('autoclosable')
				// this.findChildBlock(ctx._Core._checkboxBlock).toggleMod('focused');
				// console.log(ctx.findParentBlock(ctx._Core._popupBlock));
				// console.log(ctx.findParentBlock(ctx._Core._dropdownBlock));
				// ctx.findParentBlock(ctx._Core._popupBlock).setMod('autoclosable', true);
				// ctx.findParentBlock(ctx._Core._popupBlock).setMod('autoclosable');
			// });
			// debugger;
		},
		_addLineChangesBlock: function(e, params, bemHtml, actionParams) {
			bemDom.apply(this._templates(bemHtml, ''));
		}
	}));
});
