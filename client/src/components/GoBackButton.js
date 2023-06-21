import React from "react"

function GoBackButton(props) {
    const handleGoBack = (e) => {
        e.preventDefault();

        //Scrolls left
        const element = document.getElementById('landingPage');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="sm:mr-0 sm:mt-14 sm:w-max sm:ml-auto mr-6 mt-10">
            <button type="button" onClick={handleGoBack} className="text-white bg-gray-900 border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm pl-1 pr-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <span className="hidden sm:block ml-2">Go Back</span>
                <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        </div>
    );
}

export default GoBackButton
