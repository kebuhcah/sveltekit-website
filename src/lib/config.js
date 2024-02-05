/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 **/

export const siteTitle = 'Sun Language Theories'
export const siteDescription = 'A website about languages, technology and culture'
export const siteURL = 'sunlanguage.xyz'
export const siteLink = 'https://sunlanguage.xyz'
export const siteAuthor = 'Kevin Sun'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.) TODO: CHECK THIS
export const navItems = [
    {
        title: 'Blog',
        route: '/blog'
    }, {
        title: 'About',
        route: '/about'
    }, {
        title: 'Contact',
        route: '/contact'
    },
]