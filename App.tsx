import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Methodology from './components/Methodology';
import Routines from './components/Routines';
import ChatBot from './components/ChatBot';
import { REGISTRATION_FORM_URL, WHATSAPP_URL } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const socialLinks = [
    { name: 'TikTok', url: 'https://www.tiktok.com/@socceracademythemachine?is_from_webapp=1&sender_device=pc' },
    { name: 'Instagram', url: 'https://www.instagram.com/socceracademythemachine' },
    { name: 'Facebook', url: 'https://www.facebook.com/socceracademythemachine' }
  ];

  return (
    <div className="relative bg-black min-h-screen selection:bg-fuchsia-600 selection:text-white selection:bg-opacity-80">
      <Navbar />
      <main>
        <Hero />
        
        {/* Sección ADN / Filosofía */}
        <section className="py-32 bg-black overflow-hidden relative" id="about">
          <div className="container mx-auto px-6 relative">
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-[0.03] pointer-events-none select-none">
              <span className="text-[35rem] font-black font-oswald text-white leading-none">CORE</span>
            </div>
            
            <div className="max-w-6xl relative z-10 reveal">
              <h2 className="text-fuchsia-500 font-bold uppercase tracking-[0.6em] text-[10px] mb-8">ADN THE MACHINE • ÉLITE</h2>
              <p className="text-6xl md:text-8xl font-black font-oswald uppercase italic tracking-tighter mb-10 leading-[0.85] text-white text-shadow-sharp">
                MÁS QUE UNA <span className="text-fuchsia-500">ACADEMIA</span>, <br />
                UNA <span className="stroke-text-fuchsia neon-glow-fuchsia">FÁBRICA</span> DE TALENTO.
              </p>
              <div className="h-1.5 w-32 bg-fuchsia-500 mb-16 shadow-[0_0_40px_rgba(217,70,239,0.8)]"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-12">
                  <div className="space-y-8">
                    <p className="text-2xl md:text-3xl text-white font-black italic leading-tight">
                      "En The Machine, no solo enseñamos a patear un balón; calibramos el talento de cada jugador."
                    </p>
                    <div className="space-y-6">
                      <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
                        <span className="text-white font-black">Soccer Academy The Machine</span> es más que una academia de fútbol para niñas, niños y adolescentes a partir de 5 años.
                      </p>
                      <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed border-l-2 border-fuchsia-500/30 pl-8">
                        Somos una <span className="text-fuchsia-400 font-bold">fábrica de talento</span> donde cada jugador recibe atención personalizada para alcanzar su máximo potencial. Nuestra filosofía combina la excelencia técnica con los values fundamentales del deporte.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 p-10 bg-zinc-900/30 rounded-sm border-l-4 border-fuchsia-600 backdrop-blur-md hover:bg-zinc-900/50 transition-colors group">
                    <div className="w-16 h-16 bg-fuchsia-600 flex items-center justify-center rounded-sm shrink-0 shadow-[0_0_30px_rgba(217,70,239,0.3)] transform -rotate-2 group-hover:rotate-0 transition-transform">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-fuchsia-500 font-black uppercase text-[10px] tracking-[0.3em] mb-1">Operaciones Lawrence</p>
                      <p className="text-white text-2xl md:text-3xl font-black font-oswald uppercase tracking-tighter">40 LAWRENCE ST, Lawrence, MA</p>
                    </div>
                  </div>
                </div>

                <div className="relative group aspect-square overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1521444470659-a6519409893b?q=80&w=1200" 
                    alt="Entrenamiento enfocado de élite" 
                    className="w-full h-full object-cover saturate-150 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-10 left-10">
                    <div className="flex items-center gap-4">
                       <div className="h-0.5 w-12 bg-fuchsia-500"></div>
                       <span className="text-white font-black font-oswald text-2xl italic uppercase tracking-widest opacity-80">MÁXIMO POTENCIAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="reveal">
          <Programs />
        </div>
        
        <div className="reveal">
          <Methodology />
        </div>
        
        <div className="reveal">
          <Routines />
        </div>

        {/* Galería de Impacto - Colores Vivos */}
        <section className="bg-black py-4 reveal">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1200",
              "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200",
              "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1200",
              "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200"
            ].map((img, i) => (
              <div key={i} className="aspect-[4/5] overflow-hidden border border-white/5 relative group cursor-crosshair">
                <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2000ms] saturate-125 group-hover:saturate-150" alt={`Acción Machine ${i+1}`} />
                <div className="absolute inset-0 bg-fuchsia-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="border border-white/40 px-6 py-3">
                     <span className="text-white font-black uppercase tracking-[0.5em] text-[10px]">THE MACHINE • PRO</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Élite */}
        <footer className="py-32 bg-black border-t border-white/5 text-center relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="mb-24 reveal">
              <div className="inline-block w-20 h-20 bg-fuchsia-500 rotate-45 mb-12 shadow-[0_0_60px_rgba(217,70,239,0.3)] transition-all hover:rotate-[225deg] duration-1000">
                <div className="-rotate-45 flex items-center justify-center w-full h-full">
                  <span className="text-black font-black text-4xl italic">M</span>
                </div>
              </div>
              <h2 className="text-5xl md:text-8xl font-black font-oswald uppercase italic tracking-tighter text-white mb-8 leading-none">
                SOCCER ACADEMY <br /> <span className="text-fuchsia-500">THE MACHINE</span>
              </h2>
              <p className="text-gray-500 uppercase tracking-[0.8em] text-[10px] font-bold mb-16 italic opacity-60">EL ÉXITO ES CALIBRACIÓN • MASSACHUSETTS</p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-20">
                 <a 
                   href={REGISTRATION_FORM_URL}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full md:w-auto bg-fuchsia-600 text-white px-16 py-7 rounded-sm font-black uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all transform hover:-translate-y-2 shadow-2xl active:scale-95"
                 >
                   Iniciar Inscripción
                 </a>
                 <a 
                   href={WHATSAPP_URL}
                   target="_blank"
                   className="w-full md:w-auto border border-white/20 text-white px-16 py-7 rounded-sm font-black uppercase text-sm tracking-widest hover:border-fuchsia-500 hover:text-fuchsia-500 transition-all active:scale-95"
                 >
                   Chat WhatsApp
                 </a>
              </div>
            </div>
            
            <div className="flex justify-center gap-12 mb-20 border-y border-white/5 py-12 reveal">
              {socialLinks.map(social => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-fuchsia-500 transition-colors uppercase font-black text-[10px] tracking-[0.5em]"
                >
                  {social.name}
                </a>
              ))}
            </div>

            <div className="max-w-4xl mx-auto mb-20 text-left bg-zinc-950/40 p-10 md:p-14 border border-white/5 backdrop-blur-sm reveal">
              <h3 className="text-fuchsia-500 font-black uppercase text-[9px] tracking-[0.4em] mb-8">AVISO LEGAL • PRIVACIDAD</h3>
              <div className="space-y-6 text-zinc-600 text-[8px] leading-relaxed uppercase font-bold tracking-widest">
                <p>La integridad de nuestros atletas es nuestra priority. Los datos personales son tratados bajo estrictos protocolos de seguridad de acuerdo a las leyes de Massachusetts.</p>
                <p className="italic border-l-2 border-fuchsia-500/40 pl-6 text-zinc-500">© 2026 SOCCER ACADEMY THE MACHINE. TODOS LOS DERECHOS RESERVADOS. EL FÚTBOL NO ES SOLO UN JUEGO, ES UNA CIENCIA.</p>
              </div>
            </div>
            
            <div className="text-zinc-900 text-[9px] uppercase tracking-[1em] font-black">
              DESIGNED FOR ELITE PERFORMANCE • MACHINE CORE v3.2
            </div>
          </div>
        </footer>
      </main>

      <ChatBot />
    </div>
  );
};

export default App;