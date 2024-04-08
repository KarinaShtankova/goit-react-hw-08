import { Formik, Form, Field } from 'formik';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const successRegister  = ({user}) => {
    toast.success(`${user.name} your account successfully created!`);
  };


  const handleSubmit = (values, actions) => {
    dispatch(register(values)).unwrap().then(successRegister).catch(toast.error("Oops! Something went wrong. Please try again"));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
