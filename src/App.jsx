import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import store from "./Redux/store/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <>
        <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
          <Navbar></Navbar>

          <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
            <Header></Header>

            <hr className="mt-4" />

            <TodoList></TodoList>

            <hr className="mt-4" />
            <Footer></Footer>
          </div>
        </div>
      </>
    </Provider>
  );
}

export default App;
