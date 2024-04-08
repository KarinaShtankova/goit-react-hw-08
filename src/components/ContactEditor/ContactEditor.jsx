import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

import css from './ContactEditor.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function ContactEditor({
  contact: { name, number, id },
  onClose,
}) {
  const dispatch = useDispatch();

  const initialValues = {
    name,
    number,
  };

  const successEdited = contact => {
    onClose();
    toast.success(`${contact.name} successfully edited!`);
  };

  const handleSubmit = values => {
    const editData = {
      id,
      values,
    };
    dispatch(updateContact(editData)).unwrap().then(successEdited);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label className={css.label}>
            <IoPersonSharp className={css.icon} size="20" />
            <Field className={css.input} type="text" name="name" />
          </label>
          <ErrorMessage className={css.error} name="name" component="span" />
          <label className={css.label}>
            <FaPhoneAlt className={css.icon} size="20" />
            <Field className={css.input} type="tel" name="number" />
          </label>
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <div className={css.btnBox}>
          <button className={css.btn} type="submit">
            Save
          </button>
          <button className={css.btn} type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
}
