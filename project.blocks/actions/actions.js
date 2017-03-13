modules.define('actions', ['i-bem-dom' /*,'i-bem'*/ , 'modal', 'popup', 'BEMHTML', 'jquery'], function(provide, bemDom /*,iBem*/ , Modal, Popup, bemHtml, $) {

	provide(bemDom.declBlock(this.name, {
		onSetMod: {
			js: {
				inited: function() {
					// console.log(Modal);
					// console.log(iBem);
					// console.log(modules.getState('modal'));

					this._domEvents('add-user').on('pointerclick pointerpress', function(e) {
						// debugger;
						this._addUserBlock(e, bemDom, bemHtml);
					});

					this._domEvents('button').on('click', function() {
						return;
						// debugger;
						// act = this;
						// console.log(this.findChildElem('modal'));
						// console.log(this.findParentBlock(Modal));
						// console.log(this.findChildBlock(Modal) === null);
						console.log(this.domElem);
						var tarifActionTitle = 'Семья 3';
						var tarifAction1 = '/api/getAuth';
						var tarifAction2 = '/desktop.bundles/main-user/main-user.html';
						// if( !this._modalWindow) {
						var modal = bemHtml.apply({
							block: 'modal',
							// mix: { block: 'actions', js: { id: act.params.id } },
							mods: { visible: false, theme: 'life-light', autoclosable: true },
							// content: '<div class="container"> <ul> <li><a href="#" class="cls1">tesxt1</a></li> <li><a href="#" class="cls2">tesxt2</a></li> <li><a href="#" class="cls3">tesxt3</a></li> <li><a href="#" class="cls4">tesxt4</a></li> <li><a href="#" class="cls5">tesxt5</a></li> <li><a href="#" class="cls6">tesxt6</a></li> <li><a href="#" class="cls7">tesxt7</a></li> <li><a href="#" class="cls8">tesxt8</a></li> <li><a href="#" class="cls9">tesxt9</a></li> <li><a href="#" class="cls10">tesxt10</a></li> <li><a href="#" class="cls11">tesxt11</a></li> <li><a href="#" class="cls12">tesxt12</a></li> <li><a href="#" class="cls13">tesxt13</a></li> <li><a href="#" class="cls14">tesxt14</a></li> <li><a href="#" class="cls15">tesxt15</a></li> <li><a href="#" class="cls16">tesxt16</a></li> <li><a href="#" class="cls17">tesxt17</a></li> <li><a href="#" class="cls18">tesxt18</a></li> <li><a href="#" class="cls19">tesxt19</a></li> <li><a href="#" class="cls20">tesxt20</a></li> <li><a href="#" class="cls21">tesxt21</a></li> <li><a href="#" class="cls22">tesxt22</a></li> <li><a href="#" class="cls23">tesxt23</a></li> <li><a href="#" class="cls24">tesxt24</a></li> <li><a href="#" class="cls25">tesxt25</a></li> <li><a href="#" class="cls26">tesxt26</a></li> <li><a href="#" class="cls27">tesxt27</a></li> <li><a href="#" class="cls28">tesxt28</a></li> <li><a href="#" class="cls29">tesxt29</a></li> <li><a href="#" class="cls30">tesxt30</a></li> <li><a href="#" class="cls31">tesxt31</a></li> <li><a href="#" class="cls32">tesxt32</a></li> <li><a href="#" class="cls33">tesxt33</a></li> <li><a href="#" class="cls34">tesxt34</a></li> <li><a href="#" class="cls35">tesxt35</a></li> <li><a href="#" class="cls36">tesxt36</a></li> <li><a href="#" class="cls37">tesxt37</a></li> <li><a href="#" class="cls38">tesxt38</a></li> <li><a href="#" class="cls39">tesxt39</a></li> <li><a href="#" class="cls40">tesxt40</a></li> <li><a href="#" class="cls41">tesxt41</a></li> <li><a href="#" class="cls42">tesxt42</a></li> <li><a href="#" class="cls43">tesxt43</a></li> <li><a href="#" class="cls44">tesxt44</a></li> <li><a href="#" class="cls45">tesxt45</a></li> <li><a href="#" class="cls46">tesxt46</a></li> <li><a href="#" class="cls47">tesxt47</a></li> <li><a href="#" class="cls48">tesxt48</a></li> <li><a href="#" class="cls49">tesxt49</a></li> <li><a href="#" class="cls50">tesxt50</a></li> <li><a href="#" class="cls51">tesxt51</a></li> <li><a href="#" class="cls52">tesxt52</a></li> <li><a href="#" class="cls53">tesxt53</a></li> <li><a href="#" class="cls54">tesxt54</a></li> <li><a href="#" class="cls55">tesxt55</a></li> <li><a href="#" class="cls56">tesxt56</a></li> <li><a href="#" class="cls57">tesxt57</a></li> <li><a href="#" class="cls58">tesxt58</a></li> <li><a href="#" class="cls59">tesxt59</a></li> <li><a href="#" class="cls60">tesxt60</a></li> <li><a href="#" class="cls61">tesxt61</a></li> <li><a href="#" class="cls62">tesxt62</a></li> <li><a href="#" class="cls63">tesxt63</a></li> <li><a href="#" class="cls64">tesxt64</a></li> <li><a href="#" class="cls65">tesxt65</a></li> <li><a href="#" class="cls66">tesxt66</a></li> <li><a href="#" class="cls67">tesxt67</a></li> <li><a href="#" class="cls68">tesxt68</a></li> <li><a href="#" class="cls69">tesxt69</a></li> <li><a href="#" class="cls70">tesxt70</a></li> <li><a href="#" class="cls71">tesxt71</a></li> <li><a href="#" class="cls72">tesxt72</a></li> <li><a href="#" class="cls73">tesxt73</a></li> <li><a href="#" class="cls74">tesxt74</a></li> <li><a href="#" class="cls75">tesxt75</a></li> <li><a href="#" class="cls76">tesxt76</a></li> <li><a href="#" class="cls77">tesxt77</a></li> <li><a href="#" class="cls78">tesxt78</a></li> <li><a href="#" class="cls79">tesxt79</a></li> <li><a href="#" class="cls80">tesxt80</a></li> <li><a href="#" class="cls81">tesxt81</a></li> <li><a href="#" class="cls82">tesxt82</a></li> <li><a href="#" class="cls83">tesxt83</a></li> <li><a href="#" class="cls84">tesxt84</a></li> <li><a href="#" class="cls85">tesxt85</a></li> <li><a href="#" class="cls86">tesxt86</a></li> <li><a href="#" class="cls87">tesxt87</a></li> <li><a href="#" class="cls88">tesxt88</a></li> <li><a href="#" class="cls89">tesxt89</a></li> <li><a href="#" class="cls90">tesxt90</a></li> <li><a href="#" class="cls91">tesxt91</a></li> <li><a href="#" class="cls92">tesxt92</a></li> <li><a href="#" class="cls93">tesxt93</a></li> <li><a href="#" class="cls94">tesxt94</a></li> <li><a href="#" class="cls95">tesxt95</a></li> <li><a href="#" class="cls96">tesxt96</a></li> <li><a href="#" class="cls97">tesxt97</a></li> <li><a href="#" class="cls98">tesxt98</a></li> <li><a href="#" class="cls99">tesxt99</a></li> <li><a href="#" class="cls100">tesxt100</a></li> </ul> '
							content: {
								block: 'form',
								action: '',
								method: 'post',
								enctype: 'multipart/form-data',
								content: [{
									elem: 'title',
									content: 'Подключение тарифного плана ' + '&laquo;' + tarifActionTitle + '&raquo;'
								}, {
									elem: 'button-group',
									content: [{
										block: 'button',
										mods: { view: 'main', type: 'link' },
										url: tarifAction2,
										mix: { block: 'form', elem: 'submit' },
										content: 'Я не абонент life:)'
									}, {
										block: 'button',
										name: 'action',
										val: 'change',
										js: { action: tarifAction1 },
										mods: { view: 'main', type: 'submit' },
										mix: { block: 'form', elem: 'submit' },
										content: 'Я абонент life:)'
									}]
								}]
							},

							/*                                content: {
																block: 'button',
																mods: { view: 'main' },
																text: 'Закрыть'
															},
							*/
						});
						// debugger;

						if (!this._modalWindow) {
							// debugger;
							this._modalWindow = bemDom.append(this.findChildElem('inner').domElem, modal);
							this.findChildBlock(Modal).toggleMod('visible');
						} else {
							this._modalWindow = bemDom.replace(this._modalWindow, modal);
							debugger;
							this._modalWindow.bem(Modal).setMod('visible');
						}
						// Modal(mod)
						// console.log(this.findChildBlock(Modal));

						// var modalWindow = this.findChildBlock(Modal);
						// modalWindow.toggleMod('visible');
						// modalWindow.toggleMod('visible');
						// debugger;
					});
				}
			}
		},
		_addUserBlock: function(e, bemDom, bemHtml) {
			debugger;
			var actionsBlock = bemHtml.apply({
				block: 'actions',
				mods: { view: 'simple' },
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
								mods: { theme: 'life-light' },
								content: [
									{ elem: 'item', val: '1', content: 'Изменить имя' },
									{ elem: 'item', val: '1', content: 'Добавить фото' },
									{ elem: 'item', val: '1', content: 'Выбрать цвет профиля' },
									{ elem: 'item', val: '1', content: 'Удалить пользователя' },
									{ elem: 'item', val: '1', content: [{
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
										name: 'get_notify',
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
			});
			// debugger;
			bemDom.before(this.domElem, actionsBlock);
			// debugger;
			// var action = 
		},
		_modalCancel: function(e) {

		},
		_modalShow: function(e) {

		},
		_buyMore: function(e) {

		},
		_userLogout: function(e) {

		},
		_allServices: function(e) {

		},
		_changeTarif: function(e) {

		},
		_fillBalance: function(e) {

		},
		_changeUserName: function(e) {

		},
		_addUserPhoto: function(e) {

		},
		_changeProfileColor: function(e) {

		},
		_deleteUser: function(e) {

		},
		_redistribute: function(e) {

		},
		_saveChanges: function(e) {

		}
	}));

});
