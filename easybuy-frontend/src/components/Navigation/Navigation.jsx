import React from "react";

const Navigation = ()=>{
	return (
		<nav className='flex items-center py-6 px-8 justify-between gap-40'>
           <div className ='flex items-center gap-6'>
			{/*Logo*/}
			<a className="text-3xl text-black  font-bold gap-8 " href="/">EasyBuy</a>

		   </div>
		   
		   <div className="flex flex-wrap items-center gap-10 flex-1">
            {/* Nav items */}
			<ul className="flex gap-14 text-gray-600 hover:text-black">
				<li><a href="/">Shop</a></li>
				<li><a href="/mens">Men</a></li>
				<li><a href="/womens">Women</a></li>
				<li><a href="/kidsp">Kids</a></li>
			</ul>
		   </div>

		   <div className="flex justify-center">
			{/* Search bar*/}
			<div className="border rounded flex overflow-hidden">
				<button className = "flex items-center justify-center px-4 border-1">
                <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24"></svg>
				<input type="text" className="px-4 py-2" placeholder="Search"></input>
				</button>
			</div>
		   </div>

		    <div>
			{/* Action items - icons*/}
		   </div>

		</nav>
	)
}

export default Navigation