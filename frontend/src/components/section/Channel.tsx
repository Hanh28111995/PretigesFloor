import { Container } from "../ui/Container";

const INSTAGRAM_POSTS = [
  "https://scontent.cdninstagram.com/v/t51.71878-15/563004097_825113613361440_2363895026196791734_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=0DlaZ_SCRGIQ7kNvwESH-EG&_nc_oc=AdpYK5mxwk3h_-2pZCoa21OkBgs6Y-HBIwwJ0R6sVN5nAMBakTrh76rp04khPoHiFQw&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=9u6uj6WYiojbrqUKfoXZ3w&_nc_tpa=Q5bMBQF09Y_duojq18zaDdZRpClEGUHP9p7RpswsXAJvN6HxJbovxHGaTRHbZ7glAwKHwoyFSEdHDmEF&oh=00_Af1R3yuMxMmbaRe9mc0_KV3EaXVx4Zz5eZLu0CjM89zGLg&oe=69DDFE5E",
  "https://scontent.cdninstagram.com/v/t51.71878-15/561633996_1329874135264837_8387695375757939835_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=sfb4CGtq8okQ7kNvwE19ipK&_nc_oc=AdosLUHgj9VOEkFy-QPU5ZpisYEFe7CoGeNxkSxy_4fjnod5_hSEEvLQzARg-jN8nNY&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=9u6uj6WYiojbrqUKfoXZ3w&_nc_tpa=Q5bMBQHEa7m44Zxo4WzrKoDpQqA44SkACc3WZyQNwukqmmVJ1iz_ZnemUmm8XnpZRwtl8SzFirCgrI65&oh=00_Af05bRubbWXtJwflhMUC_Wm83qdux3RZw4wIyUA-02BXdA&oe=69DDF6F5",
  "https://scontent.cdninstagram.com/v/t51.82787-15/520613493_18234196609290842_4827906265520268834_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=CPkGwTJJuNcQ7kNvwH_nDoE&_nc_oc=AdrerbF8ESRofRazgPzrfC_45oYz0OCgEsl67wtH7allZCk5PKmW24Nf6kLwiWBnw64&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=9u6uj6WYiojbrqUKfoXZ3w&_nc_tpa=Q5bMBQG9z-aaQof8GBERDxNKZZz-IxgthpIUR2zSIDb4u996g0hqo82tv1w5OQqHhR_wROIIIT4etTae&oh=00_Af37P-3_Z7M9LnH6P1X1TMbEaUjDZTdU2qDRgjLvIF6ayw&oe=69DE1978",
  "https://scontent.cdninstagram.com/v/t51.71878-15/520695980_1029310055670440_5274482668948038495_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=y_y4FnEKoZMQ7kNvwEGO1oX&_nc_oc=Adp_I3bNtLwFCD3LKrsfK3-0sv5cq0vY557wByr9us0NWIRZSENqOH8J5uz1PiFHtFg&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=9u6uj6WYiojbrqUKfoXZ3w&_nc_tpa=Q5bMBQHZIYWi876K-r0GAAi9cEq6LGZvmvkZ_b1fcOet8Wm1Ig5NmCByZ00n9t2mU8QKtOT6rYUKsO5f&oh=00_Af3eoHncXvUg_choazhxvqARHMp4jUxlIgxthsZNgkGAzg&oe=69DE262E",
  "https://scontent.cdninstagram.com/v/t51.82787-15/515370075_18232232299290842_7498914680416407903_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=St1PXCKadmUQ7kNvwH1ZnOd&_nc_oc=AdrbOztRxcvWrfPAGzphXu8tGDAH-j9ohOzlyoZ2Vxj71E_dQ0ZZyu7P3EORrItEmHA&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=9u6uj6WYiojbrqUKfoXZ3w&_nc_tpa=Q5bMBQFQiUq6XFgreTQRBs3-1fAo3_gBofuD8dCdoLjTNvJQpQcMMOcyHXgTQ36fc580hFrfCKVSvejS&oh=00_Af2V6aHkTOjo0uAT_kqLI6wK2mlS9EsiBnOB8xmkar0omQ&oe=69DDFA9D",
  "https://scontent.cdninstagram.com/v/t51.82787-15/504361138_18231789904290842_8887140715486144455_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=GuEBOYy6doMQ7kNvwFA_z18&_nc_oc=AdqksiRL99RTlxTlLICLaKivKFkU8GwUADEeRiwWIPp4uIyaaW_KO1c2uHCJdDDEpFg&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=9u6uj6WYiojbrqUKfoXZ3w&_nc_tpa=Q5bMBQHetqrQMqng4N2pjvNABZqvU3GkHWNmP9bADn187a9LROtCTKy6GZZmv6r6087_GMUIi6GY2SNF&oh=00_Af2GJVrkrnoPFa1v4PLwwG7wHb1GidOMFhgy4BzAmI3LzQ&oe=69DE0710"
];

export function Channel() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-widest text-gray-800 uppercase mb-2">
            INSTAGRAM
          </h2>
          <a 
            href="https://instagram.com/prestige_floors" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl text-accent font-semibold hover:text-[#b07554] transition-colors inline-block mb-3"
          >
            @prestige_floors
          </a>
          <p className="text-gray-500 max-w-lg mx-auto">
            Follow-us for the latest in flooring styles, ideas, inspiration
          </p>
        </div>
      </Container>
      
      {/* Instagram Grid (No container to stretch full width optionally, or standard row) */}
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
          {INSTAGRAM_POSTS.map((imgSrc, index) => (
            <a 
              key={index} 
              href="https://instagram.com/prestige_floors"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square group overflow-hidden block bg-gray-100"
            >
              {/* Fallback pattern/color if IG CDN expires */}
              <img 
                src={imgSrc} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none" 
                alt="Instagram Post"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "//www.prestigefloor.com.au/cdn/shop/files/welcome-main.png?v=1759776333&width=400";
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}