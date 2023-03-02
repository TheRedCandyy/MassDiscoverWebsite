import React from "react"
import {BsArrowRight} from "react-icons/bs"

function LandingText() {
    return (
        <div className="sm:container sm:mx-auto text-center mx-5 sm:w-1/2 sm:mt-32 mt-16 pb-10">
            <h1 className="text-3xl sm:text-4xl font-black ">
                Lorem impsum
            </h1>
            <p className="sm:mt-8 mt-6">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            <form className="sm:mt-8 mt-6">
                <div class="relative">
                    <input type="text" id="default-search" class="block w-full px-4 text-base text-white border border-gray-300 rounded-lg bg-gray-900 focus:ring-white focus:border-white" placeholder="Search domain..."  required />
                    <button type="submit" class="text-white text-2xl absolute right-0 bottom-0 p-1 px-4 py-2"><BsArrowRight></BsArrowRight></button>
                </div>
            </form>
        </div>
    );
}

export default LandingText