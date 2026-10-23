# 🐾 Mikorin & Killua — Guía de Convivencia y Cuidado | House Guest & Cat Care Guide

Guía web interactiva y bilingüe (**Español / English**) diseñada para dar la bienvenida a nuestros huéspedes y compartir cómo convivir en armonía y cuidar el bienestar de nuestras gatitas **Mikorin** y **Killua**.

Interactive, bilingual (**Español / English**) web guide designed to welcome house guests and share how to coexist harmoniously with—and care for—our beloved cats, **Mikorin** and **Killua**.

---

## ✨ Características Principales / Key Features

- 🌐 **Bilingüe (ES / EN):** Cambio instantáneo entre Español e Inglés con persistencia en `localStorage`.
- 🎨 **Estética Acuarela Estilo *Frieren* + Fotos Reales:** Ilustraciones personalizadas estilo acuarela anime libres de texto, stickers SVG chibi expresivos y botón global/individual para alternar con sus fotografías reales.
- 🏡 **Guía de Convivencia y Vínculo ESA:**
  - Presentación de **Mikorin** (6 años, dieta médica hidrolizada por IBD y caderas delicadas) y **Killua** (4 años, sensible a ruidos fuertes y dieta solidaria).
  - Reglas claras de convivencia en casa (independencia felina, descanso nocturno en la recámara principal, revisión de puertas y cero comida humana).
  - Contexto educativo sobre su rol como **Animales de Apoyo Emocional (ESA)** + mini-test interactivo.
- 🕒 **Rutina Diaria y Checklist Interactivo:**
  - Instrucciones para el comedor automático **"Gordon"** (incluyendo simulador del botón manual en caso de apagón), estaciones de agua, limpieza del arenero y cuidado de sus cobijas en forma de *"cuencos"*.
  - Checklist interactivo con barra de progreso guardada en el navegador.
- 🗺️ **Mapa Rápido de Casa:** Directorio habitación por habitación para ubicar sus accesorios y conocer los escondites favoritos de Killua.
- 🛡️ **Buscador de Prevención y Peligros:** Filtro por categoría y buscador en tiempo real de objetos peligrosos (ligas, cables, audífonos, bolsas de plástico), alimentos, plantas y medicamentos tóxicos.
- 🚨 **Salud y Emergencias Veterinarias:** Señales de alerta y botones de contacto directo (WhatsApp, llamada y Google Maps) para **Clínica Veterinaria Meztli**.
- 💌 **Confirmación por WhatsApp:** Checklist final para que los huéspedes confirmen su lectura con un mensaje prellenado de WhatsApp.

---

## 📁 Estructura del Proyecto / Project Structure

```text
├── index.html      # Estructura semántica principal y secciones interactivas
├── styles.css      # Sistema de diseño pastel/acuarela inspirado en Frieren y diseño responsivo
├── app.js          # Contenido bilingüe (ES/EN), stickers SVG, estado interactivo y scroll-spy
└── assets/         # Ilustraciones estilo Frieren (1:1 y panorámicas) y fotos reales de Mikorin y Killua
```

---

## 🚀 Uso Local y Despliegue / Local Usage & Deployment

### Ejecutar localmente / Run locally
Al ser un sitio estático puro (HTML, CSS y Vanilla JS sin dependencias externas), puedes abrir `index.html` directamente o servirlo con Python/Node:

```bash
python3 -m http.server 8090
```
Y abrir `http://localhost:8090` en el navegador.

### Despliegue en Vercel / Deploy on Vercel
1. Importa el repositorio `domikorin/guia-de-convivencia-gatuna` en [Vercel](https://vercel.com).
2. Deja el **Framework Preset** como `Other` (sitio estático en la raíz `/`).
3. Haz clic en **Deploy**.
