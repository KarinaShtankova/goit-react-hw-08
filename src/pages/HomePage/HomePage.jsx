import Spinner from '../../components/Spinner/Spinner';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        It&apos;s your personal{' '}
        <span className={css.span}>&quot;Phonebook&quot;</span> aplication!
      </h1>
      <p className={css.text}>Create, edit and delete contacts!</p>
      <Spinner/>
    </div>
  );
}
