import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { BlogService } from './blog.service';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ImageComponent } from './image/image.component';
import { ExperienceComponent } from './experience/experience.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from './auth/auth.component';

import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';
import { FileUploadService } from './shared/file-upload.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersListComponent } from './users-list/users-list.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog/create', component: BlogComponent },
  { path: 'images', component: ImageComponent },
  { path: 'experiences', component: ExperienceComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]  },
  { path: 'portfolio', component: PortfolioComponent, canActivate: [AuthGuard] },
  { path: 'createusr', component: CreateUserComponent, canActivate: [AuthGuard] },
  { path: 'usrlist', component: UsersListComponent, canActivate: [AuthGuard] },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ImageComponent,
    ExperienceComponent,
    NoPageFoundComponent,
    HobbiesComponent,
    PortfolioComponent,
    ProfileComponent,
    AuthComponent,
    CreateUserComponent,
    UsersListComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    SlimLoadingBarModule,
    AuthModule
  ],
  exports: [
    RouterModule
  ],
  providers:  [BlogService, AuthGuard, FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
