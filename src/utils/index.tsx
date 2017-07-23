import { Fruit, Discount } from '../types/index';

export const getDiscount = (discount: Discount) => (updatedItems: Fruit[]) => 
        Math.floor(updatedItems.reduce( 
            (fruitCounter, item) => 
                item.name === discount.fruit.name ? ++fruitCounter : fruitCounter,
            0
        ) / discount.amountRequired) * discount.fruit.price;