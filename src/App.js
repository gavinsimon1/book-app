// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import FormInput from './FormInput';

function App() {
 

  return (
    
    <div className="App">
      <header className="App-header">
 
              <h1>Gavin's Book App</h1>
              <h2>Books I've Read</h2>
      </header>

<FormInput />
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


      <body className="App-body">
<div>
<h3>You Can Negotiate Anything - by Herb Cohen</h3>
      <p>Date read: 2023-08-02. How strongly I recommend it: 10/10</p>{" "}
      <p>
        Everything is negotiable. Challenge authority. You have the power in any
        situation. This is how to realize it and use it. A must-read classic
        from 1980 from a master negotiator. My notes here aren’t enough because
        the little book is filled with so many memorable stories — examples of
        great day-to-day moments of negotiation that will stick in your head for
        when you need them. (I especially loved the one about the power of the
        prisoner in solitary confinement.) So go buy and read the book. I’m
        giving it a 10/10 rating even though the second half of the book loses
        steam, because the first half is so crucial. Read my notes, or go to the
        Amazon page for details and reviews.
      </p>
</div>
<div>
<h3>You Can Negotiate Anything - by Herb Cohen</h3>
      <p>Date read: 2023-08-02. How strongly I recommend it: 10/10</p>{" "}
      <p>
        Everything is negotiable. Challenge authority. You have the power in any
        situation. This is how to realize it and use it. A must-read classic
        from 1980 from a master negotiator. My notes here aren’t enough because
        the little book is filled with so many memorable stories — examples of
        great day-to-day moments of negotiation that will stick in your head for
        when you need them. (I especially loved the one about the power of the
        prisoner in solitary confinement.) So go buy and read the book. I’m
        giving it a 10/10 rating even though the second half of the book loses
        steam, because the first half is so crucial. Read my notes, or go to the
        Amazon page for details and reviews.
      </p>
</div>
<div>
<h3>You Can Negotiate Anything - by Herb Cohen</h3>
      <p>Date read: 2023-08-02. How strongly I recommend it: 10/10</p>{" "}
      <p>
        Everything is negotiable. Challenge authority. You have the power in any
        situation. This is how to realize it and use it. A must-read classic
        from 1980 from a master negotiator. My notes here aren’t enough because
        the little book is filled with so many memorable stories — examples of
        great day-to-day moments of negotiation that will stick in your head for
        when you need them. (I especially loved the one about the power of the
        prisoner in solitary confinement.) So go buy and read the book. I’m
        giving it a 10/10 rating even though the second half of the book loses
        steam, because the first half is so crucial. Read my notes, or go to the
        Amazon page for details and reviews.
      </p>
</div>
<div>
<h3>You Can Negotiate Anything - by Herb Cohen</h3>
      <p>Date read: 2023-08-02. How strongly I recommend it: 10/10</p>{" "}
      <p>
        Everything is negotiable. Challenge authority. You have the power in any
        situation. This is how to realize it and use it. A must-read classic
        from 1980 from a master negotiator. My notes here aren’t enough because
        the little book is filled with so many memorable stories — examples of
        great day-to-day moments of negotiation that will stick in your head for
        when you need them. (I especially loved the one about the power of the
        prisoner in solitary confinement.) So go buy and read the book. I’m
        giving it a 10/10 rating even though the second half of the book loses
        steam, because the first half is so crucial. Read my notes, or go to the
        Amazon page for details and reviews.
      </p>
</div>
      </body>
    </div>
  );
}

export default App;