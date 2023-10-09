import React from "react";
import bannarImg from "../../assets/dsc-8584@2x.webp";

const Banner = () => {
	return (
		<div className="flex flex-col-reverse md:flex-row min-h-[600px] bg-[#3A4664] z-0">
			<div className="flex-1 bg-secondery relative p-10 md:p-0 text-center md:text-left ">
				<div className="text-white md:absolute space-y-6 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 ">
					<h1 className="font-poppins text-pink  ">Wedding Hut</h1>
					<h1 className="text-3xl md:text-5xl font-courgette">Design , planning and management of a Wedding</h1>
					<button className=" text-pink"> Our services</button>
				</div>
			</div>	

			<div className="flex-1 flex items-end bg-pink  z-0">
				<div className="  w-96 mx-auto  ">
					<img
						className="w-full  rounded-t-full"
						src={bannarImg}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
