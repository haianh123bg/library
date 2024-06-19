import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminRouters } from './routers/AdminRouters';
import { UserRouters } from './routers/UserRouters';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/*" element={<AdminRouters />} />
                <Route path="/*" element={<UserRouters />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
