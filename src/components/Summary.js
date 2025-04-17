import React from "react"

function Summary({summary, rainMessage}) {

    return (
        <div className="summary">
                <p>{summary}. {rainMessage}</p>
        </div>
    );
}

export default Summary;