"use client"
import { Table, TableHeader, TableColumn, TableBody, TableCell, TableRow } from "@nextui-org/table"
import { SelectClient } from "@/db/schema"

export default function CustomersTable({ customers }: { customers: SelectClient[] }) {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>Phone number</TableColumn>
        <TableColumn>Address</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No customers to display"}>
        {customers.map((customer) => {
          return (
            <TableRow key={customer.id}>
              <TableCell>{customer.id}</TableCell>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.address}</TableCell>
            </TableRow>
          )
        })}

      </TableBody>
    </Table>
  )
}

