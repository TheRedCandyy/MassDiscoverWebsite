import React from "react";
import ClipboardButton from "./ClipboardButton";

function DomainsTable(props) {
    let subdomains = [];
    subdomains = props.reqResponseData.subdomains ? props.reqResponseData.subdomains : [];

    return (
        <div>
            <ul className="sm:mt-5 h-screen overflow-y border-2 bg-gray-900 mb-6 overflow-auto h-75vh">
                <div className="flex justify-between border-b-2 py-5">
                    <li key="header" className="font-bold pl-6">
                        Subdomain name
                    </li>
                    <ClipboardButton subdomains={subdomains}></ClipboardButton>
                </div>
                {subdomains.map((subdomain) => (
                    <li key={subdomain.subdomain_name} className="flex justify-between py-3 ml-6">
                        {subdomain.subdomain_name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DomainsTable;