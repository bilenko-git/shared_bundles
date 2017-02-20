$(function () {
//     var button = $(".actions__content_toggle");
	$(".pc-block").on("click", ".actions__content_toggle svg, .actions__content_toggle, .pc-block__head-info", function (e) {
// debugger;
		$(this).parents(".pc-block").find(".actions__content_toggle").toggleClass("actions__content_toggle_closed");
		$(this).parents(".pc-block").find(".pc-block__head-info").toggleClass("pc-block__head-info_closed");
		$(this).parents(".pc-block").find(".pc-block__content").toggleClass("pc-block__content_closed");


//         if(this.hasClass("actions__content_toggle_closed")) {
//         } else {

//         }

	});
	$(window).on("scroll", function (e) {
		var scrollPos = $(window).scrollTop();
		var panelTop = $(".panel-top");
		var panelTopHeight = panelTop.height() === 0 ? 60 : panelTop.height();
		var tm1 = setTimeout(function (e) {
			clearTimeout(tm1);
			if (panelTop.hasClass("panel-top_closed") && scrollPos > panelTopHeight) {
				panelTop.toggleClass("panel-top_closed")
			} else if (!panelTop.hasClass("panel-top_closed") && scrollPos < panelTopHeight) {
				panelTop.toggleClass("panel-top_closed");
			}
		}, 300);
	});

	$(".page-content").on("click", ".cmp-select", function (e) {
		e.preventDefault();
		var state = $(".cmp-select__button").hasClass("cmp-select__button_open");
		var selectCmp = {
			state: $(".cmp-select").hasClass("cmp-select_open"),
			domElem: $(".cmp-select"),
			button: {
				state: $(".cmp-select__button").hasClass("cmp-select__button_open"),
				domElem: $(".cmp-select__button")
			},
			menu: {
				state: $(".cmp-select__list").hasClass("cmp-select__list_open")
			},
			changeState: function (state) {
				if (state !== undefined) {
					this.state = state;
				}
				if (this.state) {
					this.state = false;
					this.button.state = false;
					this.domElem.removeClass("cmp-select_open");
					this.button.domElem.removeClass("cmp-select__button_open");
					this.button.domElem.find("svg").removeClass("open");
				} else {
					this.state = true;
					this.button.state = true;
					this.domElem.addClass("cmp-select_open");
					this.button.domElem.addClass("cmp-select__button_open");
					this.button.domElem.find("svg").addClass("open");
					this.domElem.find(".cmp-select__list-item").eq(0).trigger("focus");
				}
			}
		};

		selectCmp.changeState();
	});


	$(".pc-block__content").on('click focusout', ".cmp-select__list-item", function (e) {
		var data = {
			"dataVal": $(this).data("val"),
			"dataHtml": $(this).html()
		};
		$(this).addClass('cmp-select__list-item_current');
		$(".cmp-select__value").html(data["dataHtml"]);
		$(".cmp-select select[name=color]").val(data["dataVal"]);
		$(".cmp-select__button").trigger("click");
	});

	$(".pc-block__content").on('mouseover mouseout', ".cmp-select__list-item", function (e) {
		if (e.type === 'mouseover') {
			$('.cmp-select__list-item_current').removeClass('cmp-select__list-item_current');
			$(this).addClass('cmp-select__list-item_current');
		}
	});

	$('.pc-block__content').on('click', function (e) {
		if ($(e.target).parents('.cmp-select').length === 0) {
			if ($('.cmp-select').hasClass("open")) {
				$(".cmp-select__button").trigger("click");
			}
		}
	});


	$(".pc-block__button").on("click", function (e) {
		$(".services").toggleClass("services_closed");
	})

	if ($("#chartMin").length !== 0 && $("#chartMb") !== 0) {
		var dataMin = [
			['#e13f94', 98],
			['rgb(25, 78, 168)', 20],
			['rgb(247, 147, 35)', 55],
			['rgb(132, 190, 64)', 47],
			['#fff', 80]
		];

		var dataMb = [
			['#e13f94', 210],
			['rgb(25, 78, 168)', 400],
			['rgb(247, 147, 35)', 310],
			['rgb(132, 190, 64)', 80]
		];

		var dataBalansMin = 300;
		var dataBalansMb = 1000;

		$('.chartLabel._min span').animateNumber({number: dataBalansMin});
		$('.chartLabel._mb span').animateNumber({number: dataBalansMb});


		dataChart(dataMin, "chartMin");
		dataChart(dataMb, "chartMb");
	}
	if ($("#chartMin2").length !== 0 && $("#chartMb2") !== 0) {

		var dataMin2 = [
			['#e13f94', 98],
			['#fff', 12]
		];

		var dataMb2 = [
			['#e13f94', 210],
			['#fff', 40]
		];
		dataChart(dataMin2, "chartMin2");
		dataChart(dataMb2, "chartMb2");

		var dataBalansMin2 = 110;
		var dataBalansMb2 = 250;

		$('.chartLabel._min2 span').animateNumber({number: dataBalansMin2});
		$('.chartLabel._mb2 span').animateNumber({number: dataBalansMb2});
	}
	function dataChart(data, chartId) {
		var dataColor = data.map(function (dataMap) {
			return dataMap[0];
		});
		var dataBalans = data.map(function (dataMap) {
			return dataMap[1];
		});

		var ctx = document.getElementById(chartId);
		new Chart(ctx, {
			type: 'doughnut',
			data: {
				labels: [],
				datasets: [{
						label: '',
						data: dataBalans,
						backgroundColor: dataColor,
						hoverBackgroundColor: dataColor,
						borderWidth: 0
					}]
			},
			options: {
				title: {
					display: false
				},
				legend: {
					display: false
				},
				tooltips: {
					enabled: false
				},
				responsive: false,
				cutoutPercentage: 90,
				rotation: (-0.5 * Math.PI) - (180 / 180 * Math.PI),
				percentageInnerCutout: 70,
				scales: {
					yAxes: [{
							display: false
						}],
					xAxes: [{
							display: false
						}]
				}
			}
		});
	}
});
/* inline-script__1*/



