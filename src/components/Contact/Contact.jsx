import css from './Contact.module.css';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { PiPencilSimpleLine } from 'react-icons/pi';
import { GoTrash } from 'react-icons/go';
import { useEffect, useState } from 'react';
import DeleteModal from '../DeleteModal/DeleteModal';
import Modal from 'react-modal';
import ContactEditor from '../ContactEditor/ContactEditor';

export default function Contact({ contact, contact: { name, number } }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const handleEdit = () => setIsEditing(true);
  const handleClose = () => setIsEditing(false);
  const handleDelete = () => setIsOpen(true);
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={css.container}>
      {isEditing ? (
        <ContactEditor contact={contact} onClose={handleClose} />
      ) : (
        <>
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
          <div className={css.btnBox}>
            <button
              className={css.btnEdit}
              onClick={handleEdit}
              aria-label="Edit contact"
            >
              <PiPencilSimpleLine size="20" />
            </button>
            <button
              className={css.btnDelete}
              onClick={handleDelete}
              aria-label="Delete contact"
            >
              <GoTrash size="20" />
            </button>
          </div>
        </>
      )}

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
