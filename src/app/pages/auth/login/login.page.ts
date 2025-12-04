// src/app/components/login/login.page.ts
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ApiUrlService } from 'src/app/services/apiUrl/api-url.service';
import { Browser } from '@capacitor/browser';
import { environment } from '../../../../environments/environment';
import { AuthFacadeService } from 'src/app/services/Authentication/auth-facade.service';
import { BiometricService } from 'src/app/services/Authentication/biometric.service';
import { Router } from '@angular/router';
import { AppStorageService } from 'src/app/app-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPageComponent implements OnInit {
  form = this.fb.group({
    employerID: ['', Validators.required],
    userID: ['', Validators.required],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+\-=\[\]{};':",.<>?/¿¡|°~`¬]).{6,15}$/),
      ],
    ],
  });

  biometricAvailable = false;

  // Ambiente
  ambientes = environment.ambientes || [];
  selectedIndex:number;
  isProd = environment.production;
  
  // Variables para mostrar/ocultar contraseña (como en el antiguo)
  passwordToggleIcon = 'eye-off';
  passwordType = 'password';
  private readonly SHOW_PASSWORD_ICON = 'eye';
  private readonly HIDE_PASSWORD_ICON = 'eye-off';

  constructor(
    private fb: UntypedFormBuilder,
    private facade: AuthFacadeService,
    private biometric: BiometricService,
    private apiUrl: ApiUrlService,
    private storage: AppStorageService,
    private router: Router
  ) {}

  async ngOnInit() {

    await this.loadSelectedAmbiente();
    // Intentar autologin por sesión guardada O con datos encriptados
    const triedNormal = await this.facade.tryAutoLogin();
    if (triedNormal) return;

    // ✅ Intentar con datos encriptados (como en el componente antiguo)
    const triedEncrypted = await this.facade.tryAutoLoginWithEncryptedInfo();
    if (triedEncrypted) return;

    // Intentar autologin por sesión guardada (no biométrica)
    const tried = await this.facade.tryAutoLogin();
    if (tried) return;

    // --- Reglas para mostrar el botón biométrico ---
    // 1) El dispositivo debe soportar biometría
    const deviceHasBiometry = await this.biometric.isAvailable();
    if (!deviceHasBiometry) {
      this.biometricAvailable = false;
      return;
    }

    // 2) El usuario debe haber activado biometría (flag en storage)
    const enabled = await this.storage.get<boolean>(this.storage.KEY_BIOMETRIC_ENABLED);
    if (!enabled) {
      this.biometricAvailable = false;
      return;
    }

    // 3) Deben existir credenciales guardadas por el plugin biométrico
    const creds = await this.biometric.getCredentials();
    this.biometricAvailable = !!creds;
  }

  private async loadSelectedAmbiente() {
    try {
      // Obtener el ambiente guardado del storage
      const ambienteGuardado = await this.storage.get('ambienteSeleccionado');
      
      if (ambienteGuardado !== null) {
        this.selectedIndex = parseInt(ambienteGuardado, 10);
      } else {
        // Valor por defecto si no hay nada guardado
        this.selectedIndex = environment.ambienteSeleccionado;
      }
      
      console.log('Ambiente cargado:', this.selectedIndex);
    } catch (error) {
      console.error('Error cargando ambiente:', error);
      this.selectedIndex = environment.ambienteSeleccionado;
    }
  }

  /**
   * Muestra u oculta la contraseña en el control de usuario.
   * (Funcionalidad del componente antiguo)
   */
  togglePassword(): void {
    this.passwordToggleIcon = this.passwordToggleIcon === this.HIDE_PASSWORD_ICON ? this.SHOW_PASSWORD_ICON : this.HIDE_PASSWORD_ICON;
    this.passwordType = this.passwordToggleIcon === this.SHOW_PASSWORD_ICON ? 'text' : 'password';
    console.log("pass toggle: ", this.passwordType)
  }

  async submit() {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(c => {
        this.form.controls[c].markAsTouched();
        this.form.controls[c].markAsDirty();
      });
      return;
    }

    const emp = Number(this.form.value.employerID);
    const user = this.form.value.userID;
    const pass = this.form.value.password;

    console.log('[LoginPage] login() CLICKED');
    const ok = await this.facade.loginWithPassword(emp, user, pass);

    if (ok) this.form.reset();
  }

  async loginWithBiometric() {
    await this.facade.loginWithBiometric();
  }

  async cambiarAmbiente() {
    if (this.selectedIndex == null) return;
    await this.apiUrl.setAmbiente(this.selectedIndex);
  }

  async forgotPassword() {
    try {
      const url = this.apiUrl.RECUPERAR_PASSWORD;
      if (url) {
        await Browser.open({ url });
      } else {
        console.warn('URL de recuperación de contraseña no disponible');
      }
    } catch (e) {
      console.error('Error abriendo recuperación de contraseña:', JSON.stringify(e, null, 2));
    }
  }
}