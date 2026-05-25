import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center" style={{ backgroundColor: '#0A1628' }}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)',
            animation: 'pulse 8s ease-in-out infinite'
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)',
            animation: 'pulse 8s ease-in-out 2s infinite'
          }}
        />
      </div>

      {/* Background video/image with overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116853-786c6d896d4d?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 22, 40, 0.85)' }} />

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .hero-title {
          animation: slideInLeft 1s ease-out;
        }
        .hero-subtitle {
          animation: slideInLeft 1s ease-out 0.2s backwards;
        }
        .hero-buttons {
          animation: slideInLeft 1s ease-out 0.4s backwards;
        }
        .hero-card {
          animation: slideInRight 1s ease-out 0.6s backwards;
        }
        .hero-video {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="hero-subtitle inline-flex items-center gap-2 px-4 py-2 rounded-full border border-opacity-30" style={{ borderColor: '#C9A84C', backgroundColor: 'rgba(201, 168, 76, 0.1)' }}>
            <Sparkles size={16} style={{ color: '#C9A84C' }} />
            <span style={{ color: '#C9A84C' }} className="text-sm font-semibold">Tu Socio de Expansión Fronteriza</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
              Expande tu Negocio al Mercado de los
              <span style={{ color: '#C9A84C' }}> Estados Unidos</span>
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
              Parques Industriales Estratégicos en el Valle del Río Grande — A unos pasos del Puente Internacional Pharr. La puerta de entrada perfecta para tu expansión.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="font-bold text-lg px-8 h-14 shadow-lg hover:shadow-xl transition" style={{ backgroundColor: '#C9A84C', color: '#0A1628' }}>
              Comprar un Terreno
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="font-bold text-lg px-8 h-14 border-2 hover:bg-opacity-10 transition" style={{ borderColor: '#C9A84C', color: '#C9A84C' }}>
              Rentar una Bodega
            </Button>
          </div>

          {/* Stats Row */}
          <div className="hero-subtitle grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
            <div>
              <p className="text-3xl font-black" style={{ color: '#C9A84C' }}>2</p>
              <p className="text-xs text-gray-400 mt-1">Parques Activos</p>
            </div>
            <div>
              <p className="text-3xl font-black" style={{ color: '#C9A84C' }}>15+</p>
              <p className="text-xs text-gray-400 mt-1">Años de Experiencia</p>
            </div>
            <div>
              <p className="text-3xl font-black" style={{ color: '#C9A84C' }}>100+</p>
              <p className="text-xs text-gray-400 mt-1">Clientes Exitosos</p>
            </div>
          </div>
        </div>

        {/* Right Column - Juan Card + Video */}
        <div className="hidden md:flex flex-col gap-6 items-center">
          {/* Video */}
          <div className="hero-video w-full relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700 border-opacity-30">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
              <video
                src="https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/mcc_industrialpark/sanjuan%20video%20final%20(1).mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            {/* Glow effect */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow: 'inset 0 0 30px rgba(201, 168, 76, 0.2)',
                border: '1px solid rgba(201, 168, 76, 0.3)'
              }}
            />
          </div>

          {/* Juan Info Card */}
          <div className="hero-card w-full rounded-2xl p-6 shadow-2xl border border-gray-700 border-opacity-30" style={{ backgroundColor: 'rgba(26, 42, 58, 0.8)', backdropFilter: 'blur(10px)' }}>
            <div className="flex items-center gap-4">
              <img 
                src="https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/mcc_industrialpark/71a8d870-61a4-4d1f-931e-96ec2c40ad62%20(1).png" 
                alt="Juan Elizondo" 
                className="rounded-full w-20 h-20 object-cover border-4 shadow-lg flex-shrink-0"
                style={{ borderColor: '#C9A84C', background: '#fff' }}
              />
              <div className="flex-1">
                <p className="text-gray-300 text-sm">Agente RE/MAX Elite</p>
                <p className="text-2xl font-black text-white">Juan Elizondo</p>
                <p style={{ color: '#C9A84C' }} className="text-xs font-semibold mt-1">Especialista en Bienes Raíces Fronterizos</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              "Tu éxito es mi misión. Conecta con el mercado estadounidense sin dejar tu base en México."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}