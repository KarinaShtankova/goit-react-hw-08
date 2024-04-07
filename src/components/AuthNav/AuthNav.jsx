import { Link } from "react-router-dom";
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <ul className={css.list}>
      <li>
        <Link className={css.link}  to='/register'>Register</Link>
      </li>
      <li className={css.item}>
        <Link className={css.link} to='/login'>Log in</Link>
      </li>
    </ul>
  );
}

