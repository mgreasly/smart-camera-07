import { Component } from 'preact';
import { connect } from 'redux-zero/preact';
import {mapToProps, actions} from './store';

class ListPage extends Component {
	render() {
        return (
            <div class="results">
                <h1>Results...</h1>
                <img width="300" src={this.props.image} />
                {this.props.result && 
                <p>
                    {this.props.result.name}<br />
                    {this.props.result.description}<br />
                    {this.props.result.price}<br />
                </p>}
            </div>
		);
   	}
};

export default connect(mapToProps, actions)(ListPage);
