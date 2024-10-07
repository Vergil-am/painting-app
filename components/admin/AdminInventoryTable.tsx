"use client"
import { Table, TableHeader, TableColumn, TableBody, TableCell, TableRow } from "@nextui-org/table"
import { SelectInventory } from "@/db/schema"
import { Key, useCallback } from "react";
import { User } from "@nextui-org/user";
import DetailsDialog from "./dialogs/DetailsDialog";
import EditDialog from "./dialogs/EditDialog";
import DeleteDialog from "./dialogs/DeleteDialog";
import { type } from "os";
const columns = [
  { name: "NAME", uid: "item_name" },
  { name: "QUANTITY", uid: "quantity" },
  { name: "ACTIONS", uid: "actions" },
];

type Item = SelectInventory;
export default function InventoryTable({ inventory }: { inventory: SelectInventory[] }) {
  const renderCell = useCallback((item: SelectInventory, columnKey: React.Key) => {
    const cellValue = item[columnKey as keyof Item];

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
            <EditDialog />
            <DeleteDialog type="inventory" id={item.id} />
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
      <TableBody items={inventory}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>

  )
}
