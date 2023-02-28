import React from "react"
import {FaGithub} from "react-icons/fa"

function Navbar() {
    return (
        <nav class="px-2 sm:px-4 py-2.5">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <a href="#" class="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MassDiscover</span>
                </a>
                <ul class="flex flex-col">
                <li>
                    <a href="https://github.com/TheRedCandyy/MassDiscoverWebsite" class="block py-2 sm:pl-3 sm:pr-4 px-0"><FaGithub className="h-8 w-8"/></a>
                </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar