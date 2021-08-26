import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import CreatePost from "./components/CreatePost";
import { useSelector } from "react-redux";

function App() {
  const createpost = useSelector((state) => state.create.createpost);
  return (
    <div className="App">
      {createpost && <CreatePost />}
      <Header />
      <Body />
    </div>
  );
}

export default App;
