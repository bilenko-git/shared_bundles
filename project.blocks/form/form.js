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
		  console.log('111');
		  console.log(parentBlock);
		  // debugger;
		  if (actionId === 'action-3') {
		  // if (actionId === '/api/getAuth' ) {
			 // debugger;
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
						elem: 'head-title',
						content: 'Пожалуйста, авторизуйтесь'
					}, {
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
							{ val: 25, text: '25' },
							{ val: 29, text: '29' },
							{ val: 44, text: '44' }
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
							block : 'dropdown',
							mods : { switcher : 'link', theme : 'islands', size : 'm' },
							switcher : { block: 'tooltip'},
							popup : {
								block: 'popup',
								mix: { block: 'tooltip', js: true },
								content: 'Пароль от личного кабинета life:)'
							},
							js: { tooltip: 'main' }

						}]
					}, {
						elem: 'text-error',
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
					}, {
						elem: 'button-group',
						elemMods: { wide: true },
						content: ['Перейти на тариф можно и с помощью USSD - ', { tag: 'span', cls: 'ussd-call', content: '*115*9#'}]
					}]
				}]
			 });
/**
 * end_ action-1
 */
 			} else if (actionId === 'action-2') {
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
						elem: 'head-title',
						content: 'Подключиться на тариф можно в ближайшем салоне'
					}, {
						elem: 'button-group',
						elemMods: { wide: 'center' },
						content: [{
							block: 'button',
							mods: { view: 'main', type: 'submit' },
							mix: { block: 'form', elem: 'submit' },
							text: 'Купить SIM-карту'
						}, {
							block: 'button',
							mods: { view: 'main', type: 'submit' },
							mix: { block: 'form', elem: 'submit' },
							text: 'Перенести номер в life:)'
						}]
					}]
				}]
			 });
 			// debugger;
 			} else if (actionId === 'action-4') {
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
						elem: 'head-title',
						content: 'После смены тарифного плана'
					}, {
						elem: 'text',
						// elem: 'button-group',
						// elemMods: { inner: true },
						content: [{
								tag: 'h3',
								content: 'продолжат действовать:'
							}, {
								tag: 'ul',
								content: [{
									tag: 'li',
									content: 'все услуги, которые вы подключали дополнительно к вашему текущему тарифному плану'
								}, {
									tag: 'li',
									content: ['все бонусные и дополнительные счета, включая', { block: 'link', url: '#', content: 'lifepoints'}]
								}]
							}, {
								tag: 'h3',
								content: 'обнулятся:'
							}, {
								tag: 'ul',
								content: [{
									tag: 'li',
									content: ['услуга ', { block: 'link', url: '#', content: 'Карманы'}, ' и накопленные минуты,']
								}, {
									tag: 'li',
									content: 'минуты и интернет из текущего тарифного плана'
								}]
							}]
						}]
					}, {
						elem: 'button-group',
						mods: { inner: true },
						content: [{
							block: 'button',
							mods: { view: 'main', type: 'submit' },
							mix: { block: 'form', elem: 'submit' },
							text: 'Подтвердить'
						}, {
							block: 'link',
							mix: { block: 'form', elem: 'cancel' },
							content: 'Отменить'
						}]
					// }]
				}]
			 });

 			} else if (actionId === 'action-5') {
			 var authForm = bemHtml.apply({
				block: 'form',
				action: '',
				method: 'post',
				enctype: 'multipart/form-data',
				content: [{
				    elem: 'title',
				    content: 'Подключение тарифного плана ' + '&laquo;' + tarifActionTitle + '&raquo;'
				}, {
					elem: 'text',
					content: 'Нам очень жаль, но при наличии обязательств (например смартфона в рассрочку) переход невозможен до их погашения'
				}]
			 });

 			} else if (actionId === 'action-6') {
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
						elem: 'text',
						content: 'В настоящий момент на вашем счету недостаточно денег для перехода на тариф &laquo;Семья 3&raquo;. Пополните пожалуйста баланс'
					}, {
						elem: 'button-group',
						mods: 'inner',
						content: {
							block: 'button',
							mods: { view: 'main', type: 'submit' },
							mix: { block: 'form', elem: 'submit' },
							text: 'Пополнить баланс'
						}
					}]
				}]
			 });

 			}

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
