import React from "react"
import InfoText from "./InfoText"

function SearchPage(props) {
    return (
        <div className="">
            <InfoText reqResponseData={props.reqResponseData}></InfoText>
        </div>
    );
}

export default SearchPage