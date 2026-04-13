import Link from 'next/link';
import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          
          {/* Column 1 - Brand & Social */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6">
            <img 
              src="//www.prestigefloor.com.au/cdn/shop/files/Prestige-floor-LOGO-WHITE-3-small_large.png?v=1764065287" 
              alt="Prestige Floor" 
              className="w-[250px]" 
            />
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              At Prestige Floor, we bring over 30 Years of experience providing high-quality flooring, rugs, and carpet to homes and businesses across Australia. Our commitment to excellence ensures that every product we offer is stylish but also durable and sustainable.
            </p>
            
            <div className="flex gap-4 items-center mt-2">
              <a href="https://www.facebook.com/profile.php?id=100087493880739" className="w-10 h-10 bg-white/10 hover:bg-[#cc8b65] rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Facebook</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-1.1 0-2 .9-2 2v1h4v3h-4v6.8C18.56 20.87 22 16.84 22 12z"/></svg>
              </a>
              <a href="https://www.instagram.com/prestige_floors?fbclid=IwZXh0bgNhZW0CMTAAAR1R9il17ctoMO55G3qE9yHjCRcZf-oQ2vhz0Saf0kYTa8QL2XubR_2TMqM_aem_Ux9ZjPfaCINOi7N4OQk1nA" className="w-10 h-10 bg-white/10 hover:bg-[#cc8b65] rounded-full flex items-center justify-center transition-colors">
                 <span className="sr-only">Instagram</span>
                 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@prestigefloor?lang=en" className="w-10 h-10 bg-white/10 hover:bg-[#cc8b65] rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">TikTok</span>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 18 18"><path d="M8.02 0H11s-.17 3.82 4.13 4.1v2.95s-2.3.14-4.13-1.26l.03 6.1a5.52 5.52 0 11-5.51-5.52h.77V9.4a2.5 2.5 0 101.76 2.4L8.02 0z"/></svg>
              </a>
            </div>

            <div className="flex gap-4 items-center mt-2 bg-white/10 p-3 rounded-lg w-fit">
              <img src="//www.prestigefloor.com.au/cdn/shop/files/ATFA-member-ISO-logo-rgb-white-text_large.png?v=1765804509" alt="ATFA ISO" className="h-[45px] w-auto mix-blend-screen" />
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="w-full lg:w-[35%] flex flex-col gap-6">
            <h2 className="text-lg font-bold uppercase tracking-wider text-white border-b border-white/20 pb-2 inline-block w-max">Quick links</h2>
            <ul className="columns-2 gap-x-8 gap-y-4 text-sm text-gray-300">
              <li className="mb-3"><Link href="/pages/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li className="mb-3"><Link href="/pages/refund-policy" className="hover:text-accent transition-colors">Refund Policy</Link></li>
              <li className="mb-3"><Link href="/pages/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li className="mb-3"><Link href="/pages/flooring-terms" className="hover:text-accent transition-colors">Flooring Terms</Link></li>
              <li className="mb-3"><Link href="/pages/carpet-calculator" className="hover:text-accent transition-colors">Flooring Calculator</Link></li>
              <li className="mb-3"><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li className="mb-3"><Link href="/search" className="hover:text-accent transition-colors">Search</Link></li>
              <li className="mb-3"><Link href="/pages/about-us" className="hover:text-accent transition-colors">About Us</Link></li>
              <li className="mb-3"><Link href="/pages/sydney" className="hover:text-accent transition-colors">Location</Link></li>
              <li className="mb-3"><Link href="/blogs/flooring" className="hover:text-accent transition-colors">Blogs</Link></li>
            </ul>
          </div>

          {/* Column 3 - Get in touch! */}
          <div className="w-full lg:w-[25%] flex flex-col gap-6">
            <h2 className="text-lg font-bold uppercase tracking-wider text-white border-b border-white/20 pb-2 inline-block w-max">Get in touch!</h2>
            <div className="flex flex-col gap-6 text-sm text-gray-300">
              
              <div className="flex gap-4 items-start group">
                <svg className="w-5 h-5 shrink-0 mt-1" viewBox="0 0 13 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.47998 20.2334C4.91748 19.5459 4.21956 18.6188 3.38623 17.4521C2.57373 16.3063 1.85498 15.1188 1.22998 13.8896C0.60498 12.6605 0.271647 11.5771 0.22998 10.6396C0.271647 8.93132 0.85498 7.51465 1.97998 6.38965C3.10498 5.26465 4.52165 4.68132 6.22998 4.63965C7.93831 4.68132 9.35498 5.26465 10.48 6.38965C11.605 7.51465 12.1883 8.93132 12.23 10.6396C12.1883 11.5771 11.855 12.6605 11.23 13.8896C10.5841 15.1188 9.85498 16.3063 9.04248 17.4521C8.22998 18.6188 7.54248 19.5459 6.97998 20.2334C6.77165 20.4834 6.52165 20.6084 6.22998 20.6084C5.93831 20.6084 5.68831 20.4834 5.47998 20.2334ZM6.22998 12.6396C6.79248 12.6188 7.26123 12.4209 7.63623 12.0459C8.01123 11.6709 8.20915 11.2021 8.22998 10.6396C8.20915 10.0771 8.01123 9.6084 7.63623 9.2334C7.26123 8.8584 6.79248 8.66048 6.22998 8.63965C5.66748 8.66048 5.19873 8.8584 4.82373 9.2334C4.44873 9.6084 4.25081 10.0771 4.22998 10.6396C4.25081 11.2021 4.44873 11.6709 4.82373 12.0459C5.19873 12.4209 5.66748 12.6188 6.22998 12.6396Z" fill="#dc781e"/>
                </svg>
                <div className="flex flex-col">
                  <span className="font-bold text-white mb-1 uppercase tracking-widest text-xs">Address</span>
                  <a href="https://maps.app.goo.gl/E4F8vhQx4dKyZ9eWA" className="hover:text-accent transition-colors leading-relaxed">
                    Unit 1 103-107 Batt Street,<br/>Penrith NSW 2750
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <svg className="w-5 h-5 shrink-0 mt-1" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1987 16.7334L15.48 19.8896C15.3341 20.3688 15.0112 20.6188 14.5112 20.6396C11.8654 20.6188 9.46956 19.9626 7.32373 18.6709C5.1779 17.4001 3.46956 15.6917 2.19873 13.5459C0.907064 11.4001 0.250814 9.00423 0.22998 6.3584C0.250814 5.8584 0.500814 5.53548 0.97998 5.38965L4.13623 4.6709C4.63623 4.58756 5.01123 4.77507 5.26123 5.2334L6.69873 8.6084C6.8654 9.06673 6.77165 9.45215 6.41748 9.76465L4.76123 11.1084C5.28206 12.1917 5.96956 13.1605 6.82373 14.0146C7.6779 14.8688 8.64665 15.5667 9.72998 16.1084L11.105 14.4209C11.4175 14.0667 11.8029 13.973 12.2612 14.1396L15.6362 15.5771C16.0737 15.848 16.2612 16.2334 16.1987 16.7334Z" fill="#dc781e"/>
                </svg>
                <div className="flex flex-col">
                  <span className="font-bold text-white mb-1 uppercase tracking-widest text-xs">Phone</span>
                  <a href="tel:1300 488 111" className="hover:text-accent transition-colors leading-relaxed">1300 488 111</a>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <svg className="w-5 h-5 shrink-0 mt-1" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.22998 15.6396C7.70915 15.6396 7.21956 15.473 6.76123 15.1396L0.22998 10.0459V17.1396C0.250814 17.5563 0.396647 17.9105 0.66748 18.2021C0.959147 18.473 1.31331 18.6188 1.72998 18.6396H14.73C15.1466 18.6188 15.5008 18.473 15.7925 18.2021C16.0633 17.9105 16.2091 17.5563 16.23 17.1396V10.0459L9.69873 15.1396C9.2404 15.473 8.75081 15.6396 8.22998 15.6396ZM0.72998 9.1709L7.35498 14.3271C7.62581 14.5355 7.91748 14.6396 8.22998 14.6396C8.54248 14.6396 8.83415 14.5355 9.10498 14.3271L15.73 9.1709C16.0425 8.90007 16.2091 8.55632 16.23 8.13965C16.2091 7.72298 16.0633 7.36882 15.7925 7.07715C15.5008 6.80632 15.1466 6.66048 14.73 6.63965H1.72998C1.31331 6.66048 0.959147 6.80632 0.66748 7.07715C0.396647 7.36882 0.250814 7.72298 0.22998 8.13965C0.22998 8.55632 0.396647 8.90007 0.72998 9.1709Z" fill="#dc781e"/>
                </svg>
                <div className="flex flex-col">
                  <span className="font-bold text-white mb-1 uppercase tracking-widest text-xs">Email</span>
                  <a href="mailto:sales@prestigefloor.com.au" className="hover:text-accent transition-colors break-words leading-relaxed">sales@prestigefloor.com.au</a>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} PRESTIGE FLOORS. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
             <a href="" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}