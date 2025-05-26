[![Netlify Status](https://api.netlify.com/api/v1/badges/dfd62f48-8b03-4cb7-8595-c094c796a761/deploy-status)](https://app.netlify.com/projects/tumolix/deploys)

http://tumolix.netlify.app/

# tumolix

Simple movie db app with React + Ts (tailwind, tanstack - router, query)
It allows to search and filter for movies using the genre and category filters.
You can then explore each movie in details - view the cast, box office info and some trailers.


## Attention
Some of features may not work if you're using older safari or firefox

I'm css-nesting and native view-transitions and there are support issues with safari and firefox

So please use chromium based browser for testing.


## Project Structure

```

src/
├── components/
├── features/                # Feature sliced architecture
│   ├── api/                 # TMDB-ts wrapper client setup
│   │
│   └── movie/
│   │   ├── _components/     # Feature level components
│   │   ├── _queries/        # Tanstack queries and api methods
│   │   ├── cast/            # movie cast
│   │   └── trailers/          # movie trailers
│   │
│   └── movies/
│       ├── _queries/        # Tanstack queries and api methods
│       ├── category/        # Category filters (popular, top-rated)
│       ├── genres/          # Genres filter
│       └── search/          # Search
│
├── pages/                   # File based routing
│   ├── __root.tsx           # Root route
│   ├── _layout.tsx          # Layout component
│   └── movie.$id.tsx        # Movie details component
├── styles/                  # All `tailwind` + custom theme setup
└── main.tsx

```

There are number of bugs including the one with viewTransitions when clicking on same route link starts a view transition

Also there are some skeleton loaders that are not implemented

Only missing feature is favorite, which I wanted to implemented with indexDb and store the movie item there as there is no way to use the tmdb api and add favorites for unauthenticated users

Well there is the guest session, but that was out of scope anyway.

For the infinite scroll I wanted to also add list virtualization, but didn't have time for it.

To run the project just install the deps and configure tmdb api token using the env.example

## TODO

- [*] Install required packages
  - [*] Install and configure tailwind
    - [*] configure dark and light modes
  - [*] Install tanstack (query, router)
  - [*] Configure router
  - [*] Congigure tanstack-query + TMDB API
    - [*] Configure api caching and revalidation
  - [*] Install headless UI and configure reuasable components
- [*] Create app UI
  - [*] create home page
    - [*] search bar
    - [*] popular movies section
    - [*] genre filter (dropdown/typeahead)
  - [ ] list page
    - [*] only infinite scroll with images loading lazy
    - [ ] list virtualization + reuasable feature for favorites and search
  - [*] create details page
    - [*] implement trailer section
    - [*] implement cast section
  - [?] Add favorites functionality
    - [ ] favorites button + page
    - [ ] use index db to store info
- [?] Add additional unit tests
