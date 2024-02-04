import glob from "glob"
import fs from "fs"

const posts = glob.sync('./src/lib/posts/**/*.md')

const metadata = {}

for (const path of posts) {
    const stats = fs.statSync(path)
    const {birthtime, mtime} = stats

    metadata[path] = {birthtime, mtime}
}

console.log(metadata)

fs.writeFileSync('src/lib/post-metadata.json', JSON.stringify(metadata, null, 1))