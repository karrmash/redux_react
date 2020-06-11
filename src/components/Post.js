import React from "react";

export default ({post})=>{
    const {title} = post;
    return (
        <div className={"card"}>
            <div className={"card-body"}>
                <h1 className={"card-title"}>{title}</h1>
            </div>
        </div>
    )
}