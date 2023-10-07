import React from "react";
import { ImFacebook } from "react-icons/im";
// import { FaXTwitter ,FaInstagram } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
	return (
		<div className="mt-10">
			<footer className="flex  justify-between p-10 bg-neutral text-neutral-content  text-xl">
				<nav className="w-1/3 space-y-10">
					<h1 className="font-courgette text-3xl">Wedding Hut</h1>
					<p className="my-12">
						Welcome and open yourself to your truest love this year with us!
						With the Release Process
					</p>
					<div className="flex text-xl gap-6 text-pink ">
						<ImFacebook
							className=""
							size={25}
						></ImFacebook>
						<RiTwitterXFill
							className=""
							size={25}
						></RiTwitterXFill>
						<FaInstagram
							className=""
							size={25}
						></FaInstagram>
					</div>
				</nav>
				<nav className="w-1/3 flex justify-center  ">
					<div className="space-y-5">
						<h1 className="text-2xl font-semibold">Information</h1>
						<li className="list-none">
							<a href="#">Home</a>
						</li>
						<li className="list-none">
							<a href="#">Services</a>
						</li>
						<li className="list-none">
							<a href="#">Portfolio</a>
						</li>
						<li className="list-none">
							<a href="#">Pricing</a>
						</li>
						<li className="list-none">
							<a href="#">Contact</a>
						</li>
					</div>
				</nav>
				<nav className="w-1/3 flex justify-end">
					<div className="space-y-5 ">
						<h3 className="text-2xl font-semibold">Contact Us</h3>
						<p>Would you have any enquiries.Please feel free to contuct us</p>
						<div className="flex gap-5 ">
							<AiOutlineMail className="text-pink" size={25}></AiOutlineMail>
							<p>Email: info@weddinghut.com</p>
						</div>
						<div className="flex gap-5 ">
							<BsFillTelephoneFill className="text-pink" size={25}></BsFillTelephoneFill>
                            <p>Phone: +1 (123) 456-7890</p>
						</div>
						<div className="flex gap-5 ">
							<MdLocationOn className="text-pink" size={25}></MdLocationOn>
                            <p>Address:New York – 1075 Firs Avenue</p>
						</div>
					</div>
				</nav>
			</footer>
		</div>
	);
};

export default Footer;
