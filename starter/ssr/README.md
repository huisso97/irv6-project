# What is the purpose of `hydrateRoot` in React?

HydrateRoot assumes existing server-side rendered markup and takes over the app, making it interactive on the client side, as opposed to `createRoot` which completely replaces the interior content.

# What is the difference between `renderToString` and `renderToStaticMarkup`?

`renderToString` includes React metadata needed for hydration and client-side interactivity, while `renderToStaticMarkup` generates a string without React-specific metadata, making it lighter but non-interactive.

# Why is flushing the head tag first important in server-side rendering?

Flushing the head tag first allows users to start downloading CSS, scripts, and other resources concurrently while the server continues rendering the app, potentially impriving percived performance.

# What script tag attributes are recommended when loading client-side JavaScript for server-side rendering?

Use async, defer, and type="module" attributes to start downloading the script without blocking page rendering and to enable module loading.
