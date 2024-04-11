import { useSelector } from 'react-redux';

export function useAuth() {
  const { email, name, surname, id, token } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
    name,
    surname,
  };
}
