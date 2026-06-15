import React from "react";
import  {Wishlist} from "../common/Wishlist";
import  {AccountIcon} from "../common/AccountIcon";
import  {CartIcon} from "../common/CartIcon";
const Navigation = () => {
	return (
		<nav className='flex items-center py-6 px-8 justify-between gap-40'>
			<div className='flex items-center gap-6'>
				{/*Logo*/}
				<a className="text-3xl text-black  font-bold gap-8 " href="/">EasyBuy</a>

			</div>

			<div className="flex flex-wrap items-center gap-10 flex-1">
				{/* Nav items */}
				<ul className="flex gap-14 text-gray-600">
					<li><a href="/" className="hover:text-black transition-colors">Shop</a></li>
					<li><a href="/mens" className="hover:text-black transition-colors">Men</a></li>
					<li><a href="/womens" className="hover:text-black transition-colors">Women</a></li>
					<li><a href="/kidsp" className="hover:text-black transition-colors">Kids</a></li>
				</ul>

			</div>

			<div className="flex justify-center">
				{/* Search bar*/}
				<div className="border rounded flex overflow-hidden">
					<div className="flex items-center justify-center px-4 border-1">

						<svg className="h-4 w-4 text-grey-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
						<input type="text" className="px-4 py-2 outline-none" placeholder="Search" />

					</div>
				</div>
			</div>
			<div className="flex flex-wrap items-center gap-4">
				{/* Action items - icons*/}
				<ul className="flex  gap-8">
					<li><button href="/"><Wishlist /></button></li>
					<li><button href="/"><AccountIcon /></button></li>
					<li><button href="/"><CartIcon /></button></li>
				</ul>
			</div>

		</nav>
	)
}

export default Navigation