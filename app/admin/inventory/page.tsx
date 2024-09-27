import InventoryTable from "@/components/admin/AdminInventoryTable"
import CreateItem from "@/components/admin/createItem"
import { SelectInventory } from "@/db/schema"
import { getInventory } from "@/lib/actions/inventory"

export default async function InventoryPage() {
  const inventory: SelectInventory[] = await getInventory() ?? []
  return (

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between w-full">
        <h1 className="text-3xl font-bold mb-6">Inventory</h1>
        <CreateItem />
      </div>
      <InventoryTable inventory={inventory} />
    </div>
  )
}

