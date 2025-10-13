# What is the primary routing mechanism used in this Next.js progject?

- App router, which uses directory-based routing with specific file names like page.js and layout.js to define routes.

# What is the purpose of the `children` prop in a Next.js layout component?

- To render child components or pages within the layout, creating a nested structure for the application.

# What is turbopack in the context of Next.js?

- A Rust-powered version of webpack, the offical build product for Next.js by Vercel.

# How are links created in Next.js application?

- Using the `Link` component from 'next/link', which functions simiarly to HTML anchor tags but provides clident-side navigation.

# What are the two key files used in Next.js app router routing?

- layout.js (defines the overall page structure) and page.js (defines the specific page content for a route).

# What is the purpose of using `await Promise.all()` when executing database queries?

- It ensures that multiple data base queries happen in parallel, which can improve performance by executing queries simultaneously instead of sequentially.

# In Next.js server components, what file naming convention is used for creating a route?

- Use a lowercase `page.js` file within the corresponding route directory (e.g., `app/my/page.js`).

# What is the primary advantage of using server components in Next.js for database interactions?

- Server components simplify database queries by allowing direct async database without additional complexity, making the code more straightforward and readable.

# How does Next.js handle asynchronous data fetching in server components?

- Next.js allows defining async functions directly in server components, enabling straightforward database queries and data retrieval using `await` syntax.
