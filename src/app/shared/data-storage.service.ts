import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RecipeService } from "../recipes/recipes.service";
import { Recipe } from "../recipes/recipes.model";
// import { map, tap } from 'rxjs/operators';
import {exhaustMap, map,take,tap} from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user.model";

@Injectable({providedIn:'root'})

export class DataStorageService{
 //user:User[]=[]
    constructor(private http:HttpClient,private recipeService:RecipeService,private authService:AuthService){}

    storeRecipes(){
        const recipes=this.recipeService.getRecipes();
        //  this.http.put('https://recipe-project-f80d3-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe(
         this.http.put('https://recipe-shopping-project-17b6d-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe(

            response=>{
                console.log(response);
                
            }
        )
    }

    fetchRecipes(){
 
    //   return this.http.get<Recipe[]>('https://recipe-project-f80d3-default-rtdb.firebaseio.com/recipes.json',
       return this.http.get<Recipe[]>('https://recipe-shopping-project-17b6d-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map(recipes=>{
            return recipes.map(recipe=>{
                return {
                    ...recipe,
                    ingredients:recipe.ingredients?recipe.ingredients:[]
                };
            });
        }),
        tap(recipes=>{
            this.recipeService.setRecipes(recipes)
        })
      );
       // );
    }
    }
