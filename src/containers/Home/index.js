import React from 'react'
import { connect } from 'react-redux';

class Home extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props);
    return(
      <div>
        probando
      </div>
    )
  }
}


export default connect((state)=> state)(Home)
