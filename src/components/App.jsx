import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [inputNote, setInput] = useState([]);
  function addNote(note) {
    
    setInput((prevNote) => {
      return [...prevNote, note];
    });
  }
  

  function deleteNote(id) {
   setInput(prev => {return prev.filter((val,index) => {return id !== index})});
   //instead of val we can define anything here we are mainly lokking for index 
   //as we will not be use val here for keeper App but can be used in future wherever required.
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {inputNote.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            onDel={deleteNote}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
