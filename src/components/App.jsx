import ContactForm from './ContactForm/ContactForm.';
import SearchBar from './SearchBar/SearchBar';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import Loader from './Loader/Loader';
import { selectLoading, selectError } from '../redux/contactsSlice';
import ErrorMessage from './ErrorMessage/ErrorMessage';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBar />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ContactList />
    </div>
  );
}
