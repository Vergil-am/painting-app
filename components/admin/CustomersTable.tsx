"use client"
import { useCallback } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableCell, TableRow } from "@nextui-org/table"
import { User } from "@nextui-org/user";
import { SelectClient } from "@/db/schema"
import DetailsDialog from "./dialogs/DetailsDialog";
import EditDialog from "./dialogs/EditDialog";
import DeleteDialog from "./dialogs/DeleteDialog";




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
            name={cellValue}
          >
          </User>
        );
      case "quantity":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );

      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <DetailsDialog type="customers" item={customer} />
            <EditDialog />
            <DeleteDialog type="customers" id={customer.id} />
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

}

