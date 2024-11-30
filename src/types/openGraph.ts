interface OpenGraphImage {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
}

interface OpenGraphWebsite {
    title: string;
    description: string;
    url: string;
    type: 'website' | 'article' | 'video' | string; // Thêm các loại khác nếu cần
    images: OpenGraphImage[];
    // Thêm các thuộc tính khác nếu cần
}
export interface OpenGraphWebsiteExtended extends OpenGraphWebsite {
    app_id: string;
}
