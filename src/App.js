import React, { Component } from 'react'
import update from 'immutability-helper'
import RecipeList from './components/recipe-list'
import AddRecipe from './components/add-recipe'
import './App.css'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: [
        {
          title: 'celery',
          ingredients: ['a', 'b', 'c']
        },
        {
          title: 'tomato',
          ingredients: ['a', 'b', 'c']
        },
        {
          title: 'pizza',
          ingredients: ['a', 'b', 'c']
        }
      ],
      selectedRecipe: null
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Recipe Box</h2>
        </div>
        <div>
          <RecipeList
            recipes={this.state.recipes}

            onDelete={selectedRecipe => {
              let index = this.state.recipes.findIndex(x => x === selectedRecipe)

              this.setState({
                recipes: this.state.recipes.filter((_, i) => i !== index)
              })
            }}

            onEdit={(selectedRecipe, title, ingredients) => {
              let index = this.state.recipes.findIndex(x => x === selectedRecipe)

              let arr = ingredients.split(',')

              let obj = {
                title: title,
                ingredients: arr
              }

              let updatedObj = update(this.state.recipes[index], {$set: obj})

              let newData = update(this.state.recipes, {
                $splice: [[index, 1, updatedObj]]
              })

              this.setState({recipes: newData})
            }}
          />
          <div>
            <AddRecipe onAdd={(title, ingredients) => {
              let arr = ingredients.split(',')

              let obj = {
                title: title,
                ingredients: arr
              }

              this.setState({
                recipes: this.state.recipes.concat([obj])
              })
            }}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
