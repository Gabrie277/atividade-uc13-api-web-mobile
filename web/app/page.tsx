'use client';

import Link from 'next/link';
import { ArrowRight, Users, Heart, Award } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-teal-500 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sua Saúde e Bem-Estar em Primeiro Lugar
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Atendimento integral com profissionais dedicados e tecnologia moderna para sua saúde
          </p>
          <Link href="/servicos">
            <Button className="px-8 py-3 text-lg">
              Ver Serviços <ArrowRight className="inline ml-2" size={24} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="py-16 px-4 bg-cyan-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-900">Nossos Serviços</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition">
              <Heart className="w-16 h-16 mx-auto mb-4 text-cyan-600" />
              <h3 className="text-2xl font-bold mb-3">Consultas Médicas</h3>
              <p className="text-gray-600 mb-4">
                Atendimento médico geral e especializado com profissionais qualificados e atentos
              </p>
              <Link href="/servicos">
                <Button variant="secondary" className="w-full">
                  Saber Mais
                </Button>
              </Link>
            </Card>

            <Card className="text-center hover:shadow-lg transition">
              <Award className="w-16 h-16 mx-auto mb-4 text-cyan-600" />
              <h3 className="text-2xl font-bold mb-3">Exames Laboratoriais</h3>
              <p className="text-gray-600 mb-4">
                Exames de laboratório com tecnologia moderna para diagnósticos precisos e rápidos
              </p>
              <Link href="/servicos">
                <Button variant="secondary" className="w-full">
                  Saber Mais
                </Button>
              </Link>
            </Card>

            <Card className="text-center hover:shadow-lg transition">
              <Users className="w-16 h-16 mx-auto mb-4 text-cyan-600" />
              <h3 className="text-2xl font-bold mb-3">Pediatria</h3>
              <p className="text-gray-600 mb-4">
                Atendimento especializado e carinhoso para crianças com pediatras experientes
              </p>
              <Link href="/servicos">
                <Button variant="secondary" className="w-full">
                  Saber Mais
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-teal-500 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <p className="text-lg">Pacientes Atendidos</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <p className="text-lg">Médicos Especializados</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p className="text-lg">Anos de Experiência</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <p className="text-lg">Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para cuidar da sua saúde?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Conheça mais sobre nossos serviços e como podemos ajudar você
          </p>
          <Link href="/servicos">
            <Button className="px-8 py-3 text-lg">
              Conhecer Serviços
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
