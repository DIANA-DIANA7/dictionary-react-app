import React, { useState }  from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results";
import Photos from "./Photos"


export default function Dictionary(props){

    let [keyword, setKeyword]= useState(props.default)
    let [result, setResult]=useState(null)
    let [loaded,setLoaded]=useState(false)
    let [photos, setPhotos]=useState(null)

    function handleResponse(res){
      setResult(res.data[0]);
    }

    function handlePexelsResponse(res){
      setPhotos(res.data.photos)
    }

    function search(){
      //documentation:https://api.dictionaryapi.dev/
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
      axios.get(apiUrl).then(handleResponse);
      
      const pexelsApiKey ="563492ad6f91700001000001b3f705014f614ffb9bcbcfeffefdb0e5";
      const pexelsApiUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
      const headers={Authorization: `Bearer ${pexelsApiKey}`} 
      axios.get(pexelsApiUrl,{headers:headers}).then(handlePexelsResponse);
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
              <label for="search">What word do you want to look up?</label>
              <input type="search" id="search" defaultValue={props.default} onChange={handleKeyword} />
            </form>
            <div className="hint">suggested words: sunset, rain, flowers...</div>
          </section>
          <Results results={result} />
          <Photos photos={photos} />
        </div>
      );
    }else{
      load()
        return "loading"
    }
}