import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Service = ({item}) => {

	useEffect(() =>{
		Aos.init();
		Aos.refresh()
	},[])
    const {id , image , price ,short_description ,title} = item
	return (
		<div>
			<div data-aos="flip-right" className="relative  flex  flex-col rounded-xl bg-clip-border text-gray-700 shadow-xl ">
				<div className="relative mx-4 mt-4  overflow-hidden rounded-xl  bg-clip-border text-gray-700 shadow-xl">
					<img
						src={image}
						alt="profile-picture"
                        className="w-full object-cover 2xl:h-96 h-80 "
					/>
				</div>
				<div className="p-6 2xl:text-xl text-center space-y-3    ">
					<h4 className="mb-2 block font-sans 2xl:text-3xl text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
						{title}
					</h4>
					<p className="block    font-sans text-base font-medium leading-relaxed antialiased">
						{short_description}
					</p>
                    <p>price: {price}</p>
                    <Link   className="btn 2xl:btn-lg bg-pink" to={`/Services/${id}`}><button >view details</button></Link>
				</div>
				<div>
                    
                </div>
			</div>
		</div>
	);
};

export default Service;
