import { Formik, Form, Field } from 'formik';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

export default function LoginForm() {
  const dispatch = useDispatch();

  const initialValues = {
    password: '',
    email: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}