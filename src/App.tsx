import { Outlet } from "react-router-dom";
import Header from "./components/Common/Header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Footer from "./components/Common/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <ReactQueryDevtools />
      <Footer />
    </>
  );
}

export default App;
