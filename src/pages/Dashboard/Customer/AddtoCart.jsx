import { MdDelete } from 'react-icons/md';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
// import { useState } from 'react';
// import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const AddtoCart = () => {
  const [cart, refetch] = useCart();
  // const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  // const [selectedMedicine, setSelectedMedicine] = useState(null);
  const handleRemoveItem = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${id}`).then(res => {
          if (res.data.deletedCount > 0) {
            refetch();
            toast.success('Item Remove Success !');
          }
        });
      }
    });
  };
  // const handleViewDetails = medicine => {
  //   setSelectedMedicine(medicine);
  // };

  return (
    <div className=" max-w-4xl mx-auto ">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <h1 className="text-2xl font-bold mb-4">Total Items : {cart.length}</h1>
      </div>
      <div>
        <div className="bg-white rounded-lg shadow p-4">
          {cart.map(item => (
            <div
              key={item._id}
              className="flex items-center justify-between py-4 border-b last:border-b-0"
            >
              <img
                src={item.img}
                alt={item.itemName}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-medium">{item.itemName}</h2>
                <div className="text-sm text-gray-500 line-through">
                  ${item.discountedPrice ? item.discountedPrice : 0}
                </div>
                <div className="text-lg text-green-500 font-bold">
                  ${item.price}
                </div>
              </div>
              <div className="mr-5 text-sm text-gray-500">
                Seler Email : {item.seller}
              </div>

              <div className="ml-10">
                <button
                  onClick={() => handleRemoveItem(item._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <MdDelete className="size-7" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4">
          <h3 className="text-lg font-bold">
            Total Amount: <span className="text-green-600">${totalPrice}</span>
          </h3>
          <div>
            {/* chack out button detals */}
            <div>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              {cart.length ? (
                <Link to={'/dashbors/payment'}>
                  <button className="btn bg-green-500 text-white hover:text-black">
                    Proceed To Checkout
                  </button>
                </Link>
              ) : (
                <button
                  disabled
                  className="btn bg-green-500 text-white hover:text-black"
                >
                  Proceed To Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* {selectedMedicine && (
        <div className="modal modal-open">
          <div className="modal-box relative">
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setSelectedMedicine(null)}
            >
              ✕
            </button>
            <div className="text-gray-600 space-y-3">
              <p>
                <strong>Items : {cart.length} p</strong>
              </p>
              <p>
                <strong>Costomer Name : {user.displayName} </strong>
                <strong>Costomer Name : {user.email} </strong>
           
              </p>
              <p>
                <strong>Total Price:</strong>${selectedMedicine}
              </p>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="address" className="block text-gray-600 ">
                Address :
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="address"
                id="address"
                type="text"
                placeholder="Address per unit"
                required
              />
            </div>
            <div className="flex justify-end items-center py-4">
              <button className="btn btn-primary">Pay Now</button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default AddtoCart;
