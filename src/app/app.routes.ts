import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserBioComponent } from './AcctSettings/user-bio/user-bio.component';
import { HomeComponent } from './parts/home/home.component';
import { UserProfileComponent } from './AcctSettings/user-profile/user-profile.component';
import { PaymentInfoComponent } from './AcctSettings/payment-info/payment-info.component';


export const routes: Routes = [
    {
    path: 'home',
    component: HomeComponent,
    } , {
    path:'user-profile',
    component: UserProfileComponent,
    } ,{
    path: 'user-bio',
    component: UserBioComponent,
    } ,{
    path: 'payment-info',
    component: PaymentInfoComponent,
    }
];
