import React from "react";

const OurService = ({children} ) => {
    const [image] = children
	return (
		<div>
			<div class="relative      flex flex-col rounded-xl bg-white  text-gray-700 shadow-md">
				<div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
					<img
						src={image} 
                        className="w-60"
						alt="profile-picture"
					/>
				</div>
				<div class="p-6 text-center">
					<h4 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
						{children[1]}
					</h4>
					<p class="block  from-pink-600 to-pink-400 bg-clip-text font-sans font-medium leading-relaxed antialiased">
                    {children[2]}
					</p>
				</div>
			</div>
		</div>
	);
};

export default OurService;
