import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const ManageMedices = () => {
  const axiosSecure = useAxiosSecure();
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
            toast.success('Item Remove Success !');
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex items-center justify-between p-5 ">
        <div>
          <h3 className="text-3xl font-bold">Manage Medicen </h3>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-base-200">
              <th></th>
              <td>Cy Ganderton</td>
              <td>Price</td>
              <td>Quality Control Specialist</td>
              <td>Update</td>
              <td onClick={() => handleRemoveItem()}>Deleat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMedices;
