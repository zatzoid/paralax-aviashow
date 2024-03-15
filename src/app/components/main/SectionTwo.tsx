"use client";
import { useEffect, useState } from 'react';
import './sectionTwo.css';
import ReactPlayer from 'react-player/youtube';
interface props {
    currentShowedSection: number;
}


export default function SectionTwo(props: props) {
    //стейт и эффект для предотаврещния ошибки  hydration
    // конечный рендер отличается от серверного
    const [renderVideo, setRenderVideo] = useState(false);
    useEffect(() => {
        setRenderVideo(true)
    }, []);

    const [videoIsPlaying, setVideoIsPlaying] = useState<boolean>(false);


    return (
        <div className='two' id='section2'>
            <div className="two__content">
                <h2 className='two__content-heading'> Авиашоу в Геленджике</h2>
                <ul className="two__content-grid">
                    <li className="two__content-grid-el">
                        <p className="two__content-grid-el-data">18</p>
                        <p className="two__content-grid-el-data">пилотов</p>
                    </li>
                    <li className="two__content-grid-el">
                        <p className="two__content-grid-el-data">228</p>
                        <p className="two__content-grid-el-data">самолетов</p>
                    </li>
                    <li className="two__content-grid-el">
                        <p className="two__content-grid-el-data">3</p>
                        <p className="two__content-grid-el-data">дня</p>
                    </li>
                </ul>
            </div>
            <div className="two__bgMain"></div>
            <picture className={`two__picture ${!videoIsPlaying && 'two__picture_active'}`}>
                <source srcSet='http://i3.ytimg.com/vi/9mUR3whFOT0/hqdefault.jpg' type="image/webp" />
                <img src="http://i3.ytimg.com/vi/9mUR3whFOT0/hqdefault.jpg"
                    alt="video" />
            </picture>

            <div className="two__video">
                {renderVideo &&
                    <ReactPlayer url='https://www.youtube.com/embed/9mUR3whFOT0'
                        muted={true}
                        playing={props.currentShowedSection === 2}
                        width={'100%'}
                        height={'100%'}
                        loop={true}
                        onPlay={() => { setVideoIsPlaying(true) }}
                        onError={() => { setVideoIsPlaying(false) }}
                    />
                }


            </div>
            <a className='two__ytLink hov-opacity' href="https://www.youtube.com/watch?v=9mUR3whFOT0&ab_channel=Onhatch" target='_blank'>
                
            </a>


        </div>
    )
}