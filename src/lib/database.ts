// src/lib/database.ts
import { cache } from 'react'

// Định nghĩa Interface
export interface MenuItem {
    id: number
    name: string
    description: string
    price: number
    category: string
    image: string
}

export interface BlogPost {
    id: number
    title: string
    slug: string
    content: string
    author: string
    publishedAt: Date
    thumbnail: string
}

export interface Event {
    id: number
    title: string
    slug: string
    date: Date
    description: string
    location: string
    thumbnail: string
}

// Mock Data
const MENU_ITEMS: MenuItem[] = [
    {
        id: 1,
        name: 'Espresso',
        description: 'Cà phê đậm đà, tinh tế',
        price: 35000,
        category: 'Cà Phê Đen',
        image: '/images/espresso.jpg'
    },
    {
        id: 2,
        name: 'Cappuccino',
        description: 'Cà phê sữa béo mịn',
        price: 45000,
        category: 'Cà Phê Sữa',
        image: '/images/cappuccino.jpg'
    }
]

const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        title: 'Bí Mật Của Những Hạt Cafe Ngon',
        slug: 'bi-mat-hat-cafe-ngon',
        content: 'Nội dung chi tiết về cafe...',
        author: 'Nguyễn Văn A',
        publishedAt: new Date('2024-01-15'),
        thumbnail: '/images/blog/cafe-secrets.jpg'
    }
]

const EVENTS: Event[] = [
    {
        id: 1,
        title: 'Ngày Hội Cafe Nghệ Thuật',
        slug: 'ngay-hoi-cafe-nghe-thuat',
        date: new Date('2024-06-15'),
        description: 'Sự kiện trải nghiệm cafe chuyên sâu',
        location: 'Hà Nội',
        thumbnail: '/images/events/cafe-art.jpg'
    }
]

// Các hàm truy vấn với cache
export const getMenuItems = cache(async (category?: string) => {
    // Mô phỏng delay và query
    await new Promise(resolve => setTimeout(resolve, 100))

    if (category) {
        return MENU_ITEMS.filter(item => item.category === category)
    }

    return MENU_ITEMS
})

export const getFeaturedMenu = cache(async () => {
    await new Promise(resolve => setTimeout(resolve, 100))
    return MENU_ITEMS.slice(0, 2)
})

export const getBlogPosts = cache(async (limit?: number) => {
    await new Promise(resolve => setTimeout(resolve, 100))

    return limit ? BLOG_POSTS.slice(0, limit) : BLOG_POSTS
})

export const getBlogPostBySlug = cache(async (slug: string) => {
    await new Promise(resolve => setTimeout(resolve, 100))

    return BLOG_POSTS.find(post => post.slug === slug)
})

export const getEvents = cache(async (limit?: number) => {
    await new Promise(resolve => setTimeout(resolve, 100))

    return limit ? EVENTS.slice(0, limit) : EVENTS
})

export const getEventBySlug = cache(async (slug: string) => {
    await new Promise(resolve => setTimeout(resolve, 100))

    return EVENTS.find(event => event.slug === slug)
})

// Hàm thêm/sửa/xóa (mô phỏng)
export async function createMenuItem(item: Omit<MenuItem, 'id'>) {
    const newItem = {
        ...item,
        id: MENU_ITEMS.length + 1
    }
    MENU_ITEMS.push(newItem)
    return newItem
}
