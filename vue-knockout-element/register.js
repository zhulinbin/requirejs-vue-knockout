define(['knockout', 'https://cdn.jsdelivr.net/npm/vue'], function(ko, vue) {
	var viewModel = function() {
		loadCss()
		let srcList = [
			'./vue-knockout-element/static/js/manifest.js',
			'./vue-knockout-element/static/js/vendor.js',
			'./vue-knockout-element/static/js/app.js',
		]

		loadJs(srcList[0])
		setTimeout(function() {
			loadJs(srcList[1])
		}, 100)
		setTimeout(function() {
			loadJs(srcList[2])
		}, 150)
	}
	var loadJs = function(src) {
		var head= document.getElementsByTagName('head')[0]; 
		var script= document.createElement('script'); 
		script.type= 'text/javascript'; 
		script.src= src;
		document.getElementsByTagName('body')[0].appendChild(script); 
	}
	var loadCss = function() {
		var head= document.getElementsByTagName('head')[0]; 
		var link= document.createElement('link'); 
		link.type= 'text/css'; 
		link.rel = 'stylesheet'
		link.href= './vue-knockout-element/static/css/app.css';
		document.getElementsByTagName('body')[0].appendChild(link); 
	}
	return viewModel()
});