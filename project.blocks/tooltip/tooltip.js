modules.define('tooltip', ['i-bem-dom', 'jquery'], function(provide, bemDom, $) {
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    var popup = $('.popup');

                    this._domEvents().on('click', function(e) {
                        var tooltips = sessionStorage.tooltips,
                            tooltipIndex = this.domElem.data('bem').dropdown.tooltip;

                        if(!tooltips) {
                            if(false) {
                                $.ajax({
                                    url: "url"
                                }).done(function(tooltips) {
                                    sessionStorage.setItem('tooltips', JSON.stringify(tooltips));
                                    AppendTooltip(tooltips, tooltipIndex);
                                }); 
                            } else {
                                var tooltips = {'main' : '1Перехд в личный кабинет на сайте в котором<br> можно управлять ...', 'user' : 'user des'};
                                
                                sessionStorage.setItem('tooltips', JSON.stringify(tooltips));
                                AppendTooltip(tooltips, tooltipIndex);
                            }
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
