import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
       setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }
    
    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "rwmebVYHobFNsglGn6PXgL5ccHxj35tKtkyiPZr5mrrpusjHd7ULPyxa";
        let pexelsApiUrl = `http://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
        let headers = { Authorization: `Bear ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault(); 
        search();    
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
    return (<div className="Dictionary">
        <section>
            <h5>What word do you want to look up?</h5>
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} 
            defaultValue={props.defaultKeyword} />
        </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
    </div>
    );
} else {
    load();
    return "loading";
}
}