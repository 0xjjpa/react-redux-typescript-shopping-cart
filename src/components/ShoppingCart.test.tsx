import * as React from 'react';
import * as enzyme from 'enzyme';
import ShoppingCart from './ShoppingCart';

it('renders a title on correct rendering', () => {
  const shoppingCart = enzyme.shallow(<ShoppingCart availableItems={[]} items={[]} total={0} />);
  expect(shoppingCart.find(".ShoppingCart h2").text()).toEqual('List of Items')
});