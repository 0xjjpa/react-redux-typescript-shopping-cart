# Shopping Cart w/React+Redux

🛒  React + Redux (TypeScript) Sample Shopping Cart. Submission for /r/codingprompts (Week 3). Add fruits
to a virtual shopping cart and see the redux events going through, while applying discounts when stated.

## Technologies

* ReactJS for templating/routing 📖
* Redux for state management 🏁
* TypeScript as type checking compiler 👮
* Create React App as boilerplate 📦

Works in Chrome + Firefox + Safari, untested in IE.

## Challenges

Discounts are currently being generated on a per fruit basis:

```
export const CHERRIES_DISCOUNT : Discount = {
    fruit: { name: 'Cherries 🍒', price: 0.25 },
    amountRequired: 3
}

export const KIWIS_DISCOUNT : Discount = {
    fruit: { name: 'Kiwis 🥝', price: 0.40 },
    amountRequired: 4
}
```

How would you generalise those discounts application? 