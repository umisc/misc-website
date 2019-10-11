module.exports = {
    pathPrefix: 'misc-website',
    siteMetadata: {
        title: 'MISC - University of Melbourne Information Security Club',
        description: 'MISC\'s website',
        author: 'josephsurin',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'events',
                path: `${__dirname}/src/events`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'MISC - University of Melbourne Information Security Club',
                short_name: 'MISC',
                start_url: '/',
                background_color: '#4f7b85',
                theme_color: '#4b8b9a',
                display: 'minimal-ui',
                icon: `src/images/misc-icon.svg`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            noInlineHighlight: true
                        }
                    },
                    {
                        resolve: 'gatsby-remark-katex',
                        options: {
                            displayMode: false
                        }
                    },
                    'gatsby-remark-copy-linked-files'
                ]
            }
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-transition-link'
    ]
}
