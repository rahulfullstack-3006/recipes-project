import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
   recipes:Recipe[];
   subscription:Subscription        //arrangment to recieve something
  constructor(private recipeService:RecipeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription=this.recipeService.recipesChanged.subscribe(
      (recipes:Recipe[])=>{
        console.log("recipes",recipes);
        
        this.recipes=recipes
      }
    )
    this.recipes=this.recipeService.getRecipes()
  }

  onNewRecipe(){

    this.router.navigate(['new'],{relativeTo:this.route})
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
