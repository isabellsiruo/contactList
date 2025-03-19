//import CSS file for styling
import "./App.css"; 
//import useState to manage selected contact
import { useState } from "react"; 
//import ContactList component
import ContactList from "./components/ContactList"; 
//import SelectedContact component
import SelectedContact from "./components/SelectedContact"; 

export default function App() {
  //state variable to track which contact is selected
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {/* conditionally render either ContactList or SelectedContact based on selectedContactId */}
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}
