import React, { useState }  from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results";


export default function Dictionary(props){

    let [keyword, setKeyword]= useState(props.default)
    let [result, setResult]=useState(null)
    let [loaded,setLoaded]=useState(false)
    
    function handleResponse(res){
      setResult(res.data[0]);
    }
    function search(){
      //documentation:https://api.dictionaryapi.dev/
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
      axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit(e){
      e.preventDefault()
      search();
      }

    function handleKeyword(e){
      setKeyword(e.target.value)
    }

    function load(){
      setLoaded(true)
      search()
    }

    if(loaded){
      return (
        <div className="dictionary">
          <section>
            <form onSubmit={handleSubmit}>
              <label for="search">Search for a Word </label>
              <input type="search" id="search" onChange={handleKeyword} />
            </form>
            <div className="hint">suggested words: sunset, rain, flowers...</div>
          </section>
          <Results results={result} />
        </div>
      );
    }else{
      load()
        return "loading"
    }
}