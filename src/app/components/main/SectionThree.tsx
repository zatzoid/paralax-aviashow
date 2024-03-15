"use client";
import { useState } from 'react';
import './sectionThree.css'
import Link from 'next/link';

export default function SectionThree() {
    const [currentElOpen, setCurrentElOpen] = useState<number>(4);

    return (
        <ul className={`three three_${currentElOpen}`}>
            <li className={`three__el three__el_ru ${currentElOpen === 1 && 'three__el_open'}`}>
                <div className='three__el-bg'></div>
                <button className="three__el-btnOpen hov-opacity"
                    onClick={() => { setCurrentElOpen(1) }}
                    disabled={currentElOpen === 1}>
                    <p className="three__el-btn-text">RUSSIAN</p>

                </button>
                <div className="three__el-description">
                    <p className="three__el-descriptiond-text">Lorem ipsum, dolor
                        sit amet consectetur adipisicing
                        elit. Quisquam laboriosam laudantium maiores
                        perspiciatis enim pariatur.</p>
                    <Link href={'/galery?category=rus'} className="hov-opacity three__el-description-btnModal ">
                        ГАЛЕРЕЯ &#8594;
                    </Link>
                </div>
            </li>
            <li className={`three__el three__el_us ${currentElOpen === 2 && 'three__el_open'}`}>
                <div className='three__el-bg'></div>
                <button className="three__el-btnOpen hov-opacity"
                    onClick={() => { setCurrentElOpen(2) }}
                    disabled={currentElOpen === 2}>
                    <p className="three__el-btn-text">USA</p>

                </button>
                <div className="three__el-description">
                    <p className="three__el-descriptiond-text">Lorem ipsum, dolor
                        sit amet consectetur adipisicing
                        elit. Quisquam laboriosam laudantium maiores
                        perspiciatis enim pariatur.</p>
                    <Link href={'/galery?category=usa'} className="hov-opacity three__el-description-btnModal ">
                        ГАЛЕРЕЯ &#8594;
                    </Link>
                </div>
            </li>
            <li className={`three__el three__el_er ${currentElOpen === 3 && 'three__el_open'}`}>
                <div className='three__el-bg'></div>
                <button className="three__el-btnOpen hov-opacity"
                    onClick={() => { setCurrentElOpen(3) }}
                    disabled={currentElOpen === 3}>
                    <p className="three__el-btn-text">EUROPE</p>

                </button>
                <div className="three__el-description">

                    <p className="three__el-descriptiond-text">Lorem ipsum, dolor
                        sit amet consectetur adipisicing
                        elit. Quisquam laboriosam laudantium maiores
                        perspiciatis enim pariatur.</p>

                    <Link href={'/galery?category=eur'} className="hov-opacity three__el-description-btnModal ">
                        ГАЛЕРЕЯ &#8594;
                    </Link>
                </div>
            </li>

        </ul>
    )
}