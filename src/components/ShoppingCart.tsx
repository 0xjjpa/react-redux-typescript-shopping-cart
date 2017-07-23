import * as React from 'react';
import { Fruit } from '../types/index';
import * as numbro from 'numbro';

import Receipt from '../components/Receipt';
import './ShoppingCart.css';

export interface ShoppingCartProps {
    availableItems: Fruit[];
    items: Fruit[];
    total: number;
    addFruit?: () => void;
    removeFruit?: () => void;
}

export default function ShoppingCart({ 
    availableItems = [], 
    items, 
    total = 0, 
    addFruit = (fruit: Fruit) => {}, 
    removeFruit = (fruit: Fruit) => {}
}: ShoppingCartProps) {
    return (
        <div className="ShoppingCart">
            <h2>List of Products</h2>
            <ul className="ShoppingCart__list">
                { 
                    availableItems.length > 0 ?
                    availableItems.map( 
                        (item, index) => 
                            (<li key={index} className="ShoppingCart__listItem">
                                <span>{item.name}</span>
                                <div className="ShoppingCart__controls">
                                    <button onClick={() => addFruit(Object.assign({}, item))}>+</button>
                                    <button onClick={() => removeFruit(Object.assign({}, item))}>-</button>
                                </div>
                                <span>{numbro(item.price).formatCurrency('0.00')}</span>
                            </li>)
                            ) :
                    <span className="ShoppingCart__notification--isEmpty">
                    Sorry, we currently don't have any items for sale
                    </span>
                }
            </ul>
            <Receipt items={items} total={total} />
        </div>
    );
}