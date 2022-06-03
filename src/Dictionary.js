import React, { useState }  from "react";
import "./Dictionary.css"


export default function Dictionary(){

    let [keyword, setKeyword]= useState("")
    
    function search(e){
        e.preventDefault()
        alert(`searching for ${keyword}`)
    }

    function handleKeyword(e){
        setKeyword(e.target.value)
    }

    return (
      <div className="dictionary">
        <form onSubmit={search}>
          <label for="search">Search for a Word </label>
          <input type="search" id="search" onChange={handleKeyword}/>
        </form>
      </div>
    );
}