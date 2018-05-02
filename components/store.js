import createStore from 'redux-zero';
import axios from 'axios';

const store = createStore({ image: null, result: null });

const mapToProps = ({ image, result }) => ({ image, result });

const actions = ({ setState }) => ({
    getResults(state, value) {
        return axios.post(
            'http://workshop-ava.azurewebsites.net/api/Camera/RecognizeImage', 
            value
        )
        .then(response => {
            var data = JSON.parse(response.data);
            var product = data.Products[0];
            var result = {
                name: product.Name,
                description: product.Products[0].FullDescription,
                price: product.Products[0].Price
            };
            return { image: value, result: result };
        })
        .catch(error => {
            return { image: value, result: null };
        })
    }
});

export { store, mapToProps, actions };
