import createStore from 'redux-zero';
import axios from 'axios';

const store = createStore({ image: null, result: null });

const mapToProps = ({ image, result }) => ({ image, result });

const actions = ({ setState }) => ({
    getResults(state, value) {
        return axios.post(
            'http://workshop-ava.azurewebsites.net/api/Camera/RecognizeImage', 
            value,
            { 'Content-Type': 'application/x-www-form-urlencoded' }
        )
        .then(response => {
            debugger;
            var data = JSON.parse(response.data);
            var product = {
                name: data.Products[0].Name,
                description: data.Products[0].Products[0].FullDescription,
                price: data.Products[0].Products[0].Price
            };
            return { image: value, result: result };
        })
        .catch(error => {
            return { image: value, result: null };
        })
    }
});

export { store, mapToProps, actions };
