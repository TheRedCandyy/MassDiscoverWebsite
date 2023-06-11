import React from "react";

function DomainsTable(props) {
    let subdomains = [];
    subdomains = props.reqResponseData.subdomains ? props.reqResponseData.subdomains : [];

    return (
        <div>
            <ul className="sm:mt-5 h-screen overflow-y border-2 bg-gray-900 mb-6 overflow-auto h-75vh">
                <li key="header" className="flex justify-between py-5 font-bold pl-6 border-b-2">
                    Subdomain name
                </li>
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