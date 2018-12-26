import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions  from '../../modules/home';

import { Container } from './styles'


class Home extends React.Component{
  constructor(props){
    super(props)
  }


  componentDidMount(){
    this.props.setPokemon(['Bulbasur'])
  }


  render(){
    console.log(this.props,'props home');
    return(
      <Container>
        probando
      </Container>
    )
  }
}


export default connect(state=> ({home:state.home}), homeActions)(Home)
