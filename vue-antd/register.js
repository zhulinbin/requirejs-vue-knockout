define(['knockout'], function(ko) {
	var viewModel = function() {
		var cssList = [
			'./vue-antd/css/app.css',
			'./vue-antd/css/chunk-vendors.css'
		]
		loadCss(cssList[0])
		loadCss(cssList[1])
		let srcList = [
			'./vue-antd/js/app.js',
			'./vue-antd/js/chunk-vendors.js',
		]

		loadJs(srcList[0])
		setTimeout(function() {
			loadJs(srcList[1])
		}, 2000)
	}
	var loadJs = function(src) {
		var head= document.getElementsByTagName('head')[0]; 
		var script= document.createElement('script'); 
		script.type= 'text/javascript'; 
		script.src= src;
		document.getElementsByTagName('body')[0].appendChild(script); 
	}
	var loadCss = function(href) {
		var head= document.getElementsByTagName('head')[0]; 
		var link= document.createElement('link'); 
		link.type= 'text/css'; 
		link.rel = 'stylesheet'
		link.href= href
		document.getElementsByTagName('body')[0].appendChild(link); 
	}
	return viewModel()
});