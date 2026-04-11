import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function AnalyticsPage() {
  const router = useRouter();
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const token = getToken();
      if (!token) {
        router.push('/auth/login');
        return;
      }

      const response = await fetch(`${apiUrl}/api/analytics/detailed`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Failed to fetch analytics');

      const { data } = await response.json();
      setAnalytics(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Analytics | Admin Panel</title>
      </Head>

      <div className="analytics-container">
        <h1>📈 Analytics & Reports</h1>

        {error && <div className="alert alert-error">{error}</div>}

        {loading ? (
          <p>Loading analytics...</p>
        ) : (
          <>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">{analytics?.totalProducts}</div>
                <div className="stat-label">Total Products</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{analytics?.totalAdmins}</div>
                <div className="stat-label">Total Admins</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{analytics?.superAdmins}</div>
                <div className="stat-label">Super Admins</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{analytics?.regularAdmins}</div>
                <div className="stat-label">Regular Admins</div>
              </div>
            </div>

            <div className="content-grid">
              <div className="card">
                <h3>Products by Market</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Market</th>
                      <th>Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analytics?.productsByMarket?.map(item => (
                      <tr key={item._id}>
                        <td>{item._id || 'N/A'}</td>
                        <td>{item.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="card">
                <h3>Products by Dosage Form</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Form</th>
                      <th>Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analytics?.productsByForm?.map(item => (
                      <tr key={item._id}>
                        <td>{item._id || 'N/A'}</td>
                        <td>{item.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card">
              <h3>Products by Strength</h3>
              <table>
                <thead>
                  <tr>
                    <th>Strength</th>
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody>
                  {analytics?.productsByStrength?.map(item => (
                    <tr key={item._id}>
                      <td>{item._id || 'N/A'}</td>
                      <td>{item.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .analytics-container {
          padding: 30px;
        }

        .analytics-container h1 {
          color: #333;
          margin-bottom: 30px;
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
          text-align: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .stat-value {
          font-size: 32px;
          font-weight: bold;
          color: #017eb6;
        }

        .stat-label {
          color: #666;
          font-size: 14px;
          margin-top: 10px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .card h3 {
          color: #333;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #017eb6;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        table th {
          background: #f5f5f5;
          padding: 12px;
          text-align: left;
          font-weight: 600;
          border-bottom: 1px solid #ddd;
          font-size: 14px;
        }

        table td {
          padding: 12px;
          border-bottom: 1px solid #eee;
          font-size: 14px;
        }

        table tr:hover {
          background: #f9f9f9;
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

        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
