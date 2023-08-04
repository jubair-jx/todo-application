import React, { useState } from "react";
import noteIcon from "../../assets/images/notes.png";
import doubleTic from "../../assets/images/double-tick.png";
import plusImage from "../../assets/images/plus.png";
import { useDispatch } from "react-redux";
import { added, cleartask, completedtask } from "../../Redux/Todos/action";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleOnChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmitHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      return alert("Please Enter Something");
    } else {
      dispatch(added(input));
    }

    setInput("");
  };
  const completedTask = () => {
    dispatch(completedtask());
  };
  const clearCompletedtask = () => {
    dispatch(cleartask());
  };
  return (
    <div>
      <form
        className="flex items-center bg-green-100 px-4 py-4 rounded-md"
        onSubmit={handleSubmitHandler}
      >
        <img src={noteIcon} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-green-100 text-gray-500"
          value={input}
          onChange={handleOnChange}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={completedTask}>
          <img className="w-4 h-4" src={doubleTic} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearCompletedtask}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
