# Gymvana - Blog de Fitness y Vida Sana

Gymvana es un blog moderno enfocado en ejercicio, vida sana y fitness, construido con Next.js y las mejores prácticas de desarrollo web.

## 🚀 Tecnologías Utilizadas

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Componentes**: Shadcn/ui
- **Iconos**: Lucide React
- **Temas**: next-themes (soporte para modo claro/oscuro)
- **Fuentes**: Inter (cuerpo), Poppins (logo)
- **Gestor de Paquetes**: npm

## 🎨 Diseño y Paleta de Colores

- **Color Primario**: #212121 (Negro)
- **Color Secundario**: #E0E0E0 (Blanco grisáceo)
- **Color de Acento**: #E53935 (Rojo)

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Rutas de Next.js (App Router)
├── components/
│   ├── atoms/             # Componentes básicos
│   ├── molecules/         # Combinaciones de átomos
│   ├── organisms/         # Secciones complejas
│   ├── layouts/           # Layouts de página
│   ├── providers/         # Proveedores de contexto
│   └── ui/               # Componentes de Shadcn/ui
├── lib/                   # Utilidades y funciones
├── types/                 # Definiciones de tipos TypeScript
└── styles/               # Estilos globales adicionales
```

## 🛠️ Instalación y Configuración

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd gymvana-frontend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🧩 Componentes Principales

### Átomos
- **LogoText**: Logo textual de Gymvana
- **NavLink**: Enlaces de navegación con efectos hover

### Moléculas
- **PostCard**: Tarjeta de preview de posts del blog

### Organismos
- **Header**: Cabecera con navegación y logo
- **MainSection**: Sección principal con layout de 2 columnas
- **Footer**: Pie de página con enlaces y redes sociales
- **ChatPopupButton**: Botón flotante para chat de ayuda

### Layouts
- **MainLayout**: Layout principal que incluye Header, Footer y ChatPopupButton

## 🌐 API

El proyecto está configurado para consumir datos de:
```
https://680518c5ca467c15be683cd3.mockapi.io/api/blog/posts
```

## 🎯 Características

- ✅ Diseño responsive
- ✅ Modo claro/oscuro
- ✅ Arquitectura de componentes atómica
- ✅ TypeScript para tipado fuerte
- ✅ SEO optimizado
- ✅ Accesibilidad (a11y)
- ✅ Animaciones y transiciones suaves

## 🔮 Próximas Funcionalidades

- [ ] Integración completa con API
- [ ] Sistema de comentarios
- [ ] Búsqueda de posts
- [ ] Filtros por categoría
- [ ] Chatbot integrado
- [ ] Newsletter
- [ ] Calculadoras de fitness

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Equipo

Desarrollado por el equipo de Gymvana.

---

¡Gracias por contribuir a hacer de Gymvana el mejor blog de fitness! 💪
