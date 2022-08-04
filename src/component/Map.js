import React from 'react';

const PRODUCTS = [
	{
		id: 1,
		name: 'Bluetooth & Wireless Over-Ear Headphones (Black)',
		price: '$12',
		//image: require('./images/1.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 2,
		name: 'Apple iPhone 128GB',
		price: '$14',
		//image: require('./images/2.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 3,
		name: 'Running Shoe Red & White',
		price: '$13.67',
		//image: require('./images/3.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
]
function Const1() {
    return (
       <div>
		{
			PRODUCTS.map((product)=>(
				<div>
				{product.name}
				</div>
			))
		}
	   </div>
	   
    );
}

export default Const1;