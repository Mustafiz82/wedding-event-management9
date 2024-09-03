import React from "react";
import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
	const loader = useLoaderData();
	return (
		<div id="services" className="2xl:mt-24 mt-16 px-5 ">
				<h1 className="text-5xl  text-center font-courgette mb-10">Our Services</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10  ">
				{loader?.map((item) => (
					<Service
						item={item}
						key={item.id}
					></Service>
				))}
			</div>
		</div>
	);
};

export default Services;
