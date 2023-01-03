import React from "react";

const Cases = (props: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined) => {
    return(
        <div id="caseContainer">
            <h3>{props}</h3>
        </div>
    );
};

export default Cases;