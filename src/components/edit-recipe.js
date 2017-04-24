/**
 * Created by kylecross on 4/21/17.
 */
import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

class EditRecipe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      title: this.props.recipe.title,
      ingredients: this.props.recipe.ingredients.join(",")
    }
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return(
      <div>
        <button onClick={() => this.open()}>Edit Recipe</button>
        <Modal show={this.state.showModal} onHide={() => this.close()}>
          <Modal.Header closeButton>
            <Modal.Title>Edit your recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              value={this.state.title}
              onChange={event => this.setState({title: event.target.value})}
            />
            <br/>
            <input
              value={this.state.ingredients}
              onChange={event => this.setState({ingredients: event.target.value})}
            />
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={() => {
                this.props.onEdit(this.props.recipe, this.state.title, this.state.ingredients)
                this.close()
              }}
            >
              Submit Edit
            </button>
          </Modal.Footer>
        </Modal>
      </div>


    )
  }
}

export default EditRecipe