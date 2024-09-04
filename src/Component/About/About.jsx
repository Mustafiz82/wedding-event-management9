import React, { useEffect } from "react";

import planner from "../../assets/planner.jpg";
import planner2 from "../../assets/planner2.jpg";
import ceo from "../../assets/founder.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import ExpertMember from "./ExpertMember";

const About = () => {

	useEffect(() => {
		Aos.init();
		Aos.refresh();

		// Animation function for progress bars
		const animateProgress = (id, targetValue) => {
			let progressBar = document.getElementById(id);
			let value = 0;
			let interval = setInterval(() => {
				if (value < targetValue) {
					value++;
					progressBar.value = value;
				} else {
					clearInterval(interval);
				}
			}, 20); // Adjust the speed of the animation here (smaller value = faster animation)
		};

		// Trigger the animation for each progress bar
		animateProgress("wedding-progress", 84);
		animateProgress("party-progress", 70);
		animateProgress("event-progress", 92);
	}, []);

	return (
		<div>
			<div className="flex flex-col md:flex-row my-10 gap-10 md:gap-10 lg:gap-16">
				<div className="flex justify-center md:w-1/2 gap-5">
					<div data-aos="fade-right" className="flex items-center">
						<ExpertMember>
							{ceo}
							{"Tim Abell"}
							{"Founder "}
						</ExpertMember>
					</div>
					<div>
						<div data-aos="fade-down-right">
							<ExpertMember>
								{planner}
								{"Maria Henry"}
								{"Wedding Planner"}
							</ExpertMember>
						</div>
						<div data-aos="fade-up-left">
							<ExpertMember>
								{planner2}
								{"Thomas Bradson"}
								{"Wedding Planner"}
							</ExpertMember>
						</div>
					</div>
				</div>
				<div data-aos="flip-right" className="md:w-1/2 text-center px-5 md:text-left">
					<div className="space-y-5 max-w-[700px]">
						<h1 className="text-xl font-bold text-secondery">Our Experts</h1>
						<h1 className="text-5xl md:text-5xl font-courgette font-bold">
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
							life.
						</p>
						<div className="space-y-5 font-courgette">
							<div>
								<p>Wedding</p>
								<progress
									id="wedding-progress"
									className="progress progress-secondary w-full"
									value="0"
									max="100"
								></progress>
							</div>
							<div>
								<p>Party</p>
								<progress
									id="party-progress"
									className="progress progress-secondary w-full"
									value="0"
									max="100"
								></progress>
							</div>
							<div>
								<p>Event</p>
								<progress
									id="event-progress"
									className="progress progress-secondary w-full"
									value="0"
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
