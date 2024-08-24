import { useState } from 'react';
// import { db } from './index'; // Make sure to update the import path accordingly

const FormInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = async (event) => {
    setInputValue(event.target.value);
    // await db.ref('answers/').push(inputValue);
  };

function FormInput() {
    return (
        <div>
          <form className="App-form">
            <label class="App-form-label">
              <h3>Book Title</h3><input type="text" id="book" name="book" />
    //        <h3>Date Read</h3><input id="date"  type="date" name="date" />
    //     <h3> How strongly I recommend it</h3>
            <select name="ratings" id="rating">     
    //       <option value="10">10</option>
    //     <option value="9">9</option>
    //     <option value="8">8</option>
    //     <option value="7">7</option>
    //     <option value="6">6</option>
    //     <option value="5">5</option>
    //     <option value="4">4</option>
    //     <option value="3">3</option>
    //     <option value="2">2</option>
    //     <option value="1">1</option>
    </select>
    <input class="App-form-input" type="submit" value="Submit" />
            </label>
          </form>
          <div>Book Title: </div>
          <div>Date Read: </div>
          <div>Rating: {inputValue}</div>
          <div>What I Learned: </div>
        </div>
      );
}
}


export default FormInput;
