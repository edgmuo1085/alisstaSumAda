# alisstaSumAda

Proyecto móvil desarrollado con [Ionic](https://ionicframework.com/) y [Angular](https://angular.io/) para la gestión de asesorías, visitas, eventos y actividades de la ARL.

---

## Requisitos del Entorno

- **Node.js**: Se utiliza [NVM](https://github.com/nvm-sh/nvm) para gestionar la versión de Node.js.
- **Versión recomendada**: `18.20.4`

```bash
nvm install 18.20.4
nvm use 18.20.4
```

---

## Versiones del Proyecto

| Proyecto  | Versión Anterior | Versión Actual |
| --------- | ---------------- | -------------- |
| Ionic     | 5.x              | **8.7.14**     |
| Angular   | 10.x             | **16.2.12**    |
| Capacitor | 3.x              | **5.7.8**      |

> **Nota**: Se realizó una migración completa de Ionic 5 a Ionic 8, junto con la actualización de Angular y Capacitor a sus versiones compatibles.

---

## Scripts Disponibles

### Entorno de desarrollo

```bash
# Iniciar servidor de desarrollo (configuración por defecto)
npm start

# Iniciar con configuración de prueba
npm run start:test

# Iniciar con configuración de producción
npm run start:prod
```

### Compilación

```bash
# Compilar con configuración de prueba
npm run build:test

# Compilar con configuración de producción
npm run build:prod
```

### Despliegue en Android

```bash
# Compilar versión de prueba, copiar a Android y abrir Android Studio
npm run copy:test:android

# Compilar versión de producción, copiar a Android y abrir Android Studio
npm run copy:prod:android
```

### Sincronización con Capacitor

```bash
# Sincronizar plugins y compilar versión de prueba para Android
npm run sync:test:android

# Sincronizar plugins y compilar versión de producción para Android
npm run sync:prod:android
```

### Despliegue en iOS

```bash
# Compilar y copiar versión de prueba para iOS
npm run copy:test:ios

# Compilar y copiar versión de producción para iOS
npm run copy:prod:ios
```

### Otros

```bash
# Ejecutar pruebas unitarias
npm test

# Formatear código con Prettier
npm run format:write

# Verificar formato del código
npm run format:check
```

---

## Ambientes

El proyecto soporta múltiples ambientes de configuración:

| Ambiente             | Archivo                                |
| -------------------- | -------------------------------------- |
| Desarrollo / Pruebas | `src/environments/environment.ts`      |
| Producción           | `src/environments/environment.prod.ts` |

Los ambientes disponibles en desarrollo son:

1. **Producción** - `https://sproveedor.adacsc.co/sg-sst/`
2. **PreProducción** - `https://test-positiva-webservice-proveedor-pre.adacsc.co/sg-sst/`
3. **Test 1** - `http://sproveedor-test.adacsc.co/sg-sst/`
4. **Test 2** - `http://sproveedor-test-dos.adacsc.co/sg-sst/`
5. **Test 3** - `http://sproveedor-test-tres.adacsc.co/sg-sst/`

---

## Arquitectura del Proyecto

El proyecto, aunque está muy acoplado debido a su origen y evolución, se ha ido aplicando cierto nivel de arquitectura para mejorar la mantenibilidad y facilitar futuras actualizaciones.

### Patrón Adaptador

Se implementó el **patrón adaptador (Adapter Pattern)** para centralizar componentes en servicios y permitir el fácil reemplazo o actualización de librerías externas sin afectar el resto de la aplicación.

Las siguientes librerías fueron encapsuladas bajo este patrón:

| Librería                                                | Servicio Adaptador                      | Propósito                                                 |
| ------------------------------------------------------- | --------------------------------------- | --------------------------------------------------------- |
| `@capacitor/preferences`                                | `AppStorageService`                     | Almacenamiento de preferencias y sesión del usuario       |
| `@ionic/storage-angular`                                | `StorageService` / `CacheService`       | Almacenamiento en caché local (actas, actividades, etc.)  |
| `@angular/common/http` (HttpClient)                     | `ApiUrlService` + servicios específicos | Centralización de las URL de API y peticiones HTTP        |
| `@capacitor/geolocation` (nativo) / Navigator API (web) | `GeolocationService`                    | Geolocalización con soporte multiplataforma               |
| `@capacitor/network`                                    | `NetworkService`                        | Detección de conectividad y estado de red                 |
| `crypto-js`                                             | `CryptoService`                         | Encriptación/desencriptación de datos sensibles           |
| `@capacitor/camera`                                     | `PhotoServiceService`                   | Captura de fotos con manejo de ciclo de vida y reintentos |
| `@capgo/capacitor-native-biometric`                     | `BiometricService`                      | Autenticación biométrica (huella / FaceID)                |

### Estructura de Servicios

```
src/app/services/
├── activities/          # Gestión de actividades
├── alert/              # Servicio de alertas
├── apiUrl/             # Centralización de endpoints (ApiUrlService)
├── AT/                 # Módulo de Accidentes de Trabajo
├── attach/             # Servicio de fotos (PhotoServiceService)
├── Authentication/     # AuthService, AuthFacadeService, BiometricService, SessionService
├── cache/              # CacheService (almacenamiento en memoria y persistente)
├── companies/          # Servicio de empresas + guards
├── crypto/             # CryptoService (encriptación)
├── event/              # EventService (Eventos Positiva)
├── geolocation/        # GeolocationService
├── network/            # NetworkService
├── talk/               # TalkService
└── version/            # AppVersionService
```

---

## Ramas de Git

El proyecto utiliza las siguientes ramas principales:

| Rama                | Descripción                                                                  |
| ------------------- | ---------------------------------------------------------------------------- |
| `update-ionic`      | **(Actual)** Rama principal de trabajo con Ionic 8, Angular 16 y Capacitor 5 |
| `deploy-clean-code` | **(En desuso)** Rama de despliegue con código limpio y estable               |
| `migrate-capacitor` | **(En desuso)** Rama utilizada durante la migración de Capacitor             |
| `develop`           | **(En desuso)** Rama de desarrollo                                           |
| `main`              | **(En desuso)** Rama principal histórica                                     |

### Ramas adicionales

- `agents/fix-photo-upload-issue-iphone` - Corrección de carga de fotos en iPhone
- `deploy-android` / `deploy-ios` / `deploy-ios-CA` - Ramas de despliegue por plataforma
- `bk-deploy-clean-code` / `bk-migrate-capacitor` - Backups de ramas importantes

---

## Compilar Aplicación para Android

### 1. Elegir ambiente nodejs

```bash
# Para instalación de librerías
nvm use 18.20.4

# Compilar proyecto
npm run build:prod

# Sincronizar con Capacitor (solo si se instaló una nueva librería)
npx cap sync android

# Copiar cambios (solo para cambios en el código)
npx cap copy android
```

### 2. Compilar producción en Android

```bash
npm run sync:prod:android
```

Esto ejecutará:

1. `ng build --configuration=production`
2. `npx cap sync android`
3. `node tools/manage-network-security.js prod`
4. `npx cap open android`

---

## Notas de la Migración

- **Ionic 5 → Ionic 8**: Se actualizaron todos los componentes de Ionic a la versión 8.
- **Angular 10 → Angular 16**: Se migró completamente el framework.
- **Capacitor 3 → Capacitor 5**: Se actualizó el runtime nativo.
- **Patrón Adaptador**: Se implementaron servicios wrapper para aislar las dependencias externas y facilitar futuras actualizaciones.
- **iOS**: Se corrigió el flujo de captura de fotos en dispositivos iOS, donde la cámara se abre como modal in-app y no dispara eventos de ciclo de vida.

## Respaldo y Control de Versiones

El proyecto cuenta con dos mecanismos de respaldo y distribución del código fuente:

### Respaldo Principal (SVN)

Existe una copia actualizada del proyecto almacenada en un repositorio SVN administrado mediante TortoiseSVN.

**URL del repositorio:**

```text
http://adacsc.co:1443/svn/repository/ADA/ADA_CTO%20663%20DE%202016_POSITIVA%20SEGUROS/FUENTES_APP/alissta_sum/Branches/20251112%20capacitor%20update
```

Este repositorio funciona como respaldo principal del código fuente y debe mantenerse sincronizado con la versión estable del proyecto.

### Repositorio Git

Adicionalmente, el proyecto cuenta con un repositorio Git utilizado para la sincronización de cambios entre equipos de desarrollo y para el proceso de compilación de versiones iOS.

**URL del repositorio:**

```text
https://github.com/edgmuo1085/alisstaSumAda.git
```

#### Objetivos del repositorio Git

- Compartir cambios entre los equipos de desarrollo.
- Mantener un historial adicional de modificaciones.
- Facilitar la recuperación del proyecto en caso de contingencia.
- Servir como mecanismo de distribución del código hacia el equipo encargado de las compilaciones iOS.
- Permitir la generación de versiones TestFlight y versiones de producción para App Store.

### Flujo de Compilación iOS

La generación de versiones iOS se realiza desde un equipo iMac ubicado en Medellín.

El flujo habitual es el siguiente:

1. Realizar cambios y validaciones en el proyecto.
2. Subir los cambios al repositorio Git (`git push`).
3. Desde el iMac, actualizar el proyecto mediante `git pull`.
4. Ejecutar la compilación de la aplicación para iOS utilizando Xcode.
5. Generar las compilaciones de distribución.
6. Publicar versiones de prueba mediante TestFlight.
7. Generar y publicar versiones de producción cuando sea requerido.

### Sincronización de Repositorios

Para garantizar la integridad del proyecto se recomienda mantener sincronizados los siguientes repositorios:

- Repositorio SVN (respaldo principal).
- Repositorio Git (distribución y compilación iOS).

Cualquier cambio relevante debe reflejarse en ambos sistemas para evitar diferencias entre las versiones almacenadas.

---

## Responsables y Puntos de Contacto

La siguiente información debe mantenerse actualizada para facilitar la continuidad operativa y el soporte del proyecto.

| Componente                     | Responsable                  | Contacto                      | Observaciones                                                                 |
| ------------------------------ | ---------------------------- | ----------------------------- | ----------------------------------------------------------------------------- |
| Gestión funcional del proyecto | Sol Hernández                | sol.hernandez@ada.co          | Responsable de requerimientos y validaciones funcionales                      |
| Repositorio SVN                | Milson Orozco                | milson.orozco@ada.co          | Administración del repositorio principal y respaldos                          |
| Repositorio Git                | Edgar Muñoz                  | edgmuo1085@gmail.com          | Administración de ramas y sincronización de cambios                           |
| Publicaciones Android          | Carlos Alvarado              | carlos.alvarado@ada.co        | Generación de APK/AAB y despliegues                                           |
| Publicaciones iOS              | Carlos Alvarado              | carlos.alvarado@ada.co        | Generación de builds y publicación en App Store Connect                       |
| Equipo iMac Medellín           | Carlos Alvarado              | carlos.alvarado@ada.co        | Equipo utilizado para compilaciones y despliegues iOS                         |
| Certificados iOS               | Eddy Magaly Buitrago Fajardo | eddy.buitrago@positiva.gov.co | Administración de certificados, perfiles de aprovisionamiento y cuentas Apple |
| Infraestructura / APIs         | Jorge Echeverry              | jorge.echeverri@lapoint.co    | Administración de servicios backend y ambientes                               |
| Soporte Aplicativo             | Carlos Alvarado              | carlos.alvarado@ada.co        | Atención de incidentes y soporte post-producción                              |

### Información Operativa Relevante

#### Cuenta Apple Developer

- Titular: `Positiva Compoañia de Seguros`
- Apple ID: `soportealissta@positiva.gov.co`
- Responsable actual: `Eddy Magaly Buitrago Fajardo`

#### Equipo de Compilación iOS

- Ubicación: Medellín
- Equipo: iMac
- Responsable: `Carlos Alvarado`

#### Repositorios

**SVN**

```text
http://adacsc.co:1443/svn/repository/ADA/ADA_CTO%20663%20DE%202016_POSITIVA%20SEGUROS/FUENTES_APP/alissta_sum/Branches/20251112%20capacitor%20update
```

**Git**

```text
https://github.com/edgmuo1085/alisstaSumAda.git
```

### Recomendaciones para Futuras Entregas

- Mantener actualizados los accesos a SVN y Git.
- Documentar cualquier cambio en el proceso de compilación Android o iOS.
- Registrar cambios en certificados, cuentas Apple Developer o credenciales asociadas.
- Actualizar este documento cuando se modifiquen responsables, infraestructura o repositorios.
- Verificar periódicamente que los respaldos en SVN y Git se encuentren sincronizados.

---
