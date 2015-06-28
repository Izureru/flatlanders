
(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price:2.95,
			description: '....',
			canPurchase: false,
			soldOut: false,
			images:[
				{
					full: 'dodecahedron-01-full.png',
					thumb: 'dodecahedron-01-thumb.png'
				},
				{
					full: 'dodecahedron-02-full.png',
					thumb: 'dodecahedron-02-thumb.png'
				},
			],
			reviews:[
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@joe.com"
				},
				{
					stars: 1,
					body: "THis product is not good",
					author: "tim@hater.com"
				}]
		}
	]
})();
