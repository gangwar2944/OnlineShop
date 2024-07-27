import "./App.css";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./services/redux/store";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ToastContainer />
         <Router/>
      </Provider>
    </div>
  );
}

export default App;
