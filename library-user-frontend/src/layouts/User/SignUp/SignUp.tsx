import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';

export const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errors, setErrors] = useState({ userName: '', email: '', password: '', confirmPassword: '' });

    const navigate = useNavigate();

    const handleValidate = (e: any) => {
        e.preventDefault();
        let isValid = true;
        const newErrors = { userName: '', email: '', password: '', confirmPassword: '' };
        if (!userName) {
            newErrors.userName = 'Tên người dùng không được bỏ trống';
            isValid = false;
        } else if (userName.trim().length === 0) {
            newErrors.userName = 'Không được để tên trống';
        }

        if (!email) {
            newErrors.email = 'Email không được để trống';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email không hợp lệ';
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

        if (password != confirmPassword) {
            newErrors.confirmPassword = 'Mật khẩu không đúng!';
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleRegister = (e: any) => {
        if (handleValidate(e)) {
            const fetchRegister = async () => {
                const baseUrl: string = `http://localhost:8000/auth/register`;
                const response = await fetch(baseUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userName: userName,
                        userAccountName: email,
                        userAccountPassword: password,
                    }),
                });

                const responseJson = await response.json();
                if (!response.ok) {
                    //const errorMessage = await responseJson.message;
                    setErrors({
                        userName: '',
                        email: 'Email đã tồn tại!',
                        password: '',
                        confirmPassword: '',
                    });
                }

                navigate('/auth/login');
            };
            fetchRegister().catch((error) => {
                setErrors({
                    userName: '',
                    email: 'Email đã tồn tại!',
                    password: '',
                    confirmPassword: '',
                });
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
                    <h2>Đăng ký tài khoản</h2>
                    <form>
                        <div className="register_input_group">
                            <label htmlFor="username">Tên đăng nhập:</label>
                            <input
                                type="text"
                                id="username"
                                name="userName"
                                onChange={(e: any) => setUserName(e.target.value)}
                                style={{ textTransform: 'none' }}
                            />
                            {errors.userName && (
                                <p className="error" style={{ color: 'red', marginTop: '3px' }}>
                                    {errors.userName}
                                </p>
                            )}
                        </div>
                        <div className="register_input_group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={(e: any) => setEmail(e.target.value)}
                                style={{ textTransform: 'none' }}
                            />
                            {errors.email && (
                                <p className="error" style={{ color: 'red', marginTop: '3px' }}>
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div className="register_input_group">
                            <label htmlFor="password">Mật khẩu:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={(e: any) => setPassword(e.target.value)}
                                style={{ textTransform: 'none' }}
                            />
                            {errors.password && (
                                <p className="error" style={{ color: 'red', marginTop: '3px' }}>
                                    {errors.password}
                                </p>
                            )}
                        </div>
                        <div className="register_input_group">
                            <label htmlFor="password">Xác nhận mật khẩu:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                onChange={(e: any) => setConfirmPassword(e.target.value)}
                                style={{ textTransform: 'none' }}
                            />
                            {errors.password && (
                                <p className="error" style={{ color: 'red', marginTop: '3px' }}>
                                    {errors.confirmPassword}
                                </p>
                            )}
                        </div>
                        <button type="submit" onClick={handleRegister}>
                            Đăng ký
                        </button>
                    </form>
                    <p className="register_register_text">
                        Đã có tài khoản? <Link to="/auth/login">Đăng nhập</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
};
