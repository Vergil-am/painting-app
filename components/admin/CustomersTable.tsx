"use client"
import { useCallback } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableCell, TableRow } from "@nextui-org/table"
import { User } from "@nextui-org/user";
import { Tooltip } from "@nextui-org/tooltip";
import { EyeIcon, EditIcon, DeleteIcon } from "lucide-react";
import { SelectClient } from "@/db/schema"
import { deleteUser } from "@/lib/actions/clients";
import { Button } from "@nextui-org/button";



const columns = [
  { name: "ID", uid: "id" },
  { name: "NAME", uid: "name" },
  { name: "EMAIL", uid: "email" },
  { name: "PHONE", uid: "phone" },
  { name: "ADDRESS", uid: "address" },
  { name: "ACTIONS", uid: "actions" },
];
type Customer = SelectClient
export default function CustomersTable({ customers }: { customers: SelectClient[] }) {
  const renderCell = useCallback((customer: SelectClient, columnKey: React.Key) => {
    const cellValue = customer[columnKey as keyof Customer];

    switch (columnKey) {
      case "item_name":
        return (
          <User
            avatarProps={{ radius: "lg", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKWigz5N0C8Mb5l2QCBuo9pQRHjSPeq19qA&s" }}
            // description={item.item_name}
            name={cellValue}
          >
            {/* {item.item_name} */}
          </User>
        );
      case "quantity":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">{item.quantity}</p> */}
          </div>
        );
      // case "status":
      //   return (
      //     <Chip className="capitalize" color={statusColorMap["vacation"]} size="sm" variant="flat">
      //       {cellValue}
      //     </Chip>
      //   );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <Button variant="light" className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => { console.log("test") }}>
                <EyeIcon />
              </Button>
            </Tooltip>
            <Tooltip content="Edit item">
              <Button variant="light" className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => { console.log("test") }}>
                <EditIcon />
              </Button>
            </Tooltip>
            <Tooltip color="danger" content="Delete item">
              <Button variant="light" className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => { deleteUser(customer.id) }
              }
              >
                <DeleteIcon />
              </Button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={customers}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>

  )
  // return (
  //   <Table aria-label="Example static collection table">
  //     <TableHeader>
  //       <TableColumn>ID</TableColumn>
  //       <TableColumn>Name</TableColumn>
  //       <TableColumn>Email</TableColumn>
  //       <TableColumn>Phone number</TableColumn>
  //       <TableColumn>Address</TableColumn>
  //     </TableHeader>
  //     <TableBody emptyContent={"No customers to display"}>
  //       {customers.map((customer) => {
  //         return (
  //           <TableRow key={customer.id}>
  //             <TableCell>{customer.id}</TableCell>
  //             <TableCell>{customer.name}</TableCell>
  //             <TableCell>{customer.email}</TableCell>
  //             <TableCell>{customer.phone}</TableCell>
  //             <TableCell>{customer.address}</TableCell>
  //           </TableRow>
  //         )
  //       })}
  //
  //     </TableBody>
  //   </Table>
  // )
}

