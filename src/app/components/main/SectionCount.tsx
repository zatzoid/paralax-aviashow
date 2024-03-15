"use client"
import Link from "next/link"
import './sectionCount.css';
import PointBtn from "../ui/PointBtn";


interface props {
    currentShowedSection: number;
    sliedSection: Function;

}

export default function SectionCount(props: props) {

    return (
        <nav className="sectionCount">
            <button className="sectionCount__el hov-opacity"
                disabled={props.currentShowedSection === 1}
                onClick={(evt) => { props.sliedSection(evt) }}
                value={1}
                title="section one">
                <PointBtn btnisActive={props.currentShowedSection === 1}/>
            </button>
            <button className="sectionCount__el hov-opacity"
             disabled={props.currentShowedSection === 2}
                onClick={(evt) => { props.sliedSection(evt) }}
                value={2}
                title="section two">
                <PointBtn btnisActive={props.currentShowedSection === 2}/>
            </button>
            <button className="sectionCount__el hov-opacity"
             disabled={props.currentShowedSection === 3}
                onClick={(evt) => { props.sliedSection(evt) }}
                value={3}
                title="section three">
                <PointBtn btnisActive={props.currentShowedSection === 3}/>
            </button>
            <button className="sectionCount__el hov-opacity"
             disabled={props.currentShowedSection === 4}
                onClick={(evt) => { props.sliedSection(evt) }}
                value={4}
                title="section four">
                <PointBtn btnisActive={props.currentShowedSection === 4}/>
            </button>
            <button className="sectionCount__el hov-opacity"
             disabled={props.currentShowedSection === 5}
                onClick={(evt) => { props.sliedSection(evt) }}
                value={5}
                title="section five">
                <PointBtn btnisActive={props.currentShowedSection === 5}/>
            </button>
        </nav>
    )
}