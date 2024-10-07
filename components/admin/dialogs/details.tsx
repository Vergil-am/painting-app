import React from 'react'
import { Separator } from '@/components/ui/Separator'
import { SelectClient, SelectInventory, SelectOrder, inventory } from '@/db/schema'


interface Inventory extends SelectInventory { }
interface Client extends SelectClient { }
interface Order extends SelectOrder { }

export default function Details({ details, type }: { details: Inventory | Client | Order, type: "inventory" | "orders" | "customers" }) {
  let Details

  switch (type) {
    case 'inventory': {
      Details = details as Inventory
      return (
        <div className="grid gap-6 p-6">
          <div className="flex items-center gap-4">
            <div className="grid gap-1">
              <div className="text-lg font-medium">{Details.item_name}</div>
              <div className="text-sm text-muted-foreground">{Details.quantity}</div>
            </div>
          </div>
        </div>
      )
    }
    case 'orders': {
      const order = details as Order
      return (<div className="grid gap-6 p-6">
        <div className="flex items-center gap-4">
          <div className="grid gap-1">
            <div className="text-lg font-medium">{order.name}</div>
            <div className="text-sm text-muted-foreground">Order ID: {order.id}</div>
          </div>
        </div>
        <Separator />
        <div className="grid gap-2">
          <div className="text-sm font-medium text-muted-foreground">Address</div>
          <div>
            {order.address}
          </div>
        </div>
        <div className="grid gap-2">
          <div className="text-sm font-medium text-muted-foreground">Phone</div>
          <div>{order.phone}</div>
        </div>
        <div className="grid gap-2">
          <div className="text-sm font-medium text-muted-foreground">Email</div>
          <div>{order.email}</div>
        </div>
        <div className="grid gap-2">
          <div className="text-sm font-medium text-muted-foreground">Status</div>
          <div>
            {order.status}
          </div>
          <div className="grid gap-2">
            <div className="text-sm font-medium text-muted-foreground">Customer ID</div>
            <div>
              {order.client_id}
            </div>
            <div className="grid gap-">
              <div className="text-sm font-medium text-muted-foreground">Ordered on </div>
              <div>
                {order.created_at?.toLocaleDateString()} | {order.created_at?.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </div>)
    }
    case 'customers': {
      Details = details as Client
      return (<div className="grid gap-6 p-6">
        <div className="flex items-center gap-4">
          <div className="grid gap-1">
            <div className="text-lg font-medium">{Details.name}</div>
            <div className="text-sm text-muted-foreground">{Details.id}</div>
          </div>
        </div>
        <Separator />
        <div className="grid gap-2">
          <div className="text-sm font-medium text-muted-foreground">Address</div>
          <div>
            {Details.address}
          </div>
        </div>
        <div className="grid gap-2">
          <div className="text-sm font-medium text-muted-foreground">Phone</div>
          <div>{Details.phone}</div>
        </div>
        <div className="grid gap-2">
          <div className="text-sm font-medium text-muted-foreground">Email</div>
          <div>{Details.email}</div>
        </div>

      </div>)
    }
  }
}

