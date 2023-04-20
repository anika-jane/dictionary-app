import React from "react";

export default function Synonyms(props) {
    if (props.synonyms){
        return (
            <ul className="synonyms">
            {props.synonyms.map(function (synonyms, index){
                return <li><span key={index}>{synonyms}</span></li>;
            })}
            </ul>
        );
} else {
    return null;
}
}
