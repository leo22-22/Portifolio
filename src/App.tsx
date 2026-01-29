import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import ranucitopografiaImg from "figma:asset/ranuci1.png";
import ranucitopografiaLogo from "figma:asset/ranuci.png";
import profilePhoto from "figma:asset/eu.png";

export default function App() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio do formulário
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-xl">Leonardo Ranuci</span>
            <div className="flex gap-6">
              <a href="#sobre" className="hover:text-blue-600 transition">Sobre</a>
              <a href="#trabalhos" className="hover:text-blue-600 transition">Trabalhos</a>
              <a href="#servicos" className="hover:text-blue-600 transition">Serviços</a>
              <a href="#contato" className="hover:text-blue-600 transition">Contato</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
            Portfólio Profissional<br />
            <span className="text-blue-600">Leonardo Picolo dos Santos Ranuci</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Desenvolvedor Full Stack especializado em criar soluções tecnológicas inovadoras
          </p>
        </div>
      </section>

      {/* Sobre Mim Section */}
      <section id="sobre" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src={profilePhoto}
                alt="Leonardo Ranuci"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6">Sobre Mim</h2>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                Olá! Sou Leonardo Picolo dos Santos Ranuci, tenho 20 anos e sou desenvolvedor full stack
                apaixonado por tecnologia e inovação. Com 2 anos de experiência no mercado, dedico-me a
                criar soluções digitais que transformam ideias em realidade. Atualmente estudando sistemas de informação, FIPP - Unoeste Presidente Prudente - 4 termo.
              </p>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                Possuo sólidas habilidades técnicas em HTML, CSS, PHP, Laravel, C/C++, Docker, MySQL,
                React, TypeScript e desenvolvimento de APIs REST. Além disso, tenho conhecimentos em
                Java e Node.js, o que me permite trabalhar com diferentes tecnologias e stacks de desenvolvimento.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Minhas soft skills incluem fácil comunicação e desenvolvimento pessoal e coletivo, carisma,
                facilidade de aprendizado e determinação diária. Estou sempre buscando novos desafios e
                oportunidades para crescer profissionalmente, mantendo-me atualizado com as últimas tendências
                e melhores práticas do desenvolvimento de software.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20 px-6 bg-gray-50" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Carreira Profissional</h2>

              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                Olá! Sou <strong>Leonardo Picolo</strong>, um desenvolvedor Full Stack em constante evolução. Minha trajetória é marcada por uma transição sólida: iniciei minha jornada profissional na <strong>Prefeitura de Presidente Venceslau</strong>, onde durante um ano e meio refinei competências de organização, gestão de processos e resolução de problemas no setor administrativo.
              </p>

              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                Essa base analítica me impulsionou para a tecnologia. Atualmente, sou <strong>Estagiário Full Stack na YESDEV</strong>, onde aplico o ecossistema <strong>React, Laravel e Docker, dentre outras</strong> para construir soluções modernas e eficientes. Concilio o trabalho prático com a graduação em Sistemas de Informação na <strong>FIPP - Unoeste</strong> (4º termo), unindo fundamentos teóricos com os desafios reais do mercado de software.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Minhas habilidades técnicas abrangem desde o desenvolvimento de APIs REST e bancos de dados MySQL até o domínio de linguagens como PHP, TypeScript e C/C++. Sou movido pela curiosidade técnica e pela determinação diária, sempre focado em entregar resultados que unam performance e uma excelente experiência para o usuário final.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Trabalhos Realizados Section */}
      <section id="trabalhos" className="py-20 px-6" style={{ backgroundColor: '#f1f5f9' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-16">Trabalhos Realizados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projeto 1 */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <ImageWithFallback
                src={ranucitopografiaLogo}
                alt="Ranuci Topografia"
                className="w-full h-48 object-contain bg-white p-4"
              />
              <div className="p-6">
                <h3 className="text-2xl mb-3">RANUCI TOPOGRAFIA</h3>
                <p className="text-gray-600 mb-4">
                  Site institucional completo desenvolvido com PHP e Laravel, apresentando os serviços
                  de topografia da empresa. Inclui sistema de gestão de conteúdo, galeria de projetos
                  e formulário de contato integrado.
                </p>
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2 mb-2">
                    PHP
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2 mb-2">
                    Laravel
                  </span>
                </div>
                <Button className="w-full" asChild>
                  <a href="https://www.ranucitopografia.com/" target="_blank" rel="noopener noreferrer">
                    Ver Site
                  </a>
                </Button>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXRodWIlMjBjb2RlJTIwcmVwb3NpdG9yeSUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc2OTY5NTEyNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Projetos em Desenvolvimento"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl mb-3">Trabalhos Realizados mas que não foram pro ar</h3>
                <p className="text-gray-600 mb-4">
                  Diversos projetos e experimentos desenvolvidos durante minha jornada como desenvolvedor.
                  Inclui aplicações em diferentes tecnologias, estudos de caso, e soluções criativas
                  que demonstram minha evolução técnica e exploração de novas ferramentas.
                </p>
                <div className="mb-4">
                  <span className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full mr-2 mb-2">
                    Múltiplas Tecnologias
                  </span>
                </div>
                <Button className="w-full" asChild>
                  <a href="https://github.com/leo22-22?tab=repositories" target="_blank" rel="noopener noreferrer">
                    Ver no GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meus Serviços Section */}
      <section id="servicos" className="py-20 px-6" style={{ backgroundColor: '#0f172a' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-16 text-white">Meus Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Serviço 1 */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1604591259403-81d6c9cf87d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5NjgwNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Desenvolvimento Web"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl mb-3">Desenvolvimento Web</h3>
                <p className="text-gray-600 mb-6">
                  Criação de websites e aplicações web modernas, responsivas e otimizadas para SEO,
                  utilizando as tecnologias mais recentes do mercado.
                </p>
                <Button className="w-full" asChild>
                  <a href="https://github.com/leo22-22?tab=repositories" target="_blank" rel="noopener noreferrer">
                    Acessar Projetos
                  </a>
                </Button>
              </div>
            </div>

            {/* Serviço 2 */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3Njk2ODk3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Aplicativos Mobile"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl mb-3">Sistemas Empresariais</h3>
                <p className="text-gray-600 mb-6">
                  Desenvolvimento de Sistemas, como Cadastros de produtos, clientes, relatórios entre outros.
                </p>
                <Button className="w-full" asChild>
                  <a href="https://github.com/leo22-22?tab=repositories" target="_blank" rel="noopener noreferrer">
                    Acessar Projetos
                  </a>
                </Button>
              </div>
            </div>

            {/* Serviço 3 */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2OTYxNTA0OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="UI/UX Design"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl mb-3">UI/UX Design</h3>
                <p className="text-gray-600 mb-6">
                  Design de interfaces intuitivas e atraentes, com foco na experiência do usuário
                  e nas melhores práticas de usabilidade.
                </p>
                <Button className="w-full" asChild>
                  <a href="https://github.com/leo22-22?tab=repositories" target="_blank" rel="noopener noreferrer">
                    Acessar Projetos
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-16">Entre em Contato</h2>
          <div className="grid md:grid-cols-1 gap-12">

            {/* Informações de Contato */}
            <div className="bg-white/80 backdrop-blur-sm rounded-[4rem] shadow-3xl shadow-blue-900/5 border border-white">
              <div>
                <h3 className="text-2xl mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Telefone</p>
                      <a href="tel:+5518981113802" className="text-gray-600 hover:text-blue-600">
                        +55 (18) 98111-3802
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:leonardoranuci17@gmail.com" className="text-gray-600 hover:text-blue-600">
                        leonardoranuci17@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/leonardo-picolo-348683273/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                        linkedin/leonardo-picolo
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Github className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a href="https://github.com/leo22-22" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                        github.com/leo22-22
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Estou sempre aberto a novos projetos e colaborações. Entre em contato para discutirmos como posso ajudar a transformar suas ideias em realidade!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2026 Leonardo Picolo dos Santos Ranuci. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}