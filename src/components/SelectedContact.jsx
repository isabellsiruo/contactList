import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  //fetch detailed info about selected contact
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        //save contact details in state
        setContact(result); 
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
    //runs when selectedContactId changes
  }, [selectedContactId]); 

  return (
    <div>
      {contact ? (
        <>
          <h2>Contact Details</h2>
          <p>
            <strong>Name:</strong> {contact.name}
          </p>
          <p>
            <strong>Email:</strong> {contact.email}
          </p>
          <p>
            <strong>Phone:</strong> {contact.phone}
          </p>
          <p>
            <strong>Address:</strong> {contact.address.street},{" "}
            {contact.address.city}
          </p>
          {/* button to go back to list */}
          <button onClick={() => setSelectedContactId(null)}>Back</button>
        </>
      ) : (
        //shows while data is loading
        <p>Loading...</p> 
      )}
    </div>
  );
}
