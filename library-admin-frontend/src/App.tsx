import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { BorrowAndReturnBook } from './pages/borrowAndReturnBook/BorrowAndReturnBook';
import './App.css';
import { BookManager } from './pages/bookManager/BookManager';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={'/book'} />} />
                <Route path="/borrowreturn" element={<BorrowAndReturnBook />} />
                <Route path="/book" element={<BookManager />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
