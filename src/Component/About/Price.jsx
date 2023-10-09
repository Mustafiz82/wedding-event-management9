import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Price = ({ item }) => {

	useEffect(() =>{
		Aos.init();
		Aos.refresh()
	},[])
    const {services ,price , description , title } = item
	return (
		<div data-aos="fade-up">
			<div className="relative flex w-full  flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8  shadow-md shadow-pink-500/40">
				<div className="relative space-y-5 m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
					<p className="block font-sans text-xl font-bold font-normal uppercase leading-normal  antialiased text-pink">
						{title}
					</p>
					<p className="block font-sans text-sm font-normal uppercase leading-normal  antialiased">
						{description}
					</p>
					<h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal  antialiased">
						<span className="mt-2  text-4xl">$</span ><span className="text-pink">{price}</span>
						<span className="self-end text-4xl">/mo</span>
					</h1>
				</div>
				<div className="p-0">
					<ul className="flex flex-col gap-4">
						<li className="flex items-center gap-4">
							<span className="rounded-full border border-white/20 bg-white/20 p-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
									className="h-3 w-3"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4.5 12.75l6 6 9-13.5"
									></path>
								</svg>
							</span>
							<p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
								{services[0]}
							</p>
						</li>
						<li className="flex items-center gap-4">
							<span className="rounded-full border border-white/20 bg-white/20 p-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
									className="h-3 w-3"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4.5 12.75l6 6 9-13.5"
									></path>
								</svg>
							</span>
							<p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                            {services[1]}
							</p>
						</li>
						<li className="flex items-center gap-4">
							<span className="rounded-full border border-white/20 bg-white/20 p-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
									className="h-3 w-3"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4.5 12.75l6 6 9-13.5"
									></path>
								</svg>
							</span>
							<p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                            {services[2]}
							</p>
						</li>
						<li className="flex items-center gap-4">
							<span className="rounded-full border border-white/20 bg-white/20 p-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
									className="h-3 w-3"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4.5 12.75l6 6 9-13.5"
									></path>
								</svg>
							</span>
							<p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                            {services[3]}
							</p>
						</li>
						
					</ul>
				</div>
				<div className="mt-12 p-0">
					<button
						className="btn bg-pink w-full text-white"
						type="button"
						data-ripple-dark="true"
					>
						Buy Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Price;
