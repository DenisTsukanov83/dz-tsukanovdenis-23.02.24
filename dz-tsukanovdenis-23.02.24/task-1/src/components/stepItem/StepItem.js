import './StepItem.css';

const StepItem = ({src, text}) => {
    return (
        <li>
            <div>
                <img src={src} alt=""/>
            </div>
            <div>
                {text}
            </div>
        </li>
    )
}

export default StepItem;