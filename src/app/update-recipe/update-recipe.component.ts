import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/Recipes';

@Component({
  selector: 'app-update-recipe',
  standalone: false,
  templateUrl: './update-recipe.component.html',
  styleUrl: './update-recipe.component.css'
})
export class UpdateRecipeComponent {

  recipe!: Recipe;
  recipeForm!: FormGroup;

  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private recipeService = inject(RecipeService)

  constructor(){
    this.route.data.subscribe(res=>{
      this.recipe = res["recipe"]
      console.log(this.recipe)

      this.recipeForm = this.fb.group({
        name: [this.recipe.name, Validators.required],
        preptime: [this.recipe.prepTimeMinutes, [Validators.required, Validators.min(5)]],
        cooktime: [this.recipe.cookTimeMinutes, [Validators.required, Validators.min(5)]],
        cuisine: [this.recipe.cuisine, [Validators.required]]
      })
    })

  }

  submit(): void{
    this.recipeService.updateRecipe(this.recipe.id, this.recipeForm.value).subscribe(res=>{
      console.log(res);
      alert("Sikeres mentés");
      this.recipeForm.reset();
    });
  }
}
