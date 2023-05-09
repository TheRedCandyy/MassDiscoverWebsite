import React from "react"
import {FaGithub} from "react-icons/fa"

function Navbar(props) {
    const handleLogoClick = () => {
        const element = document.getElementById('landingPage');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav id={props.dataScreen} className="px-2 sm:px-4 py-2.5">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <button onClick={handleLogoClick} className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MassDiscover</span>
                </button>
                <ul className="flex flex-col">
                <li>
                    <a href="https://github.com/TheRedCandyy/MassDiscoverWebsite" className="block py-2 sm:pl-3 sm:pr-4 px-0"><FaGithub className="h-8 w-8"/></a>
                </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar