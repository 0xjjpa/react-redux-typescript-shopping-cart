import ShoppingCart from '../components/ShoppingCart';
import * as actions from '../actions';
import { ShoppingCartState, Fruit } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ availableItems, items, total }: ShoppingCartState) {
    return {
        availableItems,
        items,
        total,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ShoppingAction>) {
    return {
        addFruit: (fruit: Fruit) => dispatch(actions.addFruit(fruit)),
        removeFruit: (fruit: Fruit) => dispatch(actions.removeFruit(fruit))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);