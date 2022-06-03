import React, { useState }  from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results";


export default function Dictionary(){

    let [keyword, setKeyword]= useState("")
    let [result, setResult]=useState(null)
    
    function handleResponse(res){
      setResult(res.data[0]);
    }

    function search(e){
      e.preventDefault()
      //documentation:https://api.dictionaryapi.dev/
      let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;    
      axios.get(apiUrl).then(handleResponse)
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
        <Results results={result}/>
      </div>
    );
}