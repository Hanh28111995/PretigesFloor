import { Container } from "@/components/ui/Container";
import { PartnerCarousel } from "../PartnerCarousel";

const INSTAGRAM_POSTS = [
  {
    image: "https://scontent.cdninstagram.com/v/t51.71878-15/563004097_825113613361440_2363895026196791734_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=IdEbc6IM02YQ7kNvwFJzW5M&_nc_oc=Ado-7DJNldZM9mwIzCx1JnlBUUFKjI-8sNeTaup-lsDWLBnB_1MwprhPLvVhXF4RTj0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=onEK5HncAzMdI3pUD_8OAA&_nc_tpa=Q5bMBQFmZMZoYmZsBtzcWKecwP2SLa_CXISGYXho0VKKK8sldWnJKWyBqb2yh6cukYfNwa07G0iPJtcM&oh=00_Af1W6_2y6tNUO7WXYnscTF1Tnc_-5aNVV-y9eiO3F0uEpw&oe=69E1F2DE",
    link: "https://www.instagram.com/reel/DPsFmhAEmD4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    image: "https://scontent.cdninstagram.com/v/t51.71878-15/561633996_1329874135264837_8387695375757939835_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=cBTP9poahzEQ7kNvwE6-qpu&_nc_oc=AdpBz5bqeP0Uc9N9CTx94hzDj6QXhq_Ux_9bRab1OI742mUVWC7YDguoy6HZk1YqGh8&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=onEK5HncAzMdI3pUD_8OAA&_nc_tpa=Q5bMBQHLDBwqD34IdudY8MOdS6wZizyiu5w_2ZGjb3Q77asyuaj6by3MLIkaXumd1tICAdWrVwh4XolJ&oh=00_Af0Z_GDqo_eDMYo4SRFKzHMLONkGo3t1xtsNc_fAFNg0Lw&oe=69E1EB75",
    link: "https://www.instagram.com/reel/DPph_XQElEl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    image: "https://scontent.cdninstagram.com/v/t51.82787-15/520613493_18234196609290842_4827906265520268834_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=PmVQOhbs6UEQ7kNvwFoLV9O&_nc_oc=AdplLSJYLc2Qc74w9og3LqoM12nRCqn0uFH6yp36yRZGLjqPerEx5T9rCDyd0Ner2Og&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=onEK5HncAzMdI3pUD_8OAA&_nc_tpa=Q5bMBQH1mNNX380bTN0TpiHuWMO0VVgIkDs8G02eTSO5GyC8Iw-P9-Pk8jf0eqrcqC82JPomMsomGkTs&oh=00_Af3cthdItXSf7JwCD2ZOCG56AAylNbfcA6EHP6VwglY-LQ&oe=69E1D5B8",
    link: "https://www.instagram.com/reel/DMWoBStyQHG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    image: "https://scontent.cdninstagram.com/v/t51.71878-15/520695980_1029310055670440_5274482668948038495_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=6gZmTlPDJNMQ7kNvwFhRYHH&_nc_oc=Adr7Gtb3_kENwnm7clrKuA_KG8L61muyaq5ThKSFvzFTIhdnWysOT-FR2sBHsBbU8h4&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=onEK5HncAzMdI3pUD_8OAA&_nc_tpa=Q5bMBQG_dlmqOkIFpO7x84J347UK5d0TCmVRR1BItU-NftMO97FV9lZOdNabH-xtA89mYoo3i2Q4dogF&oh=00_Af02uWsyAcBLXgjob-zo41p-ctTPS4CzquCCdu_v-vyMhw&oe=69E1E26E",
    link: "https://www.instagram.com/reel/DMNTDQ-SHlX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    image: "https://scontent.cdninstagram.com/v/t51.82787-15/515370075_18232232299290842_7498914680416407903_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=jPUSSV-Oo-sQ7kNvwGBqfDL&_nc_oc=AdokfXLbG7DgApM1S6CQEM7p1UqMqIs8NWvC7yZMGoa_NksmNGN1tprmXBD8RMv3geQ&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=onEK5HncAzMdI3pUD_8OAA&_nc_tpa=Q5bMBQG1lVZ0NdodemF4mxUTblqwkXsaez0godmqEGGVT-c5LfsBg74PV-dMY0WkQH0s9HLZwIavYTx_&oh=00_Af3BtIKVFL8kwdhhfHmFXPGNkTNSpm7KpLfr959T5poJCQ&oe=69E1EF1D",
    link: "https://www.instagram.com/p/DLj1uzCxwMQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    image: "https://scontent.cdninstagram.com/v/t51.82787-15/504361138_18231789904290842_8887140715486144455_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=4yN5kwRING4Q7kNvwFo_GwT&_nc_oc=Adq32M7vyzA5Z7ZaKaLG2vxosKgmpe14UaFtoQVQhyTUL4M4xZLFkGXUXxcDf25p7Bo&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=onEK5HncAzMdI3pUD_8OAA&_nc_tpa=Q5bMBQGpHtk-Hrxjm3HLf4zztx9IiWADw2SJCuKMzwJVzis_wFTI6A9jvvtMSQyYIx7aEjUnT_GuIrOz&oh=00_Af1IFXrkoBQruDr6vzGAyTFCZDor8kNAK9QoW9bH0ySL4Q&oe=69E1FB90",
    link: "https://www.instagram.com/p/DLYi-Y1hKg5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    image: "https://scontent.cdninstagram.com/v/t51.75761-15/502992231_18229465279290842_1922298953106791203_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=qf1vX-5D_1kQ7kNvwHEq6Aw&_nc_oc=AdppBP87kFMqg-C_jBSB9bQYd5IrHwyK3ANlqlwxmEUFfcqS6nM5ggo4pvlfBLh07vQ&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=onEK5HncAzMdI3pUD_8OAA&_nc_tpa=Q5bMBQGeQPDabKjp7tdYypKOtyMmJAQUrF2IM9SQTYCL2M2HMT8KhGL_n3neXI9T4PqPYfMbP777MjbH&oh=00_Af3mk6ULoQFhA06QQaY5MQg7vthLcSN6fhhR5v1JZ55jCw&oe=69E1E748",
    link: "https://www.instagram.com/p/DKdvgYnRtQb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    image: "https://scontent.cdninstagram.com/v/t51.71878-15/498551553_1385278349291908_7517161432572712938_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=HeySzHUaP-cQ7kNvwEXg3Pf&_nc_oc=AdoWXoeDguwtd3cavojCDP3zANJ3OM-JQUlZFWbc9MhfgCGmnsffOVgSuEGizCu2Kr4&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=onEK5HncAzMdI3pUD_8OAA&_nc_tpa=Q5bMBQEKJF1NKYibbbobO8ngilNWukkfLTC41QnUoaWBfRLGGjUObN5x9nOMh_CJmQyjCx1Kbst5cdTN&oh=00_Af0aGQ15_Y7eSXVH4WWA3tqK9a9RLWxFO_iTnevC0fTjZQ&oe=69E209A9",
    link: "https://www.instagram.com/reel/DJ5qY4dSs5q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    image: "https://scontent.cdninstagram.com/v/t51.71878-15/497480108_1057021809672580_1522752607170126613_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=7Ah5qknZCooQ7kNvwEbsitY&_nc_oc=AdouwP8VdmJe1GuLpEpcsrX3mXH6aPBMVtqnp5Dq3zsqv6f6QI8Mrnii9wz_p4b7DQU&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=onEK5HncAzMdI3pUD_8OAA&_nc_tpa=Q5bMBQF82qkUMB05Q7BcAsiTMmA8JY39TuWgc7YDMU_XWolXVWG6NEgBluqeuTqbMNmnjRKnkzQVoTrM&oh=00_Af0tzzlVNLhJewsb4JFvMnvJTYkEtISFNg6PE9ajPAGGTw&oe=69E1F408",
    link: "https://www.instagram.com/reel/DJn1MqlxYTv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    image: "https://scontent.cdninstagram.com/v/t51.75761-15/487331837_18223043716290842_1549775551818065890_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=SV5Ji5XjlwYQ7kNvwGqQFYY&_nc_oc=Ado6D3ID4kJQEzmEy_w6R5B-XINAstnbIxUIZPDCNEdaDFgx6tMXQ6TmsHLFxF_AsEY&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=onEK5HncAzMdI3pUD_8OAA&_nc_tpa=Q5bMBQEBOjGvT7nnFXuqniMWAb2ChjgKIDxzv8vYiiXkhftrY7Icpu_id9rmMnsEwS9S2-F1BoTY4dgq&oh=00_Af109X0rMwJzYScDZ6BLP7kZizYMVJ7TkeKTJyhAJEVx6w&oe=69E1E3FA",
    link: "https://www.instagram.com/reel/DH2jlVJxXRz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    image: "https://scontent.cdninstagram.com/v/t51.71878-15/472676274_1400628064243382_8560862180056217895_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=XFNU6LckY68Q7kNvwEYtCg9&_nc_oc=AdohyOYf1_goSzrI2wWNGz7kNeUQhWipj_33_a8FmYxiQ0OBNIFzqIhL5OcimPUoXJE&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=onEK5HncAzMdI3pUD_8OAA&_nc_tpa=Q5bMBQHiD0segutdSUBtfONEGqwJ1E95VZj90tETfIxpnK3M3mKDqQmnJ3yutp1d47CtJ3NpL6swRhw2&oh=00_Af0MuOtgOT_e4khzr95q3XQUpXqHsJjzdMiIGm9DPgH1pw&oe=69E1F1E2",
    link: "https://www.instagram.com/reel/DGCtwpDy9fA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    image: "https://scontent.cdninstagram.com/v/t51.75761-15/470898270_18212377171290842_4025828278620515331_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=lq0cQ4HGkjAQ7kNvwGgGJrw&_nc_oc=AdpJuQsVyPYt4nV2JeVYK5xewgMMVeOkia2OsHh1lwje5ZfDyE0T-w-gRoXMKr37YqM&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=onEK5HncAzMdI3pUD_8OAA&_nc_tpa=Q5bMBQEV-afKLRmWaGfDNYGkQWQVgWCyMWHj0-EKrYE5Y4fIJmXVpnm8t1RV7k_Xsj60_-M4QgLH5Q-7&oh=00_Af1W_fZn2iK3v_L5dEwB56zbl_552BUAmUUmRjvpvE_oCw&oe=69E1F343",
    link: "https://www.instagram.com/reel/DD0Nr16zOcH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  }
];

export function Channel() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      <Container>
        {/* Header Section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-50%] w-[300px] max-w-[300px] h-[220px] p-[5px_30px] bg-white z-[1] text-center shadow-lg shadow-gray-500/50 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-widest text-gray-800 uppercase mb-2">
            INSTAGRAM
          </h2>
          <a
            href="https://instagram.com/prestige_floors"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-amber-600 font-semibold hover:text-[#b07554] transition-colors inline-block mb-3"
          >
            @prestige_floors
          </a>
          <p className="text-gray-500 max-w-lg mx-auto">
            Follow-us for the latest in flooring styles, ideas, inspiration
          </p>
        </div>
      </Container>

      {/* Instagram Grid */}
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
          {INSTAGRAM_POSTS.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square group overflow-hidden block bg-gray-100"
            >
              <img
                src={item.image}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                alt="Instagram Post"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "//www.prestigefloor.com.au/cdn/shop/files/welcome-main.png?v=1759776333&width=400";
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Social() {
  return (
    <>
      <Channel />
      <PartnerCarousel />
    </>
  );
}
