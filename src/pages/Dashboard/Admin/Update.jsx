import { useLoaderData, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const Update = () => {
  const item = useLoaderData();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const madicenName = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = parseFloat(form.price.value);
    const quantity = parseFloat(form.quantity.value);
    const medicenData = {
      madicenName,
      category,
      price,
      quantity,
      description,
    };
    console.log(medicenData);
    const updateData = await axiosSecure.patch(
      `/medicen/${item._id}`,
      medicenData
    );
    console.log(updateData.data);
    if (updateData.data.modifiedCount > 0) {
      toast.success('Medicine updated successfully');
    }
    navigate('/dashbors');
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Medicine</h2>
      <form onSubmit={handleSubmit}>
        {/* Medicine Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Medicine Name
          </label>
          <input
            type="text"
            defaultValue={item.madicenName}
            name="name"
            placeholder="Enter medicine name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            defaultValue={item.category}
            className="select select-bordered w-full"
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
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            defaultValue={item.description}
            placeholder="Enter description"
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Price ($)</label>
          <input
            type="number"
            name="price"
            defaultValue={item.price}
            placeholder="Enter price"
            className="input input-bordered w-full"
          />
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            defaultValue={item.quantity}
            placeholder="Enter quantity"
            className="input input-bordered w-full"
          />
        </div>

        {/* Image Upload */}
        {/* <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Upload Image</label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            className="file-input file-input-bordered w-full"
            placeholder={item.img}
          />
        </div> */}

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-full">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
