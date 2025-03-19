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

    //prevent error by checking if contact is null before accessing properties
    if (!contact) return <p>Loading contact details...</p>;

  return (
    <div>
      <h2>{contact.name}</h2>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Username:</strong> {contact.username}</p>
      <p><strong>Website:</strong> {contact.website}</p>
      <p><strong>Company:</strong> {contact.company.name}</p>
      <p><strong>Address:</strong> {contact.address.street}, {contact.address.city}</p>

      {/* Button to go back to full contact list */}
      <button onClick={() => setSelectedContactId(null)}>Return to Contact List</button>
    </div>
  );
}
