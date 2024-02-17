import './Products.css';
import ProductItem from '../productItem/ProductItem';

const  productsList = [
    {
        name: 'Говядина',
        weight: '500',
        unit: 'г.',
        key: 0
    },
    {
        name: 'Свекла',
        weight: '1',
        unit: 'шт.',
        key: 1
    },
    {
        name: 'Картофель',
        weight: '2',
        unit: 'шт.',
        key: 2
    },
    {
        name: 'Капуста белокачанная',
        weight: '200',
        unit: 'г.',
        key: 3
    },
    {
        name: 'Морковь',
        weight: '1',
        unit: 'шт.',
        key: 4
    },
    {
        name: 'Лук репчатый',
        weight: '1',
        unit: 'шт.',
        key: 5
    },
    {
        name: 'Томатная паста',
        weight: '1',
        unit: 'ст. ложка',
        key: 6
    },
    {
        name: 'Масло растительное',
        weight: '2',
        unit: 'ст. ложки',
        key: 7
    },
    {
        name: 'Уксус',
        weight: '1',
        unit: 'ч. ложка',
        key: 8
    },
    {
        name: 'Лавровый лист',
        weight: '1',
        unit: 'шт.',
        key: 9
    },
    {
        name: 'Перец черный горошком',
        weight: '2-3',
        unit: 'шт.',
        key: 10
    },
    {
        name: 'Соль',
        weight: '2',
        unit: 'ч. ложки (по вкусу)',
        key: 11
    },
    {
        name: 'Вода',
        weight: '1,5',
        unit: 'л.',
        key: 12
    },
    {
        name: 'Зелень уропа и/или петрушки (для подачи)',
        weight: '3-4',
        unit: 'веточки',
        key: 13
    },
    {
        name: 'Сметана (для подачи)',
        weight: '2',
        unit: 'ст. ложки',
        key: 14
    },
];

let styleBg;

const productsComponents = productsList.map((el, i) => {
    i % 2 === 0 ? styleBg = 'rgb(226, 235, 187)' : styleBg = '';
    return <ProductItem name={el.name} weight={el.weight} unit={el.unit} style={{backgroundColor: styleBg}} key={el.key}/>
});

const Products = () => {
    return (
        <div className='products'>
            <div className='products-title'>
                <h3>Продукты</h3><span>(на 6 порций)</span>
            </div>
            <ul>
                {productsComponents}
            </ul>
        </div>
    )
}

export default Products;