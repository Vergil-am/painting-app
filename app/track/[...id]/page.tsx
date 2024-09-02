import { getOrderById } from '@/lib/actions/orders'
import React from 'react'

export default async function Tracking({ params }: { params: { id: string } }) {
  const order = await getOrderById(params.id[0])
  console.log("order", order)
  return (
    <div>{params.id}</div>
  )
}

