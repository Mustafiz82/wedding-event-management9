import React, { useState } from "react";
import {
	Card,
	Input,
	Checkbox,
	Button,
	Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'
const Registration = () => {

    const [error , setError ] = useState("")

    const handleRegistration = (e) => {
        e.preventDefault()
        const Name = e.target.Name.value
        const Email = e.target.Email.value
        const Pass = e.target.Password.value
        console.log(Name , Email , Pass)

    }



	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
					<div className="hero-content flex-col lg:flex-row justify-around gap-10 ">
						<div className="text-center lg:text-left w-1/2 ">
							<h1 className="text-5xl font-bold font-courgette">SignUp Now!</h1>
							<p className="py-6">
								Access Service detail view wedding and About us Page
							</p>
						</div>
						<Card
							color="transparent"
							shadow={false}
						>
							<Typography
								variant="h4"
								color="blue-gray"
							>
								SignUp
							</Typography>
							<Typography
								color="gray"
								className="mt-1 font-normal"
							>
								Enter your details to Register
							</Typography>
							<form onSubmit={handleRegistration} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
								<div className="mb-4 flex flex-col gap-6">
									<Input
										size="lg"
										label="Name"
										className=""
                                        name="Name"
									/>
									<Input
										size="lg"
										label="Email"
										className=""
                                        name="Email"
									/>
									<Input
										type="password"
										size="lg"
										label="Password"
                                        name="Password"
									/>
								</div>

								<div className="flex gap-3 mt-5 ">
									<input
										type="checkbox"
										name="checkbox"
										id=""
										className="w-5"
									/>
									<p className="">
										I agree the{" "}
										<span className="font-bold transition-colors hover:text-pink">
											Terms and Conditions
										</span>
									</p>
								</div>
								<Button
									className="btn mt-6 bg-pink text-black"
									fullWidth
                                    type="submit"
								>
									SignUp
								</Button>
								<Button
									className="btn hover:text-black flex gap-2 bg-secondery  text-white mt-2  "
									fullWidth
								> <FcGoogle size={25}></FcGoogle>
									Continue with Google 
								</Button>
								<Typography
									color="gray"
									className="mt-4 text-center font-normal"
								>
									 Already have an account?{" "}
									<Link
										to="/login"
										className="font-medium text-gray-900"
									>
										SignIN
									</Link>
								</Typography>
							</form>
						</Card>
					</div>
				</div>
		</div>
	);
};

export default Registration;
