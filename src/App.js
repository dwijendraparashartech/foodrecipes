import React, {useState,useEffect} from "react";
import './App.css';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";
// var cors = require('cors');


function App() {


  const[search,setSearch]= useState("chiken");
  const[recipes,setRecipes]= useState([]);

  const APP_ID = "1cc33170";
  const APP_KEY = "8cbcfd53b5ece81de87357741323e644";

  useEffect(()=>{
     getRecipes();
    },[]);

    const getRecipes = async()=>{
      const res = await Axios.get(
        'https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}'
      );
      setRecipes(res.data.hits);
    }
  const onInputChange = e => {
    setSearch(e.target.value)  
  };

  const onSearchClick=()=>{
    getRecipes();
  }
  return (
    <div className="App">
        <Header 
        search={search} 
        onInputChange={onInputChange} 
        onSearchClick={onSearchClick} 
        />
        <div className="container">
          <Recipes recipes={recipes} />
        </div>
    </div>
  );
}

export default App;
