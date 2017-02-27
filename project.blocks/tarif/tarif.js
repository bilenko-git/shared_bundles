modules.define('tarif', ['i-bem-dom'/*,'i-bem'*/, 'modal', 'popup', 'BEMHTML', 'jquery'], function(provide, bemDom/*,iBem*/, Modal, Popup, bemHtml, $) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    // console.log(Modal);
                    // console.log(iBem);
                    // console.log(modules.getState('modal'));
                    this._domEvents('action').on('click', function() {
                        // debugger;
                        // act = this;
                        // console.log(this.findChildElem('modal'));
                        // console.log(this.findParentBlock(Modal));
                        // console.log(this.findChildBlock(Modal) === null);
                        console.log(this.domElem);
                        var tarifActionTitle = this.findChildElem('head-desc').domElem.text();
                        var tarifAction1 = '/api/getAuth';
                        var tarifAction2 = '/desktop.bundles/main-user/main-user.html';
                        // if( !this._modalWindow) {
                            var modal = bemHtml.apply({
                                block: 'modal',
                                // mix: { block: 'actions', js: { id: act.params.id } },
                                mods : { visible: false, theme : 'life-light', autoclosable: true },
                                // content: '<div class="container"> <ul> <li><a href="#" class="cls1">tesxt1</a></li> <li><a href="#" class="cls2">tesxt2</a></li> <li><a href="#" class="cls3">tesxt3</a></li> <li><a href="#" class="cls4">tesxt4</a></li> <li><a href="#" class="cls5">tesxt5</a></li> <li><a href="#" class="cls6">tesxt6</a></li> <li><a href="#" class="cls7">tesxt7</a></li> <li><a href="#" class="cls8">tesxt8</a></li> <li><a href="#" class="cls9">tesxt9</a></li> <li><a href="#" class="cls10">tesxt10</a></li> <li><a href="#" class="cls11">tesxt11</a></li> <li><a href="#" class="cls12">tesxt12</a></li> <li><a href="#" class="cls13">tesxt13</a></li> <li><a href="#" class="cls14">tesxt14</a></li> <li><a href="#" class="cls15">tesxt15</a></li> <li><a href="#" class="cls16">tesxt16</a></li> <li><a href="#" class="cls17">tesxt17</a></li> <li><a href="#" class="cls18">tesxt18</a></li> <li><a href="#" class="cls19">tesxt19</a></li> <li><a href="#" class="cls20">tesxt20</a></li> <li><a href="#" class="cls21">tesxt21</a></li> <li><a href="#" class="cls22">tesxt22</a></li> <li><a href="#" class="cls23">tesxt23</a></li> <li><a href="#" class="cls24">tesxt24</a></li> <li><a href="#" class="cls25">tesxt25</a></li> <li><a href="#" class="cls26">tesxt26</a></li> <li><a href="#" class="cls27">tesxt27</a></li> <li><a href="#" class="cls28">tesxt28</a></li> <li><a href="#" class="cls29">tesxt29</a></li> <li><a href="#" class="cls30">tesxt30</a></li> <li><a href="#" class="cls31">tesxt31</a></li> <li><a href="#" class="cls32">tesxt32</a></li> <li><a href="#" class="cls33">tesxt33</a></li> <li><a href="#" class="cls34">tesxt34</a></li> <li><a href="#" class="cls35">tesxt35</a></li> <li><a href="#" class="cls36">tesxt36</a></li> <li><a href="#" class="cls37">tesxt37</a></li> <li><a href="#" class="cls38">tesxt38</a></li> <li><a href="#" class="cls39">tesxt39</a></li> <li><a href="#" class="cls40">tesxt40</a></li> <li><a href="#" class="cls41">tesxt41</a></li> <li><a href="#" class="cls42">tesxt42</a></li> <li><a href="#" class="cls43">tesxt43</a></li> <li><a href="#" class="cls44">tesxt44</a></li> <li><a href="#" class="cls45">tesxt45</a></li> <li><a href="#" class="cls46">tesxt46</a></li> <li><a href="#" class="cls47">tesxt47</a></li> <li><a href="#" class="cls48">tesxt48</a></li> <li><a href="#" class="cls49">tesxt49</a></li> <li><a href="#" class="cls50">tesxt50</a></li> <li><a href="#" class="cls51">tesxt51</a></li> <li><a href="#" class="cls52">tesxt52</a></li> <li><a href="#" class="cls53">tesxt53</a></li> <li><a href="#" class="cls54">tesxt54</a></li> <li><a href="#" class="cls55">tesxt55</a></li> <li><a href="#" class="cls56">tesxt56</a></li> <li><a href="#" class="cls57">tesxt57</a></li> <li><a href="#" class="cls58">tesxt58</a></li> <li><a href="#" class="cls59">tesxt59</a></li> <li><a href="#" class="cls60">tesxt60</a></li> <li><a href="#" class="cls61">tesxt61</a></li> <li><a href="#" class="cls62">tesxt62</a></li> <li><a href="#" class="cls63">tesxt63</a></li> <li><a href="#" class="cls64">tesxt64</a></li> <li><a href="#" class="cls65">tesxt65</a></li> <li><a href="#" class="cls66">tesxt66</a></li> <li><a href="#" class="cls67">tesxt67</a></li> <li><a href="#" class="cls68">tesxt68</a></li> <li><a href="#" class="cls69">tesxt69</a></li> <li><a href="#" class="cls70">tesxt70</a></li> <li><a href="#" class="cls71">tesxt71</a></li> <li><a href="#" class="cls72">tesxt72</a></li> <li><a href="#" class="cls73">tesxt73</a></li> <li><a href="#" class="cls74">tesxt74</a></li> <li><a href="#" class="cls75">tesxt75</a></li> <li><a href="#" class="cls76">tesxt76</a></li> <li><a href="#" class="cls77">tesxt77</a></li> <li><a href="#" class="cls78">tesxt78</a></li> <li><a href="#" class="cls79">tesxt79</a></li> <li><a href="#" class="cls80">tesxt80</a></li> <li><a href="#" class="cls81">tesxt81</a></li> <li><a href="#" class="cls82">tesxt82</a></li> <li><a href="#" class="cls83">tesxt83</a></li> <li><a href="#" class="cls84">tesxt84</a></li> <li><a href="#" class="cls85">tesxt85</a></li> <li><a href="#" class="cls86">tesxt86</a></li> <li><a href="#" class="cls87">tesxt87</a></li> <li><a href="#" class="cls88">tesxt88</a></li> <li><a href="#" class="cls89">tesxt89</a></li> <li><a href="#" class="cls90">tesxt90</a></li> <li><a href="#" class="cls91">tesxt91</a></li> <li><a href="#" class="cls92">tesxt92</a></li> <li><a href="#" class="cls93">tesxt93</a></li> <li><a href="#" class="cls94">tesxt94</a></li> <li><a href="#" class="cls95">tesxt95</a></li> <li><a href="#" class="cls96">tesxt96</a></li> <li><a href="#" class="cls97">tesxt97</a></li> <li><a href="#" class="cls98">tesxt98</a></li> <li><a href="#" class="cls99">tesxt99</a></li> <li><a href="#" class="cls100">tesxt100</a></li> </ul> '
                                content: [{
                                    block: 'form',
                                    js: { title: this.findChildElem('head-desc').domElem.text() },
                                    action: '',
                                    method: 'post',
                                    enctype: 'multipart/form-data',
                                    content: [{
                                        elem: 'title',
                                        content: 'Подключение тарифного плана ' + '&laquo;' + tarifActionTitle + '&raquo;'
                                    }, {
                                    elem: 'test-buttons',
                                    content: [{
                                        block: 'control-group',
                                        content: [{
                                            block: 'button',
                                            mix: [{ block: 'form', elem: 'action', js: { actionId: 'action-1'}}],
                                            text: 'аб-не-аб'
                                        }, {
                                            block: 'button',
                                            mix: [{ block: 'form', elem: 'action', js: { actionId: 'action-2'}}],
                                            text: 'новый абонент'
                                        }, {
                                            block: 'button',
                                            mix: [{ block: 'form', elem: 'action', js: { actionId: 'action-3'}}],
                                            text: 'автор.'
                                        }, {
                                            block: 'button',
                                            mix: [{ block: 'form', elem: 'action', js: { actionId: 'action-4'}}],
                                            text: 'подтвержд.'
                                        }, {
                                            block: 'button',
                                            mix: [{ block: 'form', elem: 'action', js: { actionId: 'action-5'}}],
                                            text: 'не подкл.-обяз'
                                        }, {
                                            block: 'button',
                                            mix: [{ block: 'form', elem: 'action', js: { actionId: 'action-6'}}],
                                            text: 'не подкл.-баланс.'
                                        }]
                                    }]
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
                                }],

/*                                content: {
                                    block: 'button',
                                    mods: { view: 'main' },
                                    text: 'Закрыть'
                                },
*/
                            });
                            // debugger;

                        if( !this._modalWindow) {
                            // debugger;
                            this._modalWindow = bemDom.append(this.findChildElem('wrapper').domElem, modal);
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
                    });
                }
            }
        }
    }));

});
