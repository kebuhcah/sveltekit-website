import { postsPerPage } from '$lib/config'
import postMetadata from "$lib/post-metadata.json"

const fetchPosts = async ({ offset = 0, limit = postsPerPage, category = '' } = {}) => {    
    const posts = await Promise.all(
        Object.entries(import.meta.glob('/src/lib/posts/**/*.md')).map(async ([path, resolver]) => {
            const { metadata } = await resolver()
            const pathParts = path.split('/')
            const slug = pathParts.slice(pathParts.indexOf('posts') + 1).join('/').slice(0, -3)
            const stats = postMetadata['.' + path];
            const {birthtime, mtime} = stats ?? {};
            return { ...metadata, slug, birthtime, mtime }
        })
    )

    let sortedPosts = posts.sort((a, b) => new Date(b.mtime ?? null) - new Date(a.mtime ?? null))

    if (category) {
        sortedPosts = sortedPosts.filter(post => post.categories.includes(category))
    }

    if (offset) {
        sortedPosts = sortedPosts.slice(offset)
    }

    if (limit && limit < sortedPosts.length && limit != -1) {
        sortedPosts = sortedPosts.slice(0, limit)
    }

    sortedPosts = sortedPosts.map(post => ({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        coverImage: post.coverImage,
        coverWidth: post.coverWidth,
        coverHeight: post.coverHeight,
        date: post.date,
        birthtime: post.birthtime, 
        mtime: post.mtime,
        categories: post.categories,
        hidden: post.hidden
    })).filter(post => post.hidden !== true)

    return {
        posts: sortedPosts
    }
}

export default fetchPosts