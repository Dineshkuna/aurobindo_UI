import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function AdminsPage() {
  const router = useRouter();
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userRole, setUserRole] = useState('');

  const apiUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL;

  const getToken = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('adminToken');
    }
    return null;
  };

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push('/auth/login');
      return;
    }
    checkRoleAndFetch();
  }, []);

  const checkRoleAndFetch = async () => {
    try {
      const token = getToken();
      if (!token) {
        router.push('/auth/login');
        return;
      }

      const userStr = localStorage.getItem('adminUser');
      const user = userStr ? JSON.parse(userStr) : null;
      setUserRole(user?.role);

      const response = await fetch(`${apiUrl}/api/users`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Failed to fetch admins');

      const { data } = await response.json();
      setAdmins(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this admin?')) return;

    try {
      const token = getToken();
      if (!token) throw new Error('No token');

      const response = await fetch(`${apiUrl}/api/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Failed to delete admin');

      await checkRoleAndFetch();
      alert('Admin deleted!');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRoleUpdate = async (id, newRole) => {
    try {
      const token = getToken();
      if (!token) throw new Error('No token');

      const response = await fetch(`${apiUrl}/api/users/${id}/role`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ role: newRole })
      });

      if (!response.ok) throw new Error('Failed to update role');

      await checkRoleAndFetch();
      alert('Role updated!');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Head>
        <title>Admins | Admin Panel</title>
      </Head>

      <div className="admins-container">
        <h1>👥 Admin Management</h1>

        {error && <div className="alert alert-error">{error}</div>}

        {loading ? (
          <p>Loading admins...</p>
        ) : (
          <div className="admins-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {admins.map(admin => (
                  <tr key={admin._id}>
                    <td>{admin.name}</td>
                    <td>{admin.email}</td>
                    <td>
                      {userRole === 'superadmin' ? (
                        <select
                          value={admin.role}
                          onChange={(e) => handleRoleUpdate(admin._id, e.target.value)}
                          className="role-select"
                        >
                          <option value="admin">Admin</option>
                          <option value="superadmin">Super Admin</option>
                        </select>
                      ) : (
                        <span className="role-badge">{admin.role}</span>
                      )}
                    </td>
                    <td>
                      {userRole === 'superadmin' && (
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(admin._id)}
                        >
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <style jsx>{`
        .admins-container {
          padding: 30px;
        }

        .admins-container h1 {
          color: #333;
          margin-bottom: 30px;
        }

        .admins-table {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        table th {
          background: #f5f5f5;
          padding: 15px;
          text-align: left;
          font-weight: 600;
          border-bottom: 2px solid #ddd;
        }

        table td {
          padding: 15px;
          border-bottom: 1px solid #eee;
        }

        table tr:hover {
          background: #f9f9f9;
        }

        .role-select {
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
        }

        .role-badge {
          display: inline-block;
          padding: 6px 12px;
          background: #017eb6;
          color: white;
          border-radius: 20px;
          font-size: 12px;
        }

        .btn {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }

        .btn-danger {
          background: #dc3545;
          color: white;
        }

        .alert {
          padding: 15px;
          border-radius: 4px;
          margin-bottom: 20px;
        }

        .alert-error {
          background: #ffe0e0;
          color: #d23c3c;
          border-left: 4px solid #d23c3c;
        }
      `}</style>
    </>
  );
}
