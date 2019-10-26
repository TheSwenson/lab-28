import React from 'react';
import Modal from './modal/index'
import { If } from './if'

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  handleToggle = e => {
    let id = parseFloat(e.target.id);
    this.props.toggle(id);
  }

  handleDelete = e => {
    let id = parseFloat(e.target.value);
    this.props.delete(id);
  }
  handleModal = id => {
    this.props.modal(id);
  }

  displayClass(boolean) {
    return boolean ? 'complete-true' : 'complete-false';
  }

  render() {
    return (
      <>
        <div id='items'>
          <ul>
            {
              this.props.list
                .map((item) => (
                  <>
                    <li className={this.displayClass(item.complete)} key={item.id}>
                      <span onClick={this.handleToggle} id={item.id}>{item.text}</span>
                      <button onClick={this.handleDelete} className={this.displayClass(item.complete)} key={item.id + 1} value={item.id}>delete</button>
                      <button className='details' onClick={() => this.handleModal(item.id)}>details</button>
                      {item.showModal ? (
                        <Modal title='Details' close={() => this.handleModal(item.id)}>
                          <p className='toDoDetails'>{`To Do: ${item.text}`}</p>
                          <p>{`Assigned To: ${item.assigned}`}</p>
                          <p>{`Due Date: ${item.dueDate}`}</p>
                          <p>{`Completed: ${item.complete}`}</p>
                        </Modal> ) : null
                      }
                    </li>
                  </>
                ))
            }  
          </ul>
        </div>
      </>
    )
  }
}

export default List;