import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Recipe } from '../../models/Recipes';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-read-recipe',
  standalone: false,
  templateUrl: './read-recipe.component.html',
  styleUrl: './read-recipe.component.css'
})
export class ReadRecipeComponent {
  recipe!: Recipe;
  recipeForm!: FormGroup;

  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private recipeService = inject(RecipeService)

  constructor() {
    this.route.data.subscribe(res=>{
      this.recipe = res["recipe"]

      this.recipeForm = this.fb.group({
        id: {value: this.recipe.id, disabled: true},
        name: {value: this.recipe.name, disabled: true},
        difficulty: {value: this.recipe.difficulty, disabled: true},
        rating: {value: this.recipe.rating, disabled: true},
        mealtype: {value: this.recipe.mealType, disabled: true}
      })

      console.log(this.recipeForm)
    })
  }
  
}
