import './App.css';
import Header from './conponent/Header';
import DayList from './conponent/DayList';
import Day from './conponent/Day';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from './conponent/EmptyPage';
import CreateWord from './conponent/CreateWord';
import CreateDay from './conponent/CreateDay';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="" element={<EmptyPage />} />
          <Route path="/create_word" element={<CreateWord />}/>
          <Route path="/create_day" element={<CreateDay />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
