import React from "react"
import SearchBar from "./SearchBar"

function LandingText() {
    return (
        <div className="sm:container sm:mx-auto text-center mx-5 sm:w-1/2 sm:mt-32 mt-16 pb-10">
            <h1 className="text-3xl sm:text-4xl font-black ">
                Lorem impsum
            </h1>
            <p className="sm:mt-8 mt-6">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            <SearchBar></SearchBar>
        </div>
    );
}

export default LandingText