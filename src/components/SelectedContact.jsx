import { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [selectedContact, setSelectedContact] = useState(null);

  //fetch details for selected contact
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        //store contact details in state
        setSelectedContact(result); 
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    }
    fetchContact();
  }, [selectedContactId]);

  //prevent app from crashing while data is being fetched
  if (!selectedContact) return <p>Loading contact details...</p>;

  return (
    <div>
      <h2>📞 Contact Details: {selectedContact.name}</h2>
      <p><strong>Email:</strong> {selectedContact.email}</p>
      <p><strong>Phone:</strong> {selectedContact.phone}</p>
      <p><strong>Username:</strong> {selectedContact.username}</p>
      <p><strong>Website:</strong> {selectedContact.website}</p>
      <p><strong>Company:</strong> {selectedContact.company?.name}</p>
      <p><strong>Address:</strong> {selectedContact.address?.street}, {selectedContact.address?.city}</p>

      {/* button to return to contact list */}
      <button 
        onClick={() => setSelectedContactId(null)} 
        style={{ backgroundColor: "lightblue", padding: "10px", borderRadius: "5px" }}
      >
        ⬅ Return to Contact List
      </button>
    </div>
  );
}

