import React, { useEffect, useState } from "react";
import bannarImg from "../../assets/dsc-8584@2x.webp";
import Aos from "aos";
import "aos/dist/aos.css";


const Banner = () => {




	useEffect(() =>{
		Aos.init();
		Aos.refresh()
	},[])
	return (
		<div className="flex flex-col-reverse md:flex-row lg:h-[600px] 2xl:h-screen bg-[#3A4664] z-0">
			<div data-aos="fade-right" className="flex-1 bg-secondery relative p-10 md:p-0 text-center md:text-left ">
				<div className="text-white md:absolute space-y-6 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 ">
					<h1 className="font-poppins text-pink 2xl:text-xl ">Wedding Hut</h1>
				<h1 className="text-3xl 2xl:text-6xl md:text-5xl font-courgette">Design , planning and management of a Wedding</h1>
				
					<button className="2xl:text-xl text-pink"><a href="#services">services</a></button>
				</div>
			</div>	

			<div data-aos="fade-left" className="flex-1 flex items-end bg-pink  z-0">
				<div className="  w-[30vw] mt-10 lg:mt-0 mx-auto  ">
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
