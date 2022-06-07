import React from "react";
import Examples from "./Examples";
export default function Meaning(props){
    
    return <div className="meanings"> 

        <h3>{props.meaning.partOfSpeech}</h3>
        <h3>{props.meaning.synonyms}</h3>
        {props.meaning.definitions.map(function(definition,index){
            return (
                <div key={index}>
                    <p><strong>Definition:</strong>
                        {definition.definition}
                        <br />
                        <Examples examples={definition.example}/>
                    </p>
                </div>
            )
        })}
    </div>
}