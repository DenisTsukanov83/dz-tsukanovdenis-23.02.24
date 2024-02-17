import './Header.css';
import headerImg from '../../sources/header.jpg'

const Header = () => {
    return (
        <header>
            <h1>Борщ с говядиной</h1>
            <div className='header-wrapper'>
                <div className='header-photo'>
                    <img src={headerImg} alt=""/>
                </div>
                <div className='header-text'>
                    <div><b>6</b> порций</div>
                    <div><b>2</b> часа (ваши 30 мин)</div>
                    <div>Вкусный красный борщ с говядиной приготовить очень легко.</div>
                </div>
            </div>
        </header>
    )
}

export default Header;