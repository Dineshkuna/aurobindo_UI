import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function ProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
    itemCode: '',
    strength: '',
    dosageForm: '',
    market: '',
    gtin: '',
    packInsertUrl: ''
  });

  const apiUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL;

  useEffect(() => {
    // Check if token exists on component mount
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        router.push('/auth/login');
        return;
      }
      // Fetch products immediately
      fetchProducts();
    }
  }, []);

  const getToken = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('adminToken');
    }
    return null;
  };

  const fetchProducts = async () => {
    try {
      const token = getToken();
      if (!token) {
        router.push('/auth/login');
        return;
      }

      const response = await fetch(`${apiUrl}/api/products`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Failed to fetch products');

      const { data } = await response.json();
      setProducts(data);
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = getToken();
      if (!token) {
        throw new Error('No token found');
      }

      const response = await fetch(`${apiUrl}/api/products`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create product');
      }

      await fetchProducts();
      setFormData({
        productName: '',
        itemCode: '',
        strength: '',
        dosageForm: '',
        market: '',
        gtin: '',
        packInsertUrl: ''
      });
      setShowForm(false);
      alert('Product created successfully!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this product?')) return;

    try {
      const token = getToken();
      if (!token) throw new Error('No token');

      const response = await fetch(`${apiUrl}/api/products/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (!response.ok) throw new Error('Failed to delete product');

      await fetchProducts();
      alert('Product deleted!');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Head>
        <title>Products | Admin Panel</title>
      </Head>

      <div className="products-container">
        <div className="page-header">
          <h1>📦 Products Management</h1>
          <button
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? '✕ Cancel' : '+ Add Product'}
          </button>
        </div>

        {error && <div className="alert alert-error">{error}</div>}

        {showForm && (
          <div className="form-card">
            <h3>Add New Product</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="productName"
                placeholder="Product Name"
                value={formData.productName}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="itemCode"
                placeholder="Item Code"
                value={formData.itemCode}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="strength"
                placeholder="Strength"
                value={formData.strength}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="dosageForm"
                placeholder="Dosage Form"
                value={formData.dosageForm}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="market"
                placeholder="Market"
                value={formData.market}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="gtin"
                placeholder="GTIN"
                value={formData.gtin}
                onChange={handleInputChange}
              />
              <input
                type="url"
                name="packInsertUrl"
                placeholder="Pack Insert URL"
                value={formData.packInsertUrl}
                onChange={handleInputChange}
              />
              <button type="submit" className="btn btn-success">
                {loading ? 'Creating...' : 'Create Product'}
              </button>
            </form>
          </div>
        )}

        {loading && !showForm ? (
          <p>Loading products...</p>
        ) : (
          <div className="products-table">
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Item Code</th>
                  <th>Strength</th>
                  <th>Dosage Form</th>
                  <th>Market</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product._id}>
                    <td>{product.productName}</td>
                    <td>{product.itemCode}</td>
                    <td>{product.strength}</td>
                    <td>{product.dosageForm}</td>
                    <td>{product.market}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <style jsx>{`
        .products-container {
          padding: 30px;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .page-header h1 {
          color: #333;
        }

        .btn {
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s;
        }

        .btn-primary {
          background: #017eb6;
          color: white;
        }

        .btn-primary:hover {
          background: #0a5a8c;
        }

        .btn-success {
          background: #28a745;
          color: white;
          width: 100%;
        }

        .btn-danger {
          background: #dc3545;
          color: white;
        }

        .form-card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 30px;
        }

        .form-card form {
          display: grid;
          gap: 12px;
        }

        .form-card input {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }

        .form-card input:focus {
          outline: none;
          border-color: #017eb6;
        }

        .products-table {
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
