import { useEffect, useState } from 'react';
import Input from '../../components/Input';
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Edit = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/products/' + id).then((res) => setData(res.data));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/products/${id}`, data)
      .then((res) => {
        alert('Data Berhasil Diubah');
        window.location.href = '/';
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <Input name="name" type="text" value={data.nama} placeholder="Nama Produk..." label="Nama" onChange={(e) => setData({ ...data, nama: e.target.value })} />
          <Input name="price" type="number" value={data.harga} placeholder="Harga Produk..." label="Harga" onChange={(e) => setData({ ...data, harga: e.target.value })} />
          <Input name="Stock" type="number" value={data.Stock} placeholder="Stock Produk..." label="Stock" onChange={(e) => setData({ ...data, Stock: e.target.value })} />
          <Input name="status" type="checkbox" label="Active" checked />
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
