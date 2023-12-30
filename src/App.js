import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import LineGradient from "./components/LineGradient";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {

    // Determina a página atual
    const [selectedPage, setSelectedPage] = useState("home");

    // Controla a cor de fundo da Navbar
    const [isTopOfPage, setIsTopOfPage] = useState(true);

    // Media Query para páginas maiores
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    // Define o efeito para alterar a cor de fundo da Navbar, 
    // quando houver o rolamento da tela
    useEffect(() => {
        // Gerencia a rolagem da tela
        const handleScroll = () => {
            // Sem rolagem
            if (window.scrollY === 0) setIsTopOfPage(true);
            // Com rolagem
            if (window.scrollY !== 0) setIsTopOfPage(false);
        }
        // Listener para verificar se houve rolagem da tela
        window.addEventListener("scroll", handleScroll);
        // Retorno
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="app bg-deep-blue">

            {/* Navbar */}
            <Navbar 
                isTopOfPage={isTopOfPage} 
                selectedPage={selectedPage} 
                setSelectedPage={setSelectedPage} 
            />

            {/* Conteúdo principal */}
            <div className="w-5/6 mx-auto md:h-full">
                {/* Menu de navegação do lado direito -> DOTS */}
                {isAboveMediumScreens && (
                    <DotGroup 
                        selectedPage={selectedPage} 
                        setSelectedPage={setSelectedPage}
                    />
                )}
                {/* Landing Page */}
                <Landing setSelectedPage={setSelectedPage} />
            </div>

            {/* Linha de separação das seções */}
            <LineGradient />

            {/* Skills Section */}
            <div className="w-5/6 mx-auto md:h-full">
                <MySkills />
            </div>

            {/* Linha de separação das seções */}
            <LineGradient />

            {/* Projects Section */}
            <div className="w-5/6 mx-auto">
                <Projects />
            </div>

            {/* Linha de separação das seções */}
            <LineGradient />

            {/* Testimonials Section */}
            <div className="w-5/6 mx-auto md:h-full">
                <Testimonials />
            </div>

            {/* Linha de separação das seções */}
            <LineGradient />

            {/* Contact Section */}
            <div className="w-5/6 mx-auto md:h-full">
                <Contact />
            </div>

        </div>
    );
}

export default App;
