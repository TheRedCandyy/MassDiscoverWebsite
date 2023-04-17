import React from "react"
import {BsArrowRight} from "react-icons/bs"

function SearchBar() {
    const handleClickScroll = () => {
        const element = document.getElementById('searchPage');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit} className="sm:mt-8 mt-6">
                <div className="relative">
                    <input type="text" id="default-search" className="block w-full px-4 text-sm text-white border border-gray-300 rounded-lg bg-gray-900 focus:ring-white focus:border-white" placeholder="Search domain..."  required />
                    <button onClick={handleClickScroll} type="submit" className="text-white text-2xl absolute right-0 bottom-0 p-1 px-4 py-2"><BsArrowRight></BsArrowRight></button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar