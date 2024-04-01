import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const user = useSelector(selectUser);
  return (
    <div>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button">Logout</button>
    </div>
  );
}
