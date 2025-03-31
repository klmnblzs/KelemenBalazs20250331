import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RecipeResponse } from '../models/Recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private http = inject(HttpClient)

  getRecipes() {
    return this.http.get<RecipeResponse>('https://dummyjson.com/recipes?limit=10')
  }
  getRecipebyId(id:string) {
    return this.http.get<RecipeResponse>('https://dummyjson.com/recipes/' + id)
  }
  updateRecipe(id:any, body: any) {
    return this.http.patch<any>('https://dummyjson.com/recipes/' + id, body);
  }
  
}