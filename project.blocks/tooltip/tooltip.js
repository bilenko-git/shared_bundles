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

                        if(!tooltips) {
                            $.ajax({
                                type: "GET",
                                url: "https://missaapitest.life.com.by/api/v1/subscriber/bundles/getHintsByRole",
                                data: {
                                    "role" : "UNAUTHORIZED"
                                },
                                crossDomain : true,
                                success: function (tooltips) {
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
                            if(tooltips[tooltipIndex]) {
                                popup.html(tooltips[tooltipIndex]);
                            } 
                        }
                    });
                }
            }
        }
    }));
});
