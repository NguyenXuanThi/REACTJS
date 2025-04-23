// ProductList.jsx
import React from 'react';

const productList = ({ products, onDelete }) => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Tên sản phẩm</th>
            <th className="p-2 border">Giá</th>
            <th className="p-2 border">Danh mục</th>
            <th className="p-2 border">Tồn kho</th>
            <th className="p-2 border">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className="text-center">
              <td className="p-2 border">{product.name}</td>
              <td className="p-2 border">{product.price.toLocaleString()} đ</td>
              <td className="p-2 border">{product.category}</td>
              <td className="p-2 border">{product.stock}</td>
              <td className="p-2 border">
                <button
                  onClick={() => onDelete(product.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Xoá
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default productList;
