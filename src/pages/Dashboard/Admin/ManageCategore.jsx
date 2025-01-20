// import { useEffect, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
// import useAxous from '../../../hooks/useAxous';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useItem from '../../../hooks/useItem';
import { Link } from 'react-router-dom';
const ManageCategore = () => {
  // const [items, setItems] = useState([]);
  const axiosSecure = useAxiosSecure();
  // const axiosPulic = useAxous();
  const [allData, loading, refetch] = useItem();

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
        axiosSecure.delete(`/medicen/${id}`).then(res => {
          if (res.data.deletedCount > 0) {
            refetch();
            toast.success('Item Remove Success !');
          }
        });
      }
    });
  };
  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <div className="flex items-center justify-between p-5 ">
        <div>
          <h3 className="text-3xl font-bold">Manage Categore</h3>
        </div>
        <div className="btn btn-ghost text-lg bg-green-300">
          Add Categore
          <IoMdAdd />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Img</th>
              <th>Name</th>
              <th>Catagore</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((item, index) => (
              <tr key={item._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>
                  <img height={'50px'} width={'50px'} src={item.img} alt="" />
                </td>
                <td>{item.madicenName}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <div className="flex items-center justify-center gap-8">
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="btn btn-ghost"
                  >
                    Deleat
                  </button>
                  <Link to={`/dashbors/update/${item._id}`}>
                    <button className="btn btn-ghost">Updata</button>
                  </Link>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCategore;
