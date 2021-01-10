import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Color from './Component/Color'
import ColorList from './Component/ColorList'
import NewColor from './Component/NewColor'

class App extends Component {

state = {
  colors:[
    {
      name: 'red'
    },
    {
      name: 'green'
    },
    {
      name: 'blue'
    }
  ]
}

handleAdd = (newColor) => {
  this.setState({colors: [newColor, ...this.state.colors]})
}

colorComponent = (props) => {
  const colorName = props.match.params.color;
  const color = this.state.colors.find(color => color.name === colorName);
  return color ? <Color {...props} color={color} /> : <Redirect to="/colors" />;
};

newColorComponent = (props) => (
  <NewColor addColor={this.handleAdd} {...props} />
)



render(){
  return (
    <Router>
      <Switch>
          <Route exact path='/colors' render={(props)=><ColorList colors={this.state.colors} {...props} />}  />
          <Route path="/colors/new" render={this.newColorComponent} />
          <Route path="/colors/:color" render={this.colorComponent} />
          <Redirect to="/colors" />
      </Switch>
    </Router>
  )

}


}
export default App;
