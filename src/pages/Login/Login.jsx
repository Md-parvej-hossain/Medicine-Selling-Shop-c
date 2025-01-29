import Lottie from 'lottie-react';
import { FcGoogle } from 'react-icons/fc';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import registerAnimationData from '../../assets/AnimationRegister.json';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import useAxous from './../../hooks/useAxous';

const Login = () => {
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';
  const navigate = useNavigate();
  const axiosePublic = useAxous();
  const { signIn, signInWithGoogle } = useAuth();
  // Google Signin
  const handleGoogleSignIn = () => {
    signInWithGoogle().then(result => {
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        image: result.user?.photoURL,
      };
      axiosePublic.post('/users', userInfo).then(res => {
        navigate(from, { replace: true });
      });
    });
  };

  // Email Password Signin
  const handleSignIn = async e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then(res => {
      const user = res.user;
      console.log(user);
      toast.success('Login successfull !');
    });
    navigate(from, { replace: true });
  };
  return (
    <div className="grid lg:grid-cols-2 md:mx-20">
      <div>
        <Lottie animationData={registerAnimationData}></Lottie>
      </div>
      <div className="card bg-base-100 w-full  shrink-0 shadow-2xl my-5">
        <form onSubmit={handleSignIn} className="card-body">
          <div className="flex justify-center text-2xl font-bold">
            <h1>Login Now !</h1>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-none">Login</button>
          </div>
        </form>
        <div>
          <h1 className="flex justify-center text-2xl">
            Dont’t Have An Account ?
            <NavLink
              className={'text-red-500 border-b-2 ml-2 border-red-600'}
              to={'/register'}
            >
              Register
            </NavLink>
          </h1>
          <div className="divider divide-gray-100 text-[#6A6F77]">
            Other log in options
          </div>
          <div
            onClick={handleGoogleSignIn}
            className="flex justify-center py-2 my-2 mx-8 text-4xl border-2 border-black hover:bg-[#aac3da]"
          >
            <FcGoogle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
