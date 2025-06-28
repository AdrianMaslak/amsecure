# AMSECURE - Webová stránka

Toto je repozitár pre webovú stránku bezpečnostnej firmy AMSECURE, vytvorenú pomocou statického generátora stránok [Eleventy](https://www.11ty.dev/).

## Štruktúra projektu

- `src/`: Zdrojové súbory stránky.
  - `_includes/`: Zdieľané komponenty a layouty.
    - `layouts/base.njk`: Hlavný layout stránky.
    - `partials/nav.njk`: Navigačné menu.
  - `css/`: Súbory so štýlmi.
  - `services/`: Podstránky pre jednotlivé služby.
  - `index.njk`: Domovská stránka.
  - `kontakt.njk`: Kontaktná stránka.
- `_site/`: Vygenerovaná statická stránka (po spustení Eleventy).
- `.eleventy.js`: Konfiguračný súbor pre Eleventy.
- `package.json`: Zoznam závislostí a skriptov.

## Požiadavky

- [Node.js](https://nodejs.org/) (verzia 18 alebo vyššia)

## Spustenie projektu lokálne

1.  **Nainštalujte závislosti:**
    ```bash
    npm install
    ```

2.  **Spustite lokálny server s automatickým obnovením:**
    ```bash
    npx @11ty/eleventy --serve
    ```
    alebo použite pripravený skript:
    ```bash
    npm start
    ```

3.  Otvorte v prehliadači adresu [http://localhost:8080](http://localhost:8080).

## Dôležité

Pred nasadením na produkciu je potrebné v súbore `src/kontakt.njk` nahradiť placeholder `YOUR_FORM_ID` za reálne ID vášho formulára z [Formspree](https://formspree.io/).
