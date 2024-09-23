export async function getServicesData(slug: string) {
    const res = await fetch(`http://localhost:1337/api/services?filters[slug]=${slug}&populate=title.Add_Item.image`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch service data');
    }
    const data = await res.json();
    return data.data[0].attributes;
}

export async function getAboutUsData(slug: string) {
    const res = await fetch(`http://localhost:1337/api/about-uses?filters[slug]=${slug}&populate=*`);
    if (!res.ok) {
        throw new Error('Failed to fetch event data');
    }
    const data = await res.json();
    return data.data
}

export async function getNewsEventData(query: string, page: number, pageSize: number) {
    const res = await fetch(`http://localhost:1337/api/blog-events?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[title][$contains]=${query}&sort=start:desc`, { next: { revalidate: 60 } });
    if (!res.ok) {
        throw new Error('Failed to fetch event data');
    }
    const data = await res.json();
    return data;
}

export async function getRelatedEvents() {
    const res = await fetch('http://localhost:1337/api/blog-events?populate=thumbnail&sort=start:desc', { next: { revalidate: 60 } })
    if (!res.ok) {
        throw new Error('Failed to fetch related events')
    }

    const data = await res.json()
    return data
}

export async function getEventIdData(id: string) {
    const res = await fetch(`http://localhost:1337/api/blog-events/${id}?populate=*`);
    if (!res.ok) {
        throw new Error('Failed to fetch event data');
    }
    const data = await res.json();
    return data.data
}

export async function getNewsPublicitiesData(query: string, page: number, pageSize: number) {
    const res = await fetch(`http://localhost:1337/api/blog-publicities?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[title][$contains]=${query}&sort=start:desc`, { next: { revalidate: 60 } })
    if (!res.ok) {
        throw new Error('Failed to fetch event data')
    }
    const data = await res.json()

    return data
}

export async function getNewsIdData(id: string) {
    const res = await fetch(`http://localhost:1337/api/blog-publicities/${id}?populate=*`, { next: { revalidate: 60 } })
    if (!res.ok) {
        throw new Error('Failed to fetch event data')
    }
    const data = await res.json();
    return data.data;
}

export async function getRelatedNews() {
    const res = await fetch('http://localhost:1337/api/blog-publicities?populate=thumbnail&sort=start:desc', { next: { revalidate: 60 } })
    if (!res.ok) {
        throw new Error('Failed to fetch related events')
    }

    const data = await res.json()

    return data
}

export async function getAboutUsHomeData() {
    const res = await fetch('http://localhost:1337/api/show-about-inno-sci-home?populate=about_us.image1,about_us.image2');
    if (!res.ok) {
        throw new Error('Failed to fetch blog data');
    }
    const data = await res.json();
    return data.data.attributes.about_us.data;
}

export async function getServicesHomeData() {
    const res = await fetch('http://localhost:1337/api/show-service?populate=services.image,services.title', { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch blog data');
    }
    const data = await res.json();
    return data.data.attributes.services.data;
}

export async function getBlogData() {
    const res = await fetch('http://localhost:1337/api/blog-news-home?populate=blog_events.thumbnail,blog_publicities.thumbnail', { next: { revalidate: 60 } });
    if (!res.ok) {
        throw new Error('Failed to fetch blog data');
    }
    return res.json();
}

export async function getHeroBannerData() {
    const res = await fetch('http://localhost:1337/api/show-hero-banner?populate=hero_banners.image', { next: { revalidate: 60 } });
    if (!res.ok) {
        throw new Error('Failed to fetch HeroBanner data');
    }

    return res.json();
}

export async function getMenuPersonnelData() {
    const res = await fetch('http://localhost:1337/api/add-menu-personnel?populate=personnels,about_us,services.title');
    if (!res.ok) {
        throw new Error('Failed to fetch menu data');
    }
    return res.json();
}

export async function getLogoData() {
    const res = await fetch('http://localhost:1337/api/logo?populate=*')
    if (!res.ok) {
        throw new Error('Failed to fetch related events')
    }

    const data = await res.json()

    return data
}

export async function getPartnerData() {
    const res = await fetch('http://localhost:1337/api/show-partner?populate=blog_partners.image', { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch blog data');
    }
    return res.json();
}