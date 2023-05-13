import React from "react"

function InfoText(props) {
    console.log(props);
    return (
        <div className="sm:container sm:mt-14 sm:ml-28 ml-6 mt-10">
            <p className="text-2xl mb-2 sm:text-3xl sm:mb-5">
                <span className="hidden sm:block">Searched domain:<span className="font-black sm:ml-2">{props.reqResponseData.query}</span></span> <span className="sm:hidden font-black sm:ml-1">{props.reqResponseData.query}</span>
            </p>
            <p className="text-base">
                Num of subdomains found: <span className="font-black ml-1">{props.reqResponseData.subdomains?.length}</span>
            </p>
        </div>
    );
}

export default InfoText