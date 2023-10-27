import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [columb, setColumb] = useState([]);
  const [record, setRecord] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios.get('http://localhost:3000/products').then((res) => {
      setColumb(res.data);
      setRecord(res.data);
    });
  }, []);

  return (
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">
        Tambah Produk
      </Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..." onChange={(event) => setSearch(event.target.value)} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {columb
            .filter((e) => e.nama.toLowerCase().includes(search))
            .map((c, i) => (
              <tr key={i}>
                <td>{c.id}</td>
                <td>{c.nama}</td>
                <td className="text-right">{c.harga}</td>
                <td className="text-center">
                  <Link to={`/detail/${c.id}`} className="btn btn-sm btn-info">
                    Detail
                  </Link>
                  <Link to={`/edit/${c.id}`} className="btn btn-sm btn-warning">
                    Edit
                  </Link>
                  <Link to="#" onClick={(e) => handleSubmit(c.id)} className="btn btn-sm btn-danger">
                    Hapus
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
  function handleSubmit(id) {
    const hapus = window.confirm('Apakah anda yakin ingin menghapus data ini?');
    if (hapus) {
      axios
        .delete(`http://localhost:3000/products/${id}`)
        .then((res) => {
          alert('Data Berhasil Dihapus');
          window.location.href = '/';
        })
        .catch((err) => {
          alert(err);
        });
    }
  }
};

export default Home;
