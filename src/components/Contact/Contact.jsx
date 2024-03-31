import css from './Contact.module.css';

import { useDispatch } from 'react-redux';
// import { deleteContact } from '..//../redux/contactsSlice';
import { deleteContact } from '..//../redux/contactsOps';

import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.container}>
      <ul>
        <li className={css.item}>
          <IoPersonSharp size="20" />
          <p>{name}</p>
        </li>
        <li className={css.item}>
          <FaPhoneAlt size="20" />
          <p>{number}</p>
        </li>
      </ul>

      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
