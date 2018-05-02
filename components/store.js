import createStore from 'redux-zero';
import axios from 'axios';

const store = createStore({ image: null, result: null, loadingResult: false });

const mapToProps = ({ image, result, loadingResult }) => ({ image, result, loadingResult });

const actions = ({ setState }) => ({
    getResults(state, value) {
        setState({ image: value, result: null, loadingResult: true });
        return axios.post(
            'https://workshop-ava.azurewebsites.net/api/Camera/RecognizeImage', 
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
            return { image: value, result: result, loadingResult: false };
        })
        .catch(error => {
            return { image: value, result: null, loadingResult: false };
        })
    }
});

export { store, mapToProps, actions };
