import React from "react"
import InfoText from "./InfoText"
import GoBackButton from "./GoBackButton";
import DomainsTable from "./DomainsTable"

function SearchPage(props) {
    return (
        <div className="container mx-auto">
            <div className="hidden sm:grid sm:grid-flow-col gap-4">
                <div className="col-span-2">
                    <InfoText reqResponseData={props.reqResponseData}></InfoText>
                </div>
                <div className="col-span-4">
                    <GoBackButton></GoBackButton>
                    <DomainsTable reqResponseData={props.reqResponseData}></DomainsTable>
                </div>
            </div>
            <div className="block sm:hidden">
                <div className="flex justify-between">
                    <InfoText reqResponseData={props.reqResponseData}></InfoText>
                    <GoBackButton></GoBackButton>
                </div>
                <div className="sm:container sm:mt-14 mx-6 mt-10">
                    <DomainsTable reqResponseData={props.reqResponseData}></DomainsTable>
                </div>
            </div>
        </div>
    );
}

export default SearchPage