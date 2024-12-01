import {MetadataRoute} from "next";

export default function robots():MetadataRoute.Robots{
    return{
        rules:{
            userAgent:"*", // Apply for all bots
            allow:[
                '/',
                '/lien-he',
                '/blog/*',
                '/ve-chung-toi',
                '/gioi-thieu',
                '/menu',
                '/su-kien',
                '/tuyen-dung',
            ],
            disallow:[
                '/api',
                'admin'
            ]
        },
        sitemap:'https://kaykafe.com/sitemap.xml'
    }
}
