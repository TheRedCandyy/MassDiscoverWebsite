import React from "react"
import {BsArrowRight} from "react-icons/bs"

function MetricsBoxes() {
    return (
        <div className="flex justify-center sm:mt-32 mt-16 pt-6 pb-10">
            <div className="mx-8 basis-40">
                <p class="block max-w-sm px-6 py-4 bg-gray-900 border border-gray-400 rounded-lg shadow">
                    <h5 class="mb-2 text-2l font-bold tracking-tight text-white text-center">Domains</h5>
                    <p class="font-normal text-white text-center">4.321</p>
                </p>
            </div>
            <div className="mx-8 basis-40">
                <p class="block max-w-sm px-6 py-4 bg-gray-900 border border-gray-400 rounded-lg shadow">
                    <h5 class="mb-2 text-2l font-bold tracking-tight text-white text-center">Sub-Domains</h5>
                    <p class="font-normal text-white text-center">182.431</p>
                </p>
            </div>
        </div>
    );
}

export default MetricsBoxes