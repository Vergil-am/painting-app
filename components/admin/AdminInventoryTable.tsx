"use client"
import { Table, TableHeader, TableColumn, TableBody, TableCell, TableRow } from "@nextui-org/table"
import { SelectInventory } from "@/db/schema"
import { useCallback } from "react";
import { User } from "@nextui-org/user";
import { Tooltip } from "@nextui-org/tooltip";
import { EyeIcon, EditIcon, DeleteIcon } from "lucide-react";
import { deleteItem } from "@/lib/actions/inventory";

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
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => { console.log("test") }}>
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit item">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => { console.log("test") }}>
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete item">
              <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => deleteItem(item.id)
              }
              >
                <DeleteIcon />
              </span>
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
