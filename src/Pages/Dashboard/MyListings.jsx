import { useContext } from "react";
import { getRooms } from "../../api/rooms";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import RoomDataRow from "../../Components/Dashboard/RoomDataRow";
import EmptyState from "../../Components/Shared/Navbar/EmptyState";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [rooms, setRooms] = useState([]);
  const [axiosSecure] = useAxiosSecure()

  //Getting all rooms using host email
  const fetchRooms = () => {
    getRooms(user?.email).then((data) => {
      console.log(data);
      setRooms(data);
    });
  };

  // user dependency because of late reload of a user
  useEffect(() => {
    fetchRooms();
  }, [user]);

  return (
    <>
      {rooms && Array.isArray(rooms) && rooms.length > 0 ? (
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Location
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        From
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        To
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Delete
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Update
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms &&
                      rooms.map((room) => (
                        <RoomDataRow
                          key={room._id}
                          room={room}
                          fetchRooms={fetchRooms}
                        ></RoomDataRow>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyState message="You Haven't Added Any Room Yet!" address="/dashboard/add-room" label="Add Room"></EmptyState>
      )}
    </>
  );
};

export default MyListings;
