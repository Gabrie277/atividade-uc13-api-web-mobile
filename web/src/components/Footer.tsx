'use client';

export default function Footer() {
  return (
    <footer className="bg-cyan-900 text-cyan-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Clínica Vida & Saúde</h3>
            <p className="text-sm">
              Oferecemos atendimento integral de saúde com profissionais qualificados e experientes.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/servicos" className="hover:text-white transition">Serviços</a></li>
              <li><a href="/sobre" className="hover:text-white transition">Sobre</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <p className="text-sm">
              Email: contato@clinicavidasaude.com<br />
              Tel: (98) 3456-7890<br />
              Endereço: Av. Saúde, 456
            </p>
          </div>
        </div>
        <div className="border-t border-cyan-800 pt-8">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Clínica Vida & Saúde. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
