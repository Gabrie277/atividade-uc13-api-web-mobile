'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Clock, DollarSign, Users } from 'lucide-react';

const servicos = [
  {
    id: '1',
    categoria: 'Consultas',
    nome: 'Consulta Clínica Geral',
    descricao: 'Avaliação clínica completa com médico generalista',
    preco: 'R$ 150,00',
    duracao: '30-45 min',
    disponivel: true,
  },
  {
    id: '2',
    categoria: 'Consultas',
    nome: 'Consulta Cardiologia',
    descricao: 'Avaliação especializada do coração e sistema circulatório',
    preco: 'R$ 250,00',
    duracao: '45-60 min',
    disponivel: true,
  },
  {
    id: '3',
    categoria: 'Consultas',
    nome: 'Consulta Pediatria',
    descricao: 'Atendimento especializado para crianças',
    preco: 'R$ 180,00',
    duracao: '30-45 min',
    disponivel: true,
  },
  {
    id: '4',
    categoria: 'Consultas',
    nome: 'Consulta Dermatologia',
    descricao: 'Avaliação de problemas de pele',
    preco: 'R$ 200,00',
    duracao: '30-45 min',
    disponivel: true,
  },
  {
    id: '5',
    categoria: 'Exames',
    nome: 'Hemograma Completo',
    descricao: 'Análise completa de células sanguíneas',
    preco: 'R$ 80,00',
    duracao: 'Coleta: 10 min',
    disponivel: true,
  },
  {
    id: '6',
    categoria: 'Exames',
    nome: 'Perfil Lipídico',
    descricao: 'Avaliação de colesterol e triglicerídeos',
    preco: 'R$ 120,00',
    duracao: 'Coleta: 10 min',
    disponivel: true,
  },
  {
    id: '7',
    categoria: 'Exames',
    nome: 'Ultrassom Abdominal',
    descricao: 'Exame de ultrassom do abdômen',
    preco: 'R$ 250,00',
    duracao: '20-30 min',
    disponivel: true,
  },
  {
    id: '8',
    categoria: 'Exames',
    nome: 'Eletrocardiograma',
    descricao: 'Registro elétrico do coração',
    preco: 'R$ 150,00',
    duracao: '10-15 min',
    disponivel: true,
  },
];

export default function ServicosPage() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>('');

  const categorias = ['Todas', ...new Set(servicos.map((s) => s.categoria))];
  
  const servicosFiltrados = categoriaSelecionada === '' || categoriaSelecionada === 'Todas'
    ? servicos
    : servicos.filter((s) => s.categoria === categoriaSelecionada);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-teal-500 text-white py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-xl opacity-90">
            Oferecemos uma ampla gama de serviços de saúde integral para você e sua família
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 px-4 bg-cyan-50">
        <div className="container mx-auto max-w-5xl">
          <h3 className="font-bold mb-4 text-cyan-900">Filtrar por categoria:</h3>
          <div className="flex flex-wrap gap-3">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaSelecionada(categoria === 'Todas' ? '' : categoria)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  (categoria === 'Todas' && categoriaSelecionada === '') ||
                  categoriaSelecionada === categoria
                    ? 'bg-cyan-600 text-white'
                    : 'bg-white text-cyan-700 border border-cyan-300 hover:bg-cyan-100'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Serviços */}
      <section className="py-16 px-4 flex-grow">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicosFiltrados.map((servico) => (
              <Card key={servico.id} className="flex flex-col hover:shadow-lg transition">
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-900">{servico.nome}</h3>
                      <p className="text-sm text-cyan-600 font-semibold">{servico.categoria}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{servico.descricao}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-3 text-gray-700">
                      <DollarSign size={20} className="text-cyan-600" />
                      <span>{servico.preco}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Clock size={20} className="text-cyan-600" />
                      <span>{servico.duracao}</span>
                    </div>
                    {servico.disponivel && (
                      <div className="flex items-center gap-3 text-green-700">
                        <Users size={20} className="text-green-600" />
                        <span>Disponível</span>
                      </div>
                    )}
                  </div>
                </div>

                <Button className="w-full">
                  Entre em Contato
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-16 px-4 bg-cyan-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-cyan-900">Para Agendar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="text-center">
              <h3 className="text-2xl font-bold mb-3">Telefone</h3>
              <p className="text-lg text-cyan-600 font-semibold mb-2">(11) 3456-7890</p>
              <p className="text-gray-600">Seg-Sex: 8h às 18h<br />Sab: 8h às 12h</p>
            </Card>

            <Card className="text-center">
              <h3 className="text-2xl font-bold mb-3">Email</h3>
              <p className="text-lg text-cyan-600 font-semibold mb-2">contato@clinicavidasaude.com</p>
              <p className="text-gray-600">Responderemos em até 24 horas</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
