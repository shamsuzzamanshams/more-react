import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPeicingData from '../daisyPricingData/daisyPeicingData';

const PricingOptions = ({ pricingOption }) => {
	const pricingData = use(pricingOption)
	// console.log(pricingData);

	return (
		<div>
			<h2 className='text-5xl'>Get Our Membership</h2>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{/* {
					pricingData.map(pricing => <PricingCard
						key={pricing.id}
						pricing={pricing}></PricingCard>)
				} */}
				{
					pricingData.map(pricing => <DaisyPeicingData
						key={pricing.id}
						pricing={pricing}
					></DaisyPeicingData>)
				}
			</div>
		</div>
	);
};

export default PricingOptions;