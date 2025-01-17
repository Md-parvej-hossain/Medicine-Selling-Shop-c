import { useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';

const AddtoCart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'NovoRapid Penfill Cartridge (100IU/ml)',
      price: 780,
      discountedPrice: 748.8,
      quantity: 4,
      image: 'link-to-novopen-image',
    },
    {
      id: 2,
      name: 'Zerocal - 25pcs Sachets',
      price: 90,
      discountedPrice: 85.5,
      quantity: 1,
      image: 'link-to-zerocal-image',
    },
    {
      id: 3,
      name: 'CareSens N Blood Glucose Monitoring System',
      price: 2275,
      discountedPrice: 2047.5,
      quantity: 1,
      image: 'link-to-caresens-image',
    },
  ]);

  const handleQuantityChange = (id, increment) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(item.quantity + increment, 1),
            }
          : item
      )
    );
  };

  const handleRemoveItem = id => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
    toast.success('Deleate Successfull !');
  };

  const calculateTotal = () =>
    cart.reduce(
      (total, item) => total + item.discountedPrice * item.quantity,
      0
    );

  return (
    <div className=" max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow p-4">
        {cart.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between py-4 border-b last:border-b-0"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1 ml-4">
              <h2 className="text-lg font-medium">{item.name}</h2>
              <div className="text-sm text-gray-500 line-through">
                ৳{item.price}
              </div>
              <div className="text-lg text-green-500 font-bold">
                ৳{item.discountedPrice}
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange(item.id, -1)}
                className="btn btn-xs btn-outline"
              >
                -
              </button>
              <input
                type="text"
                value={item.quantity}
                readOnly
                className="w-12 text-center border rounded mx-2"
              />
              <button
                onClick={() => handleQuantityChange(item.id, 1)}
                className="btn btn-xs btn-outline"
              >
                +
              </button>
            </div>
            <div className="ml-4">
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <MdDelete className="size-7" />
              </button>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between mt-4">
          <h3 className="text-lg font-bold">
            Total Amount:{' '}
            <span className="text-green-500">${calculateTotal()}</span>
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
