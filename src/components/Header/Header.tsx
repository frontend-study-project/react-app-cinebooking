import { Link } from "react-router-dom";
import "../../style/header.css";
import { useFetchAuthQuery } from "../../hooks/useAuth";

const LoginBefore = () => {
  const user = useFetchAuthQuery();
  console.log(user.data)
  return (
    <nav className="gnb">
      <Link to="/booking">바로예약</Link>
      <Link to="/join" className="ml-3">
        회원가입
      </Link>
      {
        user.data?
          (
            <>
              <Link to="/login" className="ml-3">
                로그아웃
              </Link>
              <div>아이디: {user.data.userId}</div>
            </>

          ) :
          (
            <Link to="/login" className="ml-3">
              로그인
            </Link>
          )
      }
    </nav>
  );
};

const Header = () => {
  return (
    <header className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-2 fixed top-0 left-0 right-0 w-full flex justify-between items-center">
      <h1 className="logo h-12">
        <img src="/src/assets/logo.png" alt="cinebooking" />
      </h1>
      <LoginBefore />
    </header>
  );
};
export default Header;
