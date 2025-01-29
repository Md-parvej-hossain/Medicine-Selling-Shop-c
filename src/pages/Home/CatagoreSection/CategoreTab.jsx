// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { GrCheckboxSelected } from 'react-icons/gr';
import { IoMdEye } from 'react-icons/io';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import useAuth from './../../../hooks/useAuth';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';
const CategoreTab = () => {
  const { user } = useAuth();
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = useParams();
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/medicen/category/${category}`)
      .then(response => response.json())
      .then(data => setMedicines(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [category]);
  const handaleAddToCart = item => {
    if (user && user?.email) {
      const cartItem = {
        caetId: item._id,
        email: user.email,
        name: user.displayName,
        itemName: item.madicenName,
        price: parseFloat(item.price),
        quantity: parseFloat(item.quantity),
        img: item.img,
        seller: item.seller.email,
        description: item.description,
      };
      axiosSecure.post('/cart', cartItem).then(res => {
         refetch();
        if (res.data.insertedId) {
          toast.success('Add to cart Success !');
        }
      });
     
    } else {
      Swal.fire({
        title: 'You are not Log In',
        text: 'Please login to the cart ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Login !',
      }).then(result => {
        if (result.isConfirmed) {
          //send the user
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };
  const handleViewDetails = medicine => {
    setSelectedMedicine(medicine);
  };
  return (
    <div className="py-24 px-10">
      <h1 className="text-2xl font-bold mb-4">Medicines</h1>
      <table className="table-auto w-full bg-white shadow-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Catagorey</th>
            <th className="px-4 py-2">Qunti</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">#</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map(data => (
            <tr key={data._id}>
              <td className="border px-4 py-2">{data.madicenName}</td>
              <td className="border px-4 py-2">{data.category}</td>
              <td className="border px-4 py-2">{data.quantity}</td>
              <td className="border px-4 py-2">${data.price}</td>
              <td className="border px-4 py-2">
                <div className="flex items-center justify-center gap-8">
                  {/*   */}
                  <div>
                    <IoMdEye
                      onClick={() => handleViewDetails(data)}
                      className="size-8 "
                    />
                  </div>
                  <div
                    onClick={() => handaleAddToCart(data)}
                    className="bg-green-500 hover:text-white p-1"
                  >
                    <GrCheckboxSelected className="size-7" />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedMedicine && (
        <div className="modal modal-open">
          <div className="modal-box relative">
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setSelectedMedicine(null)}
            >
              ✕
            </button>
            <h2 className="text-lg font-bold mb-4">
              {selectedMedicine.madicenName}
            </h2>
            <img
              src={selectedMedicine.img}
              alt={selectedMedicine.name}
              className="w-32 h-32 object-cover mb-4 mx-auto"
            />
            <p>
              <strong>Type:</strong> {selectedMedicine.category}
            </p>
            <p>
              <strong>Price:</strong> ${selectedMedicine.price}
            </p>
            <p>
              <strong>Quentity :</strong> {selectedMedicine.quantity}
            </p>
            <p>
              <strong>Description:</strong> {selectedMedicine.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoreTab;
