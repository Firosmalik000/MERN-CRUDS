import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Detail = () => {
  const { id } = useParams();
  const [isi, setIsi] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/products/' + id).then((res) => setIsi(res.data));
  }, []);
  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">
        Kembali
      </Link>

      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>: {isi.id} </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: {isi.nama} </td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: {isi.harga}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: {isi.Stock}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
