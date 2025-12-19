$(document).ready(() => {
	//
	// 左侧 Tab 选项卡点击后变为 action 状态
	//
	let tabButtonsObj = $(".TabButtons>ul>li");
	tabButtonsObj.click(function() {
		$(this).siblings().removeClass("TabButtonActive")
		$(this).addClass("TabButtonActive");
	});

	//
	// 左侧 Tab 选项卡点击后切换页面
	//
	let tabButtons = tabButtonsObj.toArray();
	let tabPage = $(".TabPageBox>iframe");
	tabButtons.forEach(function(element, index) {
		$(element).click(() => {
			tabPage.attr("src", `page${index}.html`);
		});
	}, this);
	
	//
	// 进入首页
	//
	tabButtons[0].click();
	// tabButtons[2].click();
});