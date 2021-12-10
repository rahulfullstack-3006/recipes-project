import { NgModule } from "@angular/core";
import { RecipeService } from "./recipes/recipes.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { DataStorageService } from "./shared/data-storage.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";


@NgModule({
    providers:[
        ShoppingListService,
        RecipeService,
        {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true},
        DataStorageService
    ]
})

export class CoreModule{

}