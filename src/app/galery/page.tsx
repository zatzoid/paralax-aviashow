"use client"
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import './galery.css'
/* 
const images = require.context('@/assets/galery', true);
const imageList = images.keys().map((image: any) => images(image)); */

//const imageList = importAll(require.context('@/assets/galery', false, /\.(png|jpe?g|svg)$/));

export default function Galery() {
    const [currentShowedEl, setCurrentShowedEl] = useState<number>(-1);
    function importAll(r: any) {
        console.log('call import');
        return r.keys().map((item: any) => ({ name: item, link: r(item) }));
    }
    const images = useMemo(() => importAll(require.context('@/assets/galery', false, /\.(png|jpe?g|svg)$/)), [])
    useEffect(() => {
        console.log(images);
    }, [])

    const renderImages = useMemo(() => {
        const items = images.map((el: any, index: number) => {

            return (
                <li className="galery__grid-el" key={index} onClick={() => { setCurrentShowedEl(index) }}>
                    <p className="galery__grid-el-text">{el.name}</p>
                    <Image className='galery__grid-el-img' src={el.link.default.src} fill={true} alt={el.name} />
                </li>)
        })
        console.log('call render items');
        return items
    }, []);


    return (
        <main className="galery">
            <div className="galeryBg"></div>
            <div
                className={`galeryItems ${currentShowedEl >= 0 && 'galeryItems_fs'}`}>
                <ul
                    style={{ transform: `translateX(calc(-${currentShowedEl}00% - ${20 * currentShowedEl}px))` }}
                    className={`galery__grid ${currentShowedEl >= 0 && 'galery__grid_fs'}`}>
                    {renderImages}
                </ul>

            </div>

            <div className={`galery__btns ${currentShowedEl >= 0 && 'galery__btns_active'}`}>
                <button className='galery__btn galery__btn_left hov-opacity'
                    disabled={currentShowedEl < 1}
                    onClick={() => setCurrentShowedEl(currentShowedEl - 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" id='btnSvgLeft' version="1.1" width="50" height="50" viewBox="0 0 256 256" xmlSpace="preserve">
                        <g style={{ stroke: 'none', strokeWidth: '0', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'none', fillRule: 'nonzero', opacity: '1' }}
                            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81) " >
                            <path d="M 24.25 90 c -0.896 0 -1.792 -0.342 -2.475 -1.025 c -1.367 -1.366 -1.367 -3.583 0 -4.949 L 60.8 45 L 21.775 5.975 c -1.367 -1.367 -1.367 -3.583 0 -4.95 c 1.367 -1.366 3.583 -1.366 4.95 0 l 41.5 41.5 c 1.367 1.366 1.367 3.583 0 4.949 l -41.5 41.5 C 26.042 89.658 25.146 90 24.25 90 z"
                                style={{ stroke: 'none', strokeWidth: '1', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fillRule: 'nonzero', opacity: '1' }} transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                        </g>
                    </svg>

                </button>
                <div className="galery__btnInfo">
                    <p className="galery__btnInfo-text">{images.length}</p>
                    <p className="galery__btnInfo-text">{currentShowedEl + 1}</p>
                </div>

                <button className='galery__btn galery__btn_right hov-opacity'
                    disabled={currentShowedEl + 1 >= images.length}
                    onClick={() => setCurrentShowedEl(currentShowedEl + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" id='btnSvgRight' version="1.1" width="50" height="50" viewBox="0 0 256 256" xmlSpace="preserve">
                        <g style={{ stroke: 'none', strokeWidth: '0', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'none', fillRule: 'nonzero', opacity: '1' }} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                            <path d="M 24.25 90 c -0.896 0 -1.792 -0.342 -2.475 -1.025 c -1.367 -1.366 -1.367 -3.583 0 -4.949 L 60.8 45 L 21.775 5.975 c -1.367 -1.367 -1.367 -3.583 0 -4.95 c 1.367 -1.366 3.583 -1.366 4.95 0 l 41.5 41.5 c 1.367 1.366 1.367 3.583 0 4.949 l -41.5 41.5 C 26.042 89.658 25.146 90 24.25 90 z"
                                style={{ stroke: 'none', strokeWidth: '1', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fillRule: 'nonzero', opacity: '1' }} transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                        </g>
                    </svg>
                </button>
                <button className='galety__btnClose hov-opacity' onClick={() => { setCurrentShowedEl(-1) }}></button>
            </div>
        </main>
    )
}