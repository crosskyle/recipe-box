/**
 * Created by kylecross on 4/20/17.
 */
import React from 'react'
import ItemIngredient from './item-ingredient'
import EditRecipe from './edit-recipe'

const RecipeListItem = ({recipe, onDelete, onEdit}) => {

  const ingredients = recipe.ingredients.map((ingredient) => {
    return (
      <ItemIngredient
        key={ingredient}
        ingredient={ingredient}
      />
    )
  })

  const title = recipe.title

  return (
    <li>{title}
      <ul>
        {ingredients}
      </ul>
      <EditRecipe recipe={recipe} onEdit={onEdit}/>
      <button onClick={() => onDelete(recipe)}>Delete</button>
    </li>
  )
}

export default RecipeListItem