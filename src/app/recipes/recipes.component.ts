import { Component, inject, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/Recipes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: false,
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
  private recipeService = inject(RecipeService)
  private router = inject(Router)

  // Béna megoldás, de működik
  recipeHelper:any;
  recipes: Recipe[] = [];
  
  

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next: (res:any) => {
        this.recipeHelper = res;
        this.recipes = this.recipeHelper.recipes
      }
    });
  }

  nav(id: number, isRead = false): void{
    this.router.navigate([isRead ? '/recipes/read/' + id : '/recipes/update/' + id])
  }
}
