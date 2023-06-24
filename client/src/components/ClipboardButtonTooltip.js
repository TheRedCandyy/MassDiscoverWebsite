import React from "react";

function ClipboardButtonTooltip() {
    return (
        <div>
            <div className="absolute copied-to-clipboard w-48 bg-green-500 text-center border-2 rounded-xl font-bold mb-4 py-3">Copied to clipboard</div>
        </div>
    );
}

export default ClipboardButtonTooltip;