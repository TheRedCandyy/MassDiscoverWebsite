import React from "react"

function InfoText(props) {
    const domainSearched = props.reqResponseData.query;
    const subdomainTotal = props.reqResponseData.subdomains?.length
    return (
        <div className="sm:container sm:mt-14 sm:ml-28 ">
            <p className="text-3xl sm:text-3xl sm:mb-5">
                Searched domain: <span className="font-black ml-1">{domainSearched}</span>
            </p>
            <p className="text-base">
                Number of subdomains found: <span className="font-black ml-1">{subdomainTotal ?  subdomainTotal : null}</span>
            </p>
        </div>
    );
}

export default InfoText