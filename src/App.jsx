import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

export default function App() {
  //state to track which contact is selected
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        //if contact is selected show their details
        <SelectedContact 
          selectedContactId={selectedContactId} 
          setSelectedContactId={setSelectedContactId} 
        />
      ) : (
        //otherwise show full contact list
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

