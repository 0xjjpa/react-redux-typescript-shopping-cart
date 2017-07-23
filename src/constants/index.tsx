import { Discount } from '../types/index';

export const ADD_FRUIT = 'ADD_FRUIT';
export type ADD_FRUIT = typeof ADD_FRUIT;

export const REMOVE_FRUIT = 'REMOVE_FRUIT';
export type REMOVE_FRUIT = typeof REMOVE_FRUIT;

export const CURRENCY_FORMAT = '0.00';
export type CURRENCY_FORMAT = typeof CURRENCY_FORMAT;

export const CHERRIES_DISCOUNT : Discount = {
    fruit: { name: 'Cherries 🍒', price: 0.25 },
    amountRequired: 3
}

export const KIWIS_DISCOUNT : Discount = {
    fruit: { name: 'Kiwis 🥝', price: 0.40 },
    amountRequired: 4
}