"use client"
import { Table, TableHeader, TableColumn, TableBody, TableCell, TableRow } from "@nextui-org/table"
import { SelectInventory } from "@/db/schema"

export default function InventoryTable({ inventory }: { inventory: SelectInventory[] }) {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Quantity</TableColumn>
        <TableColumn>Threshold</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No items to display"}>
        {inventory.map((item) => {
          return (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.item_name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.threshold}</TableCell>
            </TableRow>
          )
        })}

      </TableBody>
    </Table>
  )
}

