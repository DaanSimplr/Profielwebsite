# Profielwebsite

Een moderne, responsive profielwebsite gebouwd met HTML, CSS en JavaScript. Deze website is perfect voor het tonen van je portfolio, vaardigheden en projecten.

## 🚀 Features

### Design & Layout
- **Modern Design**: Schoon en professioneel design met gradient achtergronden
- **Fully Responsive**: Werkt perfect op desktop, tablet en mobiel
- **Smooth Animations**: Vloeiende animaties en overgangen
- **Interactive Elements**: Hover effecten en interactieve componenten

### Functionaliteiten
- **Fixed Navigation**: Blijft bovenaan tijdens scrollen
- **Mobile Menu**: Hamburger menu voor mobiele apparaten
- **Smooth Scrolling**: Vloeiende scroll naar secties
- **Contact Form**: Werkend contactformulier met validatie
- **Skill Bars**: Geanimeerde vaardigheidsbalken
- **Project Cards**: Interactieve projectkaarten
- **Social Links**: Links naar sociale media

### Secties
1. **Hero Section**: Welkomstbericht met call-to-action knoppen
2. **Over mij**: Persoonlijke informatie en statistieken
3. **Vaardigheden**: Frontend en backend vaardigheden met progress bars
4. **Projecten**: Portfolio van projecten met technologieën
5. **Contact**: Contactformulier en contactgegevens

## 📁 Bestandsstructuur

```
Profielwebsite/
├── index.html          # Hoofdbestand met HTML structuur
├── main.css           # Alle styling en responsive design
├── main.js            # JavaScript functionaliteit
└── README.md          # Deze documentatie
```

## 🛠️ Installatie & Gebruik

1. **Download** alle bestanden naar je computer
2. **Open** `index.html` in je webbrowser
3. **Pas aan** de inhoud naar jouw wensen (zie Customization hieronder)

## 🎨 Customization

### Persoonlijke Informatie Aanpassen

#### 1. Naam en Titel
In `index.html`, regel 47:
```html
<h1 class="hero-title">Hallo, ik ben <span class="highlight">Jouw Naam</span></h1>
<p class="hero-subtitle">Web Developer & Designer</p>
```

#### 2. Over Mij Sectie
Pas de tekst aan in de "Over mij" sectie (regel 75-85):
```html
<p>
    Ik ben een gepassioneerde web developer met een oog voor detail...
</p>
```

#### 3. Statistieken
Pas de statistieken aan (regel 86-100):
```html
<div class="stat">
    <h3>2+</h3>
    <p>Jaar ervaring</p>
</div>
```

#### 4. Vaardigheden
Pas je vaardigheden en percentages aan (regel 110-150):
```html
<div class="skill-item">
    <span class="skill-name">HTML5</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 90%"></div>
    </div>
</div>
```

#### 5. Projecten
Voeg je eigen projecten toe (regel 160-220):
```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">
            <i class="fas fa-laptop-code"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Project Naam</h3>
        <p>Project beschrijving...</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link">Live Demo</a>
            <a href="#" class="project-link">Code</a>
        </div>
    </div>
</div>
```

#### 6. Contactgegevens
Pas je contactgegevens aan (regel 240-260):
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>jouw.email@example.com</span>
</div>
```

### Kleuren Aanpassen

De hoofdkleuren zijn gedefinieerd in `main.css`. Je kunt deze aanpassen:

#### Primaire kleuren (regel 15-20):
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #fbbf24;
    --gradient-start: #667eea;
    --gradient-end: #764ba2;
}
```

#### Achtergrondkleuren:
- Hero sectie: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Sectie achtergronden: `#f8fafc`

### Fonts Aanpassen

De website gebruikt Google Fonts (Inter). Je kunt dit aanpassen in `index.html` regel 8:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 📱 Responsive Design

De website is volledig responsive met breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🔧 JavaScript Functionaliteiten

### Beschikbare Features:
- **Mobile Navigation**: Hamburger menu functionaliteit
- **Smooth Scrolling**: Vloeiende scroll naar secties
- **Scroll Animations**: Elementen verschijnen bij scrollen
- **Contact Form**: Form validatie en notificaties
- **Skill Bars**: Geanimeerde progress bars
- **Navbar Effects**: Dynamische navbar bij scrollen

### Notificaties
Het contactformulier toont notificaties:
- **Success**: Groene notificatie bij succesvolle verzending
- **Error**: Rode notificatie bij fouten
- **Info**: Blauwe notificatie voor informatie

## 🚀 Deployment

### GitHub Pages
1. Upload alle bestanden naar een GitHub repository
2. Ga naar Settings > Pages
3. Selecteer "Deploy from a branch"
4. Kies je main branch
5. Je website is live op `https://username.github.io/repository-name`

### Netlify
1. Upload de bestanden naar Netlify
2. Je website wordt automatisch gedeployed
3. Krijg een gratis subdomein

### Vercel
1. Verbind je GitHub repository met Vercel
2. Automatische deployment bij elke push
3. Snelle en betrouwbare hosting

## 📝 Toekomstige Verbeteringen

Mogelijke uitbreidingen:
- [ ] Blog sectie
- [ ] Dark mode toggle
- [ ] Meer animaties
- [ ] Portfolio filters
- [ ] Testimonials sectie
- [ ] Download CV functionaliteit
- [ ] Multi-language support

## 🤝 Bijdragen

Voel je vrij om verbeteringen voor te stellen of bugs te melden!

## 📄 Licentie

Dit project is open source en beschikbaar onder de MIT licentie.

---

**Gemaakt met ❤️ voor de developer community** 