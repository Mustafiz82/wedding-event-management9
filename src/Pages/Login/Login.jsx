import React, { useContext, useState } from "react";
import {
	Card,
	Checkbox,
	Button,
	Typography,
	Input,
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/Context";
import Swal from "sweetalert2";


const Login = () => {
	const location = useLocation()
	const { EmailSignIn ,GoogleSignIn } = useContext(AuthContext);
	const [error, setError] = useState("");
	const Navigate = useNavigate()
	const isUltraLargeScreen = window.innerWidth > 1536;



	const handleLogin = (e) => {
		e.preventDefault();
		const Email = e.target.Email.value;
		const Pass = e.target.Password.value;
		// console.log( Email , Pass)

		EmailSignIn(Email, Pass)
        .then((result) => {
			const user = result.user;
			console.log(user);
			Navigate(location.state || "/")
			Swal.fire(
				'Login Completed',
				'',
				'success'
				)
				
			})
        .catch(error => setError(error.message))

	};

	const handleGoogleSignIn = () => {
		GoogleSignIn()
		.then(result => {
			console.log(result.user);
			Swal.fire("Sign in Successful", "", "success");
			Navigate(location.state || "/")

			

		})
		.catch(error => console.log(error.message))

	}
	return (
		<div>


			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row justify-around 2xl:gap-32 gap-10 ">
					<div className="text-center lg:text-left w-1/2 ">
						<h1 className="2xl:text-7xl text-5xl font-bold font-courgette">Login now!</h1>
						<p className="py-6 2xl:text-xl">
							Access Service detail view wedding and About us Page
						</p>
					</div>
					<Card
						color="transparent"
						shadow={false}
					>
						<Typography
							variant={isUltraLargeScreen ? "h2" : "h4"}
							color="blue-gray"
						>
							Login
						</Typography>
						<Typography

							color="gray"
							className="mt-1 2xl:text-xl font-normal"
						>
							Enter your details to login
						</Typography>
						<form
							onSubmit={handleLogin}
							className="mt-8 mb-2 w-80 max-w-screen-lg 2xl:max-w-screen-2xl sm:w-96"
						>
							<div className="mb-4 flex flex-col gap-6">
								<input
								className="w-full h-10 p-4 border-2"
									placeholder="Name"
									size="lg"
									name="Email"
									required
								/>
								<input
								className="w-full h-10 p-4 border-2" 
								placeholder="password"
									type="password"
									size="lg"
									name="Password"
									required
								/>
							</div>

							
							<p className="text-red-500 mt-5">{error}</p>

							<Button
								className="mt-6 btn bg-pink text-black"
								fullWidth
								type="submit"
							>
								Login
							</Button>
							<Button onClick={handleGoogleSignIn}
								className="btn flex gap-2 hover:text-black bg-secondery  text-white mt-2  "
								fullWidth
							>
								{" "}
								<FcGoogle size={25}></FcGoogle>
								SignIn with Google
							</Button>
							<Typography
								color="gray"
								className="mt-4 text-center font-normal"
							>
								Didn't have an account?{" "}
								<Link
									to="/Registration"
									className="font-medium text-gray-900"
								>
									Sign Up
								</Link>
							</Typography>
						</form>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Login;
