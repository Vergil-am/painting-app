"use client"
import { Table, TableHeader, TableColumn, TableBody, TableCell, TableRow } from "@nextui-org/table"
import { SelectOrder } from "@/db/schema"
import { Chip } from "@nextui-org/chip"
import { Tooltip } from "@nextui-org/tooltip";
import { ChipProps } from "@nextui-org/chip";
import { useCallback } from "react";
import { User } from "@nextui-org/user";
import { EyeIcon, EditIcon, DeleteIcon } from "lucide-react";
import { deleteOrder } from "@/lib/actions/orders";


const columns = [
  { name: "NAME", uid: "name" },
  { name: "ORDER ID", uid: "id" },
  { name: "STATUS", uid: "status" },
  { name: "CREATED AT", uid: "created_at" },
  { name: "ACTIONS", uid: "actions" },
];

const statusColorMap: Record<string, ChipProps["color"]> = {
  paid: "success",
  error: "danger",
  unpaid: "warning",
};

type Order = SelectOrder;
export default function AdminOrdersTable({ orders }: { orders: SelectOrder[] }) {
  const renderCell = useCallback((order: SelectOrder, columnKey: React.Key) => {
    const cellValue = order[columnKey as keyof Order];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKWigz5N0C8Mb5l2QCBuo9pQRHjSPeq19qA&s" }}
            description={order.phone}

            //@ts-ignore
            name={cellValue}
          >
            {order.name}
          </User>
        );
      case "quantity":
        return (
          <div className="flex flex-col">

            {/* @ts-ignore */}
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">{item.quantity}</p> */}
          </div>
        );
      case "created_at":
        return (
          <p>{order.created_at?.toLocaleDateString()}</p>
        );
      case "status":
        return (

          // @ts-ignore 
          < Chip className="capitalize" color={statusColorMap[order.status]} size="sm" variant="flat" >
            {/* @ts-ignore */}
            {cellValue}
          </Chip >
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit Order">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete Order">
              <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => deleteOrder(order.id)}>
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
      <TableBody items={orders}>
        {(item) => (
          <TableRow key={item.id}>
            {/* @ts-ignore */}
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>

  )
}
