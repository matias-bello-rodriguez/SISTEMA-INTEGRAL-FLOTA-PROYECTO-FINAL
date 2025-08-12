# SISTEMA INTEGRAL DE GESTIÓN DE FLOTA 🚛💨

## Colaboradores: @pedrignacio & @LuisAriasCL & @matias-bello-rodriguez

## 🧭 Descripción General
Solución avanzada para la gestión logística terrestre desarrollada como proyecto final de ingeniería informática. El sistema optimiza el flujo de trabajo en tiempo real, reduce costos operativos (combustible, mantenimientos) y fue diseñado basado en necesidades reales de empresas logísticas de Penco.

**Alcance actual**: Vehículos terrestres  
**Roadmap futuro**: Expansión a almacenamiento y distribución logística completa

## 📸 Capturas del Sistema
![Dashboard](https://github.com/user-attachments/assets/b3f66e14-113f-4ba5-a818-2d632e8ab055)
![Módulo móvil](https://github.com/user-attachments/assets/de955426-248e-453d-b9b7-0a31533e1e94)
![Registro combustible](https://github.com/user-attachments/assets/dc6cba9f-dd97-417b-8c0a-b1271086f8ee)
![Simulación ruta](https://github.com/user-attachments/assets/db4d8a21-55c6-431f-9742-d4eb39366491)

## 🔍 Módulos Principales
- **Combustible**: Registro y análisis de consumo
- **Mantenimiento**: Gestión de Órdenes de Trabajo (OT)
- **Siniestros**: Registro y seguimiento de incidentes
- **Dashboard**: 8 KPIs operacionales clave
- **Rutas**: Simulación con tecnología Leaflet

## 🛠 Stack Tecnológico
| Componente       | Tecnologías                          |
|------------------|--------------------------------------|
| Frontend         | Angular + TypeScript + Leaflet(mapas)|
| Backend          | Node.js + Express                    |
| Base de Datos    | MySQL                                |
| Geolocalización  | Mapbox API                           |
| Reportes         | Chart.js + PDFKit                    |
| Mobile           | Ionic/Angular (versión cruzada)      |

## 🚀 Instalación Completa

### Prerrequisitos
- Node.js v16+
- MySql 8.0+
- Yarn/npm
- Git

### Paso 1: Clonar repositorio
```bash
git clone https://github.com/matias-bello-rodriguez/SISTEMA-INTEGRAL-FLOTA-PROYECTO-FINAL.git
cd SISTEMA-INTEGRAL-FLOTA-PROYECTO-FINAL
```

### Paso 2: Instalar dependencias
```bash
# Instalar dependencias en backend
cd ... /.../backend
npm i
npm run dev
```

# Instalar dependencias en frontend
```bash
cd ... /.../frontend
npm i
ionic serve
```


