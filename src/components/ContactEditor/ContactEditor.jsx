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
      <Form>
        <label>
          <IoPersonSharp size="20" />
          <Field type="text" name="name" />
        </label>{' '}
        <ErrorMessage className={css.error} name="name" component="span" />
        <label>
          <FaPhoneAlt size="20" />
          <Field type="tel" name="number" />
        </label>{' '}
        <ErrorMessage className={css.error} name="number" component="span" />
        <button type="submit">Save</button>
      </Form>
    </Formik>
  );
}
