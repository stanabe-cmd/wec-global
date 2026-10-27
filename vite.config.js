import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';

// 公開するページ一覧(ページを追加したらここにも追加)
const pages = {
    main: 'index.html',
    caseStudyAirport: 'case-study-airport.html',
    caseStudySuncargo: 'case-study-suncargo.html',
    caseStudyFood: 'case-study-food.html',
    caseStudyArch: 'case-study-arch.html',
    download: 'download.html',
    thanks: 'thanks.html',
};

// robots.txt / sitemap.xml を .env の VITE_SITE_URL から自動生成
function seoFiles(siteUrl) {
    return {
        name: 'seo-files',
        generateBundle() {
            const today = new Date().toISOString().slice(0, 10);
            const urls = Object.values(pages)
                .filter((p) => p !== 'thanks.html')
                .map((p) => {
                    const loc = p === 'index.html' ? `${siteUrl}/` : `${siteUrl}/${p}`;
                    const priority = p === 'index.html' ? '1.0' : '0.8';
                    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
                })
                .join('\n');
            this.emitFile({
                type: 'asset',
                fileName: 'sitemap.xml',
                source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
            });
            this.emitFile({
                type: 'asset',
                fileName: 'robots.txt',
                source: `User-agent: *\nAllow: /\nDisallow: /thanks.html\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
            });
        },
    };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const siteUrl = (env.VITE_SITE_URL || '').replace(/\/$/, '');
    return {
        plugins: [seoFiles(siteUrl)],
        build: {
            rollupOptions: {
                input: Object.fromEntries(
                    Object.entries(pages).map(([k, p]) => [k, resolve(__dirname, p)])
                ),
            },
        },
    };
});
