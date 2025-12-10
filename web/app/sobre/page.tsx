'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import { Users, Award, Heart, Stethoscope } from 'lucide-react';

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-teal-500 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Sobre Clínica Vida & Saúde</h1>
          <p className="text-xl opacity-90">
            Dedicada à saúde integral e bem-estar de nossos pacientes desde 2009
          </p>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-l-4 border-cyan-600">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Heart className="text-cyan-600" />
                Missão
              </h3>
              <p className="text-gray-600">
                Proporcionar atendimento médico integral com humanidade, qualidade e respeito, 
                promovendo saúde e bem-estar para toda a comunidade.
              </p>
            </Card>

            <Card className="border-l-4 border-cyan-600">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Stethoscope className="text-cyan-600" />
                Visão
              </h3>
              <p className="text-gray-600">
                Ser a clínica de referência em atendimento integral, inovação e satisfação, 
                reconhecida pela qualidade e dedicação ao bem-estar de nossos pacientes.
              </p>
            </Card>

            <Card className="border-l-4 border-cyan-600">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Award className="text-cyan-600" />
                Valores
              </h3>
              <p className="text-gray-600">
                Ética, integridade, respeito, humanidade, qualidade e compromisso contínuo 
                com a saúde e bem-estar integral de cada paciente.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-16 px-4 bg-cyan-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-cyan-900">Nossa História</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              A Clínica Vida & Saúde foi fundada em 2009 com uma missão clara: oferecer atendimento 
              médico integral e humanizado para toda a comunidade. Desde o início, mantemos nosso 
              compromisso inegociável com a excelência e o bem-estar de nossos pacientes.
            </p>
            <p>
              Ao longo de seus 15 anos, expandimos continuamente nossos serviços, investimos em 
              tecnologia de ponta e consolidamos uma equipe de profissionais altamente qualificados, 
              dedicados e apaixonados pelo que fazem.
            </p>
            <p>
              Hoje somos uma clínica completa com especialidades médicas diversas, laboratório moderno, 
              equipamentos de diagnóstico avançados e um ambiente acolhedor que reflete nosso compromisso 
              uma equipe comprometida em oferecer o melhor atendimento.
            </p>
            <p>
              Nossa trajetória é marcada pelo reconhecimento de nossos pacientes, pelos 
              certificados de qualidade obtidos e pela confiança que conquistamos ao longo 
              dos anos na comunidade.
            </p>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Nossa Equipe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Dr. Carlos Silva', specialty: 'Cardiologia' },
              { name: 'Dra. Ana Santos', specialty: 'Pediatria' },
              { name: 'Dr. Roberto Lima', specialty: 'Ortopedia' },
              { name: 'Dra. Patricia Costa', specialty: 'Ginecologia' },
              { name: 'Dr. Fernando Gomes', specialty: 'Neurologia' },
              { name: 'Dra. Mariana Oliveira', specialty: 'Dermatologia' },
              { name: 'Dr. Lucas Martins', specialty: 'Oftalmologia' },
              { name: 'Dra. Isabella Rocha', specialty: 'Oncologia' },
            ].map((doctor, index) => (
              <Card key={index} className="text-center">
                <Users className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                <h3 className="font-bold text-lg mb-2">{doctor.name}</h3>
                <p className="text-gray-600 text-sm">{doctor.specialty}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infraestrutura */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Infraestrutura</h2>
          
          <div className="space-y-4">
            <Card>
              <h3 className="font-bold text-lg mb-2">✓ Consultórios Modernos</h3>
              <p className="text-gray-600">Equipados com tecnologia de ponta para melhor diagnóstico</p>
            </Card>
            <Card>
              <h3 className="font-bold text-lg mb-2">✓ Laboratório de Análises Clínicas</h3>
              <p className="text-gray-600">Com equipamentos modernos e profissionais qualificados</p>
            </Card>
            <Card>
              <h3 className="font-bold text-lg mb-2">✓ Equipamentos de Diagnóstico</h3>
              <p className="text-gray-600">Ultrassom, radiografia e outros equipamentos diagnósticos</p>
            </Card>
            <Card>
              <h3 className="font-bold text-lg mb-2">✓ Sala de Espera Confortável</h3>
              <p className="text-gray-600">Ambiente acolhedor com Wi-Fi e área infantil</p>
            </Card>
            <Card>
              <h3 className="font-bold text-lg mb-2">✓ Estacionamento</h3>
              <p className="text-gray-600">Disponível para comodidade dos pacientes e acompanhantes</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
