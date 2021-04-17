import {
  BrowserRouter,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from './pages/Homepage';

function App() {

  return (
    <BrowserRouter>
      <div className="wrapper-content">
        <Header />

        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;

// Nhiều page
// Trong mỗi page -> Có nhiều Components