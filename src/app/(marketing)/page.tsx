// app/page.tsx
import {Metadata} from 'next'
import {getFeaturedMenu} from "@/lib/database";
import {OpenGraphWebsiteExtended} from "@/types/openGraph";


export const metadata: Metadata = {
    title: 'Quán Cafe Chuyên Nghiệp',
    description: 'Trải nghiệm cafe đích thực',
    openGraph: {
        title: 'Quán Cafe Chuyên Nghiệp',
        description: 'Không gian cafe sang trọng',
        images: [{ url: '/images/og-image.avif' },{ url: '/images/og-image.jpeg' }],
        type:'website',
        app_id: '925130949118763',
    } as OpenGraphWebsiteExtended
}

export default async function HomePage() {
    // Server Component - Fetch data server-side
    const featuredMenu = await getFeaturedMenu()
    console.log(featuredMenu)
    return (
        <main>
            <section className="hero">
                <h1>Cafe Đích Thực</h1>
                <p>Hương vị từ những hạt cafe nguyên chất</p>
            </section>
        </main>
    )
}
