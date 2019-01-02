import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions  from '../../modules/home';

// Styles
import { Container } from './styles';

// Components
import Card from '../../components/Card';


class Home extends React.Component{
  constructor(props){
    super(props)
  }


  componentDidMount(){
    
  }


  render(){

    const { generationsData } = this.props.home

    return(
      <Container>
        {generationsData.map(( generation )=>{
          return(
            <Card/>
          )
        })}
      </Container>
    )
  }
}


export default connect(state=> ({home:state.home}), homeActions)(Home)
