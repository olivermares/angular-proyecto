import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

export const authGuard = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    
    if(!authService.getToken()){
        console.log("No estoy logado");
        return router.navigate(['/securedPage']);
    }
    console.log("Estoy logado");
    return true;
}