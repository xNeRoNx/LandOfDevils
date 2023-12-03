# Struktura Projektu

Ten dokument opisuje strukturę katalogów w projekcie.

## Struktura Katalogów

project-root/
│
├── src/                       # Główny katalog źródłowy
│   ├── tests/                 # Testy
│   │   └── ...
│   │
│   ├── components/            # Współdzielone komponenty UI
│   │   ├── Button/
│   │   ├── Header/
│   │   └── ...
│   │
│   ├── lib/                   # Biblioteka wspólnych funkcji, hooków, narzędzi
│   │   ├── api/
│   │   ├── hooks/
│   │   ├── db/
│   │   └── ...
│   │
│   ├── models/                # Definicje modeli (np. typy TypeScript, interfejsy)
│   │   └── ...
│   │
│   ├── pages/                 # Strony Next.js
│   │   ├── index.tsx
│   │   └── ...
│   │
│   ├── public/                # Statyczne pliki, jak obrazy, favicon itp.
│   │
│   ├── styles/                # Globalne style, np. Tailwind konfiguracja
│   │   ├── globals.css
│   │   └── ...
│   │
│   └── utils/                 # Współdzielone narzędzia, pomocniki
│       └── ...
└── ...


## Opis Katalogów

- `src/`: Główny katalog źródłowy zawierający kod aplikacji.
- `src/tests/`: Zawiera testy aplikacji.
- `src/components/`: Przechowuje współdzielone komponenty UI, takie jak przyciski, nagłówki itp.
- `src/lib/`: Biblioteka wspólnych funkcji, hooków i narzędzi, w tym API, baza danych, itp.
- `src/models/`: Zawiera definicje modeli, takie jak typy TypeScript i interfejsy.
- `src/pages/`: Strony w ramach Next.js, każda strona reprezentuje oddzielną trasę.
- `src/public/`: Dla statycznych plików, takich jak obrazy i favicon.
- `src/styles/`: Przechowuje globalne style, w tym konfigurację Tailwind CSS.
- `src/utils/`: Zawiera współdzielone narzędzia i pomocniki wykorzystywane w projekcie.
