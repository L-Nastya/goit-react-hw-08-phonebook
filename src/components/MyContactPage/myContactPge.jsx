import Section from "../Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "../Filter/Filter";
import Loader from "../loader/loader";
import styled from "styled-components";


import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { addContact, deleteContact, fetchContacts} from "../../redux/contacts/contacts-operations";
import { changeFilter } from "../../redux/filter/filter-actions"; 
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors"; 
import { getFilter } from "../../redux/filter/filter-selector";
import { getLoader } from "../../redux/loader/loader-selector";

const MyContactPage = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const loader = useSelector(getLoader);

    const dispatch = useDispatch();
  
  useEffect(() => {
        dispatch(fetchContacts())
   }, [dispatch]);
  
  const newContact = (name, number) => {
    const action = addContact({name, number});
    dispatch(action)
  }
 
  const removeContact = (payload) => {
    dispatch(deleteContact(payload));
  };

 const textFilter = ({target}) => {
        dispatch(changeFilter(target.value))
    }
    return (
    <SectionStyle>
    <Section title="PhoneBook">
          <ContactForm onSubmit={newContact} contacts={contacts} />
       </Section>
        <Section title="Contacts">
          <Filter
            value={filter}
            onChange={textFilter}
          />
          {loader && <Loader/>}
         <ContactList
            contacts={contacts}
            onDelete={removeContact}
           />
        </Section>
      </SectionStyle>
)
}

const SectionStyle = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 15px;
  margin: 70px auto;
  box-shadow:  0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
  background-color: #ebdacf;

`;
export default MyContactPage;