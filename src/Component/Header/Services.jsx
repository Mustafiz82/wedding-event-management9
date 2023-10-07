import React from "react";
import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
	const loader = useLoaderData();
	console.log(loader);
	return (
		<div className="mt-16 ">
				<h1 className="text-5xl  text-center font-courgette mb-10">Our Services</h1>
			<div className="grid grid-cols-3 gap-5 ">
				{loader.map((item) => (
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
