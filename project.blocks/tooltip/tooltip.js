modules.define('tooltip', ['i-bem-dom', 'jquery'], function(provide, bemDom, $) {
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    var popup = $('.popup');
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
                                    AppendTooltip(tooltips, tooltipIndex);
                                },
                                error: function (xhr, status) {
                                    console.log(xhr);
                                    console.log(status);
                                }
                            });
                        } else {
                            AppendTooltip(JSON.parse(tooltips), tooltipIndex);
                        }
                        
                        function AppendTooltip(tooltips, tooltipIndex) {
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
                            
                            popup.html(tooltipDes);
                        }
                    });
                }
            }
        }
    }));
});
