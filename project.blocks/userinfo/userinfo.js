modules.define('userinfo', ['i-bem-dom', 'BEMHTML', 'actions', 'input' ], function(provide, bemDom, bemHtml, Actions, Input) {

	provide(bemDom.declBlock(this.name, {
		onSetMod: {
			js: {
				inited: function() {
					// console.log(Input)
					console.log('userinfo inited');
					this._events().on('change_phone', function() {
						var text = this.findChildElem('name').domElem.text();
						console.log(this.findChildElem('name').domElem.text())
						var input = bemHtml.apply({ block: 'input', val: text, mods:{theme: 'life-light', size: 's', width: 'available'}});
						bemDom.update(this.findChildElem('name').domElem, input);
					});
					this._events().on('phone_changed', function(e) {
						console.log('phone_changed');
						var inputVal = this.findChildElem('name').findChildBlock(Input).getVal();
						bemDom.update(this.findChildElem('name').domElem, inputVal)
					})
					// debugger;
					//input input_theme_life-light input_size_s input_width_available i-bem input_js_inited
					// try {
					// 	console.log(this.findChildElem('status'));
					// 	console.log(this.findMixedElem('status'));
					// 	this.findChildElem('status')._domEvents().on('pointerclick', function(e) {
					// 		// debugger;

					// 		this._onClick(e, bemDom, bemHtml, Actions);
					// 	});
					// } catch(e) {
					// 	console.log('no status');
					// }
				}
			}
		},
		_onClick: function(e, bemDom, bemHtml, Actions) {
			console.log('user-add clicked');
			// debugger;
			// var actions = bemHtml.apply({
			// 		block: 'actions',
			// 		mods: { view: 'simple' },
			// 		content: [{
			// 			elem: 'group',
			// 			content: [{
			// 				block: 'userinfo',
			// 				content: [{
			// 					block: 'dropdown',
			// 					mods: { switcher: 'button', theme: 'islands' },
			// 					switcher: { block: 'button', mods: { 'icon-only': 'menu', theme: 'islands' }, icon: { block: 'icon', mods: { 'type': 'menu-toggle' }}},
			// 					popup: { block: 'menu', mods: { theme: 'islands' }, content: [{ elem: 'item', val: '1', content: 'item-1' }, { elem: 'item', val: '1', content: 'item-1' }, { elem: 'item', val: '1', content: 'item-1' }]},
			// 				}, {
			// 					block: 'icon',
			// 					mix: { block: 'userinfo', elem: 'avatar' },
			// 					url: '/assets/img/user-avatar.png'
			// 				}, {
			// 					elem: 'group',
			// 					content: [{
			// 						block: 'button',
			// 						mix: { block: 'userinfo', elem: 'add-user' },
			// 						mods: { view: 'main' },
			// 						text: 'Пригласить пользователя'
			// 					}]
			// 				}]
			// 			}]
			// 		}, {
			// 			elem: 'group',
			// 			content: [{
			// 				block: 'c-chart',
			// 				content: {
			// 					elem: 'item',
			// 					elemMods: { view: 'simple' },
			// 					content: {
			// 						tag: 'canvas',
			// 						attrs: { id: 'chartMin104', width: '280', height: '50' }
			// 					}
			// 				}
			// 			}, {
			// 				block: 'c-chart',
			// 				content: {
			// 					elem: 'item',
			// 					elemMods: { view: 'simple' },
			// 					content: {
			// 						tag: 'canvas',
			// 						attrs: { id: 'chartMin105', width: '280', height: '50' }
			// 					}
			// 				}
			// 			}]
			// 		}]
			// 	});
			// bemDom.after(this.findParentBlock(Actions).domElem, actions);
			// // debugger;
			// // var action = 
		}
	}));

});
