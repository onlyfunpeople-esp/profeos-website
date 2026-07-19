# ProfeOS - Sitio web oficial

Sitio estático de presentación de ProfeOS, listo para publicarse con GitHub Pages en `https://profeos.com.ar`.

## Por qué HTML, CSS y JavaScript

El sitio no necesita una fase de compilación ni dependencias. Esta alternativa ofrece la menor carga posible, despliegue inmediato en GitHub Pages, alta puntuación de rendimiento y una edición muy directa para el equipo.

## Estructura

```text
.
├── assets/
│   ├── css/styles.css       # Estilos y comportamiento responsive
│   ├── js/main.js           # Menú, animaciones y formulario beta
│   ├── images/              # Capturas SVG reemplazables
│   └── favicon.svg
├── .github/workflows/pages.yml # Despliegue automático
├── index.html               # Página principal
├── privacy.html             # Política de privacidad provisional
├── CNAME                    # Dominio personalizado
├── robots.txt, sitemap.xml, site.webmanifest
└── LICENSE
```

## Cambiar textos

Los textos están en `index.html`, organizados por sección con sus respectivos `id`: `inicio`, `proposito`, `funciones`, `filosofia`, `roadmap` y `beta`. Reemplazá el texto entre las etiquetas HTML y conservá los atributos `id` para que la navegación siga funcionando.

## Cambiar imágenes y logo

Las vistas de ejemplo están en `assets/images/`:

- `app-dashboard-placeholder.svg`: interfaz de escritorio del hero.
- `app-mobile-placeholder.svg`: pantalla principal del celular.
- `app-calendar-placeholder.svg`: pantalla secundaria del celular.

Podés sustituirlas por archivos SVG, WebP o AVIF con el mismo nombre, o actualizar las rutas `src` de las imágenes en `index.html`. El icono actual es una interpretación geométrica temporal creada para el sitio. Cuando esté disponible el logo final, reemplazá `assets/favicon.svg` y los SVG con clase `brand-mark` en `index.html` y `privacy.html` por el recurso de marca oficial.

## Formulario beta

El formulario valida los campos y simula una confirmación en el navegador. Su manejador se encuentra en `assets/js/main.js`, bajo `data-beta-form`. Para conectarlo a un servicio (por ejemplo, una función propia o un proveedor de formularios), reemplazá ese manejador por una petición `fetch` al endpoint elegido. No se envían datos hasta entonces.

## Publicar en GitHub Pages

1. Creá el repositorio `profeos-website` y subí estos archivos a la rama `main`.
2. En GitHub, abrí **Settings > Pages** y en **Build and deployment** elegí **GitHub Actions**.
3. El flujo `Deploy GitHub Pages` se ejecutará en cada push a `main`.
4. En **Settings > Pages > Custom domain**, ingresá `profeos.com.ar`. El archivo `CNAME` ya está preparado.

## Conectar profeos.com.ar y HTTPS

En el proveedor DNS del dominio, agregá los registros A para el dominio raíz apuntando a las IPs de GitHub Pages que indica su documentación vigente, y un registro `CNAME` de `www` hacia `<tu-usuario>.github.io`. GitHub validará la configuración en la sección Pages. Una vez que la validación termine, activá **Enforce HTTPS** allí. La propagación DNS puede tomar algunas horas. Mantené el archivo `CNAME` en el repositorio para evitar que el dominio se desvincule.

Para más detalle y valores actuales de DNS, consultá la [documentación oficial de GitHub Pages](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Repositorios recomendados

- `profeos-app`: aplicación Flutter.
- `profeos-website`: este sitio público.
- `profeos-docs`: documentación, decisiones de producto y roadmap.

Esta separación conserva el sitio simple y permite que la aplicación y la documentación evolucionen con ciclos propios.
