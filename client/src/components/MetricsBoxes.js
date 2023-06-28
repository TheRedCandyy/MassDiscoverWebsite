import React from "react"

function MetricsBoxes(props) {
    let totalDomains = 0,
        totalSubdomains = 0;
    if (props.metricsData) {
        totalDomains = props.metricsData.totalDomains;
        totalSubdomains = props.metricsData.totalSubdomains;
    }
    return (
        <div className="flex flex-col sm:flex-row  justify-center sm:mt-32 mt-32 sm:pt-6  pb-10">
            <div className="sm:mx-8 mx-20 sm:basis-40 basis-36 blue-shadow-mobile sm:blue-shadow-desktop">
                <h1 className="block max-w-sm px-6 py-4 bg-zinc-900 border border-gray-400 rounded-lg shadow">
                    <p className="mb-2 text-2l font-bold tracking-tight text-white text-center">Domains</p>
                    <p className="font-normal text-white text-center">{totalDomains ? totalDomains : "Loading..."}</p>
                </h1>
            </div>
            <div className="sm:mx-8 mx-20 sm:basis-40 basis-36 blue-shadow-mobile sm:blue-shadow-desktop">
                <h1 className="block max-w-sm px-6 py-4 bg-zinc-900 border border-gray-400 rounded-lg shadow">
                    <p className="mb-2 text-2l font-bold tracking-tight text-white text-center">Sub-Domains</p>
                    <p className="font-normal text-white text-center">{totalSubdomains ? totalSubdomains : "Loading..."}</p>
                </h1>
            </div>
        </div>
    );
}

export default MetricsBoxes