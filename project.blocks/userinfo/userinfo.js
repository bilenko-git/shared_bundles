modules.define('userinfo', ['i-bem-dom', 'BEMHTML', 'actions'], function(provide, bemDom, bemHtml, Actions, Status) {

	provide(bemDom.declBlock(this.name, {
		onSetMod: {
			js: {
				inited: function() {
					console.log('userinfo inited');
					// debugger;
					try {
						console.log(this.findChildElem('status'));
						console.log(this.findMixedElem('status'));
						this.findChildElem('status')._domEvents().on('click pointerpress', function(e) {
							// debugger;

							this._onClick(e, bemDom, bemHtml, Actions);
						});
					} catch(e) {
						console.log('no status');
					}

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
