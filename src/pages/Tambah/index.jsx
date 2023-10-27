import axios from 'axios';
import Input from '../../components/Input';
import './index.scss';
import { useState } from 'react';

const Tambah = () => {
  const [inputData, setInputData] = useState({
    nama: '',
    price: '',
    Stock: '',
    status: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/products', inputData).then((res) => {
      setInputData({
        nama: '',
        harga: '',
        Stock: '',
        status: false,
      });
      alert('Data Berhasil Ditambahkan');
      window.location.href = '/';
    });
  };
  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="Nama Produk..." label="Nama" onChange={(e) => setInputData({ ...inputData, nama: e.target.value })} />
          <Input name="price" type="number" placeholder="Harga Produk..." label="Harga" onChange={(e) => setInputData({ ...inputData, harga: e.target.value })} />
          <Input name="Stock" type="number" placeholder="Stock Produk..." label="Stock" onChange={(e) => setInputData({ ...inputData, Stock: e.target.value })} />
          <Input name="status" type="checkbox" label="Active" checked />
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tambah;
