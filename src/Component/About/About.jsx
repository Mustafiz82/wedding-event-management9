import React from "react";
import OurService from "./OurService";

import planner from "../../assets/planner.jpg";
import planner2 from "../../assets/planner2.jpg";
import ceo from "../../assets/founder.jpg";

const About = () => {
	return (
		<div>
			<div className="flex flex-col md:flex-row my-10 gap-10 md:gap-10 lg:gap-16" >
				<div className="flex  md:w-1/2 justify-between">
					<div className="flex  items-center">
						<OurService>
							{ceo}
							{"Tim Abell"}
							{"Founder "}
						</OurService>
					</div>
					<div>
						<OurService>
							{planner}
							{"Maria Henry"}
							{"Wedding Planner"}
						</OurService>
						<OurService>
							{planner2}
							{"Thomas Bradson"}
							{"Wedding Planner"}
						</OurService>
					</div>
				</div>
				<div className="md:w-1/2 text-center px-5 md:text-left">
					<div className="space-y-5">
						<h1 className="text-xl font-bold text-secondery">Our Experts</h1>
						<h1 className="text-5xl md:text-5xl lg:text-7xl font-courgette font-bold ">
							Welcome To The Best <span className="text-pink">Day Of</span> Life
						</h1>
						<p className="text-justify">
							At Wedding Event Management, we believe that every couple deserves
							the wedding day of their dreams. Our passion is turning your
							vision into reality, ensuring that your special day is nothing
							short of perfection. With a team of dedicated professionals and
							years of experience, we are here to make your wedding day truly
							unforgettable. Get to know the heart and soul behind the magic
							that turns your dreams into reality. Discover our story and the
							commitment we bring to creating the most cherished moments of your
							life."
						</p>
						<div className="space-y-5 font-courgette"> 
							<div>
								<p>Weadding</p>
								<progress
									class="progress progress-secondary w-full"
									value="84"
									max="100"
								></progress>
							</div>
							<div>
								<p>Party</p>
								<progress
									class="progress progress-secondary w-full"
									value="70"
									max="100"
								></progress>
							</div>
							<div>
								<p>Event</p>
								<progress
									class="progress progress-secondary w-full"
									value="92"
									max="100"
								></progress>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
