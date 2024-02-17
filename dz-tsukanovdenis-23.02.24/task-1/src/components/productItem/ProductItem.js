import './ProductItem.css';

const ProductItem = ({name, weight, unit, style}) => {
    return (
        <li className='products-item' style={style}>
            <span>{name}</span> - <span>{weight}</span> <span>{unit}</span>
        </li>
    )
}

export default ProductItem;