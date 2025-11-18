const fs = require("fs");
const path = require("path");

const env = process.argv[2]; // 'test' o 'prod'
const manifestPath = path.join(__dirname, "../android/app/src/main/AndroidManifest.xml");
const securityConfigPath = path.join(__dirname, "../android/app/src/main/res/xml/network_security_config.xml");

// --- Funciones auxiliares ---
function updateManifest(allowHttp) {
  let manifest = fs.readFileSync(manifestPath, "utf8");

  // Quitar posibles configuraciones anteriores
  manifest = manifest.replace(/android:networkSecurityConfig="@xml\/network_security_config"/g, "");

  if (allowHttp) {
    // Agregar la línea de configuración dentro del <application>
    manifest = manifest.replace(
      /<application([^>]*)>/,
      `<application$1 android:networkSecurityConfig="@xml/network_security_config">`
    );
    console.log("✅ AndroidManifest.xml actualizado para permitir HTTP (entorno de prueba)");
  } else {
    console.log("✅ AndroidManifest.xml actualizado para producción (HTTP bloqueado)");
  }

  fs.writeFileSync(manifestPath, manifest, "utf8");
}

function updateSecurityConfig(allowHttp) {
  const httpEnabled = `<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true" />
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">sproveedor-test.adacsc.co</domain>
        <domain includeSubdomains="true">sproveedor-test-dos.adacsc.co</domain>
        <domain includeSubdomains="true">sproveedor-test-tres.adacsc.co</domain>
    </domain-config>
</network-security-config>`;

  const httpsOnly = `<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <!-- Solo HTTPS permitido -->
    <domain-config cleartextTrafficPermitted="false">
        <domain includeSubdomains="true">sproveedor.adacsc.co</domain>
        <domain includeSubdomains="true">test-positiva-webservice-proveedor-pre.adacsc.co</domain>
    </domain-config>
</network-security-config>`;

  fs.writeFileSync(securityConfigPath, allowHttp ? httpEnabled : httpsOnly, "utf8");
  console.log(
    allowHttp
      ? "✅ network_security_config.xml configurado para HTTP (entorno test)"
      : "✅ network_security_config.xml configurado solo para HTTPS (producción)"
  );
}

// --- Ejecución principal ---
if (!env) {
  console.error("❌ Debes indicar el entorno: test o prod");
  process.exit(1);
}

const allowHttp = env === "test";
updateManifest(allowHttp);
updateSecurityConfig(allowHttp);
