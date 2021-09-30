import { Routes } from '@angular/router';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { AuthGuard } from '../shared/guard/auth.guard';
 
export const JogoDaVelhaRoutes: Routes = [
	{ 
		path: 'jogo-da-velha', 
		component: JogoDaVelhaComponent, canActivate: [AuthGuard]
	}
];