import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./styles.css";

import Layout from "./components/Layout";
import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShowBookList />} />
          <Route path="/create-book" element={<CreateBook />} />
          <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
          <Route path="/show-book/:id" element={<ShowBookDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}
