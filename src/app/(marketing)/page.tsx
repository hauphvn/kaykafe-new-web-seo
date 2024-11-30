// app/page.tsx
import {Metadata} from 'next'
import {getFeaturedMenu} from "@/lib/database";
export const metadata: Metadata = {
    title: 'Quán Cafe Chuyên Nghiệp',
    description: 'Trải nghiệm cafe đích thực',
    openGraph: {
        title: 'Quán Cafe Chuyên Nghiệp',
        description: 'Không gian cafe sang trọng',
        images: [{ url: '/images/og-image.avif' }]
    }
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
