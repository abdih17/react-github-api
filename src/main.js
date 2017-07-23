import React from 'react'
import faker from 'faker'
import ReactDom from 'react-dom'
import cowsay from 'cowsay-browser'

//form container is a component that holds the state for the form inputs
class GitHubFrom extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      githubName: ''
    }

    this.handleChangeOnIputFrom = this.handleChangeOnIputFrom.bind(this);
  }

  handleChangeOnIputFrom(e){
    e.preventDefault();

    console.log('THIS************', this);
    this.setState({ githubName: e.target.value })
  }

  render(){
    return (
      //controlled inputs
      <form className='form-container'>
        <input
        type='text'
        name='githubName'
        placeholder='GitHub Search'
        onChange={ this.handleChangeOnIputFrom }
        value={ this.state.githubName }
        />
      </form>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render(){
    return (
      <div>
        <h1>GitHub Form</h1>
        <GitHubFrom />
      </div>
    )
  }
}

var container = document.createElement('div');
var wrapper = document.body.appendChild(container);
ReactDom.render(<App />, wrapper);
