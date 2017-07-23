import { ShoppingAction } from '../actions';
import { ShoppingCartState } from '../types/index';
import { ADD_FRUIT, REMOVE_FRUIT, CHERRIES_DISCOUNT, KIWIS_DISCOUNT } from '../constants/index';
import { getDiscount } from '../utils/index';

export function shop(state: ShoppingCartState, action: ShoppingAction): ShoppingCartState {
    const { items } = state;
    const { fruit, type } = action;
    
    const getCherriesDiscount = getDiscount(CHERRIES_DISCOUNT)
    const getKiwiesDicounst = getDiscount(KIWIS_DISCOUNT)
    
    switch ( type ) {
        case ADD_FRUIT:
            const newItems = items.concat([fruit]);
            const newTotal = newItems.reduce( 
                (total, item) => total + item.price, 
                0
            );
            return { 
                ...state,
                items: newItems, 
                total: newTotal - getCherriesDiscount(newItems) - getKiwiesDicounst(newItems)
                };
        case REMOVE_FRUIT:
            const firstItem = items.find( item =>  
                item.name === fruit.name );
            const filteredItems = items.filter( item => item !== firstItem );
            const newFilteredTotal = filteredItems.reduce( 
                (total, item) => total + item.price, 
                0
            );
            return { 
                ...state, 
                items: filteredItems,
                total: newFilteredTotal - getCherriesDiscount(filteredItems) - getKiwiesDicounst(filteredItems)
            };
        default:
            return state;
    }
}