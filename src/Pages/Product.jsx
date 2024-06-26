import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum';
import '../Styles/Layouts/_product.scss';
import ProductDisplay from '../Components/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts';

function Product() {

    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    return (
        <div className='product container'>
            {product && <Breadcrum product={product} />}
            {product && <ProductDisplay product={product} />}
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
};

export default Product;