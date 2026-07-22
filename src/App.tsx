import React, { useState, useEffect, useRef } from "react";
import ThemeToggler from "./commoComponents/MuiSwitch";
import useFetch from "./customHooks/useFetch";
import FileExplorer from "./features/file-explorer/FileExplorer";
import { fileExplorerData } from "./helper";
import { useSelector, useDispatch } from "react-redux";
import { increment, fetchIncrementValue } from "./features/counter/counterSlice";
const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [count, setCount] = useState({ min: 0, sec: 0 })
  const dispatch = useDispatch();
  const counterValue = useSelector((state: any) => state.counter.value);
  const counterStatus = useSelector((state: any) => state.counter.status);
  const counterError = useSelector((state: any) => state.counter.error);
  console.log("counterValue", counterValue);
  const handleTheme = (e) => {
    setIsDark(e);
    const mode = e ? "dark" : "light";
    localStorage.setItem("data-theme", mode);
    document.body.setAttribute("data-theme", mode);
  };
  useEffect(() => {
    const mode = localStorage.getItem("data-theme") || "light";
    setIsDark(mode === "dark");
    document.body.setAttribute("data-theme", mode);
  }, []);


  return (
    <div className="App">
      <ThemeToggler onChange={handleTheme} checked={isDark} />
      <FileExplorer node={fileExplorerData} />
      <button onClick={() => dispatch(fetchIncrementValue())}>
        Fetch increment value
      </button>
      <div>{counterValue}</div>
      <div>{counterStatus}</div>
      {counterError && <div style={{ color: 'red' }}>{counterError}</div>}
    </div>
  );
};

export default App;
