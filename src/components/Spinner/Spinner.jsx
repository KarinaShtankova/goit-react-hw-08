import { Comment } from 'react-loader-spinner';
import css from './Spinner.module.css';

export default function Spinner() {
  return (
    <Comment
      visible={true}
      height="120"
      width="120"
      ariaLabel="comment-loading"
      wrapperStyle={{}}
      wrapperClass={css.spinner}
      color="#fff"
      backgroundColor={'var(--secondary-color)'}
    />
  );
}
