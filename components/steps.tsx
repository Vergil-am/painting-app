import React from 'react'
import Step from './step'
import { Button } from '@nextui-org/button'
import { BrushIcon, BuyIcon, FireIcon, ShipIcon } from './icons'

export default function Steps() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 md:py-20  lg:py-32">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How it works?</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
          Follow our step by step process
        </p>
      </div>
      <div className="mt-12 space-y-8">
        <Step title="Order Your Kit" text="Purchase your pottery kit online or in-store." icon={<BuyIcon />} />
        <Step title="Paint at Home" text="Unleash your creativity and paint your pottery piece." icon={<BrushIcon />} />
        <Step title="Glaze and Fire" text="Return your painted piece to us for professional glazing and firing." icon={<FireIcon />} />
        <Step title="Pick Up or Ship" text="Receive notifications as your piece progresses through each stage. Pick up in-store or have it shipped to your home." icon={<ShipIcon />} />
      </div>
    </section>
  )
}

