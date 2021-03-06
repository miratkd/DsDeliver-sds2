import { formatPrice } from './Helpers';
import { Product } from './Types';

type props = {
    product: Product;
    onSelectProduct:(product : Product) => void;
    isSelected: boolean;
}



function ProductCard({product, onSelectProduct, isSelected} : props ){
    return(
        <div
         className={`order-card-container ${isSelected ? 'selected' : ''} `}
         onClick={()=> onSelectProduct(product)}
         >
            <h3 className="order-car-title">
                {product.name}
            </h3>
            <img src={product.imageUri} className="order-card-image" alt={product.name}/>
            <h3 className="order-card-price">
                 {formatPrice(product.price)}
            </h3>
            <div className="order-card-description">
                <h3>descrição</h3>
                <p>
                    {product.description}
                </p>
            </div>
        </div>
    )
}

export default ProductCard;