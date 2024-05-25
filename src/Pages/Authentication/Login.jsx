import { useContext, useEffect, useRef, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const captchaRef = useRef();
  const [isDisabled, setIsDisabled] = useState(true);
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      navigate("/");
    });
  };

  const handleCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;

    if (validateCaptcha(user_captcha_value) === true) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  ref={captchaRef}
                  placeholder="Write above text"
                  className="input input-bordered"
                  required
                />
                <button onClick={handleCaptcha} className="btn">
                  Validate
                </button>
              </div>

              <div className="form-control mt-6">
                <button disabled={isDisabled} type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <p>
              New here?{" "}
              <Link to="/register" className="text-blue-600 font-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
