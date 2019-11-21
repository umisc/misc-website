import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Gallery } from 'gatsby-theme-gallery'

import '../styles/gallery.sass'

const GalleryPage = () => {
    return (
        <Layout>
            <SEO title="Gallery" />
            <div className="gallery-container">
                <Gallery />
            </div>
        </Layout>
    )

} 
export default GalleryPage
