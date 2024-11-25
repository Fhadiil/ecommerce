import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({ username: "", email: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const userResponse = await axios.get("http://127.0.0.1:8000/api/profile/", {
          headers: { Authorization: `Token ${token}` },
        });
        setUser(userResponse.data);
        setEditFormData({
          username: userResponse.data.user.username,
          email: userResponse.data.user.email,
        });

        const ordersResponse = await axios.get("http://127.0.0.1:8000/api/orders/", {
          headers: { Authorization: `Token ${token}` },
        });
        setOrders(ordersResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.put("http://127.0.0.1:8000/api/profile/", editFormData, {
        headers: { Authorization: `Token ${token}` },
      });
      setUser({ ...user, user: { ...user.user, ...editFormData } });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container my-5">
      <h1>My Profile</h1>

      <div className="card my-4">
        <div className="card-body">
          <h4>User Information</h4>
          {isEditing ? (
            <form onSubmit={handleEditSubmit}>
              <div className="mb-3">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={editFormData.username}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={editFormData.email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-success">Save</button>
              <button type="button" className="btn btn-secondary ms-2" onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
          ) : (
            <div>
              <p><strong>Username:</strong> {user.user.username}</p>
              <p><strong>Email:</strong> {user.user.email}</p>
              <p><strong>Address:</strong> {user.address}</p>
              <p><strong>Phone Number:</strong> {user.phone_number}</p>
              <button className="btn btn-primary" onClick={() => setIsEditing(true)}>Edit Profile</button>
            </div>
          )}
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h4>Order History</h4>
          {orders.length === 0 ? (
            <p>No orders found. Start shopping now!</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{new Date(order.date).toLocaleDateString()}</td>
                    <td>${order.total}</td>
                    <td>{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
