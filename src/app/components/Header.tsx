"use client";
import Link from "next/link";
import './header.css'
import { useRef, useState } from "react";

export default function Header() {
    /*  <nav>
               <Link href='/'>home</Link>
               <Link href='/about'> about</Link>
           </nav> */
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    function toggleMenu() {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <header className={`header ${menuIsOpen && 'header_open'}`} >
            <div className="header__content">
                <div className="header__content-block">
                    <button
                        className="heder__content-block-btn-openMenu hov-opacity"
                        onClick={() => toggleMenu()}
                        aria-label="open menu"></button>
                    <a className="header__content-block__link hov-opacity" href="tel:+38(228)1488228">+38 (228) 1488 228</a>
                </div>

                <div className="header__content-block">
                    <button className="header__content-block-btn-callModal hov-opacity">ЗАКАЗАТЬ ЗВОНОК
                        <span className="header__content-block-btn-callModal-icon"></span>
                    </button>


                </div>

            </div>
            <div className="menu">
                <nav className="menu__navbar">
                    <Link className="menu__navbar-link " onClick={()=>{toggleMenu()}} href='/#section2'>
                        <div className="menu__navbar-link-bg"></div>
                        <p className="menu__navbar-link-text hov-opacity">section 2</p>
                    </Link>
                    <Link className="menu__navbar-link " onClick={()=>{toggleMenu()}} href='/#section3'>
                         <div className="menu__navbar-link-bg"></div>
                        <p className="menu__navbar-link-text hov-opacity">section 3</p>
                    </Link>
                    <Link className="menu__navbar-link " onClick={()=>{toggleMenu()}} href='/#section4'>
                         <div className="menu__navbar-link-bg"></div>
                        <p className="menu__navbar-link-text hov-opacity"> section 4</p>
                    </Link>
                    <Link className="menu__navbar-link " onClick={()=>{toggleMenu()}} href='/#section5'>
                         <div className="menu__navbar-link-bg"></div>
                        <p className="menu__navbar-link-text hov-opacity">section 5</p>
                    </Link>
                    <Link className="menu__navbar-link " onClick={()=>{toggleMenu()}} href='/about'>
                         <div className="menu__navbar-link-bg"></div>
                        <p className="menu__navbar-link-text hov-opacity"> about</p>
                    </Link>
                </nav>
                <div className="menu__description">
                    <div className="menu__description-heding">
                        <h2 className="menu-description-heading-logo">paralax - aviashow</h2>
                        <p className="menu-description-heading-text">сайт про несуществующее авиашоу</p>
                        <button className="menu-description-heading-btnClose hov-opacity" onClick={() => toggleMenu()}>
                            <span className="menu-description-heading-btnClose-line"></span>
                            <span className="menu-description-heading-btnClose-line"></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}