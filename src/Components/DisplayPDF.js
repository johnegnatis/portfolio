import React from "react";

function DisplayPDF({pdf}) {
    return <div>
                <a href= {pdf}
                className="text-secondary text-center underline">
                    Link to the PDF
                </a>
            </div>
}

export default DisplayPDF;