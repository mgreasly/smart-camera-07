import createStore from 'redux-zero';

const store = createStore({ image: null, result: null });
const mapToProps = ({ image, result }) => ({ image, result });
const actions = store => ({
    getResults: (state, value) => ({ image: value, results: [] })
})

export { store, mapToProps, actions };

