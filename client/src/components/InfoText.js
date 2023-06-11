import React from "react"

function InfoText(props) {
    const domainSearched = props.reqResponseData.query;
    const subdomainTotal = props.reqResponseData.subdomains?.length
    return (
        <div className="sm:container sm:mt-14 ml-6 mt-10">
            <p className="text-2xl mb-2 sm:text-3xl sm:mb-5">
                <span className="hidden sm:block">Searched domain:<span className="font-black sm:ml-2">{domainSearched}</span></span> <span className="sm:hidden font-black sm:ml-1">{domainSearched}</span>
            </p>
            <p className="text-base">
                Num of subdomains found: <span className="font-black ml-1">{subdomainTotal ?  subdomainTotal : 0}</span>
            </p>
        </div>
    );
}

export default InfoText