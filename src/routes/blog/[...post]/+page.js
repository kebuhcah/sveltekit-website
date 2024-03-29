import { error } from '@sveltejs/kit'
import postMetadata from "$lib/post-metadata.json"

export const load = async ({ params }) => {
    try {
        const postDepth = params.post.split('/').length - 1
        const fsMetadata = postMetadata[`./src/lib/posts/${params.post}.md`] ?? {}

        // why this is needed: https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
        if (postDepth == 0) {
            const post = await import(`../../../lib/posts/${params.post}.md`).catch((e) => ({ slug: e, metadata: {} }))
            console.log(post)

            return {
                PostContent: post.default,
                meta: { ...post.metadata, ...fsMetadata, slug: params.post }
            }
        } else if (postDepth == 1) {
            const [firstPart, secondPart] = params.post.split('/')
            const post = await import(`../../../lib/posts/${firstPart}/${secondPart}.md`).catch((e) => ({ slug: e, metadata: {} }))

            return {
                PostContent: post.default,
                meta: { ...post.metadata, ...fsMetadata, slug: params.post }
            }
        }

    } catch (err) {
        throw error(404, err)
    }
}