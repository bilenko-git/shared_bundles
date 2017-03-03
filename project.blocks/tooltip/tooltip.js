modules.define('tooltip', ['i-bem-dom', 'jquery', 'dropdown', 'popup'], function(provide, bemDom, $, Dropdown, Popup) {
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    var ctx = this;
                    ctx.popup = this.findChildBlock(Dropdown);
                   //debugger;
                    // $('.popup');
                    sessionStorage.setItem('tooltips', '');

                    this._domEvents().on('click', function(e) {
                        var tooltips = sessionStorage.tooltips,
                            tooltipIndex = this.domElem.data('bem').dropdown.tooltip;
                        tooltips = '2';

                        if(!tooltips) {
                            $.ajax({
                                type: "POST",
                                url: "api/tooltip",
                                success: function (tooltips) {
                                    tooltips = JSON.parse(JSON.parse(tooltips).data);
                                    console.log(tooltips);
                                    sessionStorage.setItem('tooltips', JSON.stringify(tooltips));
                                    this._appendTooltip(tooltips, tooltipIndex);
                                },
                                error: function (xhr, status) {
                                    console.log(xhr);
                                    console.log(status);
                                }
                            });
                        } else {
                            this._appendTooltip(JSON.parse(tooltips), tooltipIndex, ctx, Dropdown, Popup);
                        }
                        

                    });
                }
            }
        },
        _appendTooltip: function (tooltips, tooltipIndex, ctx, Dropdown, Popup) {
            tooltips = {'0' : {
                'key' : 'main',
                'description': 'TEST'
            }}
            var tooltipDes = '';
            
            for (var tooltip in tooltips) {
                if(tooltipIndex == tooltips[tooltip]['key']) {
                    tooltipDes = tooltips[tooltip]['description']
                    continue;
                }
            }
            // debugger;
            this.findMixedBlock(Dropdown).findMixedBlock(Popup).setContent(tooltipDes);
        }
    }));
});
