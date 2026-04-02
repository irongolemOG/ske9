export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-gray-200 pt-20 pb-10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-skeRed/30 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-skeRed/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded shadow-sm border border-gray-100 mb-2 mt-2">
                 <img src="/images/ske.png" alt="Logo" className="h-[6rem] md:h-[7.5rem] w-auto object-contain" />
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              Trusted Specialty Chemical Solutions Since 1990. Providing high-performance pigments, emulsions, and additives across South India.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 flex flex-col">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/#about' },
                { name: 'Management', href: '/management' },
                { name: 'Products', href: '/#products' },
                { name: 'Industries', href: '/#industries' },
                { name: 'Principals', href: '/#principals' },
                { name: 'Awards and Recognition', href: '/awards' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-skeRed font-medium transition-colors text-sm flex items-center gap-2 group">
                    <span className="h-px w-2 bg-gray-300 transition-all group-hover:w-4 group-hover:bg-skeRed"/>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-sm">Product Range</h4>
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              <li className="hover:text-skeBlue transition-colors cursor-pointer">Titanium Dioxide</li>
              <li className="hover:text-skeBlue transition-colors cursor-pointer">Calcium Carbonate</li>
              <li className="hover:text-skeBlue transition-colors cursor-pointer">Paint Additives</li>
              <li className="hover:text-skeBlue transition-colors cursor-pointer">Paint Emulsions</li>
              <li className="hover:text-skeBlue transition-colors cursor-pointer">Organic & Inorganic Pigments</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-skeRed flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>5-9-225, 3rd Floor, Sanali Estate, Chirag Ali Lane, Abids, Hyderabad – 500001</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-skeRed flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+91 97015 52221</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-skeRed flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>kartikeya999@yahoo.com</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-skeRed flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-xs font-bold text-gray-500">
          <p>© {new Date().getFullYear()} Sri Kartikeya Enterprises. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Premium Business Experience</p>
        </div>
      </div>
    </footer>
  );
}
