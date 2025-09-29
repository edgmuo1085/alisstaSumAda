const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '../resources/android/AndroidManifest.xml');
const target = path.join(__dirname, '../android/app/src/main/AndroidManifest.xml');

if (fs.existsSync(source)) {
  fs.copyFileSync(source, target);
  console.log('✅ AndroidManifest.xml personalizado copiado correctamente.');
} else {
  console.error('❌ No se encontró el archivo fuente en resources/android/');
}
