import { useRef } from 'react';
import Link from 'next/link';
import './aside.css'

export default function Aside() {

    return (
        <aside className="aside">
            <Link className="aside__logo hov-opacity" href='/'><h2 className="aside__logo-data">paralax - aviashow</h2></Link>
            <div className="aside__content">
                <p className="aside__content-text">сайт про несуществующие авиашоу</p>
                <div className="aside__content-line"></div>
                <a className="aside__content-social" href="#"></a>
            </div>


        </aside>
    )
}