import Lottie from 'lottie-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import registerAnimation from '../../assets/register.json';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { imageUpload } from '../../components/api/utils';

const Register = () => {
  const { creatUser, signInWithGoogle, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || '/';
  const handleSignUp = async e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const image = form.image.files[0];

    //1. send image data to imgbb
    const photoURL = await imageUpload(image);
    const password = form.password.value;
    console.log({ email, password, name, photoURL });
    try {
      //2. User Registration
      const result = await creatUser(email, password);

      //3. Save username & profile photo
      await updateUserProfile(name, photoURL);
      console.log(result);

      //  navigate('/');
      toast.success('Signup Successful');
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
    navigate(from, { replace: true });
  };
  const handleGoogleSignIn = async () => {
    try {
      //User Registration using google
      await signInWithGoogle();
      navigate(from, { replace: true });
      toast.success('Login Successful');
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  return (
    <div className="grid lg:grid-cols-2 md:mx-20">
      <div className="card bg-base-100 w-full  shrink-0 shadow-2xl my-5">
        <form onSubmit={handleSignUp} className="card-body">
          <div className="flex justify-center text-2xl font-bold">
            <h1>Register Now !</h1>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control py-4">
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
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
            <button className="btn btn-primary rounded-none">Register</button>
          </div>
        </form>
        <div className="mb-4">
          <h1 className="flex justify-center text-2xl">
            Dont’t Have An Account ?
            <NavLink
              className={'text-red-500 border-b-2 ml-2 border-red-600'}
              to={'/login'}
            >
              Login
            </NavLink>
          </h1>
          <div
            onClick={handleGoogleSignIn}
            className="flex justify-center py-2 my-2 mx-8 text-4xl border-2 border-black hover:bg-[#aac3da]"
          >
            <FcGoogle />
          </div>
        </div>
      </div>
      <div>
        <Lottie animationData={registerAnimation}></Lottie>
      </div>
    </div>
  );
};

export default Register;
