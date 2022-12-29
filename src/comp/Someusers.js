import React from "react";
import { DataGrid } from '@mui/x-data-grid';

function Someusers() {
  const rows = [
    {
      id : "1",
      name: "prit",
      phone: "234234",
      email: "prit@gmail.com",
    },
    {
      id : "27",
      name: "praful",
      phone: "234234",
      email: "praful@gmail.com",
    },
    {
      id : "3",
      name: "prabhat",
      phone: "234234",
      email: "prabhat@gmail.com",
    }
  ];

  const columns = [
    { field: 'id' , headerName: 'ID', width: 80  },
    { field: 'name', editable:true, headerName: 'NAME', width: 130 },
    { field: 'phone', editable:true, headerName: 'PHONE', width: 130 },
    { field: 'email', resizable :true, editable:true, headerName: 'EMAIL', width: 130 },    
  ];
  return <div>
<div style={{ height: 500, width: '100%' }}>
      <DataGrid        
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(e)=>console.log(e)}
        onEditRowsModelChange={(e)=>{console.log(e);}}
      />
    </div>
  </div>;
}
export default Someusers;
