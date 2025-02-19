import PropTypes from 'prop-types';
import { imageUpload } from '../../../components/api/utils';
import useAuth from '../../../hooks/useAuth';
import useAxous from '../../../hooks/useAxous';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const AddMedsin = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiousSequre = useAxous();
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];
    const img = await imageUpload(image);
    const madicenName = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = parseFloat(form.price.value);
    const quantity = parseFloat(form.quantity.value);
    const seller = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };
    const medicenData = {
      img,
      madicenName,
      category,
      price,
      quantity,
      description,
      seller,
    };

    axiousSequre.post('/medicen', medicenData).then(res => {
      console.log(res.data);
      toast.success('Medicine added successfully');
    });
    navigate('/dashbors/manageMedicin');
  };

  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {/* Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Medicine name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="name"
                id="name"
               
                type="text"
                placeholder=" Medicine name "
                required
              />
            </div>
            {/* Category */}
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600 ">
                Category
              </label>
              <select
                required
                className="w-full px-4 py-3 border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="category"
              >
                <option value="tablet">tablet</option>
                <option value="capsul">capsul</option>
                <option value="surup">surup</option>
                <option value="injection">injection</option>
                <option value="ointment">ointment</option>
                <option value="drops">drops</option>
              </select>
            </div>
            {/* Description */}
            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                placeholder="Write plant description here..."
                className="block rounded-md focus:lime-300 w-full h-32 px-4 py-3 text-gray-800  border border-lime-300 bg-white focus:outline-lime-500 "
                name="description"
              ></textarea>
            </div>
          </div>
          <div className="space-y-6 flex flex-col">
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600 ">
                  Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  name="price"
                  id="price"
                  type="number"
                  placeholder="Price per unit"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="quantity" className="block text-gray-600">
                  Quantity
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  name="quantity"
                  id="quantity"
                  type="number"
                  placeholder="Available quantity"
                  required
                />
              </div>
            </div>
            {/* Image */}
            <div className=" p-4  w-full  m-auto rounded-lg flex-grow">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500">
                      UploadImg : {imageUpload?.image?.name}
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-lime-500 "
            >
              Save & Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

AddMedsin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setUploadImage: PropTypes.func.isRequired,
  uploadImage: PropTypes.object,
  loading: PropTypes.bool,
};

export default AddMedsin;
