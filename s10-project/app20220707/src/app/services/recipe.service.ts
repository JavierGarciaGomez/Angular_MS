import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  private $recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "Another Test Recipe",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes = () => [...this.$recipes];

  recipeSelected = new EventEmitter<Recipe>();

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // ingredients.forEach((ingredient) => {
    //   this.shoppingListService.addIngredient(ingredient);
    // });
    this.shoppingListService.addIngredients(ingredients);
  }
}
