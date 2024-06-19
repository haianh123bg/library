import './Login.css';

export const Login = () => {
    return (
        <div className="container d-flex vh-100 ">
            <div className="row w-100 logindiv">
                <div className="col-lg-4 col-md-6 col-sm-8 bg-light p-4 rounded shadow-sm login-form">
                    <form>
                        <h3 className="text-center mb-4">Sign In</h3>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <span className="text-danger">*</span>Email address
                            </label>
                            <input id="email" type="email" className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">
                                <span className="text-danger">*</span>Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="customCheck1" />
                            <label className="form-check-label" htmlFor="customCheck1">
                                Remember me
                            </label>
                        </div>
                        <div className="d-grid text-center">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-3">
                            Forgot <a href="#">password?</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};
