import { NextResponse } from "next/server"




export function GET(request: Request) {
  const data = {
    response: "success"
  }
  return NextResponse.json({ data })
}


export function POST(request: Request) {
  const data = {
    response: "Posted successfully"
  }
  return NextResponse.json({ data })
}
