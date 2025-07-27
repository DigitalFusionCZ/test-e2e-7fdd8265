'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeAndScroll = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = "Vše pro stavby - Kvalita a spolehlivost";

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4CAF50" /><stop offset="100%" stop-color="#8BC34A" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    const faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
    if (faviconLink) {
      faviconLink.href = faviconUrl;
    } else {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = faviconUrl;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-700">
            <a href="#hero" onClick={() => closeAndScroll('hero')}>Vše pro stavby</a>
          </div>
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <a href="#hero" onClick={() => closeAndScroll('hero')} className="text-gray-700 hover:text-green-600 transition duration-300">Úvod</a>
            <a href="#about" onClick={() => closeAndScroll('about')} className="text-gray-700 hover:text-green-600 transition duration-300">O nás</a>
            <a href="#services" onClick={() => closeAndScroll('services')} className="text-gray-700 hover:text-green-600 transition duration-300">Služby</a>
            <a href="#references" onClick={() => closeAndScroll('references')} className="text-gray-700 hover:text-green-600 transition duration-300">Reference</a>
            <a href="#contact" onClick={() => closeAndScroll('contact')} className="text-gray-700 hover:text-green-600 transition duration-300">Kontakt</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-green-600 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg py-2 transition-all duration-300 ease-in-out`}>
          <a href="#hero" onClick={() => closeAndScroll('hero')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Úvod</a>
          <a href="#about" onClick={() => closeAndScroll('about')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">O nás</a>
          <a href="#services" onClick={() => closeAndScroll('services')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Služby</a>
          <a href="#references" onClick={() => closeAndScroll('references')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Reference</a>
          <a href="#contact" onClick={() => closeAndScroll('contact')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Kontakt</a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/project-tanvald-exterior-after.jpg")' }}></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-8 rounded-lg max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            Vše pro vaše stavební projekty
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up delay-200">
            Od základů po střechu – kvalita, zkušenosti a spolehlivost.
          </p>
          <a href="#contact" onClick={() => closeAndScroll('contact')} className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up delay-400">
            Kontaktujte nás
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-8 py-20 bg-white rounded-lg shadow-xl -mt-20 relative z-20">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">O nás</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/images/project-house-renovation-exterior.jpg"
              alt="Modern renovated house exterior"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-lg text-gray-700 leading-relaxed">
            <p className="mb-6">
              Jsme firma s dlouholetou tradicí v oblasti stavebnictví, která se zaměřuje na kompletní stavební projekty od A do Z. Naší misí je přinášet klientům spolehlivá, kvalitní a inovativní řešení, která převyšují jejich očekávání.
            </p>
            <p className="mb-6">
              S týmem zkušených profesionálů garantujeme precizní práci a dodržení termínů. Neustále se vzděláváme v nových technologiích a materiálech, abychom zajistili ty nejlepší výsledky.
            </p>
            <p>
              Věříme, že každý projekt je jedinečný, a proto ke každému přistupujeme individuálně s maximální péčí a pozorností k detailu. Vaše spokojenost je naší prioritou.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-8 py-20 relative z-10">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">Naše služby</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out border-b-4 border-green-500">
            <div className="text-green-500 mb-4">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m7 0V5a2 2 0 012-2h2a2 2 0 012 2v2M7 7v10m6-10v10" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Generální dodávky staveb</h3>
            <p className="text-gray-600">Komplexní realizace stavebních projektů od prvotního návrhu po kolaudaci. Přebíráme plnou zodpovědnost za celý proces.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out border-b-4 border-green-500">
            <div className="text-green-500 mb-4">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 12v4a2 2 0 002 2h10a2 2 0 002-2v-4M8 12h8V8h-8v4zm0 0H5a2 2 0 01-2-2V8a2 2 0 012-2h3m8 4h3a2 2 0 002-2V8a2 2 0 00-2-2h-3" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Rekonstrukce a modernizace</h3>
            <p className="text-gray-600">Specializujeme se na revitalizaci stávajících objektů, které s námi získají nový život a moderní vzhled.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out border-b-4 border-green-500">
            <div className="text-green-500 mb-4">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v14m-8 4h16a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fasády a zateplení</h3>
            <p className="text-gray-600">Zajišťujeme energetickou úspornost a estetický vzhled vašeho domu díky kvalitním fasádním systémům.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out border-b-4 border-green-500">
            <div className="text-green-500 mb-4">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Zednické práce</h3>
            <p className="text-gray-600">Kompletní zednické práce, včetně zdění, omítek, sádrokartonů a veškerých dalších úkonů potřebných pro hrubou stavbu i dokončovací práce.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out border-b-4 border-green-500">
            <div className="text-green-500 mb-4">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Drobné stavební práce</h3>
            <p className="text-gray-600">Zajišťujeme i menší stavební úpravy a opravy, které vyžadují profesionální přístup.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out border-b-4 border-green-500">
            <div className="text-green-500 mb-4">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h2a2 2 0 002-2V8a2 2 0 00-2-2h-3m-1 4h2m-1 0V7m-4 7H9m-1 0V7m8 0H4a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pronájem lešení</h3>
            <p className="text-gray-600">Nabízíme bezpečné a spolehlivé lešení pro všechny typy stavebních prací s možností montáže a demontáže.</p>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="container mx-auto px-8 py-20 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">Naše reference</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="/images/project-house-renovation-exterior.jpg"
              alt="Dokončený rodinný dům"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rekonstrukce rodinného domu</h3>
              <p className="text-gray-600">Kompletní rekonstrukce včetně zateplení fasády a interiérových úprav.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="/images/project-tanvald-exterior-after.jpg"
              alt="Novostavba v horách"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Výstavba horské chaty</h3>
              <p className="text-gray-600">Projekt a realizace nové chaty s důrazem na energetickou efektivitu.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="https://via.placeholder.com/600x400.png?text=Bytovy+dum+Rekonstrukce"
              alt="Rekonstrukce bytového domu"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Modernizace bytového domu</h3>
              <p className="text-gray-600">Zateplení, nová fasáda a revitalizace společných prostor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-700 py-20 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Potřebujete stavební pomoc?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Nezávisle na rozsahu vašeho projektu, jsme připraveni vám pomoci dosáhnout vašich cílů s precizností a spolehlivostí.
        </p>
        <a href="#contact" onClick={() => closeAndScroll('contact')} className="inline-block bg-white text-green-700 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200">
          Získejte nezávaznou nabídku
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">Kontaktujte nás</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 bg-white rounded-lg shadow-xl p-10">
          <div className="md:w-1/2 flex flex-col items-center text-center space-y-8">
            <div className="p-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8m-4 4v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Email</h3>
            <p className="text-lg text-gray-700">info@vseprostavby.cz</p>
          </div>

          <div className="md:w-1/2 flex flex-col items-center text-center space-y-8">
            <div className="p-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Telefon</h3>
            <p className="text-lg text-gray-700">+420 777 123 456</p>
          </div>

          <div className="md:w-1/2 flex flex-col items-center text-center space-y-8">
            <div className="p-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13 21.314 8.343 16.657M17.657 16.657C20.395 13.919 22 10 22 10c0-7.319-8-10-10-10S2 2.681 2 10c0 0 1.605 3.919 4.343 6.657m0 0C6.395 19.395 8 22 8 22s-2.605 1.605-5.343-1.135m5.343 1.135L12 21.314l-4.657-4.657m0 0C3.605 13.919 2 10 2 10c0-7.319 8-10 10-10s10 2.681 10 10c0 0-1.605 3.919-4.343 6.657" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Adresa</h3>
            <p className="text-lg text-gray-700">Stavební 123, 100 00 Praha, Česká republika</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg mb-4">&copy; {new Date().getFullYear()} Vše pro stavby. Všechna práva vyhrazena.</p>
          <p className="mt-4 text-sm text-gray-400">
            Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition duration-300">DigitalFusion</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
