import "./App.css";
import MainPage from "./pages/main";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainPage />
      </Provider>
    </div>
  );
}

export default App;
