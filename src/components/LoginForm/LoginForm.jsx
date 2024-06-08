import { Formik, Form, Field } from 'formik';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

export default function LoginForm() {
  const dispatch = useDispatch();

  const initialValues = {
    password: '',
    email: '',
  };

  const successLoggedIn = ({ user }) => {
    toast.success(`${user.name} your account successfully LoggedIn!`);
  };

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values)).unwrap().then(successLoggedIn);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
        </label>
        <button className={css.btn} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
}
