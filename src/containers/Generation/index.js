import React from 'react';
import { connect } from 'react-redux';
import * as generationActions from '../../modules/generation';
import { bindActionCreators } from 'redux';

class Generation extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    if (this.props.home.generationsData.length === 0) {
      const { id } = this.props.match.params;
      this.props.getPokemonGeneration(id)
    }
  }

  render(){
    return(
      <div>
        probando
      </div>
    )
  }
}

const mapStateToProps = state => ({home:state.home,generation:state.generation,loading:state.root.loading})

export default connect(mapStateToProps, dispatch => bindActionCreators(generationActions, dispatch))(Generation)
