import React from 'react';
import { IProduct } from '../models';

interface ProductProps {
    product: IProduct
}

export function Product(props: ProductProps) {
    console.log(props.product.category);
  return (    
    <div className="container mx-auto">
        <span className="text-gray-500 sm:text-sm">`Product ${props.product.title}`</span>      
    </div>
  );
}
