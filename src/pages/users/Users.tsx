import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 30 },
  {
    field: "img",
    headerName: "Avatar",
    width: 90,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} />;
    },
  },

  {
    field: "firstName",
    headerName: "First name",
    width: 100,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 120,
  },
  {
    field: "email",
    headerName: "Email",
    width: 190,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
    type: "string",
  },
  {
    field: "createdAt",
    headerName: "CreateAt",
    type: "string",
    width: 100,
  },
  {
    field: "verified",
    headerName: "Verifield",
    width: 90,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:8800/api/users").then((res) => res.json()),
  });
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )}
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
