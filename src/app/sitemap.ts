// A site map for coffee shop with home, menu, contact, about page

import {MetadataRoute} from "next";

export default function sitemap():MetadataRoute.Sitemap{
return [
    // Main page
    {
        url: 'https://kaykafe.com',
        changeFrequency: 'weekly',
        lastModified: new Date(),
        priority: 1,
    },
    {
        url:'https://kaykafe.com/menu',
        changeFrequency: 'weekly',
        lastModified: new Date(),
        priority: 0.9
    },
    {
        url:'https://kaykafe.com/ve-chung-toi',
        changeFrequency: 'monthly',
        lastModified: new Date(),
        priority: 0.8
    },
    {
        url:'https://kaykafe.com/su-kien',
        changeFrequency: 'weekly',
        lastModified: new Date(),
        priority: 0.9
    },
    {
        url:'https://kaykafe.com/tuyen-dung',
        changeFrequency: 'weekly',
        lastModified: new Date(),
        priority: 0.9
    },
    {
        url:'https://kaykafe.com/lien-he',
        changeFrequency: 'yearly',
        lastModified: new Date(),
        priority: 0.7
    }

]
    }
