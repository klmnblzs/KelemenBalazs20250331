import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/Recipes';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipeResolver implements Resolve<Recipe> {

  private recipeService = inject(RecipeService)

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe | any> {
    const id = route.paramMap.get("id")!;
    return this.recipeService.getRecipebyId(id);
  }
}