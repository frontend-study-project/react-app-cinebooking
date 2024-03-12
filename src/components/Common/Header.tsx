import { Link } from 'react-router-dom';
import { useFetchAuthQuery } from '../../hooks/useAuth';

const LoginBefore = () => {
  const user = useFetchAuthQuery();
  // console.log(user.data);
  return (
    <nav className="gnb text-sm relative z-10">
      <Link to="/booking">바로예약</Link>
      <Link to="/join" className="ml-3">
        회원가입
      </Link>
      {user.data ? (
        <>
          <Link to="/login" className="ml-3">
            로그아웃
          </Link>
          <div>아이디: {user.data.userId}</div>
        </>
      ) : (
        <Link to="/login" className="ml-3">
          로그인
        </Link>
      )}
    </nav>
  );
};

const Header = () => {
  return (
    <header className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-5 relative w-full flex justify-end items-center">
      <h1 className="logo h-12 absolute left-0 right-0">
        <Link to="/">
          <img
            className="max-h-full mx-auto"
            src="/src/assets/logo.svg"
            alt="cinebooking"
          />
        </Link>
      </h1>
      <LoginBefore />
    </header>
  );
};
export default Header;
