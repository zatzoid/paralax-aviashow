import { useEffect, useRef, useState } from 'react';
import './sectionOne.css';

interface elPos {
    x: number
    y: number
}

export default function SectionOne() {
    const elOneRef = useRef<HTMLDivElement>(null);
    const elTwoRef = useRef<HTMLDivElement>(null);
    const rect = elOneRef?.current?.getBoundingClientRect();
    const rect2 = elTwoRef?.current?.getBoundingClientRect();
    const [elOnePos, setElOnePos] = useState<elPos>({ x: 0, y: 0 });

    const [elTwoPos, setElTwoPos] = useState<elPos>({ x: 0, y: 0 });
    function moveAllEls(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {


        if (rect) {
            const relX = event.clientX - rect.left;
            const relY = event.clientY - rect.top;
            const maxX = rect.width;
            const maxY = rect.height;

            // Определяем относительные координаты для трансформации
            const transformX = (relX / maxX - 0.5) * -10;
            const transformY = (relY / maxY - 0.5) * -10;

            setElOnePos({ x: transformX, y: transformY });
        }

        if (rect2) {
            const relX = event.clientX - rect2.left;
            const relY = event.clientY - rect2.top;
            const maxX = rect2.width;
            const maxY = rect2.height;

            // Определяем относительные координаты для трансформации
            const transformX = (relX / maxX - 0.5) * 10;
            const transformY = (relY / maxY - 0.5) * 10;

            setElTwoPos({ x: transformX, y: transformY });
        }
    }




    return (
        <>
            <div className="one__content"
                onMouseMove={moveAllEls}

                onMouseLeave={() => { setElOnePos({ x: 0, y: 0 }); setElTwoPos({ x: 0, y: 0 }) }}>
                <h1 className='one__content-logo'>Paralax - AviaShow</h1>

                <div className="one__content-bgWrapper">{/* darker */}</div>
                <div className="one__content-bgMain">{/* sky */}</div>
                <div
                    ref={elOneRef}
                    style={{ transform: `translate(${elOnePos.x}%, ${elOnePos.y}%)` }}
                    className="one__content-bgEl one__content-bgEl_one">{/* big plane */}</div>
                <div
                    ref={elTwoRef}
                    style={{ transform: `translate(${elTwoPos.x}%, ${elTwoPos.y}%)` }}
                    className="one__content-bgEl one__content-bgEl_two">{/* small plane */}</div>

            </div>
        </>

    )
}