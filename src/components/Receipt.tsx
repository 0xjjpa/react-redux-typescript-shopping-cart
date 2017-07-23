import * as React from 'react';
import { Fruit, ShoppingCart, Discount } from '../types/index';
import * as numbro from 'numbro';
import { CURRENCY_FORMAT, CHERRIES_DISCOUNT, KIWIS_DISCOUNT } from '../constants';
import { getDiscount } from '../utils/index';

import './Receipt.css';

export interface ReceiptProps {
    items: Fruit[];
    total: number;
}

export default function Receipt({items, total}: ReceiptProps) {
    
    const shoppingCart = items.reduce(
        (cart: ShoppingCart, item) => {
            const currentItem = cart[item.name] ? 
                cart[item.name] : 
                { ...item, totalPerItem: 0 };
            cart[item.name] = {
                ...currentItem, 
                totalPerItem: ++currentItem.totalPerItem
            };
            return cart;
        },
        {}
    );
    
    const kiwiesDiscount = getDiscount(KIWIS_DISCOUNT)(items);
    const cherriesDiscount = getDiscount(CHERRIES_DISCOUNT)(items);
    
    const discountItem = (discountValue: number, discount: Discount) => (
        <li className="Receipt__listItem Receipt__listItem--is-discount">
            <span>
                {discount.fruit.name} Discount 
                {discount.amountRequired}x{discount.amountRequired-1} 🎁
            </span>
            <span>  -{
                numbro(discountValue)
                .formatCurrency(CURRENCY_FORMAT)
            }</span>
    </li>)
    
    return (
        <div className="Receipt">
            <ul className="Receipt__list">
            {
                items.length > 0 ?
                Object.keys(shoppingCart).map( (key, index) => (
                    <li key={index} className="Receipt__listItem">
                        <span>{shoppingCart[key].totalPerItem} x </span>
                        <span>{shoppingCart[key].name}</span>
                        <span>  {
                            numbro(shoppingCart[key].price)
                            .formatCurrency(CURRENCY_FORMAT)
                        }</span>
                    </li>
                    )
                ) :
                <span className="Receipt__notification--isEmpty">You have nothing on your shopping cart</span>
            }
            {
                kiwiesDiscount > 0 &&
                discountItem(kiwiesDiscount, KIWIS_DISCOUNT)
            }
            {
                cherriesDiscount > 0 &&
                discountItem(cherriesDiscount, CHERRIES_DISCOUNT)
            }
            </ul>
            <h2>Total <small>{ 
                numbro(total)
                .formatCurrency(CURRENCY_FORMAT)
            }</small></h2>
        </div>
    );
}