# ENNA Leave

ENNA Leave is a leave-management application with a Laravel API backend and a React frontend. Employees can submit leave requests and view their leave balance, while management and HR users work from role-specific dashboards.

## Project structure

```text
enaa-leave-laravel/   Laravel 12 API, authentication, database, and business logic
enaa-leave-react/     React 19/Vite web application
```

## Requirements

- PHP 8.2 or newer
- Composer
- Node.js and npm
- SQLite (the default local database) or another database supported by Laravel

## Installation

### 1. Configure the Laravel API

```bash
cd enaa-leave-laravel
composer install
cp .env.example .env
php artisan key:generate
```

On Windows PowerShell, use `Copy-Item .env.example .env` instead of `cp`.

Create the SQLite database if it does not exist, then run the migrations and seeders:

```bash
New-Item database/database.sqlite -ItemType File
php artisan migrate --seed
```

If the database file already exists, skip the `New-Item` command. Update the `DB_*` values in `.env` when using a database other than SQLite.

### 2. Install the frontend

```bash
cd ../enaa-leave-react
npm install
```

## Running locally

Start the API from `enaa-leave-laravel`:

```bash
php artisan serve
```

Start the React development server from `enaa-leave-react` in a second terminal:

```bash
npm run dev
```

Open the URL printed by Vite, usually `http://localhost:5173`.

The Laravel project also provides a combined development command that starts the Laravel server, queue listener, log viewer, and Vite process:

```bash
cd enaa-leave-laravel
npm install
npm run dev
```

## Application routes

The React client currently exposes these pages:

- `/` - Introduction page
- `/login` - Login page
- `/employee/dashboard` - Employee dashboard
- `/manager/dashboard` - Manager dashboard
- `/rh/dashboard` - HR dashboard
- `/formateur/dashboard` - Trainer dashboard

Protected pages require an authenticated user.

## API overview

The API is served by Laravel and uses Sanctum authentication for protected endpoints.

| Method | Endpoint              | Access        |
| ------ | --------------------- | ------------- |
| `POST` | `/api/login`          | Public        |
| `POST` | `/api/logout`         | Authenticated |
| `GET`  | `/api/me`             | Authenticated |
| `POST` | `/api/demandes-conge` | Authenticated |
| `GET`  | `/api/demandes-conge` | Authenticated |
| `POST` | `/api/soldes-conges`  | Authenticated |
| `GET`  | `/api/soldes-conges`  | Authenticated |

## Useful commands

From `enaa-leave-laravel`:

```bash
php artisan test
php artisan route:list
```

From `enaa-leave-react`:

```bash
npm run lint
npm run build
```

## License

This project is intended for internal or educational use. Add the applicable project license before distributing it.
