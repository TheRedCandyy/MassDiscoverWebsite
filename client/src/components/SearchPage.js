import React from "react"
import InfoText from "./InfoText"
import GoBackButton from "./GoBackButton";

function SearchPage(props) {
    
    return (
        <div className="flex justify-between">
           
            <InfoText reqResponseData={props.reqResponseData}></InfoText>
            <GoBackButton></GoBackButton>
            
        </div>
    );
}

export default SearchPage