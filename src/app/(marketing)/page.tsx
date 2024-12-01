// app/page.tsx
import {getFeaturedMenu} from "@/lib/database";


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
