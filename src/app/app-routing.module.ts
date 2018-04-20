import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { ArticleComponent } from './components/article/article.component';
import { ProfileComponent } from './components/profile/profile.component';
const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'details/:article', component: ArticleComponent },
	{ path: 'aboutme', component: ProfileComponent }
]

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
