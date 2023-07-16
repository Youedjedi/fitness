import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AuthComponent } from "./auth/auth/auth.component";
import { TrainingComponent } from "./training/training.component";
import { SignupComponent } from "./auth/signup/signup.component";

const routes :Routes=[
    {path:'',component : WelcomeComponent},
    {path:'login',component : AuthComponent},
    {path:'signup',component : SignupComponent},
    {path:'training',component : TrainingComponent}
];
@NgModule({
imports : [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule {}