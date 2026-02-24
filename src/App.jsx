import foto from "./assets/jeovs.jpg";
import nutricionista from "./assets/nutricionista.png";
function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-md border-b border-blue-900 z-50 px-10 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">Software Engineer</h1>

        <ul className="flex gap-8 text-gray-400">
          <li className="hover:text-blue-400 cursor-pointer">
            <a href="#sobre">Sobre</a>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <a href="#projetos">Projetos</a>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 pt-40">
        <div className="max-w-xl">
          <h2 className="text-6xl font-bold leading-tight mb-6">
            Olá, eu sou <span className="text-blue-500">Jeovs</span> 👋
          </h2>

          <p className="text-gray-400 mb-8">
            Desenvolvedor focado em criar experiências modernas e interfaces
            elegantes com React e tecnologias atuais.
          </p>

          <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition shadow-lg shadow-blue-900/50">
            <a href="#projetos">Ver Projetos</a>
          </button>
        </div>

        <div className="mt-10 md:mt-0 flex justify-center">
          <div className="rounded-full p-1 bg-gradient-to-r from-blue-600 to-blue-400">
            <img
              src={foto}
              alt="Jeovs"
              className="w-72 h-72 object-cover rounded-full border-4 border-black shadow-2xl hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="px-10 mt-32 max-w-4xl">
        <h3 className="text-4xl font-bold text-blue-500 mb-8">
          Sobre Mim
        </h3>

        <p className="text-gray-400 text-lg leading-relaxed">
          Sou desenvolvedor apaixonado por tecnologia e criação de soluções
          digitais modernas. Tenho experiência com HTML, CSS, JavaScript e React,
          sempre buscando evoluir minhas habilidades e entregar projetos
          organizados, responsivos e com ótima experiência de usuário.
          <br /><br />
          Gosto de transformar ideias em interfaces bonitas e funcionais,
          mantendo código limpo e boas práticas de desenvolvimento.
        </p>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="px-10 mt-32 mb-20">
        <h3 className="text-4xl font-bold mb-12 text-blue-500">
          Projetos
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          {/* NUTRICIONISTA */}
         <div className="bg-gray-900 rounded-2xl overflow-hidden border border-blue-900 hover:border-blue-500 transition hover:scale-105 hover:shadow-lg hover:shadow-blue-900/40">

  {/* IMAGEM */}
  <div className="h-48 overflow-hidden">
    <img
      src={nutricionista}
      alt="Site Nutricionista"
      className="w-full h-full object-cover hover:scale-110 transition duration-500"
    />
  </div>

  {/* CONTEÚDO */}
  <div className="p-6">
    <h4 className="text-2xl font-semibold mb-3">
      Site Nutricionista 🥗
    </h4>

    <p className="text-gray-400 mb-4 text-sm">
      Website profissional desenvolvido com foco em layout moderno,
      responsividade e experiência do usuário.
    </p>

    {/* TECNOLOGIAS */}
    <div className="flex gap-2 flex-wrap mb-4">
      <span className="bg-blue-900/40 text-blue-400 text-xs px-3 py-1 rounded-full">
        HTML
      </span>
      <span className="bg-blue-900/40 text-blue-400 text-xs px-3 py-1 rounded-full">
        CSS
      </span>
      <span className="bg-blue-900/40 text-blue-400 text-xs px-3 py-1 rounded-full">
        JavaScript
      </span>
    </div>

    <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm transition">
      <a href="https://jeovs777.github.io/emilly-nutricionista-site/" target="_blank" rel="external">Ver Projeto</a>
    </button>
  </div>
</div>

          {/* EM ANDAMENTO */}
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition hover:scale-105">
            <h4 className="text-2xl font-semibold mb-4">
              Projeto em Andamento 🚧
            </h4>

            <p className="text-gray-400 mb-6">
              Aplicação moderna sendo desenvolvida com tecnologias atuais do mercado.
            </p>

            <button className="border border-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-900/40 transition">
              Em breve
            </button>
          </div>

          {/* FUTURO */}
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition hover:scale-105">
            <h4 className="text-2xl font-semibold mb-4">
              Novo Projeto 💡
            </h4>

            <p className="text-gray-400 mb-6">
              Em planejamento para ampliar meu portfólio e explorar novas tecnologias.
            </p>

            <button className="border border-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-900/40 transition">
              Em breve
            </button>
          </div>

        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="px-10 mt-32 pb-20">
        <h3 className="text-4xl font-bold text-blue-500 mb-8">
          Contato
        </h3>

        <p className="text-gray-400 mb-6">
          Interessado em trabalhar comigo ou desenvolver um projeto?
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg transition">
            <a href="https://www.linkedin.com/in/jeov%C3%A1-melqu%C3%ADades-01a037343/" target="_blank" rel="external">LinkedIn</a>
          </button>

          <button className="border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-900/40 transition">
            <a href="https://github.com/Jeovs777" target="_blank" rel="external">GitHub</a>
          </button>
        </div>
      </section>

    </div>
  );
}

export default App;