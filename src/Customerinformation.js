import React from "react";

const Customerinformation = (props) => {
    const {info} = props;
    return(

        <div className="name">
            <h1>Customer Information:</h1>
            <h4>First Name : {info.firstName}</h4>
            <h4>Last Name : {info.lastName}</h4>
        </div>

    );
}

export default Customerinformation;