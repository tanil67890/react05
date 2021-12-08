import React, {useState} from 'react'
import './addRecipe.css'

const AddRecipe = (props) => {

    const [inputList, setInputList] = useState([
            {name: "ingredient-1"},
            {name: "ingredient-2"},
            {name: "ingredient-3"},
            {name: "ingredient-4"},
        ]);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const newRecipe = {
            id: +event.target.elements.id.value,
            name: event.target.elements.name.value,
            category: event.target.elements.category.value,
            price: event.target.elements.price.value,
            procedure: event.target.elements.procedure.value,
            img: event.target.elements.image.value,
            ingredients: [event.target.elements.ingredient1.value, event.target.elements.ingredient2.value, event.target.elements.ingredient3.value, event.target.elements.ingredient4.value, event.target.elements.ingredient5.value]
        }
        props.onAddRecipe(newRecipe);
    }

    const add = () => {
        setInputList([...inputList, {name:""}]);
    }
    return <div className="addRecipe">
         <h2>Add new Recipe</h2> 
         <form onSubmit={handleSubmit} className="form">
             <input name="id" placeholder="id" type="text" />
             <input name="name" placeholder="name" type="text" />
             <input name="category" placeholder="category" type="text" />
             <input name="price" placeholder="price" type="text" />
             <input name="procedure" placeholder="procedure" type="text" />
             <input name="image" placeholder="image" type="text" />
             <input name="ingredient1" placeholder="ingredient1" type="text" />
             <input name="ingredient2" placeholder="ingredient2" type="text" />
             <input name="ingredient3" placeholder="ingredient3" type="text" />
             <input name="ingredient4" placeholder="ingredient4" type="text" />
             <input name="ingredient5" placeholder="ingredient5" type="text" />
             <button className="saveBtn">SAVE</button>
         </form>
         </div>
}

export default AddRecipe