import "./assets/styles/base.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleCountryPage from "./pages/SingleCountryPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="country/:countryId" element={<SingleCountryPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
