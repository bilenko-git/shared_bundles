modules.define('user-charts', ['i-bem-dom', 'chart', 'jquery', 'loader_type_js'], function(provide, bemDom, chart, $, loader) {
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {

		            $.makeArray(document.querySelectorAll("canvas[id*=userchart]")).
	            		forEach(function(ctx) {

            			var typeChart = $(ctx).attr('id'),
                            profile =  sessionStorage.profile ? JSON.parse(sessionStorage.profile) : '';

                        if( typeChart == 'userchart01') {
                        	var value = profile ? profile.data.balances.bundleMocNatShared : '100',
                             	curr = 'минуты';
                             	
                            var data = [{ 
                                data: [value], 
                                backgroundColor: "#5f318f", 
                                label: "осталось " },
                            ];
                        } else {
                            var curr = 'МБ';
                            var data = [{ 
                                data: [400], 
                                backgroundColor: "#5f318f", 
                                label: "" },
                            ];
                        }

		                new Chart(ctx, {
		                	type: 'horizontalBar',
			                data: {
			                    labels: [''],
			                    datasets: data
			                },
			                options: {
			                    title: {
			                        display: false
			                    },
			                    legend: {
			                        display: false
			                    },
			                    tooltips: {
			                        enabled: true,
			                        displayColors: true,
			                        cornerRadius: 0,
			                        backgroundColor: "#fff",
			                        bodyFontSize: 12,
			                        bodyFontColor: "#000",
			                        xPadding: 10,
			                        callbacks: {
			                            label: function(tooltipItem, data) {
			                                var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || 'Other';
			                                var label = data.datasets[tooltipItem.datasetIndex].data;
			                                var color = data.datasets[tooltipItem.datasetIndex].backgroundColor;
			                                return ' '+datasetLabel+' '+label+' '+ curr;
			                            }
			                        }
			                    },
			                    responsive : false,
			                    scales: {
			                        yAxes: [{
			                            display: true,
			                            stacked: true,
			                            barThickness: 25,
			                            gridLines: {
			                                color: "#afacb0",
			                                lineWidth: 3,
			                                zeroLineColor: 'rgba(0, 0, 0, 0.0)'
			                            }
			                        }],
			                        xAxes: [{
			                            display: false,
			                            stacked: true
			                        }]
			                    }
			                }
		            	});
       			 	});
                }
            }
        }
    }));

});
