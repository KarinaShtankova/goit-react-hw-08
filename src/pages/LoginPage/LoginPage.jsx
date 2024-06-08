import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Please Log In</h2>
      <LoginForm />
      <p className={css.text}>
        Don&apos;t have an account?
        <Link className={css.link} to="/register">
          Sign up
        </Link>
      </p>
    </div>
  );
}
