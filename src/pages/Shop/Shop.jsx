// ShopPage.jsx
import { IoMdEye } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { GrCheckboxSelected } from 'react-icons/gr';
import toast from 'react-hot-toast';
import useAxous from '../../hooks/useAxous';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const { user } = useAuth();
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const axiosPulic = useAxous();
  useEffect(() => {
    userData();
  }, []);
  const userData = async () => {
    await axiosPulic.get('/medicen').then(res => {
      setItems(res.data);
    });
  };

  const handleViewDetails = medicine => {
    setSelectedMedicine(medicine);
  };

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
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success('Add to cart Success !');
        }
      });
      refetch();
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Medicine Shop</h1>

      {/* Medicine Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Imags</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((medicine, index) => (
              <tr key={medicine.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    height={'50px'}
                    width={'50px'}
                    src={medicine.img}
                    alt=""
                  />
                </td>
                <td>{medicine.madicenName}</td>
                <td>{medicine.category}</td>
                <td>${medicine.price}</td>
                <td>
                  <div>
                    <button
                      className="btn btn-info btn-sm mr-2"
                      onClick={() => handleViewDetails(medicine)}
                    >
                      <IoMdEye />
                    </button>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handaleAddToCart(medicine)}
                    >
                      <GrCheckboxSelected />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Medicine Details */}
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
              <strong>Price:</strong>${selectedMedicine.price}
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

export default Shop;
