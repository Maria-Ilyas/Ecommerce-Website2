import React,{useContext} from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay';
import Description from '../Components/Description';
import RelatedProduct from '../Components/RelatedProduct';

const Product = () => {
  const {allProduct} = useContext(ShopContext);
  const {productId} = useParams();
  const product = allProduct.find((e)=> e.id === Number(productId));
  return (
    <div>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
        <Description />
        <RelatedProduct />
    </div>
  )
}

export default Product;