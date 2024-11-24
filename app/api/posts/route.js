// url: http://localhost:3000/api/posts
import client from "../../libs/prismadb"
import { NextResponse } from "next/server"

export const POST = async (req) => {
    try {
        // parse the request body to JSON format
        const body = await req.json()
        // Extract title and description from the request body
        const { title, description } = body
        // use Prisma client to create a new post with the title and description
        const newPost = await client.post.create({
            data: {
                title,
                description
            }
        })
        // return the new post in JSON format
        return NextResponse.json(newPost)
    } catch (error) {
        return NextResponse.error({
            status: 500
        }, {message: error.message})
    }
}

export const GET = async () => {

    try {
        const posts = await client.post.findMany()
        return NextResponse.json(posts)
        
    } catch (error) {
        return NextResponse.json({status: 500}, {message: error.message})
    }
}
