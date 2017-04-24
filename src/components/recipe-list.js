/**
 * Created by kylecross on 4/20/17.
 */

import React from 'react';
import RecipeListItem from './recipe-list-item'

const RecipeList = (props) => {

  const recipeItems = props.recipes.map((recipe) => {
    return (
      <RecipeListItem
        key={recipe.title}
        recipe={recipe}
        onDelete={props.onDelete}
        onEdit={props.onEdit}
      />
    )
  })


  return (
    <ul>
      {recipeItems}
    </ul>
  )
}

export default RecipeList