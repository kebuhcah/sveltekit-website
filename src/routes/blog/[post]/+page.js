import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
    try {
        console.log("TEST!")
        console.log(params)
        const post = await import(`../../../lib/posts/${params.post}.md`)
        console.log(post)

        return {
            PostContent: post.default,
            meta: { ...post.metadata, slug: params.post }
        }
    } catch (err) {
        throw error(404, err)
    }
}