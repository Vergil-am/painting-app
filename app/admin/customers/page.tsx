import CustomersTable from "@/components/admin/CustomersTable"
import { getAllUsers } from "@/lib/actions/clients"

export default async function CustomersPage() {
  const customers = await getAllUsers()
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Customers</h1>
      <CustomersTable customers={customers ?? []} />
    </div>
  )
}

