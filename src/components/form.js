import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: undefined,
      assigned: undefined,
      dueDate: undefined,
    }
  }
  inputItem = e => {
    this.setState({ input: e.target.value });
  }

  inputAssigned = e => {

    this.setState({ assigned: e.target.value });
  }

  inputDate = e => {
    this.setState({ dueDate: e.target.value });
  }

  handleChange = e => {
    this.setState({ input: e.target.value })
  }

  submitData = e => {
    e.preventDefault();
    this.props.add(this.state.input);
  }

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.submitData} id='todoForm'>
          <input id='item' placeholder='Add To Do List Item' onChange={this.inputItem}></input>
            <input id='assigned' placeholder='Assigned to' onChange={this.inputAssigned}></input>
            <input id='date' type='date' onChange={this.inputDate}></input>
            <input id='submit' type='submit'></input>
          </form>
        </div>
      </>
    )
  }
}

export default Form;