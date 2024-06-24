



export function GET(request: Request) {
    const data = {
        response : "success"
    }
    return Response.json({data})
}


export function POST(request: Request) {
const data = {
        response : "Posted successfully"
    }
    return Response.json({data})
}