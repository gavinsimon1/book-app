import './App.css';
import React, { useState } from 'react';


function App() {
  const [currentBook, setCurrentBook] = useState(null);
  const [bookTitle, setBookTitle] = useState('');
  const [dateRead, setDateRead] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
  
    const newBook = {
      title: bookTitle,
      dateRead: dateRead,
      rating: rating,
      description: description
    };
  
    // Convert the newBook object to a JSON string
    const jsonString = JSON.stringify(newBook);
  
    // Store the JSON string in localStorage
    localStorage.setItem('books', jsonString);
  
    setCurrentBook(newBook);
  };

  return (
    <div className="App">
      <header className="App-header">
              <h1>Gavin's Book App</h1>
              <h2>Books I've Read</h2>
            <form className="App-form" onSubmit={handleSubmit}>
            <label class="App-form-label">
              <h3>Book Title</h3><input type="text" id="book" name="book" value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)} />
     <h3>Date Read</h3><input
              id="date"
              type="date"
              name="date"
              value={dateRead}
              onChange={(e) => setDateRead(e.target.value)}
            />
    <h3> How strongly I recommend it</h3>
    <select name="ratings" id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>    
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
    <h3>Description</h3><textarea id="description" name="description" value={description}
              onChange={(e) => setDescription(e.target.value)} />
    <input class="App-form-input" type="submit" value="Submit" />
            </label>
          </form>
      </header>

      <body className="App-body">
<div>
{currentBook && (
    <div>
      <h3>{currentBook.title}</h3>
      <p>Date read: {currentBook.dateRead}. How strongly I recommend it: {currentBook.rating}/10</p>
      <p>{currentBook.description}</p>
    </div>
  )}
</div>
</body>
</div>
  );
}

export default App;