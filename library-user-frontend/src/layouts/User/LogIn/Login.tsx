import { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ userAccountName: '', password: '' });

    const navigate = useNavigate();

    const handleValidate = (e: any) => {
        e.preventDefault();
        let isValid = true;
        const newErrors = { userAccountName: '', password: '' };

        if (!email) {
            newErrors.userAccountName = 'Email không được để trống';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.userAccountName = 'Email không hợp lệ';
            isValid = false;
        }

        if (!password) {
            newErrors.password = 'Mật khẩu không được để trống';
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
            isValid = false;
        } else if (/\s/.test(password)) {
            newErrors.password = 'Mật khẩu không được chứa dấu cách';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: any) => {
        if (handleValidate(e)) {
            const fetchLogin = async () => {
                const baseUrl: string = `http://localhost:8000/auth/access`;
                const response = await fetch(baseUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userAccountName: email, password: password }),
                });

                const responseJson = await response.json();
                if (!response.ok) {
                    const errorMessage = await responseJson.message;
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        userAccountName: errorMessage,
                        password: errorMessage,
                    }));
                }

                const responseData = responseJson.result;

                const loadedData: TokenResponseModel = {
                    accessToken: responseData.accessToken,
                    refreshToken: responseData.refreshToken,
                    roles: responseData.roles,
                    userId: responseData.userId,
                };
                localStorage.setItem('authToken', JSON.stringify(loadedData));
                if (loadedData) {
                    navigate('/home');
                }
            };
            fetchLogin().catch((error) => {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    userAccountName: 'Mẩu khẩu hoặc email sai!',
                    password: 'Mẩu khẩu hoặc email sai!',
                }));
                console.log(error);
            });
        } else {
            console.log('Form is invalid');
        }
    };

    return (
        <div className="container_page_register body_signup">
            <div className="register_image_container">
                <img src="/images/login/logo.png" alt="Logo" className="register_logo" />
            </div>
            <div className="register_container">
                <div className="register_box">
                    <h2>Đăng nhập tài khoản</h2>
                    <form>
                        <div className="register_input_group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ textTransform: 'none' }}
                            />
                            {errors.userAccountName && (
                                <p className="error" style={{ color: 'red', marginTop: '3px' }}>
                                    {errors.userAccountName}
                                </p>
                            )}
                        </div>
                        <div className="register_input_group">
                            <label htmlFor="password">Mật khẩu:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ textTransform: 'none' }}
                            />

                            {errors.password && (
                                <p className="error" style={{ color: 'red', marginTop: '3px' }}>
                                    {errors.password}
                                </p>
                            )}
                        </div>
                        <button type="submit" onClick={handleSubmit}>
                            Đăng nhập
                        </button>
                    </form>
                    <p className="register_register_text">
                        Bạn chưa có tài khoản? <Link to="/auth/register">Đăng ký</Link>.
                    </p>
                    <div className="social-icons">
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                style={{ width: '30px', height: '30px' }}
                            >
                                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 488 512"
                                style={{ width: '30px', height: '30px' }}
                            >
                                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                                style={{ width: '30px', height: '30px' }}
                            >
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
