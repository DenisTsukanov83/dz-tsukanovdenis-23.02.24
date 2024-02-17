import './StepByStep.css';
import StepItem from '../stepItem/StepItem';
import src1 from '../../sources/1.jpg';
import src2 from '../../sources/2.jpg';
import src3 from '../../sources/3.jpg';
import src4 from '../../sources/4.jpg';
import src5 from '../../sources/5.jpg';
import src6 from '../../sources/6.jpg';
import src7 from '../../sources/7.jpg';
import src8 from '../../sources/8.jpg';
import src9 from '../../sources/9.jpg';
import src10 from '../../sources/10.jpg';
import src11 from '../../sources/11.jpg';
import src12 from '../../sources/12.jpg';
import src13 from '../../sources/13.jpg';
import src14 from '../../sources/14.jpg';
import src15 from '../../sources/header.jpg';

const stepList = [
    {
        src: src1,
        text: 'Подготовить продукты.',
        key: 0
    },
    {
        src: src2,
        text: 'Говядину нарезать крупными кусками.',
        key: 1
    },
    {
        src: src3,
        text: 'Залить мясо в кастрюле холодной водой, довести до кипения, снять пену. Варить бульон примерно 1,5 часа на небольшом огне.',
        key: 2
    },
    {
        src: src4,
        text: 'В конце варки посолить.',
        key: 3
    },
    {
        src: src5,
        text: 'Свёклу очистить, нарезать соломкой.',
        key: 4
    },
    {
        src: src6,
        text: 'Морковь очистить, натереть на крупной терке.',
        key: 5
    },
    {
        src: src7,
        text: 'Лук очистить, мелко нарезать.',
        key: 6
    },
    {
        src: src8,
        text: 'Капусту нашинковать.',
        key: 7
    },
    {
        src: src9,
        text: 'Картофель очистить, нарезать кубиками.',
        key: 8
    },
    {
        src: src10,
        text: 'На сковороде разогреть растительное масло. Свёклу, морковь и лук выложить на сковороду и тушить на среднем огне (пассеровать), помешивая, 5-7 мин',
        key: 9
    },
    {
        src: src11,
        text: 'В конце добавить уксус и томатную пасту. Перемешать. Готовить овощи ещё 3-4 минуты, помешивая.',
        key: 10
    },
    {
        src: src12,
        text: 'В кипящий бульон выложить картофель и капусту, варить 10 минут. (Молодую капусту добавлять за 5 минут до окончания приготовления борща.)',
        key: 11
    },
    {
        src: src13,
        text: 'Затем добавить пассерованные овощи, лавровый лист и перец. Варить борщ с говядиной еще 5-7 минут.',
        key: 12
    },
    {
        src: src14,
        text: 'Готовому борщу дать настояться 10-15 минут. Зелень нарезать.',
        key: 13
    },
    {
        src: src15,
        text: 'Разлить борщ по тарелкам, заправить сметаной и посыпать зеленью.',
        key: 14
    },

];

const stepComponents = stepList.map(el => {
    return <StepItem src={el.src} text={el.text} key={el.key}/>
});

const StepByStep = () => {
    return (
        <div className='step'>
            <div className='step-title'>
                <h3>Пошаговый фото рецепт</h3><span>Борщ с говядиной</span>
            </div>
            <ul>
                {stepComponents}
            </ul>
        </div>
    )
}

export default StepByStep;