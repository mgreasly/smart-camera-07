import { Component } from 'preact';
import { connect } from 'redux-zero/preact';
import {mapToProps, actions} from './store';

class ListPage extends Component {
	render() {
        var text = "not recognised"
        if (this.props.result && this.props.result[0] && this.props.result[0].description) text = this.props.result[0].description
        return (
            <div id="results">
                <h1>Results...</h1>
                <img width="300" src={this.props.image} />{text}
            </div>
		);
   	}
};

export default connect(mapToProps, actions)(ListPage);
