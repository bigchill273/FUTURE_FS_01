/**
 * Mock blog posts for local development.
 *
 * These are original, recruiter-friendly sample articles—not claims about
 * personal work history or production projects. Review and personalize them
 * before publishing as your own writing.
 *
 * Usage:
 *   import { mockBlogPosts } from "./mock-blog-posts";
 *   await Blog.insertMany(mockBlogPosts);
 *
 * Replace the coverImage paths with images that exist in your public directory.
 */

export const mockBlogPosts = [
  {
    title: "A Practical Guide to Managing State in React",
    slug: "practical-guide-to-managing-state-in-react",
    excerpt:
      "A clear way to think about local state, shared state, derived values, and when a state management library is actually worth introducing.",
    content: `
# A Practical Guide to Managing State in React

State management is one of those parts of React that can look deceptively simple. A component starts with a value, an event changes it, and React renders the result. The complexity appears when that value is needed in several places, depends on other values, or must stay synchronized with something outside React.

The goal is not to find one state management tool for every situation. It is to put each piece of state in the place where it is easiest to reason about.

## Start with local state

If a value is only used by one component, keep it there. A menu's open state, a password visibility toggle, or the current value of a small tab interface usually does not need a global store.

\`\`\`tsx
const [isOpen, setIsOpen] = useState(false);
\`\`\`

Keeping state close to where it is used reduces the number of components that need to know about it. It also makes components easier to reuse and test.

## Lift state only when sharing is real

When two sibling components need the same value, move that state to their closest common parent and pass the value and its update function down.

This is often called lifting state up. It is a useful default, but it should not become an excuse to move every value to the top of the application. A large parent that owns unrelated state can become difficult to maintain.

## Prefer derived values over duplicated state

A common source of bugs is storing a value that can already be calculated from other state.

For example, if a product list and a search query are available, the filtered list can be derived during rendering:

\`\`\`tsx
const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(query.toLowerCase())
);
\`\`\`

There is no need to store \`filteredProducts\` separately and keep it synchronized with \`products\` and \`query\`. Every additional copy of the same information creates another opportunity for inconsistency.

## Know when a shared store helps

A store becomes useful when many distant parts of an application need to read or update the same client-side state, or when passing props through several layers becomes genuinely awkward.

Even then, distinguish client state from server data. A shopping cart's temporary UI state and a list of articles fetched from a database have different lifecycles. Server-state tools are designed to handle caching, refetching, loading states, and synchronization with remote data.

## A simple decision checklist

- Is the value used by one component? Keep it local.
- Is it shared by a small group of nearby components? Lift it to their common parent.
- Can it be calculated from existing values? Derive it instead of storing it.
- Does it represent remote data? Treat it as server state.
- Is it shared widely and frequently updated? Consider a dedicated store.

Good state management is less about choosing the most powerful library and more about avoiding unnecessary synchronization. Start with React's built-in tools, keep ownership clear, and introduce another abstraction only when it solves a problem you can explain.
`,
    coverImage: "/images/blog/react-state-management.webp",
    category: "React",
    tags: ["React", "State Management", "Frontend"],
    status: "published",
    featured: true,
    publishedAt: new Date("2026-11-10T09:00:00.000Z"),
    readingTime: 5,
  },
  {
    title: "TypeScript Generics: Reuse Logic Without Losing Type Safety",
    slug: "typescript-generics-reuse-logic-without-losing-type-safety",
    excerpt:
      "Learn how generics let functions, components, and utilities work with different data types while preserving useful information for the compiler.",
    content: `
# TypeScript Generics: Reuse Logic Without Losing Type Safety

Generics are one of TypeScript's most useful features because they help us write reusable code without falling back to \`any\`. Instead of saying that a function accepts anything and returns anything, a generic function can preserve the relationship between its input and output.

## The problem with \`any\`

Imagine a helper that returns the first item in an array:

\`\`\`ts
function first(items: any[]) {
  return items[0];
}
\`\`\`

This works at runtime, but TypeScript cannot tell us what comes back. The result is effectively untyped, so useful checks are lost.

## Preserve the input type

A generic type parameter gives the function a type variable that is inferred when the function is called:

\`\`\`ts
function first<T>(items: T[]): T | undefined {
  return items[0];
}

const firstName = first(["Ada", "Grace"]);
// string | undefined

const firstPrice = first([19.99, 24.5]);
// number | undefined
\`\`\`

The same implementation works for different arrays, and the caller keeps the correct result type.

## Add constraints when a generic needs a capability

A generic type is not automatically allowed to access arbitrary properties. If a function needs an object with an \`id\`, describe that requirement:

\`\`\`ts
function getById<T extends { id: string }>(
  items: T[],
  id: string
): T | undefined {
  return items.find((item) => item.id === id);
}
\`\`\`

The constraint says that every accepted type must contain a string \`id\`. It does not throw away the rest of the object's shape.

## Use generics for reusable UI components

A table component, select component, or list renderer can accept different data types while keeping each row correctly typed.

\`\`\`tsx
type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map((item, index) => (
    <li key={index}>{renderItem(item)}</li>
  ))}</ul>;
}
\`\`\`

The component does not need to know whether it is rendering users, projects, or blog posts. The caller supplies the rendering logic, and TypeScript checks the item type.

## Don't make every type generic

Generics add flexibility, but flexibility has a cost. If a function only ever handles one well-defined domain object, a concrete type is often clearer. A generic abstraction is valuable when it represents a real reusable relationship—not merely because the syntax is available.

A useful rule is to begin with the simplest concrete implementation. When you discover a second legitimate use case, look for the shared shape and introduce a generic that preserves the information both callers need.

Generics are at their best when they make reuse safer and the calling code easier to understand.
`,
    coverImage: "/images/blog/typescript-generics.webp",
    category: "TypeScript",
    tags: ["TypeScript", "Generics", "Programming"],
    status: "published",
    featured: true,
    publishedAt: new Date("2026-11-06T09:00:00.000Z"),
    readingTime: 5,
  },
  {
    title: "Building a Reliable Data Layer with MongoDB and Mongoose",
    slug: "reliable-data-layer-mongodb-mongoose",
    excerpt:
      "A practical look at connection reuse, schema validation, indexes, and keeping database access out of your UI components.",
    content: `
# Building a Reliable Data Layer with MongoDB and Mongoose

A database integration is more than connecting to MongoDB and calling \`find()\`. A maintainable application needs a predictable place for connection handling, schema rules, indexes, and reusable queries.

That separation matters even in a small portfolio project. It keeps database details from spreading across page components and makes future changes easier.

## Reuse the database connection

In a Next.js application, development hot reloads and serverless execution can create repeated connection attempts if connection handling is not cached. A shared connection helper can reuse an existing connection rather than opening a new one for every request.

Keep the helper in a server-only module, read the connection string from an environment variable, and fail clearly when configuration is missing. Never expose database credentials through a variable prefixed with \`NEXT_PUBLIC_\`.

## Let the schema protect your data

A Mongoose schema should describe required fields, defaults, allowed values, and useful limits. For a blog post, that might include a required title and slug, a publication status enum, and a maximum excerpt length.

Validation at the application boundary is still important. Schema validation is a strong second line of defense, not a replacement for validating untrusted request data before saving it.

## Add indexes for real query patterns

Indexes should reflect how the application reads data. If the blog homepage asks for published posts ordered by publication date, an index that starts with status and includes the publication date can support that query.

\`\`\`ts
blogSchema.index({ status: 1, publishedAt: -1 });
\`\`\`

A unique index on the slug also protects against duplicate article URLs. Remember that defining an index in a schema does not mean every production database has already built it; index creation and deployment should be handled deliberately.

## Keep queries out of components

Instead of putting Mongoose calls directly in a page, create small server-side query functions such as:

- \`getRecentPosts(limit)\`
- \`getPublishedPosts({ page, pageSize })\`
- \`getPublishedPostBySlug(slug)\`

This makes the data access layer easier to test and gives the UI a stable interface even if the underlying database implementation changes.

## Think about publication rules

A public query should not return drafts. It should filter by published status and, if scheduled publishing is supported, ensure the publication date has arrived.

\`\`\`ts
{
  status: "published",
  publishedAt: { $lte: new Date() }
}
\`\`\`

The exact rule depends on your publishing workflow, but it should be enforced in the query layer rather than relying on every page to remember it.

A reliable data layer is intentionally boring: one connection helper, clear schemas, indexes that match access patterns, and focused query functions. That boring foundation makes the rest of the application much easier to evolve.
`,
    coverImage: "/images/blog/mongodb-data-layer.webp",
    category: "Backend",
    tags: ["MongoDB", "Mongoose", "Next.js", "Backend"],
    status: "published",
    featured: false,
    publishedAt: new Date("2026-10-31T09:00:00.000Z"),
    readingTime: 6,
  },
  {
    title: "Designing Scroll-Based Interactions with Motion",
    slug: "designing-scroll-based-interactions-with-motion",
    excerpt:
      "How to build a dock-to-floating navbar transition with Motion while keeping layout and styling responsibilities clear.",
    content: `
# Designing Scroll-Based Interactions with Motion

Scroll-based animation can make a portfolio feel more considered, but it is easy to add motion that distracts from the content. The best interactions communicate a change in state and remain subtle enough that users can ignore them.

A dock-to-floating navbar is a useful example. At the top of the page, navigation can span the available width. After the user scrolls, it can become a compact pill with rounded corners, a little breathing room, and a softer shadow.

## Separate styling from animation

Tailwind is a good place for stable presentation: flexbox, spacing, typography, colors, and responsive rules. Motion should control the values that change over time, such as width, position, border radius, and opacity.

Avoid defining the same animated property in both Tailwind and Motion. If Motion owns the width during the transition, do not also apply a competing width utility.

## Use scroll position as a signal

Motion's \`useScroll\` hook exposes a motion value for the page's scroll position. You can observe that value and switch between two visual states when it passes a threshold.

For a simple state change, a threshold is often enough. For a more continuous effect, map the scroll value to animation values with \`useTransform\`.

## Coordinate child animations with variants

Variants make it possible to coordinate the navbar and its children. A parent can move between states such as \`"docked"\` and \`"floating"\`, while child elements animate their own opacity, scale, or underline.

For an underline that grows from left to right, animate \`scaleX\` from zero to one and set the transform origin to the left. This is usually cheaper than animating the element's width because transforms do not trigger layout in the same way.

## Respect reduced motion

Not everyone wants animated interfaces. Check the user's reduced-motion preference and provide a simpler state change when motion should be minimized. Also make sure the navigation remains usable if animation never runs.

## Make the interaction earn its place

Before adding an animation, ask what it communicates. Does it show that the navigation has changed mode? Does it help establish hierarchy? Does it make an action easier to understand?

If the answer is only that it looks impressive, consider simplifying it. Good motion supports the interface instead of competing with it.
`,
    coverImage: "/images/blog/motion-scroll-interactions.webp",
    category: "Frontend",
    tags: ["Motion", "React", "Animation", "UI"],
    status: "published",
    featured: true,
    publishedAt: new Date("2026-10-24T09:00:00.000Z"),
    readingTime: 5,
  },
  {
    title: "Forms That Stay Maintainable as They Grow",
    slug: "forms-that-stay-maintainable-as-they-grow",
    excerpt:
      "A practical approach to form state, validation, error messages, and choosing a form library without overengineering.",
    content: `
# Forms That Stay Maintainable as They Grow

Forms often begin with a couple of inputs and a submit button. Later, they gain conditional fields, nested values, asynchronous checks, server errors, and complicated validation rules. The challenge is keeping the form understandable as those requirements arrive.

## Separate values from validation

Form values describe what the user entered. Validation describes whether those values meet the application's rules. Keeping those concerns clear makes it easier to change one without rewriting the other.

For example, a profile form might have a display name and website URL. The UI owns the current input values, while a validation schema can describe required fields and formatting constraints.

## Validate at the right boundaries

Client-side validation gives quick feedback, but it is not a security boundary. A request can be sent without using your UI at all, so the server must validate incoming data before trusting or persisting it.

A useful flow is:

1. Validate basic input in the browser for fast feedback.
2. Submit the values to a server action or API endpoint.
3. Validate again on the server.
4. Return field-level errors or a success result.
5. Update the UI based on that result.

## Choose a library based on the problem

For a small form, React's built-in state may be enough. As forms become more complex, a library can help manage registration, touched fields, errors, validation timing, and submission state.

React Hook Form is a popular choice when you want an established ecosystem and an efficient uncontrolled-input approach. TanStack Form offers a more explicitly typed, headless approach with flexible field and form state. Neither is automatically better: compare the APIs against the shape of your forms and the conventions of your project.

## Make errors useful

An error message should explain what needs to change, not merely say that something went wrong. Associate labels with inputs, connect error text to the relevant field, and ensure errors are not communicated by color alone.

Also think about focus. After a failed submission, users should be able to find the first invalid field without hunting through the page.

## Keep submission states visible

A reliable form communicates when it is submitting, when it succeeds, and when something fails. Disable duplicate submissions where appropriate, but do not make the entire form unusable longer than necessary.

The goal is not to adopt the largest form library. It is to make the form's data flow explicit, validate on both sides of the network, and give users feedback they can act on.
`,
    coverImage: "/images/blog/maintainable-forms.webp",
    category: "Frontend",
    tags: ["React", "Forms", "Validation", "TypeScript"],
    status: "published",
    featured: false,
    publishedAt: new Date("2026-10-17T09:00:00.000Z"),
    readingTime: 5,
  },
  {
    title: "Frontend Performance Is a Product Feature",
    slug: "frontend-performance-is-a-product-feature",
    excerpt:
      "A practical checklist for improving perceived speed through smaller bundles, optimized images, sensible loading states, and measured changes.",
    content: `
# Frontend Performance Is a Product Feature

Performance is often treated as a final optimization task. In reality, it is part of the user experience from the first design decision. A page that responds quickly feels more reliable, while a slow interaction can make even a polished interface feel unfinished.

The most effective improvements usually begin with measurement rather than guesswork.

## Measure before changing things

Use browser developer tools and real performance metrics to understand where time is being spent. Look at the size of JavaScript bundles, network requests, image payloads, layout shifts, and the time it takes for the main content to become visible.

A page can feel slow for different reasons. Large JavaScript can delay interaction; oversized images can delay visual loading; unstable layouts can make the page feel jumpy.

## Ship less JavaScript

Every dependency has a cost. Review whether a package is necessary, whether a smaller alternative exists, and whether a component needs to run on the client at all.

In React and Next.js, keeping components on the server by default can reduce the amount of JavaScript sent to the browser. Add client components where interaction or browser-only behavior requires them.

## Treat images as important content

Images are often among the largest assets on a page. Use appropriately sized formats, avoid sending desktop-sized images to small screens, and reserve space for images to reduce layout shifts.

For prominent images, loading priority should reflect their position and importance. Do not eagerly load every image on a long page.

## Make loading states intentional

A blank region gives users no information. A useful skeleton, placeholder, or progress indicator can make waiting feel more predictable. However, loading UI should not become a performance disguise: the underlying request still needs to be efficient.

## Optimize the experience, not just a score

A single metric cannot describe every interaction. A portfolio should load its main content quickly, keep navigation responsive, avoid unexpected movement, and remain usable on slower devices and networks.

Make one change at a time, measure the result, and keep the changes that improve the experience. Performance work is most effective when it is continuous, evidence-based, and tied to what users are actually trying to do.
`,
    coverImage: "/images/blog/frontend-performance.webp",
    category: "Performance",
    tags: ["Web Performance", "Next.js", "React", "Core Web Vitals"],
    status: "published",
    featured: false,
    publishedAt: new Date("2026-10-09T09:00:00.000Z"),
    readingTime: 5,
  },
  {
    title: "Accessible Interfaces Start with Semantic HTML",
    slug: "accessible-interfaces-start-with-semantic-html",
    excerpt:
      "Why native HTML elements, keyboard support, labels, focus states, and clear feedback should be part of everyday frontend development.",
    content: `
# Accessible Interfaces Start with Semantic HTML

Accessibility is easier to build into an interface than to retrofit after the design is finished. A good starting point is semantic HTML: use elements that already describe the purpose and behavior of the content.

A button should usually be a \`button\`, navigation should use \`nav\`, and the main content should live in \`main\`. These choices help browsers, assistive technologies, and other developers understand the page.

## Use the element that matches the action

A link navigates somewhere. A button performs an action. Making a clickable \`div\` behave like a button means rebuilding keyboard interaction, focus behavior, and semantics that the browser already provides.

Native elements are not a limitation. They are built-in functionality.

## Labels and instructions matter

Every form control needs a clear accessible name. A visible label connected with \`htmlFor\` and an input's \`id\` is a reliable default. Placeholder text is not a replacement for a label because it disappears as users type and may have insufficient contrast.

When a field has an error or extra instruction, connect that text to the control so assistive technology can discover the relationship.

## Keyboard support is not optional

Users should be able to reach interactive elements with a keyboard and understand which element currently has focus. Do not remove focus outlines without providing a clear replacement.

For custom menus, dialogs, and popovers, think through focus entry, focus movement, Escape behavior, and where focus returns when the interaction closes.

## Color should not carry meaning alone

A red border may indicate an error visually, but include text that explains the problem. Likewise, status indicators should use more than color alone to communicate meaning.

Check text contrast and make sure interactive controls remain distinguishable in different states.

## Test with real interaction

Start by navigating the page with the keyboard. Check headings, labels, focus order, and error messages. Automated accessibility tools can catch common issues, but they cannot tell you whether every workflow makes sense to a person using assistive technology.

Accessible interfaces are often clearer interfaces for everyone. Semantic HTML, predictable behavior, and meaningful feedback are practical engineering habits—not decorative extras.
`,
    coverImage: "/images/blog/semantic-accessibility.webp",
    category: "Accessibility",
    tags: ["Accessibility", "HTML", "Frontend", "UX"],
    status: "published",
    featured: false,
    publishedAt: new Date("2026-10-02T09:00:00.000Z"),
    readingTime: 5,
  },
  {
    title: "From Component to System: Organizing a Growing React Project",
    slug: "organizing-a-growing-react-project",
    excerpt:
      "A pragmatic way to organize components, features, shared utilities, and data access without turning a small application into an architecture exercise.",
    content: `
# From Component to System: Organizing a Growing React Project

A project rarely becomes difficult to maintain all at once. It happens gradually: a component starts handling several responsibilities, utility functions are copied into multiple files, and unrelated features become tightly connected.

Folder structure cannot solve every design problem, but a clear structure can make responsibilities easier to see.

## Organize around responsibility

A useful starting point is to separate route-level pages, reusable UI, domain-specific features, and shared infrastructure.

For example:

\`\`\`text
src/
  app/
  components/
    ui/
  features/
    blog/
    projects/
  lib/
  models/
  types/
\`\`\`

The exact names matter less than the boundaries. A blog-specific card belongs with the blog feature if it is unlikely to be reused elsewhere. A generic button can live in shared UI.

## Avoid premature abstraction

Two components that look similar are not necessarily the same abstraction. If their behavior and future requirements differ, forcing them into one highly configurable component can make both harder to understand.

Duplication is worth addressing when it creates maintenance problems—not simply because two files contain similar markup.

## Keep infrastructure out of presentation

Database connections, query functions, API clients, and environment configuration should not be mixed into visual components. A page should ask for the data it needs and focus on rendering the result.

This separation also makes it easier to replace an implementation later without rewriting the UI.

## Make boundaries explicit

In a Next.js application, server and client components have different capabilities. Keep database access on the server, and use client components only where browser interaction or client-side state is needed.

Be deliberate about what crosses that boundary. Props passed to client components need to be serializable, so database documents may need to be converted into plain objects first.

## Let the structure evolve

There is no universally correct folder structure. A small portfolio does not need the same architecture as a large product with multiple teams. Start with a structure that makes today's responsibilities obvious, then reorganize when a real source of friction appears.

Good architecture is not the number of folders or patterns in a repository. It is the ease with which another developer can locate a behavior, understand its dependencies, and make a change without surprising the rest of the application.
`,
    coverImage: "/images/blog/react-project-structure.webp",
    category: "Architecture",
    tags: ["React", "Next.js", "Architecture", "Clean Code"],
    status: "published",
    featured: false,
    publishedAt: new Date("2026-09-25T09:00:00.000Z"),
    readingTime: 6,
  },
];

/**
 * Optional helper for a development-only seed script.
 * It is intentionally separate so importing this file never writes to a DB.
 */
export function getMockBlogPostCount() {
  return mockBlogPosts.length;
}
