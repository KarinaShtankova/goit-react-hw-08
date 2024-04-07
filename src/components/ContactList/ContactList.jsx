import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

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
