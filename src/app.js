import React from 'react';
import Header from './components/header';
import List from './components/list';
import Form from './components/form';
import Item from './components/item';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: [],
    }
  }

  addItem = (string) => {
    let newList = this.state.toDo.concat();
    let item = new Item(string);
    newList.push(item);
    this.setState({ toDo: newList});
    console.log(this.state);
  }

  deleteItem = (id) => {
    let newList = this.state.toDo.concat().filter(item => item.id !== id);
    this.setState({ toDo: newList});
  }

  toggleComplete = id => {
    console.log(id);
    let newList = this.state.toDo.map((e) => e);
    let item = newList.filter(item => item.id === id)[0] || {};
    if (item.id) {
      item.toggle();
      this.setState({ toDo: newList});
      console.log(this.state.toDo);
    }
  }

  render() {
    return (
      <>
        <section className='todo'>
          <Header
            length = {this.state.toDo.length}
          />
          <Form 
            add = {this.addItem}
          />
          <List 
            list = {this.state.toDo}
            toggle = {this.toggleComplete}
            delete = {this.deleteItem}
          />
        </section>
      </>
    );
  }
}

export default App;
