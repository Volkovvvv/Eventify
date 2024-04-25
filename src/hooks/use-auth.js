import { useSelector } from 'react-redux';

export function useAuth() {
  const dataUser = useSelector((state) => state.user.currentUser);
  return {
    dataUser,
  };
}
