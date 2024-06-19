import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../layouts/User/HomePage/HomePage';
import { ContactUs } from '../layouts/User/ContactUs/ContactUs';
import { ProductsPage } from '../layouts/User/ProductsPage/ProductsPage';
import { AboutUs } from '../layouts/User/AboutUs/AboutUs';
import { AuthorDetail } from '../layouts/User/AuthorDetail/AuthorDetail';
import { NewsDetail } from '../layouts/User/NewsDetail/NewsDetail';
import { NewsList } from '../layouts/User/NewsList/NewsList';
import { NewsGrid } from '../layouts/User/NewsGrid/NewsGrid';
import { ProductDetail } from '../layouts/User/ProductDetail/ProductDetail';
import { Authors } from '../layouts/User/Authors/Authors';
import { Login } from '../layouts/User/LogIn/Login';
import { SignUp } from '../layouts/User/SignUp/SignUp';

export const UserRouters = () => {
    /**
     * // Chèn các style cần thiết
    useStyle('/css/bootstrap.min.css');

    useStyle('/css/normalize.css');
    useStyle('/css/font-awesome.min.css');
    useStyle('/css/icomoon.css');
    useStyle('/css/jquery-ui.css');
    useStyle('/css/owl.carousel.css');
    useStyle('/css/transitions.css');
    useStyle('/css/main.css');
    useStyle('/css/color.css');
    useStyle('/css/responsive.css');

    // Chèn các script cần thiết
    useScript('/js/vendor/jquery-library.js');
    useScript('/js/vendor/bootstrap.min.js');
    useScript('https://maps.google.com/maps/api/js?key=AIzaSyCR-KEWAVCn52mSdeVeTqZjtqbmVJyfSus&amp;language=en');
    useScript('/js/owl.carousel.min.js');
    useScript('/js/jquery.vide.min.js');
    useScript('/js/countdown.js');
    useScript('/js/jquery-ui.js');
    useScript('/js/parallax.js');
    useScript('/js/countTo.js');
    useScript('/js/appear.js');
    useScript('/js/gmap3.js');
    useScript('/js/main.js');
     */

    return (
        <Routes>
            <Route path="/" element={<Navigate to={'/home'} />} />

            <Route path="/home" element={<HomePage />} />

            <Route path="/contactus" element={<ContactUs />} />

            <Route path="products/:categoryId" element={<ProductsPage />} />

            <Route path="products" element={<ProductsPage />} />

            <Route path="/aboutus" element={<AboutUs />} />

            <Route path="/authors/:authorId" element={<AuthorDetail />} />

            <Route path="/newsdetail" element={<NewsDetail />} />

            <Route path="/newsgrid" element={<NewsGrid />} />

            <Route path="/newslist" element={<NewsList />} />

            <Route path="/productdetails/:bookId" element={<ProductDetail />} />

            <Route path="/authors" element={<Authors />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<SignUp />} />
        </Routes>
    );
};
