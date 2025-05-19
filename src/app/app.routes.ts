import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MatchesComponent } from './pages/matches/matches.component';
import { NewsComponent } from "./pages/news/news.component";
import { PlayersComponent } from './pages/players/players.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch:'full'},
    { path: 'matches', component: MatchesComponent },
    { path: 'news', component: NewsComponent },
    { path: 'players', component: PlayersComponent },
    { path: '**', redirectTo: '' }
];