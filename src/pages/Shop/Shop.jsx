// ShopPage.jsx
import { IoMdEye } from 'react-icons/io';
import { useState } from 'react';
import { GrCheckboxSelected } from 'react-icons/gr';
import toast from 'react-hot-toast';

const medicines = [
  {
    id: 1,
    name: 'Paracetamol',
    type: 'Tablet',
    price: '$5',
    description: 'Used for pain relief and fever.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Ibuprofen',
    type: 'Capsule',
    price: '$8',
    description: 'Used for reducing inflammation and pain.',
    image: 'https://via.placeholder.com/150',
  },
  // Add more medicine data as needed
];

const Shop = () => {
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [cart, setCart] = useState([]);

  const handleViewDetails = medicine => {
    setSelectedMedicine(medicine);
  };

  const handleAddToCart = medicine => {
    setCart(prevCart => [...prevCart, medicine]);
    toast.success('Item Add To Cart Successfull !');
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
              <th>Name</th>
              <th>Type</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine, index) => (
              <tr key={medicine.id}>
                <td>{index + 1}</td>
                <td>{medicine.name}</td>
                <td>{medicine.type}</td>
                <td>{medicine.price}</td>
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
                      onClick={() => handleAddToCart(medicine)}
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
            <h2 className="text-lg font-bold mb-4">{selectedMedicine.name}</h2>
            <img
              src={selectedMedicine.image}
              alt={selectedMedicine.name}
              className="w-32 h-32 object-cover mb-4 mx-auto"
            />
            <p>
              <strong>Type:</strong> {selectedMedicine.type}
            </p>
            <p>
              <strong>Price:</strong> {selectedMedicine.price}
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
