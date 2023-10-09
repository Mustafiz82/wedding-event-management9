import React from "react";
import banner from "../../assets/weddingBanner.jpg";
import stage from "../../assets/stagex.jpg";
import dance from "../../assets/Danse.jpg";
import welcome from "../../assets/Welcome.jpg";

const Hero = () => {
	return (
		<div>
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage: `url(${banner})`,
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold font-courgette">
							Weddding Hut
						</h1>
						<p className="mb-5 font-courgette">
							Design , planning and management of a Wedding
						</p>
					</div>
				</div>
			</div>

			<div className="mt-10">
				<h1 className="text-center font-courgette text-4xl">A Wedding</h1>
				<div className="grid p-5 lg:grid-cols-3 gap-5 text-justify">
					<div className=" space-y-5">
						<img 
							src={stage}
							alt=""
							className="md:w-full lg:w-auto"
						/>
						<h1 className="text-2xl font-semibold text-center">
							wedding Stage
						</h1>
						<p>
							WEDDING HUB PROVIDE AN WEDDING STAGE WITH TRADITIONAL DECORATION
							FOR PHOTO TAKEN. A BEAUTIFUL RECEPTION FULL OF LIGHTING AND
							FLOWERS. WEDDING STAGE WITH ARTIFICIAL CANDLES AND FLOWERS.
						</p>
					</div>
					<div className="space-y-5">
						<img 
							src={dance}
							alt=""
							className="md:w-full lg:w-auto"

						/>
						<h1 className="text-2xl font-semibold text-center">
							The Dance Stage
						</h1>

						<p>
							OUR DANCE FLOOR PANELS ARE RENTED IN INCREMENTS 3’X3’ PANELS. EACH
							PANEL IS 9 SQUARE FEET, ENOUGH SPACE TO ACCOMMODATE ONE COUPLE OR
							TWO INDIVIDUALS. IF YOU NEED TO RENT A DANCE FLOOR FOR 50 PEOPLE
							TO DANCE AT A TIME
						</p>
					</div>
					<div className="space-y-5">
						<img
							src={welcome}
							alt=""
							className="md:w-full lg:w-auto"

						/>
						<h1 className="text-2xl font-semibold text-center">
							Welcome
						</h1>

						<p>
							WEDDING HUB PROVIDE AN WEDDING STAGE WITH TRADITIONAL DECORATION
							FOR PHOTO TAKEN. A BEAUTIFUL RECEPTION FULL OF LIGHTING AND
							FLOWERS. WEDDING STAGE WITH ARTIFICIAL CANDLES AND FLOWERS.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
