"use client"
import { Card, CardBody } from "@nextui-org/card"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"



const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]


export default function Linechart() {
  return (
    <Card className="w-[1000px] h-[700px]">
      <CardBody className="justify-center items-center">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            top: 20,
            left: 12,
            right: 12,
          }}
          width={900}
          height={600}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          {/* <ChartTooltip */}
          {/*   cursor={false} */}
          {/*   content={<ChartTooltipContent indicator="line" />} */}
          {/* /> */}
          <Line
            dataKey="desktop"
            type="natural"
            // stroke="var(--color-desktop)"
            stroke="#2563eb"
            strokeWidth={2}
            dot={{
              // fill: "var(--color-desktop)",
              fill: "#2563eb",
            }}
            activeDot={{
              r: 6,
            }}
          >
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Line>
        </LineChart>
      </CardBody>
    </Card>
  )
}

