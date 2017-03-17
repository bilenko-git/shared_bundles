modules.define('actions', ['i-bem-dom' /*,'i-bem'*/ , 'modal', 'popup', 'BEMHTML', 'jquery'], function(provide, bemDom /*,iBem*/ , Modal, Popup, bemHtml, $) {

	provide(bemDom.declBlock(this.name, {
		onSetMod: {
			js: {
				inited: function() {
					// console.log(Modal);
					// console.log(iBem);
					// console.log(modules.getState('modal'));

					// this._domEvents('add-user').on('pointerclick pointerpress', function(e) {
						// debugger;
						// this._addUserBlock(e, bemDom, bemHtml);
					// });
					// });
				}
			}
		},
		_addUserBlock: function(e, bemDom, bemHtml) {
			// debugger;
			// var actionsBlock = bemHtml.apply({
			// 	block: 'actions',
			// 	mods: { view: 'simple' },
			// 	content: [{
			// 		elem: 'group',
			// 		content: [{
			// 			block: 'userinfo',
			// 			content: [{
			// 				block: 'dropdown',
			// 				mods: { switcher: 'button', theme: 'life-light' },
			// 				switcher: { block: 'button', mods: { 'icon-only': 'menu', theme: 'islands' }, icon: { block: 'icon', mods: { 'type': 'menu-toggle' } } },
			// 				popup: {
			// 					block: 'menu',
			// 					mix: { block: 'userinfo', elem: 'menu' },
			// 					mods: { theme: 'life-light' },
			// 					content: [
			// 						{ elem: 'item', val: '1', content: 'Изменить имя' },
			// 						{ elem: 'item', val: '1', content: 'Добавить фото' },
			// 						{ elem: 'item', val: '1', content: 'Выбрать цвет профиля' },
			// 						{ elem: 'item', val: '1', content: 'Удалить пользователя' },
			// 						{ elem: 'item', val: '1', content: [{
			// 							block: 'checkbox',
			// 							mods: {
			// 								theme: 'shared',
			// 								type: 'button',
			// 								view: 'plain'
			// 							},
			// 							icon: {
			// 								block: 'icon',
			// 								mods: { type: 'checkbox' }
			// 							},
			// 							name: 'get_notify',
			// 							val: '1',
			// 							text: [{
			// 									tag: 'span',
			// 									cls: 'checkbox-line',
			// 									content: 'Получать уведомление'
			// 								}, {
			// 									tag: 'span',
			// 									cls: 'checkbox-line',
			// 									content: 'об окончании мин/Мб'
			// 								}]
			// 							}]
			// 						},
			// 					]
			// 				},
			// 			}, {
			// 				block: 'icon',
			// 				mix: { block: 'userinfo', elem: 'avatar' },
			// 				url: '/assets/img/user-avatar.png'
			// 			}]
			// 		}, {
			// 			block: 'form',
			// 			mods: { view: 'line' },
			// 			action: '',
			// 			method: 'post',
			// 			enctype: 'multipart/form-data',
			// 			content: [{
			// 				elem: 'button-group',
			// 				elemMods: { type: 'list' },
			// 				content: [{
			// 					elem: 'button-group',
			// 					elemMods: { type: 'line' },
			// 					content: [{
			// 						block: 'form',
			// 						elem: 'label',
			// 						elemMods: { size: 's' },
			// 						content: 'Имя'
			// 					}, {
			// 						block: 'input',
			// 						name: 'username',
			// 						mods: { theme: 'life-light', size: 's', width: 'available' },
			// 						placeholder: '',
			// 					}]
			// 				}, {
			// 					elem: 'button-group',
			// 					elemMods: { type: 'line' },
			// 					content: [{
			// 						tag: 'span',
			// 						block: 'form',
			// 						elem: 'label',
			// 						elemMods: { size: 's' },
			// 						content: 'Номер life:)'
			// 					}, {
			// 						block: 'select',
			// 						mods: { mode: 'radio', theme: 'life-light', size: 's' },
			// 						text: '25',
			// 						options: [
			// 						{ val: '25', text: '25' },
			// 						{ val: '29', text: '29' },
			// 						{ val: '33', text: '33' },
			// 						{ val: '44', text: '44' }
			// 						]
			// 					}, {
			// 						block: 'input',
			// 						mods: { theme: 'life-light', size: 's' },
			// 						placeholder: '123',
			// 						type: 'search',
			// 						val: ''
			// 					}]
			// 				}]
			// 			}, {
			// 				elem: 'button-group',
			// 				elemMods: { type: 'list' },
			// 				content: [{
			// 					elem: 'button-group',
			// 					elemMods: { type: 'line' },
			// 					content: [{
			// 						block: 'button',
			// 						mods: { view: 'main' },
			// 						text: 'Отправить приглашение'
			// 					}, {
			// 						block: 'dropdown',
			// 						mods: { switcher: 'button', theme: 'islands' },
			// 						switcher: { block: 'button', mods: { 'icon-only': true }, icon: { block: 'icon', mods: { 'tooltip-small': 'question' } } },
			// 						popup: ['Пользователь получит SMS вида: &laquo;Абонент ИМЯ хочет добавить вас в свою группу. В течение 48 часов вы можете подтвердить вступление. Приняв приглашение, вы перейдете на тарифный план ', { block: 'link', url: '#', content: '&laquo;Семья&raquo;'}, 'Условия текущего тарифного плана будут аннулированы. Подключенные дополнительные услуги будут действовать согласно правилам на тарияном плане ', { block: 'link', url: '#', content: '&laquo;Семья&raquo;'}, 'Перейти к приглашению &mdash; USSD *555*1#',{ block: 'icon', mods: { type: 'phone' }}],
			// 						mix: { block: 'tooltip', js: true },
			// 						js: { tooltip: 'main' }
			// 					}]
			// 				}]
			// 			}, {
			// 				elem: 'button-group',
			// 				elemMods: { type: 'list' },
			// 				content: [{
			// 					elem: 'text',
			// 					elemMods: { size: 's'},
			// 					content: 'Как только пользователь примет приглашение,',
			// 				}, {
			// 					elem: 'text',
			// 					elemMods: { size: 's'},
			// 					content: 'вы сможете распределить ему мин и МБ'
			// 				}]
			// 			}]
			// 		}]
			// 	}]
			// });
			// debugger;
			// bemDom.before(this.domElem, actionsBlock);
			// debugger;
			// var action = 
		}
	}));

});
