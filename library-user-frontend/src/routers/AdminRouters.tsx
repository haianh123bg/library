import { Route, Routes } from 'react-router-dom';
import { AdminPage } from '../layouts/Admin/AdminPage';

export const AdminRouters = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminPage />}>
                <Route path="/dashboard" element={<AdminPage />} />
            </Route>
        </Routes>
    );
};
