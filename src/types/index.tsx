export type Fruit = {
    name: string,
    price: number
}

export type Discount = {
    fruit: Fruit,
    amountRequired: number
}

export type ShoppingItem = Fruit & { totalPerItem: number }

export type ShoppingCart = {
    [key: string]: ShoppingItem;
}

export interface ShoppingCartState {
    availableItems: Fruit[];
    items: Fruit[];
    total: number;
}