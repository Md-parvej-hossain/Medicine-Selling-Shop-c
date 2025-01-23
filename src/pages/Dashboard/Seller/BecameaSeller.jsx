import toast from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const BecameaSeller = () => {
  const { user } = useAuth();
  const handaleBecameaSeller = async e => {
    e.preventDefault();
    try {
      //sand a request to server
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/users/${user?.email}`
      );
      toast.success('Request Send Successfull !');
      console.log(data);
    } catch (err) {
      toast.error('You have already requested ,wait for some time ');
      console.log(err);
    }
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
          <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Become a seller
          </h1>
          <form onSubmit={handaleBecameaSeller} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name and Last Name */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Contact Name and Business Name */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="contactName"
                >
                  Contact Name
                </label>
                <input
                  type="text"
                  id="contactName"
                  placeholder="Contact Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="businessName"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  placeholder="Business Name"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Phone Number and Email Address */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  value={user?.email}
                  disabled
                  id="email"
                  placeholder="ex: myname@example.com"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary w-full">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      );
    </div>
  );
};

export default BecameaSeller;
