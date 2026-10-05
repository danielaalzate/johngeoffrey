# John Geoffrey Sánchez — Portafolio web

Copia de seguridad de la web y sus recursos, actualizada el 5 de octubre de 2026. Incluye el historial de cambios del desarrollo.

Web publicada: https://john-geoffrey-sanchez.sotano.chatgpt.site/

## Contenido

- `dist/index.html`: estructura, navegación y footer.
- `dist/app.js`: páginas y navegación de la web.
- `dist/data.js`: obras, series y trayectoria del artista.
- `dist/style.css`: estilos y adaptación a móvil.
- `dist/assets/`: fotografías, recortes transparentes, imágenes del portafolio, logos, tipografías y videos. También conserva recursos de versiones anteriores.
- `.openai/hosting.json`: configuración del sitio publicado en Sites.

## Abrir localmente

Es una web estática; no requiere instalar dependencias ni compilar.

Con Python instalado, desde la raíz del repositorio:

```sh
python -m http.server 8768 --directory dist
```

Abrir http://localhost:8768/ en el navegador. Para detener el servidor, presionar Ctrl+C.

## Restaurar y editar

Clonar este repositorio y conservar juntos todos los archivos de `dist`. Editar los contenidos en `dist/data.js`, las páginas en `dist/app.js` y los estilos en `dist/style.css`.

La navegación utiliza rutas con `#`, por lo que funciona con un servidor de archivos estáticos. La publicación en GitHub respalda el código y los recursos; no cambia automáticamente la web alojada en Sites. La configuración de acceso y las credenciales del servicio de publicación se gestionan fuera del repositorio.

Las fotografías y obras se conservan para el portafolio del artista. Este repositorio no concede una licencia para reutilizarlas.
