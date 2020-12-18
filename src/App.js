import React, {useState,useEffect} from "react";
import './App.css';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";


function App() {


  const[search,setSearch]= useState("chiken");
  const[recipes,setRecipes]= useState([]);

  const APP_ID = "f309272e";
  const APP_KEY = "fec590c68b6141761844028513175c47";

  useEffect(async ()=>{
     getRecipes();
    },[]);

    const getRecipes = async()=>{
      const res = await Axios.get(
        'https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}'
      );
      setRecipes(res.data.hits);
    }
  const onInputChange = e => {
    setSearch(e.target.value)  }
  return (
    <div className="App">
        <Header search={search} onInputChange={onInputChange} />
        <div className="container">
          <Recipes recipes={recipes} />
        </div>
    </div>
  );
}

export default App;
