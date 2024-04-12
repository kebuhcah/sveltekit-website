export const load = async ({ url, fetch }) => {
    const postRes = await fetch(`${url.origin}/api/posts.json`)
    const posts = await postRes.json()

    const totalRes = await fetch(`${url.origin}/api/posts/count`)
    const total = await totalRes.json()

    let uniqueCategories = {}

    posts.forEach(post => {
        post.categories.forEach(category => {
            if (uniqueCategories.hasOwnProperty(category)) {
                uniqueCategories[category].count += 1
            } else {
                uniqueCategories[category] = {
                    title: category,
                    count: 1
                }
            }
        })
    })

    const sortedUniqueCategories =
        Object.values(uniqueCategories).sort((a, b) => a.count > b.count)

    return { posts, total, uniqueCategories: sortedUniqueCategories }
}