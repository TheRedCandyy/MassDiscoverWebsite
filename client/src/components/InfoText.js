import React from "react"

function InfoText(props) {
    console.log(props);
    return (
        <div className="sm:container sm:mt-14 sm:ml-28 ">
            <p className="text-3xl sm:text-3xl sm:mb-5">
                Searched domain: <span className="font-black ml-1">{props.reqResponseData.query}</span>
            </p>
            <p className="text-base">
                Number of subdomains found: <span className="font-black ml-1">{props.reqResponseData.subdomains.length}</span>
            </p>
        </div>
    );
}

export default InfoText