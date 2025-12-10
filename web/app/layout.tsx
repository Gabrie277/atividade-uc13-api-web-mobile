import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Clínica Vida & Saúde - Seu bem-estar em primeiro lugar',
  description: 'Clínica de atendimento integral com profissionais experientes. Oferecemos consultas, exames e atendimento pediatra especializado.',
  keywords: 'clínica, médico, consulta, exame, saúde, pediatra, bem-estar',
  authors: [{ name: 'Clínica Vida & Saúde' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}
