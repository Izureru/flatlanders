
(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController', function(){
		this.products = gems;
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
			]
		},
		{
			name: 'Hectacahedron',
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
			]
		},
		{
			name: 'Duodecahedron',
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
			]
		}
	]
})();
