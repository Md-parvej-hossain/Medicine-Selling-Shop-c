import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const ManageMedices = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: seler = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['seler', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/mediceen/${user?.email}`);
      return data;
    },
  });
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
          refetch();
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
          <tbody className="">
            {seler.map((data, index) => (
              <tr key={data._id} className=" border-2">
                <th>{index + 1}</th>
                <td>{data.madicenName}</td>
                <td>$ {data.price}</td>
                <td>{data.quantity} P</td>
                <td>Update</td>
                <td
                  className="btn my-2"
                  onClick={() => handleRemoveItem(data._id)}
                >
                  Deleat
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMedices;
