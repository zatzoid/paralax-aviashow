"user client";
import './sectionFour.css';
import PointBtn from '../ui/PointBtn';

import { useMemo, useRef, useState } from "react";
interface elPos {
    x: number
    y: number
}

export default function SectionFour() {
    const [tiketCount, setTiketCount] = useState<number>(2);
    const [dayCount, setDayCount] = useState<number>(2);
    const elOneRef = useRef<HTMLDivElement>(null);
    const elTwoRef = useRef<HTMLDivElement>(null);
    const elThreeRef = useRef<HTMLDivElement>(null);
    const rect = elOneRef?.current?.getBoundingClientRect();
    const rect2 = elTwoRef?.current?.getBoundingClientRect();
    const rect3 = elThreeRef?.current?.getBoundingClientRect();
    const [elOnePos, setElOnePos] = useState<elPos>({ x: 0, y: 0 });
    const [elTwoPos, setElTwoPos] = useState<elPos>({ x: 0, y: 0 });
    const [elThreePos, setElThreePos] = useState<elPos>({ x: 0, y: 0 });

    function moveAllEls(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {


        if (rect) {
            const relX = event.clientX - rect.left;
            const relY = event.clientY - rect.top;
            const maxX = rect.width;
            const maxY = rect.height;

            // Определяем относительные координаты для трансформации
            const transformX = (relX / maxX - 0.5) * -15;
            const transformY = (relY / maxY - 0.5) * -15;

            setElOnePos({ x: transformX, y: transformY });
        }

        if (rect2) {
            const relX = event.clientX - rect2.left;
            const relY = event.clientY - rect2.top;
            const maxX = rect2.width;
            const maxY = rect2.height;

            // Определяем относительные координаты для трансформации
            const transformX = (relX / maxX - 0.5) * -20;
            const transformY = (relY / maxY - 0.5) * -20;

            setElTwoPos({ x: transformX, y: transformY });
        }

        if (rect3) {
            const relX = event.clientX - rect3.left;
            const relY = event.clientY - rect3.top;
            const maxX = rect3.width;
            const maxY = rect3.height;

            // Определяем относительные координаты для трансформации
            const transformX = (relX / maxX - 0.5) * -25;
            const transformY = (relY / maxY - 0.5) * -25;

            setElThreePos({ x: transformX, y: transformY });
        }
    }


    const price = useMemo(() => {
        return (1000 * tiketCount) * dayCount
    }, [tiketCount, dayCount])
    return (
        <div className="four"
            onMouseMove={moveAllEls}
            onMouseLeave={() => { setElOnePos({ x: 0, y: 0 }); setElTwoPos({ x: 0, y: 0 }); setElThreePos({ x: 0, y: 0 }) }}>
            <div className="four__bg"></div>
            <div
                ref={elOneRef}
                style={{ transform: `translate(${elOnePos.x}%,${elOnePos.y}%)` }}
                className={`four__bgEl four__bgEl_one ${dayCount > 0 && 'four__bgEl_one'}`}></div>
            <div
                ref={elTwoRef}
                style={{ transform: `translate(${elTwoPos.x}%,${elTwoPos.y}%)` }}
                className={`four__bgEl   ${dayCount > 1 && 'four__bgEl_two'}`}></div>
            <div
                ref={elThreeRef}
                style={{ transform: `translate(${elThreePos.x}%,${elThreePos.y}%)` }}
                className={`four__bgEl  ${dayCount > 2 && 'four__bgEl_three'}`}></div>
            <div className="four__calc">
                <h2 className="four__calc-heading">Калькулятор стоимости билетов</h2>

                <form className="four__calc-form">
                    <input
                        title='Кол-во билетов'
                        value={tiketCount}
                        onChange={(evt) => { setTiketCount(Number(evt.target.value)) }}
                        className="four__calc-form-count"
                        max={99}
                        type="number" />

                    <div className="four__calc-form-dayCount">
                        <label className='four__calc-form-dayCount-el'>
                            <input
                                className='four__calc-form-dayCount-input'
                                type="checkbox"
                                onChange={(evt) => { setDayCount(Number(evt.currentTarget.value)) }}
                                checked={dayCount > 0}
                                value={1} />
                            <p className='four__calc-form-dayCount-text'>1</p>
                            <PointBtn btnisActive={dayCount > 0} />
                            <hr className='four__calc-form-dayCount-line' />
                            <hr className='four__calc-form-dayCount-line' />
                        </label>
                        <label className='four__calc-form-dayCount-el'>
                            <input
                                className='four__calc-form-dayCount-input'
                                type="checkbox"
                                onChange={(evt) => { setDayCount(Number(evt.currentTarget.value)) }}
                                checked={dayCount > 1}
                                value={2} />
                            <p className='four__calc-form-dayCount-text'>2</p>
                            <PointBtn btnisActive={dayCount > 1} />
                            <hr className='four__calc-form-dayCount-line' />
                            <hr className='four__calc-form-dayCount-line' />
                        </label>
                        <label className='four__calc-form-dayCount-el'>
                            <input
                                className='four__calc-form-dayCount-input'
                                type="checkbox"
                                onChange={(evt) => { setDayCount(Number(evt.currentTarget.value)) }}
                                checked={dayCount > 2}
                                value={3} />
                            <p className='four__calc-form-dayCount-text'>3</p>
                            <PointBtn btnisActive={dayCount > 2} />
                            <hr className='four__calc-form-dayCount-line' />
                            <hr className='four__calc-form-dayCount-line' />
                        </label>
                    </div>
                    <p className='four__calc-form-price'>
                        &#8594;{price}₽
                    </p>
                </form>
            </div>
        </div>
    )
}