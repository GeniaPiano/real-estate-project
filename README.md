# Real estate 

Aplikacja została napisana na potrzeby zadania rekrutacyjnego na stanowisko Frontend Developer.
Służy do przeglądania ogłoszeń nieruchomości z możliwością filtrowania wyników i wyświetlania szczegółów ogłoszenia.

### Live view

https://real-estate-project-nu-tan.vercel.app/

### Tresc zadania

Twoim zadaniem jest stworzenie interfejsu użytkownika dla portalu z ogłoszeniami nieruchomości. Interfejs powinien umożliwiać przeglądanie listy ogłoszeń na podstawie danych z pliku JSON oraz wyświetlanie szczegółów ogłoszenia po kliknięciu na nie. Dodatkowo, skorzystaj z API do pobrania listy krajów i wyświetlenia ich na stronie w formie listy dropdown.

#### Wymagania:
- Użyj frameworka React.js do stworzenia interfejsu użytkownika.
- Stwórz plik JSON zawierający listę ogłoszeń. Każde ogłoszenie powinno mieć przynajmniej tytuł, opis, cenę i zdjęcie (link do obrazu).
- Wyświetl listę ogłoszeń na stronie głównej aplikacji. Dla każdego ogłoszenia wyświetl jego tytuł, cenę i miniaturę zdjęcia.
- Po kliknięciu w ogłoszenie, wyświetl szczegóły tego ogłoszenia. Powinny zawierać pełny opis, cenę i większe zdjęcie.
- Pobierz listę krajów z API (endpoint: https://restcountries.com/v3.1/all) i wyświetl je na stronie w formie listy dropdown.
- Stylizuj interfejs używając dowolnych technik.

#### Dodatkowo możesz zwrócić uwagę na:
- Dodanie filtrowania wyników
- Responsywność interfejsu.
- Użycie biblioteki do zarządzania trasami (np. React Router).
- Testy jednostkowe dla komponentów React.

## Technologie

- React.js
- Typescript
- React Router
- Axios (do wykonywania zapytań HTTP)
- Material-UI (do stylizacji komponentów)
- Vitest (do testów jednostkowych)
- Zustand - do zarządzania stanem globalnym aplikacji

## Instalacja

Aby uruchomić projekt lokalnie, wykonaj poniższe kroki:

1. Sklonuj repozytorium:

```bash
git clone https://github.com/GeniaPiano/real-estate-project
```
```bash
cd real-estate-project
```
##### pnpm
```bash
pnpm install
pnpm run dev
```
##### npm
```bash
npm install
npm run dev
```
##### yarn
```bash
yarn install
yarn dev
```

## Screenshots

<img src="./public/screens/screen-shot_1.png" alt="Opis obrazka">
<img src="./public/screens/screen-shot_6.png" alt="Opis obrazka">
<img src="./public/screens/screen-shot_2.png" alt="Opis obrazka">
<img src="./public/screens/screen-shot_3.png" alt="Opis obrazka">
<img src="./public/screens/screen-shot_4.png" alt="Opis obrazka">
<img src="./public/screens/screen-shot_5.png" alt="Opis obrazka">



