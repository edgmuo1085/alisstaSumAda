# alisstaSumAda

This project was generated with [Ionic CLI](https://ionicframework.com/docs/cli) version 5.7.0

## Development server

Run `ionic serve` for a dev server. Navigate to `http://localhost:8100/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ionic generate component component-name` to generate a new component. You can also use `ionic generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ionic build` to build the project. The build artifacts will be stored in the `www/` directory.

## Further help

To get more help on the Ionic CLI use `ionic help` or go check out the [Ionic CLI Overview and Command Reference](https://ionicframework.com/docs/cli) page.



# Compilar Aplicación para Android

## 1. Elegir ambiente nodejs

- Para instalación de librerías se lo debe hacer bajo la versión 14 de nodeJS (nvm use 14)
- Para compilación y pasar los cambios a android se lo debe hacer bajo la versión 16 (nvm use 16)
- Compilar proyecto con el comando: "ionic build --prod"
- Ejecutar: "npx cap sync android" (Solo si se instalo una nueva librería)
- Ejecutar: "npx cap copy android" (Solo para cambios que se hagan en el codigo)

# Archivos a Modificar para integrar AndroidX

- android\app\src\main\AndroidManifest.xml
	* Agregar en manifest xmlns:tools="http://schemas.android.com/tools"
	* Agregar en aplication tools:replace="android:appComponentFactory"
	
- Agregar en gradle.propierties
	* android.enableJetifier=true
	
** Validar documentacion de librerias que requieran cambiar la ruta de importacion a andoridX en carpeta "capacitor-cordova-android-plugins" ejemplo:
	* public class FileProvider extends androidx.core.content.FileProvider {}

# Librerías a Modificar para compilar

Cuando deseen compilar desde android studio y les aparezca errores de librerías, solo deben reemplazarlas con las siguientes:

## BiometricActivity.java

- import androidx.annotation.NonNull;
- import androidx.annotation.Nullable;
- import androidx.core.content.ContextCompat;
- import androidx.appcompat.app.AppCompatActivity;

## CordovaUri.java

- import androidx.core.content.FileProvider;

## CameraLauncher.java

- import androidx.core.content.FileProvider;

## FileProvider.java

- androidx.core.content.FileProvider

## ImagePicker.java

- import androidx.core.app.ActivityCompat;
- import androidx.core.content.ContextCompat;

## MultiImageChooseActivity.java

- import androidx.appcompat.app.ActionBar;
- import androidx.appcompat.app.AppCompatActivity;

