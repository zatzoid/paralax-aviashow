"use client"
import SectionOne from "./components/main/SectionOne";
import SectionTwo from "./components/main/SectionTwo";
import SectionCount from "./components/main/SectionCount";
import SectionThree from "./components/main/SectionThree";
import SectionFour from "./components/main/SectionFour";
import SectionFive from "./components/main/SectionFive";
import './components/main/main.css';
import { useEffect, useState } from "react";

export default function Home() {
  console.log('home rerender');
  const [currentShowedSection, setCurrentShowedSection] = useState<number>(1);
  function sliedSection(event: React.MouseEvent<HTMLButtonElement>) {
    const value = Number(event.currentTarget.value);
    setCurrentShowedSection(value);
  }

  //не работает внутри /
  function checkPath() {
    if (window.location.hash.includes('section')) {
      const hash = window.location.hash;
      const sectionId = hash.slice(-1);

      setCurrentShowedSection(Number(sectionId));
      window.history.replaceState(null, document.title, window.location.pathname);
    }

  }


  useEffect(() => {
    checkPath();
    let scrolListening = true
    let prevScrollPos = 0;
    function scroll() {
      if (scrolListening) {
        scrolListening = false;
        switchSectionOnscroll(prevScrollPos);
        prevScrollPos = window.scrollY;
        setTimeout(() => {
          scrolListening = true
        }, 500);
      }
    }

    document.addEventListener('scroll', () => { scroll() });


    return () => {
      window.removeEventListener('scroll', () => { scroll() });
    };

  }, []);
  useEffect(() => {
    if (currentShowedSection === 5) {
      window.scrollTo(0, window.document.body.offsetHeight);
    } else if (currentShowedSection === 1) {
      window.scrollTo(0, 0);
    }

  }, [currentShowedSection])

  function switchSectionOnscroll(prevScrollPos: number) {
    console.log('call scroll');
    //prevstate это текущее значение стейт перменной
    setCurrentShowedSection(prevSection => {
      if (prevScrollPos < window.scrollY && prevSection < 5) {
        return prevSection + 1;
      } else if (prevScrollPos > window.scrollY && prevSection > 1) {
        return prevSection - 1;
      }
      return prevSection;
    });
  }


  return (
    <main className="main">
      <div className="main__bg" ></div>

      <SectionCount currentShowedSection={currentShowedSection} sliedSection={sliedSection} />
      <section className={`section section_one ${currentShowedSection === 1 ? 'section_active' : ''}`}>
        <SectionOne />
      </section>
      <section className={`section section_two ${currentShowedSection === 2 ? 'section_active' : ''}`}>
        <SectionTwo currentShowedSection={currentShowedSection} />
      </section>
      <section className={`section section_three ${currentShowedSection === 3 ? 'section_active' : ''}`}>
        <SectionThree />
      </section>
      <section className={`section section_four ${currentShowedSection === 4 ? 'section_active' : ''}`}>
        <SectionFour />
      </section>
      <section className={`section section_five ${currentShowedSection === 5 ? 'section_active' : ''}`}>
        <SectionFive />
      </section>
    </main >
  );
}
