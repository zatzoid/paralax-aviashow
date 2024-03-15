import './pointBtn.css';

interface props {
    btnisActive: boolean
}

export default function PointBtn(props: props) {

    return (
        <div className="pointBtn">
            <span className={`pointBtn__point ${props.btnisActive && 'pointBtn__point_active'}`}></span>
            <span className={`pointBtn__border ${props.btnisActive && 'pointBtn__border_active'}`}></span>
        </div>
    )
}