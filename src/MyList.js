import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

class MyList extends Component {
  constructor(props){
    super()
    this.state=({
      list: ["Buy green IceCream", "Buy blue IceCream", "Buy red IceCream", "Buy purple IceCream"],
      newItem: "",
    })
  }

  clearList (e) {
    console.log("Clearing This Log");
    this.setState({
      list: []
    })
  }

  newItemChange(e){
    console.log(e.target.value);
    this.setState({
      newItem: e.target.value
    })
  }

  addItem(e){
    e.preventDefault()
    var toDos = this.state.list
    toDos.push(this.state.newItem)
    this.setState({
      list: toDos,
      newItem: "",
    })
  }

  render() {
    let todoItems = this.state.list.map( (item, index) => (
      <ListItem doThis={item} key={index} />
    ))
    return (
      <div className="MyList">
        <h1> Things i should stop procrasinating: </h1>
        <ul>
          {todoItems}
        </ul>
          <button onClick={(e) => this.clearList(e)}> Finish tasks </button>
        <form>
          <input field = "text"
          placeholder = "type something here"
          onChange={(e)=>this.newItemChange(e)}
          value = {this.state.newItem}/>
          <button onClick={(e)=> this.addItem(e)}> Submit </button>
        </form>
      </div>
    );
  }
}

export default MyList;
