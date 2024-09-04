import React from "react";

import grid1 from "../../assets/grid-1.webp";
import grid2 from "../../assets/grid-2.webp";
import grid3 from "../../assets/grid-3.webp";
import grid4 from "../../assets/grid-4.webp";
import grid5 from "../../assets/grid-5.webp";
import bannarImg from "../../assets/dsc-8584@2x.webp";

const Featured = () => {
	return (
		<div className="px-5">
			<div className="my-20 text-center space-y-4 ">
				<h1 className="text-5xl font-bold font-courgette text-pink">OUR WEDDING FEATURED</h1>
				<p className="text-2xl">wedding Portfolio</p>
				<div className="w-60 bg-pink h-1 mx-auto">
				</div>
			</div>

			<div className=" flex flex-col-reverse lg:flex-row gap-5">
				<div className="grid grid-cols-2 gap-5">
					<img
						className="col-span-2 w-full h-full"
						src={grid1}
						alt=""
					/>

					<img
						className="w-full h-full object-cover"
						src={grid2}
						alt=""
					/>
					<img
						className="w-full h-full object-cover"
						src={grid4}
						alt=""
					/>
				</div>
				<div className="grid grid-cols-2 gap-5 ">
					<div className="row-span-2">
					<img
						className=" h-full w-full   object-cover "
						src={bannarImg}
						alt=""
					/>
					</div>
					<img
						className="w-full h-full object-cover"
						src={grid3}
						alt=""
					/>
					<img
						className="w-full h-full  object-cover"
						src={grid5}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Featured;
