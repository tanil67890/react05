import './App.css';
import Home from './components/Home';
import AddRecipe from './components/AddRecipe';
import { useNavigate } from 'react-router'
import items from './data';
import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const [itemsList, setItemsList] = useState(items)
  const addRecipe = (recipeToAdd) => {
    setItemsList(itemsList.concat([recipeToAdd]));
    console.log(itemsList.concat([recipeToAdd]));
  }
  const removeItem = (itemToRemove) => {
    setItemsList(itemsList.filter(a => a!== itemToRemove))
  }
  return (

      <Routes>
        <Route exact path="/" element={<Home onRemove={removeItem}  items={itemsList}/>} />
        <Route path="/addRecipe" element={<AddRecipe
      onAddRecipe={(newRecipe) => {
        addRecipe(newRecipe);
        navigate('/');
      }}
    />} />
        </Routes>
  );
}

export default App;
