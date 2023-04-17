import React, {useState} from "react"
import {BsArrowRight} from "react-icons/bs"

function SearchBar(props) {
    const [reqResponse, setReqResponse] = useState({});
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        //Hides textbox shows loading
        document.getElementById('loading').classList.remove("hidden");
        document.getElementById('loading').classList.add("inline-block");
        document.getElementById('searchForm').classList.add("hidden");

        const textboxInput = document.getElementById('defaultSearch').value;

        await fetch("/api/v1/subdomains/domain?domain=" + textboxInput)
            .then((res) => res.json())
            .then((data) => {document.getElementById('defaultSearch').value = ""; setReqResponse(data)})
            .catch((err) => console.log(err.message));

        //Hides loading shows textbox
        document.getElementById('loading').classList.remove("inline-block");
        document.getElementById('loading').classList.add("hidden");
        document.getElementById('searchForm').classList.remove("hidden");

        //Scrolls right
        const element = document.getElementById('searchPage');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className="hidden lds-ellipsis" id="loading"><div></div><div></div><div></div><div></div></div>
            <form onSubmit={handleFormSubmit} className="sm:mt-8 mt-6" id="searchForm">
                <div className="relative">
                    <input type="text" id="defaultSearch" className="block w-full px-4 text-sm text-white border border-gray-300 rounded-lg bg-gray-900 focus:ring-white focus:border-white" placeholder="Search domain..."  required />
                    <button type="submit" className="text-white text-2xl absolute right-0 bottom-0 p-1 px-4 py-2"><BsArrowRight></BsArrowRight></button>
                </div>
            </form>
            {props.handleResRequestData(reqResponse)}
        </div>
    );
}

export default SearchBar