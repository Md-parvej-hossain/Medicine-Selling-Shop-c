// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { GrCheckboxSelected } from 'react-icons/gr';
import { IoMdEye } from 'react-icons/io';

const CategoreTab = () => {
  // const { id } = useParams();
  // const [medicines, setMedicines] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/api/categories/${id}`)
  //     .then(response => response.json())
  //     .then(data => setMedicines(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, [id]);

  return (
    <div className="py-24 px-10">
      <h1 className="text-2xl font-bold mb-4">Medicines</h1>
      <table className="table-auto w-full bg-white shadow-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">#</th>
          </tr>
        </thead>
        <tbody>
          {/* {medicines.map(medicine => (
          
          ))} */}
          <tr>
            <td className="border px-4 py-2">medicine.name</td>
            <td className="border px-4 py-2">medicine.type</td>
            <td className="border px-4 py-2">$medicine.price</td>
            <td className="border px-4 py-2">
              <div className="flex items-center justify-center gap-8">
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className=""
                    onClick={() =>
                      document.getElementById('my_modal_1').showModal()
                    }
                  >
                    <IoMdEye className="size-8 " />
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
                <GrCheckboxSelected className="size-7 " />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CategoreTab;
