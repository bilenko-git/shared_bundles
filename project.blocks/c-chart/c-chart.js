modules.define('c-chart', ['i-bem-dom', 'chart', 'jquery', 'loader_type_js'], function(provide, bemDom, chart, $, loader) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    debugger;
                var ctxArr = $.makeArray(document.querySelectorAll("canvas[id*=chartMin]"));
            var data = [
                { data: [400], backgroundColor: "#5f318f", label: "Вася-тесть" },
                { data: [801], backgroundColor: "#53c841", label: "Доченька" },
                { data: [101], backgroundColor: "#4078c0", label: "Мама+иногда папа" },
                { data: [302], backgroundColor: "#fdff2e", label: "Бабушка" },
                { data: [520], backgroundColor: "#9eae2f", label: "Вторая бабушка" },
                { data: [100], backgroundColor: "#ffa008", label: "сосед Дениска" },
                { data: [1], backgroundColor: "#ff0000", label: "собачка Нюша" },
                { data: [1200], backgroundColor: "#00ff81", label: "Модем" },
                { data: [310], backgroundColor: "#ff00e8", label: "wi-fi" }
            ];
            ctxArr.forEach(function(ctx){
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
                                var curr = 'МБ';
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

                }/*end_js_inited*/
            }
        }
    }));

});
