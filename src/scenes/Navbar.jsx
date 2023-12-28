import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

// Configura os links da Navbar
const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${
                selectedPage === lowerCasePage ? "text-yellow" : "text-white"
            } hover: text-yellow transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

// Define a Navbar
const Navbar = ({ selectedPage, setSelectedPage}) => {

    // Menu para telas pequenas
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")

    return (
        <nav className={`z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">JE</h4>

                {/* DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link 
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Testimonials"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    // Ícone do menu
                    <button
                        className="rounded-full bg-red p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img src="../assets/menu-icon.svg" alt="menu-icon" />
                    </button>
                )}

                {/* MOBILE MENU POPUP */}

            </div>
        </nav>
    );
};

export default Navbar;