require([
	'knockout', 
	'jquery', 
	'../vue-knockout-element/register',
	// '../vue-antd/register'
],function (ko, $, vueKnockoutElement) {
// ],function (ko, $, vueKnockoutElement, vueAntd) {
	// vue knockout混合，使用element-ui
	ko.components.register('vue-ko-element-component', {
		viewModel: vueKnockoutElement,
	    template: '<app-root></app-root>'
	});

	// 纯vue和antd
	// ko.components.register('vue-antd-component', {
	// 	viewModel: vueAntd,
	//     template: '<div id="app"></div>'
	// });

	// 自己新建的knockout纯component
	var koViewModel = function() {
        this.text = ko.observable('knockout component')
    }

	ko.components.register('ko-component', {
		viewModel: koViewModel,
	    template: '<p data-bind="text: text()"></p>'
	});

	// ko.applyBindings(vueAntd, $('#vueAntd')[0])
	ko.applyBindings(vueKnockoutElement, $('#vueKnockoutElement')[0])
	ko.applyBindings(koViewModel, $('#koComponent')[0])
})