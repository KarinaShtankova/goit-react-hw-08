import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Register your account</h2>
      <RegistrationForm />
      <p className={css.text}>
        Do you already have an account?
        <Link className={css.link} to="/login">
          Sign in
        </Link>
      </p>
    </div>
  );
}
