import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

export default function ContactList({ setSelectedContactId }) {
  //state for storing contact data
  const [contacts, setContacts] = useState([]);

  //fetch contacts list when component loads
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        //store fetched contacts in state
        setContacts(result); 
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">📋 Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Name</strong></td>
          <td><strong>Email</strong></td>
          <td><strong>Phone</strong></td>
        </tr>
        {contacts.map((contact) => (
          <ContactRow 
            key={contact.id} 
            contact={contact} 
            setSelectedContactId={setSelectedContactId} 
          />
        ))}
      </tbody>
    </table>
  );
}
