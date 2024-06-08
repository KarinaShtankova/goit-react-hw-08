import css from './DeleteModal.module.css';
import Modal from 'react-modal';
import { FaPersonCircleExclamation } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

export default function DeleteModal({
  isOpen,
  onRequestClose,
  contact: { name, id },
}) {
  const dispatch = useDispatch();
  const handleDelete = () =>
    dispatch(deleteContact(id))
      .unwrap()
      .then(toast.success(`${name} successfully deleted!`));

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={css.Modal}
        overlayClassName={css.Overlay}
        contentLabel="Modal window for delete contact"
      >
        <FaPersonCircleExclamation className={css.icon} size={128} />
        <h2 className={css.title}>Are you sure?</h2>
        <b className={css.text}>
          <span className={css.span}>{name} </span> will be delete immediately.
          <br /> You can&apos;t undo this action.
        </b>
        <div className={css.container}>
          <button className={css.btnCancel} onClick={onRequestClose}>
            Cancel
          </button>
          <button className={css.btnDelete} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </Modal>
    </div>
  );
}
