"use client"
import { Table, TableHeader, TableColumn, TableBody, TableCell, TableRow } from "@nextui-org/table"
import { SelectOrder } from "@/db/schema"

export default function AdminOrdersTable({ orders }: { orders: SelectOrder[] }) {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Order Number</TableColumn>
        <TableColumn>Quantity</TableColumn>
        <TableColumn>Price</TableColumn>
        <TableColumn>Oder date</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No orders to display"}>
        {orders.map((order) => {
          return (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>

              <TableCell>1</TableCell>
              <TableCell>29.99$</TableCell>
              <TableCell>{order.created_at?.toDateString()}</TableCell>
              <TableCell>{order.status}</TableCell>
            </TableRow>
          )
        })}

      </TableBody>
    </Table>
  )
}

