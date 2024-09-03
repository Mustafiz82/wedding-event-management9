import React, { useEffect } from "react";
import image from "../../assets/perfectWedding.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const PerfectWedding = () => {

	
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	  }, []);
	return (
		<div data-aos="fade-up" className="bg-secondery  text-white p-5 lg:p-16 my-10 lg:my-20 ">
			<div className=" flex gap-16 flex-col lg:flex-row">
				<div className="lg:w-1/2  mt-2">
					<img 
						src={image}
						className="w-full"
						alt=""
					/>
				</div>
				<div className="flex  lg:w-1/2  items-center">
					<div className="space-y-10 2xl:text-xl">
						<h1 className="2xl:text-5xl text-4xl xl:text-3 font-semibold font-courgette ">
							Let's Plan Your Perfect Wedding
						</h1>
						<p>We’re here to serve you, step-by-step.</p>
						<p>
							Many people create notes on a computer and print them or send them
							through the Internet. However, I believe the most effective notes
							are handwritten. A handwritten note is personal and rare. Due to
							this, it will be given more attention.
						</p>
						<p className="pb-5">
							A few weeks ago I was in Michigan for my dad’s funeral. While
							there I attended my mom’s church on Sunday and met her pastor for
							the second time.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PerfectWedding;
