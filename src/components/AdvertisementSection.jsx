import { useState } from 'react';

const AdvertisementSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [medicines, setMedicines] = useState([
    { id: 1, name: 'Paracetamol', status: 'Active' },
    { id: 2, name: 'Ibuprofen', status: 'Inactive' },
  ]);
  const [newAd, setNewAd] = useState({ image: '', description: '' });

  const handleInputChange = e => {
    setNewAd({ ...newAd, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('New Advertisement:', newAd);
    setIsOpen(false); // Close modal after submission
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Ask For Advertisement</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Ad Status</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map(medicine => (
              <tr key={medicine.id}>
                <td>{medicine.name}</td>
                <td>
                  <span
                    className={`badge ${
                      medicine.status === 'Active'
                        ? 'badge-success'
                        : 'badge-warning'
                    }`}
                  >
                    {medicine.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary mt-4" onClick={() => setIsOpen(true)}>
        Add Advertise
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Add Advertisement</h3>
            <input
              type="file"
              name="image"
              className="file-input w-full mb-3"
              onChange={e => setNewAd({ ...newAd, image: e.target.files[0] })}
            />
            <textarea
              name="description"
              className="textarea textarea-bordered w-full mb-3"
              placeholder="Enter description..."
              value={newAd.description}
              onChange={handleInputChange}
            />
            <div className="flex justify-end gap-2">
              <button
                className="btn btn-ghost"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvertisementSection;
