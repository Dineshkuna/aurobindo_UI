import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [admin, setAdmin] = useState(null);

  const apiUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL;

  const getToken = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('adminToken');
    }
    return null;
  };

  useEffect(() => {
    const token = getToken();
    const adminData = typeof window !== 'undefined' ? localStorage.getItem('adminUser') : null;

    if (!token) {
      router.push('/auth/login');
      return;
    }

    setAdmin(adminData ? JSON.parse(adminData) : null);
    fetchDashboardStats(token);
  }, []);

  const fetchDashboardStats = async (token) => {
    try {
      const response = await fetch(`${apiUrl}/api/analytics/dashboard`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Failed to fetch stats');

      const { data } = await response.json();
      setStats(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    router.push('/auth/login');
  };

  if (loading) return <div className="container mt-5"><p>Loading...</p></div>;

  return (
    <>
      <Head>
        <title>Admin Dashboard | Aurobindo Pharma</title>
      </Head>

      <div className="admin-layout">
        <nav className="navbar">
          <div className="navbar-brand">
            <h2>🔒 Admin Panel</h2>
          </div>
          <div className="navbar-user">
            <span>👤 {admin?.name}</span>
            <button onClick={handleLogout} className="btn-logout">Logout</button>
          </div>
        </nav>

        <div className="admin-container">
          <aside className="sidebar">
            <ul className="nav-menu">
              <li><Link href="/">📊 Dashboard</Link></li>
              <li><Link href="/products">📦 Products</Link></li>
              <li><Link href="/admins">👥 Admins</Link></li>
              <li><Link href="/analytics">📈 Analytics</Link></li>
            </ul>
          </aside>

          <main className="content">
            <h1>Dashboard</h1>

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">{stats?.totalProducts || 0}</div>
                <div className="stat-label">Total Products</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{stats?.totalAdmins || 0}</div>
                <div className="stat-label">Total Admins</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{stats?.superAdmins || 0}</div>
                <div className="stat-label">Super Admins</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{stats?.regularAdmins || 0}</div>
                <div className="stat-label">Regular Admins</div>
              </div>
            </div>

            <div className="content-grid">
              <section className="card">
                <h3>Recent Products</h3>
                {stats?.recentProducts?.length > 0 ? (
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Item Code</th>
                        <th>Market</th>
                        <th>Created By</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.recentProducts.map(product => (
                        <tr key={product._id}>
                          <td>{product.productName}</td>
                          <td>{product.itemCode}</td>
                          <td>{product.market}</td>
                          <td>{product.createdBy?.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No products yet</p>
                )}
              </section>

              <section className="card">
                <h3>Recent Admins</h3>
                {stats?.recentAdmins?.length > 0 ? (
                  <ul className="admin-list">
                    {stats.recentAdmins.map(adm => (
                      <li key={adm._id}>
                        {adm.name} ({adm.role}) - {adm.email}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No admins yet</p>
                )}
              </section>
            </div>
          </main>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f5f5f5;
        }

        .admin-layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, #017eb6 0%, #0a5a8c 100%);
          color: white;
          padding: 20px 30px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .navbar-brand h2 {
          font-size: 24px;
        }

        .navbar-user {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .btn-logout {
          background: #ff6b6b;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }

        .btn-logout:hover {
          background: #ff5252;
        }

        .admin-container {
          display: flex;
          flex: 1;
        }

        .sidebar {
          width: 250px;
          background: white;
          padding: 20px;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
        }

        .nav-menu {
          list-style: none;
        }

        .nav-menu li {
          margin-bottom: 15px;
        }

        .nav-menu a {
          display: block;
          padding: 12px;
          color: #333;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.3s;
        }

        .nav-menu a:hover {
          background: #f0f0f0;
          color: #017eb6;
        }

        .content {
          flex: 1;
          padding: 30px;
        }

        .content h1 {
          color: #333;
          margin-bottom: 25px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .stat-card {
          background: white;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          text-align: center;
          transition: transform 0.3s;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .stat-number {
          font-size: 36px;
          font-weight: bold;
          color: #017eb6;
          margin-bottom: 10px;
        }

        .stat-label {
          color: #666;
          font-size: 14px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .card {
          background: white;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .card h3 {
          color: #333;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #017eb6;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }

        .table th {
          background: #f5f5f5;
          padding: 12px;
          text-align: left;
          font-weight: 600;
          color: #333;
        }

        .table td {
          padding: 12px;
          border-bottom: 1px solid #eee;
        }

        .table tr:hover {
          background: #f9f9f9;
        }

        .admin-list {
          list-style: none;
        }

        .admin-list li {
          padding: 12px;
          border-bottom: 1px solid #eee;
          color: #666;
          font-size: 14px;
        }

        .alert {
          padding: 15px;
          border-radius: 4px;
          margin-bottom: 20px;
        }

        .alert-danger {
          background: #ffe0e0;
          color: #d23c3c;
          border: 1px solid #ff9999;
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 100%;
          }

          .admin-container {
            flex-direction: column;
          }

          .content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
