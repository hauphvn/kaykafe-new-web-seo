// app/api/menu/route.ts
import { NextResponse } from 'next/server'
import { getMenuItems } from '@/lib/database'

export async function GET() {
    try {
        const menuItems = await getMenuItems()
        return NextResponse.json(menuItems)
    } catch (error) {
        return NextResponse.json(
            { error: 'Không thể tải menu' },
            { status: 500 }
        )
    }
}

export async function POST() {
    // Xử lý thêm menu item (nếu cần)
}
