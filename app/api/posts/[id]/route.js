// http://localhost:3000/api/posts

import client from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async (request, {params}) => {

    try {
        const {id} = params

        const posts = await client.post.findUnique({
            where: {
                id
            }
        })
        if(!posts){
            return NextResponse.error({
                status: 404
            }, {message: "Post not found"})
        }
        return NextResponse.json(posts)
    } catch (error) {
        return NextResponse.error({
            status: 500
        }, {message: error.message})
    }

}

export const PATCH = async (request, {params}) => {

    const {id} = params
    const body = await request.json()
    const {title, description} = body

    try {
        const updatePost = await client.post.update({
            where: {
                id
            },
            data: {
                title,
                description
            }
        })
        if(!updatePost){
            return NextResponse.error({
                status: 404
            }, {message: "Post not found"})
        }
        return NextResponse.json(updatePost)
        
    } catch (error) {
        return NextResponse.error({
            status: 500
        }, {message: error.message})
        
    }
}

export const DELETE = async (request, {params}) => {
    const {id} = params
    try {
        const posts = await client.post.delete({
            where: {
                id
            }
        })
        return NextResponse.json("Post Deleted",posts)

    } catch (error) {
        return NextResponse.error({
            status: 500
        }, {message: error.message})
    }
}