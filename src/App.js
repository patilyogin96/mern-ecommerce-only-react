import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchCategoryFilters } from "./Redux/Actions/actions";
import ResponsiveAppBar from "./Components/Navbar/Navbar";
import AppRouter from "./AppRouter/AppRouter";
import Footer from "./Pages/Footer/Footer";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryFilters());
  }, []);
  return (
    <>
      <div className="App">
        <div>
          <ResponsiveAppBar />
        </div>
        <div style={{ flex: 1 }}>
          <AppRouter />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
