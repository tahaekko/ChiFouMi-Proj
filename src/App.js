import LoginPage from "./Components/LoginPage";
import PlayingScene from "./Components/PlayingScene";
import {BrowserRouter as Router,Route,Routes,Link,} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <PlayingScene/>
    </div>
  );
}

export default App;
