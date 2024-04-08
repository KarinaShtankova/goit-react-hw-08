import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import Layout from './components/Layout/Layout';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const NotFound = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));


export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
<>    <Layout>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />}
            />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegisterPage />} redirectTo="/contacts"/>}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts"/>}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      )}
    </Layout>
    <Toaster
  position="top-center"
  reverseOrder={false}
/></>
  );
}
