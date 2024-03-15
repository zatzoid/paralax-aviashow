import './about.css';
import Link from "next/link";

export default function About() {

    return (
        <section className="about">
            <div className="about__bg"></div>

            <div className="about__content">
                <div className="about__img">
                    {/* <img className='about__img-data' src="" alt="photo" /> */}
                </div>
                <div>
                    <h1 className="about__content-heading">Lorem ipsum dolor sit amet.</h1>
                    <ul className="about__content-grid">
                        <li className="about__content-grid-el">
                            <h2 className="about__content-grid-el-heading">Lorem, ipsum dolor.</h2>
                            <p className="about__content-grid-el-text">
                                <span style={{ color: 'var(--col-main)' }}> Lorem ipsum,</span>
                                dolor sit amet consectetur
                                adipisicing elit. Consectetur similique maxime velit,
                                magnam perspiciatis optio illum fuga cupiditate nesciunt
                                suscipit?
                            </p>
                        </li>
                        <li className="about__content-grid-el">
                            <h2 className="about__content-grid-el-heading">Lorem, ipsum dolor.</h2>
                            <p className="about__content-grid-el-text">
                                <span style={{ color: 'var(--col-main)' }}> Lorem ipsum,</span>
                                dolor sit amet consectetur
                                adipisicing elit. Consectetur similique maxime velit,
                                magnam perspiciatis optio illum fuga cupiditate nesciunt
                                suscipit?
                            </p>
                        </li>

                    </ul>

                </div>
                <div className="about__content-backBtn ">
                    <Link className='about__content-backBtn-link hov-opacity' href={'/'}>&#8592; Вернуться назад</Link>
                </div>
            </div>
        </section>
    )
}