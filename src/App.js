import './App.css';
import Main from "./components/Main";
import CoordinatorsPage from "./components/Teachers";
import RetreatProgram from "./components/Timetable";
import RetreatMenu from "./components/Menu";
import Accommodation from "./components/Living";
import BookingForm from "./components/Booking";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Prev from "./components/Prev";

function App() {
  return (
      <div className="App">
          <header className="App-header">
          </header>
          <Main/>
          <CoordinatorsPage/>
          <RetreatProgram/>
          <RetreatMenu/>
          <Accommodation/>
          <Prev/>
          <Reviews/>
          <BookingForm/>
          <footer>
            <Footer/>
          </footer>
      </div>

  );
}

export default App;
