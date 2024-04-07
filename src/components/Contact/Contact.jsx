import css from './Contact.module.css';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { useState } from 'react';
import DeleteModal from '../DeleteModal/DeleteModal';

export default function Contact({ contact, contact: { name, number } }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleDelete = () => setIsOpen(true);

  function closeModal() {
    setIsOpen(false);
  }

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
      {modalIsOpen && (
        <DeleteModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contact={contact}
        />
      )}
    </div>
  );
}
