import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions  from '../../modules/home';

// Styles
import { Container } from './styles';

// Components
import Card from '../../components/Card';
import Loading from '../../components/Loading';


class Home extends React.Component{
  constructor(props){
    super(props)
  }


  componentDidMount(){
    const { generations } = this.props.home;
    this.props.getPokemonGenerations(generations);
  }


  render(){
    const { generationsData } = this.props.home

    return(
      <Container>
        <Loading loading={this.props.loading}/>
        {generationsData.map(( generation, i )=>{          
          return(
            <Card key={`generation${i}` }/>
          )
        })}
      </Container>
    )
  }
}

const mapStateToProps = state => ({home:state.home,loading:state.root.loading})

export default connect(mapStateToProps, dispatch => bindActionCreators(homeActions, dispatch))(Home)
