# shadcn-ui

My attempt to understanding the [shadcn-ui component library](https://ui.shadcn.com/) which has some beautifully designed components made with Tailwind CSS. The framework provides a collection of **re-usable components which consumers can essentially copy/paste into their web apps.** 

Shadcn UI is a relatively new project, with its first release on March 8, 2023.

_The main idea behind building such a framework this is to give the consumer ownership and control over the code, allowing them to decide how the components are built and styled. It attempts to remove one of the drawbacks of npm packaged components where the style is coupled with the implementation._ The design of the components should be separate from their implementation.

The shadcn/ui framework transforms how we design and build web apps. It solves most of issue we’ve had with the npm packaged UI framework libraries that bloat the complete project by importing 1000s line of code jist tp be able to get a button component for example. Also, implementing any customization on the individual UI components are a pain to deal with. Installing these packaged libraries, also gives you every single one of their components dumpled into the node_modules even id we do not intend to use those.

Shadcn-ui is essentially a **wrapper or scaffolding system** that builds on top of **[RADIX UI](https://www.radix-ui.com/)** components. The concept of Shadcn-ui revolves around bridging the gap between accessible, unstyled UI primitives (like those offered by Radix UI) and customizable, pre-styled components, while giving _**developers full ownership of their codebase**_.

## Key benefits:

1. **Customizability**: Shadcn allows developers to have _**full control over their components**_ from defining customizations to owning the cource code for the component.
2. **Accessibility**: All components are **_completely accessible_**, ensuring your applications are usable by everyone.
3. **Performance**: The components are lightweight & efficient, _**minimizing the impact**_ on the performance.

## Key Principles:
1. **Component Scaffolding, Not a Library:** Shadcn-ui is not a traditional component library installed via npm or yarn. Instead, it’s a system that scaffolds components into your project, generating reusable UI elements directly in your codebase. You own the generated components, making them fully customizable.

2. **Built on Radix UI Primitives:** Shadcn-ui uses Radix UI primitives as the foundation for its components, ensuring they are accessible, unopinionated, and highly composable. Radix provides the functionality, while Shadcn-ui layers styling and structure on top of it.

3. **Style with Tailwind CSS:** By default, Shadcn-ui components are pre-configured with Tailwind CSS, allowing for rapid development and seamless integration into projects that already use Tailwind. Tailwind's utility classes make it easy to further customize the components.

4. **Design System Flexibility:** It provides a structured starting point for building a design system without enforcing strict rules. Components can be easily styled and extended, making it adaptable to different branding or design requirements.

5. **Avoiding Dependency Lock-in:** Since the components are scaffolded into your project, you’re not tied to the library for updates or bug fixes. This avoids dependency lock-in and empowers developers to modify and extend components freely.

## Why Shadcn-ui?
1. **Solves the Styling Problem of Radix UI:** Radix UI primitives are unstyled by design, leaving developers to handle all the styling. This can be time-consuming. Shadcn-ui simplifies this by pre-styling components, reducing development overhead.

2. **Balances Customization and Speed:** Many component libraries (like Material-UI or Chakra UI) offer pre-styled components but can be hard to customize deeply.
Shadcn-ui provides a middle ground: pre-styled but fully customizable components.

3. **Encourages Ownership:** Developers are often frustrated by breaking changes or limitations in third-party libraries. Shadcn-ui eliminates this by giving you full control of the components since they are part of your project’s codebase.
