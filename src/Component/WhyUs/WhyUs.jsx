import React, { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { GiCeremonialMask } from "react-icons/gi";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { RiAwardFill } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
const WhyUs = () => {

    useEffect(() =>{
        Aos.init();
		Aos.refresh()
    },[])


    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.5,    // Trigger when 50% of the component is visible
      });

	return (
		<div ref={ref} className="my-10  md:my-20 md:m-5">
			<div className="flex flex-col md:flex-row items-center gap-10">
				<div data-aos="zoom-in-up" className="space-y-5 p-5 text-justify md:text-left md:w-1/2 ">
					<h1 className="text-5xl text-center md:text-left font-courgette font-bold text-pink">Why Us</h1>
					<p>
						Construction is an ancient humanity activity. It began with the
						pureley functional need for a controlls environment to moderate the
						effects of climate. Constructed shelters were one means by which
						human beings were ableto adapt
					</p>
					<div className="flex gap-5 items-center">
						<AiFillCheckCircle className="text-pink " size={25}></AiFillCheckCircle>
						<p>Enjoying & Eating</p>
					</div>
					<div className="flex gap-5 items-center">
						<AiFillCheckCircle className="text-pink " size={25}></AiFillCheckCircle>
						<p>Live Together</p>
					</div>
					<div className="flex gap-5 items-center">
						<AiFillCheckCircle className="text-pink " size={25}></AiFillCheckCircle>
						<p>The Beautiful Moments</p>
					</div>
                    
				</div>


                <div data-aos="zoom-in-up" className="md:w-1/2 p-10 bg-pink space-y-5 text-xl">
                    
                    <div className="flex  items-center gap-5">
                        <GiCeremonialMask  className="text-pinkl " size={35}></GiCeremonialMask>
                        <div>
                            <h1 className="text-5xl font-semibold">
                                
                                {
                                   inView && <CountUp duration={3} end={520} />
                                }
                                
                               
                                
                                
                                +</h1>
                            <p>Expert and Professional Stuff</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex  items-center gap-5">
                        <FaGlassMartiniAlt  className="text-pinkl " size={35}></FaGlassMartiniAlt>
                        <div>
                            <h1 className="text-5xl font-semibold"> 
                                {
                                   inView && <CountUp duration={3} end={25000} />
                                }</h1>
                            <p>
                                completed Wedding
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex  items-center gap-5">
                        <RiAwardFill  className="text-pinkl " size={35}></RiAwardFill>
                        <div>
                            <h1 className="text-5xl font-semibold">  
                                {
                                   inView && <CountUp duration={3} end={144} />
                                }</h1>
                            <p>Archived Award</p>
                        </div>
                    </div>
                    <hr />
                </div>
			</div>
		</div>
	);
};

export default WhyUs;
