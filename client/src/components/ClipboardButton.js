import React, {useState} from "react";
import ClipboardButtonTooltip from "./ClipboardButtonTooltip";
import {FaCopy} from "react-icons/fa";
import {CopyToClipboard} from 'react-copy-to-clipboard';

function ClipboardButton(props) {
    const subdomains = props.subdomains;
    const parsedSubdomains = subdomains.map(subdomain => subdomain.subdomain_name).join(`\n`);
    const [showTooltip, setShowTooltip] = useState(false);

    const handleClipboardButtonClick = () => {
        if(Object.keys(subdomains).length > 0) {
            setShowTooltip(true);
            setTimeout(() => {
                setShowTooltip(false)
            }, 5000);
        }
    };

    return (
        <div>
            <CopyToClipboard text={parsedSubdomains}>
                <button className="copyBtn mr-6 p-3 bg-gray-900 border hover:ring-4 hover:outline-none hover:ring-blue-300 rounded-lg text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleClipboardButtonClick}
                >
                    <FaCopy className="w-4 h-4"></FaCopy>
                </button>
            </CopyToClipboard>
            {showTooltip ? <ClipboardButtonTooltip></ClipboardButtonTooltip> : null}
        </div>
    );
}

export default ClipboardButton;