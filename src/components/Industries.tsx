import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Boxes, Truck, Hammer, Globe, Building2, Snowflake } from 'lucide-react';

const industries = [
  {
    icon: Boxes,
    title: "Industria del Produce",
    subtitle: "Horticultura",
    description: "Bodegas refrigeradas para frutas y verduras. Mission TX es la puerta de entrada del produce mexicano a EE.UU.",
    image: "https://v3b.fal.media/files/b/0a9b99d5/1Jf3JF56vnfDpppkC3ldl_057888b0d330467eb0bae66a84351661.jpg"
  },
  {
    icon: Truck,
    title: "Logística y Transporte",
    subtitle: "Distribución",
    description: "Centros de distribución estratégicos en la frontera. Optimiza tus rutas y expande tu cobertura.",
    image: "https://v3b.fal.media/files/b/0a9b99d6/fatghjpG4bMOzXBa7GuMJ_317d1c8d49924b0eb3399915c45369d4.jpg"
  },
  {
    icon: Hammer,
    title: "Manufactura",
    subtitle: "Producción",
    description: "Plantas de producción cerca de la línea fronteriza. Acceso a mercados mexicano y estadounidense.",
    image: "https://v3b.fal.media/files/b/0a9b99d5/TI_pg6eFdUII6DuoLQrXg_1aeec7e5a1e446769575289e3565796d.jpg"
  },
  {
    icon: Globe,
    title: "Importación / Exportación",
    subtitle: "Comercio Exterior",
    description: "Almacenaje y gestión aduanal. Facilita tus operaciones comerciales internacionales.",
    image: "https://v3b.fal.media/files/b/0a9b99d5/ixRAk70c1M_cvEFIOiHg7_b9a63940cfea49a781b136cc9315b299.jpg"
  },
  {
    icon: Building2,
    title: "Construcción e Industria Pesada",
    subtitle: "Almacenamiento",
    description: "Espacios amplios para maquinaria y equipo. Naves con capacidad para carga pesada.",
    image: "https://v3b.fal.media/files/b/0a9b99d6/1jF0HTMopChKLjgj1O7CS_cf4876c4745a4a86953ce296ac37b442.jpg"
  },
  {
    icon: Snowflake,
    title: "Cadena de Frío",
    subtitle: "Refrigeración Premium",
    description: "Bodegas refrigeradas a tu medida. Mantén tus productos en condiciones óptimas.",
    image: "https://v3b.fal.media/files/b/0a9b99d6/BS1WC5cvmhd3f3q8l0Nl8_5b4eb86f4e354be9bfbae2ee846d801a.jpg"
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A1628' }}>
            Industrias que Servimos
          </h2>
          <p className="text-xl text-gray-600">
            Soluciones industriales para todo tipo de operaciones comerciales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition h-full overflow-hidden">
                {/* Image Container */}
                <div className="w-full h-48 overflow-hidden bg-gray-200">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                
                <CardHeader>
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#C9A84C' }}
                  >
                    <Icon size={32} style={{ color: '#0A1628' }} />
                  </div>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                  <p className="text-sm font-semibold" style={{ color: '#C9A84C' }}>
                    {industry.subtitle}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{industry.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}