import { useState } from 'react'
import './sectionFive.css';
import PointBtn from '../ui/PointBtn';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function SectionFive() {
    const [currentShowedData, setCurrentShowedData] = useState<number>(1);

    return (
        <div className='five'>
            <div className="five__bg"></div>
            <div className="five__content">
                <h2 className="five__content-heading">Вас ждут 6 штук</h2>
                <div className="five__content-slider">
                    <div className="five__content-slider-counter">
                        <CircularProgressbar
                            styles={buildStyles({
                                pathColor: "#FFAC30",
                                trailColor: "#808080",
                                textColor: 'white',
                                textSize: '30px'

                            })}

                            value={currentShowedData}
                            text={`${currentShowedData}`}
                            maxValue={6}
                            minValue={1}
                            strokeWidth={1} />
                        <button onClick={() => { setCurrentShowedData(1) }}
                            className="five__content-slider-counter-btn"
                            id='one'>
                            <PointBtn btnisActive={currentShowedData >= 1} />
                        </button>
                        <button onClick={() => { setCurrentShowedData(2) }}
                            className="five__content-slider-counter-btn"
                            id='two'>
                            <PointBtn btnisActive={currentShowedData >= 2} />
                        </button>
                        <button onClick={() => { setCurrentShowedData(3) }}
                            className="five__content-slider-counter-btn"
                            id='three'>
                            <PointBtn btnisActive={currentShowedData >= 3} />
                        </button>
                        <button onClick={() => { setCurrentShowedData(4) }}
                            className="five__content-slider-counter-btn"
                            id='four'>
                            <PointBtn btnisActive={currentShowedData >= 4} />
                        </button>
                        <button onClick={() => { setCurrentShowedData(5) }}
                            className="five__content-slider-counter-btn"
                            id='five'>
                            <PointBtn btnisActive={currentShowedData >= 5} />
                        </button>
                        <button onClick={() => { setCurrentShowedData(6) }}
                            className="five__content-slider-counter-btn"
                            id='six'>
                            <PointBtn btnisActive={currentShowedData >= 6} />
                        </button>
                    </div>
                    <div className="five__content-slider-gridWrapper">
                        <ul className='five__content-slider-grid' style={{ transform: `translateX(-${currentShowedData - 1}00%)` }}>
                            <li className='five__content-slider-grid-el'>
                                <p className='five__content-slider-grid-el-text'>1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nemo. Amet sunt at in voluptates?</p>
                            </li>
                            <li className='five__content-slider-grid-el'>
                                <p className='five__content-slider-grid-el-text'>2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatum tempora harum id explicabo cum alias qui necessitatibus inventore voluptatem.</p>
                            </li>
                            <li className='five__content-slider-grid-el'>
                                <p className='five__content-slider-grid-el-text'>3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam praesentium voluptas omnis laborum odit culpa, adipisci deserunt iusto neque. Fugit exercitationem nam reprehenderit rerum labore.</p>
                            </li>
                            <li className='five__content-slider-grid-el'>
                                <p className='five__content-slider-grid-el-text'>4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ad veniam, magnam voluptatibus doloribus vero quis vitae pariatur doloremque sint iusto officia dolorum eligendi. Repudiandae fuga deleniti voluptas nesciunt at?</p>
                            </li>
                            <li className='five__content-slider-grid-el'>
                                <p className='five__content-slider-grid-el-text'>5 Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li className='five__content-slider-grid-el'>
                                <p className='five__content-slider-grid-el-text'>6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nemo. Amet sunt at in voluptates?</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}