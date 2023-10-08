import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
	const ul = (
		<div className="flex gap-5 font-bold">
				<NavLink
					to="/"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "text-pink " : ""
					}
				>
					
					Home

				</NavLink>
			<li>
				<NavLink
					to="/about"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "text-pink " : ""
					}
				>
					About us
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/Wedding"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "text-pink " : ""
					}
				>
					Wedding
				</NavLink>
			</li>
		</div>
	);

	return (
		<div className="">
			<div className="navbar bg-base-100 px-0 ">
				<div className="navbar-start">
					<div className="dropdown">
						<label
							tabIndex={0}
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							{ul}
						</ul>
					</div>
					<a className=" px-0 btn btn-ghost normal-case text-xl font-poppins italic">
						Wedding Hub
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className=" menu-horizontal px-1">{ul}</ul>
				</div>
				<div className="navbar-end">
					<Link to="/login" className="btn bg-secondery text-white">Login</Link>
				</div>
			</div>
		</div>
	);
};

export default Nav;
