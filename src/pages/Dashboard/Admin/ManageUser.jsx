import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageUser = () => {
  const [users, setUser] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    userData();
  }, []);
  const userData = async () => {
    await axiosSecure.get('/users').then(res => {
      setUser(res.data);
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>

              <th>Emale</th>
              <th>status</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.status ? user.status : <p>undifin</p>}</td>
                <td>{user.role}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Update Role</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
