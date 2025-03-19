//import hooks for state and side effects
import { useState, useEffect } from "react"; 
//import ContactRow component
import ContactRow from "./ContactRow"; 

export default function ContactList({ setSelectedContactId }) {
  //state variable to store list of contacts
  const [contacts, setContacts] = useState([]);

  //fetch contact list when component first loads
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
        console.error(error);
      }
    }
    fetchContacts();
    //empty dependency array means this runs only once when component mounts
  }, []); 

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {/* loop through contacts and create row for each one */}
        {contacts.map((contact) => (
          <ContactRow
            //unique key for each row
            key={contact.id} 
            //pass contact data as prop
            contact={contact} 
            //passing function to update selected contact
            setSelectedContactId={setSelectedContactId} 
          />
        ))}
      </tbody>
    </table>
  );
}
