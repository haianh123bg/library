export const Register = () => {
    return (
        <div>
            <div className="container_page_register">
                <div className="register_image_container">
                    <img src="image/logo.png" alt="Logo" className="register_logo" />
                </div>
                <div className="register_container">
                    <div className="register_box">
                        <h2>Đăng ký tài khoản</h2>
                        <form>
                            <div className="register_input_group">
                                <label htmlFor="username">Tên đăng nhập:</label>
                                <input type="text" id="username" name="username" required />
                            </div>
                            <div className="register_input_group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="register_input_group">
                                <label htmlFor="password">Mật khẩu:</label>
                                <input type="password" id="password" name="password" required />
                            </div>
                            <div className="register_input_group">
                                <label htmlFor="confirm-password">Xác nhận mật khẩu:</label>
                                <input type="password" id="confirm-password" name="confirm-password" required />
                            </div>
                            <button type="submit">Đăng ký</button>
                        </form>
                        <p className="register_register_text">
                            Đã có tài khoản? <a href="login.html">Đăng nhập</a>.
                        </p>
                        <div className="social-icons">
                            <a href="#">
                                <i className="fab fa-google" />
                            </a>
                            <a href="#">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
