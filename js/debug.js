$(document).ready(() => {
	return;

	//
	// 获取最后一个 hr 之前的所有元素
	//
	let lastHr = $("body>hr:last");
	lastHr.prevAll().each(function() {
		//
		// 如果元素没有 PageTitle 类名，则删除
		//
		if (!$(this).hasClass('PageTitle')) {
			$(this).remove();
		}
	});
});