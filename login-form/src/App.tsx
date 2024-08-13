import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./components/pages/LoginPage";

function App() {

  return (
    <>
      <ToastContainer />
      <LoginPage />
    </>
  )
}

export default App
