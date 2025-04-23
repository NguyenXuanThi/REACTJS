// src/ProductManager.jsx
import React, { useState } from 'react';
import ProductList from '/src/components/productList';

const productManager = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Áo thun nam',
      price: 150000,
      category: 'Thời trang',
      stock: 20,
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    if (!formData.name || !formData.price || !formData.category || !formData.stock) {
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: formData.name,
      price: parseInt(formData.price),
      category: formData.category,
      stock: parseInt(formData.stock),
    };

    setProducts([...products, newProduct]);
    setFormData({ name: '', price: '', category: '', stock: '' });
  };

  const handleDelete = (id) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Thêm sản phẩm mới</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input className="p-2 border rounded" placeholder="Tên sản phẩm" name="name" value={formData.name} onChange={handleChange} />
        <input className="p-2 border rounded" placeholder="Giá" name="price" type="number" value={formData.price} onChange={handleChange} />
        <input className="p-2 border rounded" placeholder="Danh mục" name="category" value={formData.category} onChange={handleChange} />
        <input className="p-2 border rounded" placeholder="Tồn kho" name="stock" type="number" value={formData.stock} onChange={handleChange} />
      </div>
      <button onClick={handleAddProduct} className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Thêm sản phẩm
      </button>

      <h3 className="text-xl font-semibold mb-2">Danh sách sản phẩm</h3>
      <ProductList products={products} onDelete={handleDelete} />
    </div>
  );
};

export default productManager;
