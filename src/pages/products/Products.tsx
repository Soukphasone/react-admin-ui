import { GridColDef } from "@mui/x-data-grid";
import "./products.scss";
import {useState} from 'react';
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { products } from "../../data";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} />;
    },
  },

  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 150,

  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 150,
  },
  {
    field: "producer",
    type: "string",
    headerName: "Producer",
    width: 200,
  },
  {
    field: "createdAt",
    type: "string",
    headerName: "CreatedAt",
    width: 150,
  },
  {
    field: "inStock",
    type: "boolean",
    headerName: "In Stock",
    width: 150,
  },
 
];
const Products = () => {
  const [open, setOpen] = useState(false)
  return <div className="product">
    <div className="info">
      <h1>Products</h1>
      <button onClick={()=> setOpen(true)}>Add New Products</button>
    </div>
    <DataTable slug="products" columns={columns} rows={products}/>
    {open && <Add slug="product" columns={columns} setOpen={setOpen}/>}
  </div>; 
};

export default Products;
