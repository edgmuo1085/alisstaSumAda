const fs = require("fs");
const path = require("path");

const env = process.argv[2]; // 'test' o 'prod'
const manifestPath = path.join(__dirname, "../android/app/src/main/AndroidManifest.xml");
const securityConfigPath = path.join(__dirname, "../android/app/src/main/res/xml/network_security_config.xml");

// --- Funciones auxiliares ---
function updateManifest(allowHttp) {
  let manifest = fs.readFileSync(manifestPath, "utf8");

  // ✅ CORREGIDO: Manejo más seguro del networkSecurityConfig
  const hasSecurityConfig = manifest.includes('android:networkSecurityConfig');
  
  if (allowHttp) {
    if (!hasSecurityConfig) {
      // Agregar la configuración si no existe
      manifest = manifest.replace(
        /<application([^>]*)>/,
        `<application$1 android:networkSecurityConfig="@xml/network_security_config">`
      );
    }
    // Si ya existe, no hacer nada (evitar duplicados)
    console.log("✅ AndroidManifest.xml configurado para permitir HTTP (entorno de prueba)");
  } else {
    if (hasSecurityConfig) {
      // Solo remover si existe y estamos en producción
      manifest = manifest.replace(/ android:networkSecurityConfig="@xml\/network_security_config"/g, "");
    }
    console.log("✅ AndroidManifest.xml configurado para producción (HTTP bloqueado)");
  }

  fs.writeFileSync(manifestPath, manifest, "utf8");
}

function updateSecurityConfig(allowHttp) {
  const httpEnabled = `<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true">
        <trust-anchors>
            <certificates src="system" />
            <certificates src="user" />
        </trust-anchors>
    </base-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">sproveedor-test.adacsc.co</domain>
        <domain includeSubdomains="true">sproveedor-test-dos.adacsc.co</domain>
        <domain includeSubdomains="true">sproveedor-test-tres.adacsc.co</domain>
        <domain includeSubdomains="true">localhost</domain>
    </domain-config>
</network-security-config>`;

  const httpsOnly = `<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="false">
        <trust-anchors>
            <certificates src="system" />
            <certificates src="user" />
        </trust-anchors>
    </base-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">sproveedor.adacsc.co</domain>
        <domain includeSubdomains="true">test-positiva-webservice-proveedor-pre.adacsc.co</domain>
        <domain includeSubdomains="true">localhost</domain>
    </domain-config>
</network-security-config>`;

  // Asegurar que el directorio existe
  const configDir = path.dirname(securityConfigPath);
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
  }

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

console.log("🎯 Configuración de red aplicada correctamente para entorno:", env.toUpperCase());