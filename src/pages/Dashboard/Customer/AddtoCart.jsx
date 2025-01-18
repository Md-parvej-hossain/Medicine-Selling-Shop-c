import { MdDelete } from 'react-icons/md';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const AddtoCart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
 
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

  return (
    <div className=" max-w-4xl mx-auto py-24">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <h1 className="text-2xl font-bold mb-4">Total Items : {cart.length}</h1>
      </div>

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
            <div className="flex items-center gap-2">
              <label htmlFor="quantity" className="block text-sm text-gray-600">
                Quantity
              </label>
              <input
                className=" px-2 w-32 py-2 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="quantity"
                id="quantity"
                type="number"
                placeholder="Available quantity"
                required
              />
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
        <div className="flex items-center justify-between mt-4">
          <h3 className="text-lg font-bold">
            Total Amount: <span className="text-green-600">${totalPrice}</span>
          </h3>
          <div>
            {/* chack out button detals */}
            <div>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className=""
                onClick={() =>
                  document.getElementById('my_modal_1').showModal()
                }
              >
                <button className="btn bg-green-500 text-white hover:text-black">
                  Proceed To Checkout
                </button>
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click the button below to close
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtoCart;
