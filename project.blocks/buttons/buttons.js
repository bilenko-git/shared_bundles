modules.define('buttons', ['i-bem-dom', 'BEMHTML', 'popup', 'modal', 'next-tick', 'jquery'], function(provide, bemDom, bemHtml, Popup, Modal, nextTick, $) {
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    debugger;
                    this._domEvents('button').on('click', function() {
                        this._onClick(Modal, Popup, bemDom, nextTick);
                    });
                }
            }
        },
        _onClick: function(Modal, Popup, bemDom, nextTick) {
            console.log('___sd');
            console.log(Popup);

            var tarifAction1 = '/api/getAuth';
            var tarifAction2 = '/desktop.bundles/main-user/main-user.html';

            // bemHtml.compile(function() {
            //     block('modal')(
            //         content()(function(){
            //             return [{
            //                 elem: 'table',
            //                 content: {
            //                     elem: 'cell',
            //                     content: [{
            //                         block: 'button',
            //                         type: 'button',
            //                         mix: { block: 'modal', elem: 'close-button' },
            //                         icon: '<svg xmlns:dc="http://purl.org/dc/elements/1.1/"xmlns:cc="http://creativecommons.org/ns#"xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"xmlns:svg="http://www.w3.org/2000/svg"xmlns="http://www.w3.org/2000/svg"id="svg8"version="1.1"viewBox="0 0 5.5562499 5.5562502"height="21"width="21"> <defs id="defs2" /> <metadata id="metadata5"> <rdf:RDF> <cc:Work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /> <dc:title></dc:title> </cc:Work> </rdf:RDF> </metadata> <g transform="translate(0,-291.44373)"id="layer1"> <path d="m 5.2372797,291.76271 -4.91830945,4.9183 m -3.8e-7,-4.91831 4.91831023,4.91832"style="fill:none;fill-opacity:1;stroke:#636363;stroke-width:0.904875;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"id="path4509-3" /> </g> </svg>'
            //                     }, {
            //                         elem: 'content',
            //                         content: [ this.ctx.content ],
            //                         // content: [ applyNext() ]
            //                     }]
            //                 }
            //             }];
            //         }));
            // });
            // var modal = bemHtml.apply({
            //     block: 'modal',
            //     // js: true,
            //     // mods: { visible: false, theme: 'life-light', autoclosable: true },
            //     mods : { visible: false, theme : 'life-light', autoclosable: true },
            //     content: {
            //         block: 'form',
            //         action: '',
            //         method: 'post',
            //         enctype: 'multipart/form-data',
            //         content: [{
            //             elem: 'title',
            //             content: 'Подключение тарифного плана ' + '&laquo;&raquo;'
            //         }, {
            //             elem: 'button-group',
            //             content: [{
            //                 block: 'button',
            //                 mods: { view: 'main', type: 'link' },
            //                 url: tarifAction2,
            //                 mix: [{ block: 'form', elem: 'submit'}, {block: 'modal', elem: 'control'}]
            //                 content: 'Я не абонент life:)'
            //             }, {
            //                 block: 'button',
            //                 name: 'action',
            //                 val: 'change',
            //                 js: { action: tarifAction1 },
            //                 mods: { view: 'main', type: 'submit' },
            //                 mix: { block: 'form', elem: 'submit' },
            //                 content: 'Я абонент life:)'
            //             }]
            //         }]
            //     }
            // });

            // modal =  '<button class="button button_theme_red button_size_s button__control recharge-account i-bem recharge-account_js_inited button_js_inited button__control_js_inited" data-bem="{&quot;button&quot;:{},&quot;recharge-account&quot;:{}}" role="button" type="button"><span class="button__text">Пополнить</span></button>';

            console.log(modal);
            if (!this._modalWindow) {
                debugger;

                this._modalWindow = bemDom.append(this.domElem, modal);
                this.findChildBlock(Modal).toggleMod('visible');
            } else {
                this._modalWindow = bemDom.replace(this._modalWindow, modal);
                this._modalWindow.bem(Modal).setMod('visible');
            }
        }
    }));
});
