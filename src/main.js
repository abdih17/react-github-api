import React from 'react'
import faker from 'faker'
import ReactDom from 'react-dom'
import cowsay from 'cowsay-browser'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      content: '',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    console.log('********THIS:', this)
    this.setState({
      content: cowsay.say({ text: faker.lorem.words(10) })
    })
  }

  render(){
    return (
      <div>
        <h1>Generate Lorem Cowsay</h1>
        <button onClick={ this.handleClick }>Click Me!!!</button>
        <pre> { this.state.content } </pre>
      </div>
    )
  }
}

var container = document.createElement('div');
console.log('CONTAINER', container);
var wrapper = document.body.appendChild(container);
console.log('DOCUMENT', document);
ReactDom.render(<App />, wrapper);
