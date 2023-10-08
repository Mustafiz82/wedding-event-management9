import React from "react";
import image from "../../assets/perfectWedding.jpg";
const PerfectWedding = () => {
	return (
		<div className="bg-secondery text-white p-16 my-20 ">
			<div className=" flex gap-16">
				<div className="w-1/2">
					<img
						src={image}
						alt=""
					/>
				</div>
				<div className="flex  w-1/2  items-center">
					<div className="space-y-10">
						<h1 className="text-4xl font-semibold font-courgette ">
							Let's Plan Your Perfect Wedding
						</h1>
						<p>We’re here to serve you, step-by-step.</p>
						<p>
							Many people create notes on a computer and print them or send them
							through the Internet. However, I believe the most effective notes
							are handwritten. A handwritten note is personal and rare. Due to
							this, it will be given more attention.
						</p>
						<p>
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
