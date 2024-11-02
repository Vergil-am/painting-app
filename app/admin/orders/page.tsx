import AdminOrdersTable from "@/components/admin/AdminOrdersTable"
import { getAllOrders } from "@/lib/actions/orders"

export default async function AdminOrdersPage() {
  const orders = await getAllOrders()
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <AdminOrdersTable orders={[]} />
    </div>
  )
}

