import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ExperienceComponent } from './components/experience/experience.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'home' , component: HomeComponent , title: 'ShroukZiaDa'},
  {path: 'about' , component: AboutComponent , title: 'About'},
  {path: 'skills' , component: SkillsComponent , title: 'Skills'},
  {path: 'projects' , component: ProjectsComponent , title: 'projects'},
  {path: 'experience' , component:ExperienceComponent , title: 'experiences'},

   
  {path: '**' , component: NotfoundComponent , title: 'NotFound shrouk'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
