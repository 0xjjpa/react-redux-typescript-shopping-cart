import * as constants from '../constants';
import { Fruit } from '../types/index';

export interface AddFruit {
    type: constants.ADD_FRUIT;
    fruit: Fruit;
}

export interface RemoveFruit {
    type: constants.REMOVE_FRUIT;
    fruit: Fruit;
}

export type ShoppingAction = AddFruit | RemoveFruit;

export function addFruit(fruit: Fruit): AddFruit {
    return { 
        type: constants.ADD_FRUIT,
        fruit: fruit
    };
}

export function removeFruit(fruit: Fruit): RemoveFruit {
    return {
        type: constants.REMOVE_FRUIT,
        fruit: fruit
    };
}