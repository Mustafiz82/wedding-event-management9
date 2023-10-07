import React from "react";
import { Link } from "react-router-dom";

const Service = ({item}) => {
    const {id , image , price ,short_description ,title} = item
	return (
		<div>
			<div className="relative  flex w-96 flex-col rounded-xl bg-clip-border text-gray-700 shadow-md ">
				<div className="relative mx-4 mt-4  overflow-hidden rounded-xl  bg-clip-border text-gray-700 shadow-lg">
					<img
						src={image}
						alt="profile-picture"
                        className="w-full object-cover h-60"
					/>
				</div>
				<div className="p-6 text-center space-y-3    ">
					<h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
						{title}
					</h4>
					<p className="block   font-sans text-base font-medium leading-relaxed antialiased">
						{short_description}
					</p>
                    <p>price: {price}</p>
                    <Link   className="btn bg-pink" to={`/Services/${id}`}><button >view details</button></Link>
				</div>
				<div>
                    
                </div>
			</div>
		</div>
	);
};

export default Service;
