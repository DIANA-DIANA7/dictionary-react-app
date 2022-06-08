import React from "react";
import Examples from "./Examples";
import "./Meaning.css"

export default function Meaning(props){
    
    return (
        <div className="meanings"> 

        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition,index){
            return (
              <div key={index}>
                <div className="definition">{definition.definition}</div>
               
                <Examples examples={definition.example} />
                <br />
              </div>
            );
        })}
        </div>
    )
}