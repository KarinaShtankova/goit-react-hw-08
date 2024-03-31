import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '..//../redux/contactsSlice';
import Contact from '../Contact/Contact';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
