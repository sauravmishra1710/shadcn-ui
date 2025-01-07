# shadcn-ui

My attempt at understanding the [shadcn-ui component library](https://ui.shadcn.com/) which has some beautifully designed components made with Tailwind CSS. The framework provides a collection of **reusable components** that can be customized to fit any project.

Shadcn UI is a relatively new project, with its first release on March 8, 2023.

_The main idea behind building such a framework is to give the consumer ownership and control over the code, allowing them to decide how the components are built and styled. It attempts to remove the restrictions imposed by other component libraries._

The shadcn/ui framework transforms how we design and build web apps. It solves most of the issues we’ve had with the npm packaged UI framework libraries that bloat the complete project by importing thousands of dependencies.

Shadcn-ui is essentially a **wrapper or scaffolding system** that builds on top of **[RADIX UI](https://www.radix-ui.com/)** components. The concept of Shadcn-ui revolves around bridging the gap between unstyled primitives and fully styled components.

## Key benefits:

1. **Customizability**: Shadcn allows developers to have _full control over their components_, from defining customizations to owning the source code for the component.
2. **Accessibility**: All components are **completely accessible**, ensuring your applications are usable by everyone.
3. **Performance**: The components are lightweight and efficient, _minimizing the impact_ on performance.

## Key Principles:
1. **Component Scaffolding, Not a Library:** Shadcn-ui is not a traditional component library installed via npm or yarn into the node_modules. Instead, it’s a system that scaffolds components into your project.
2. **Built on Radix UI Primitives:** Shadcn-ui uses Radix UI primitives as the foundation for its components, ensuring they are accessible, unopinionated, and highly composable. Radix provides the functionality, while Shadcn-ui handles the styling.
3. **Style with Tailwind CSS:** By default, Shadcn-ui components are pre-configured with Tailwind CSS, allowing for rapid development and seamless integration into projects that already use Tailwind.
4. **Design System Flexibility:** It provides a structured starting point for building a design system without enforcing strict rules. Components can be easily styled and extended, making it adaptable to various project needs.
5. **Avoiding Dependency Lock-in:** Since the components are scaffolded into your project, you are not tied to the library for updates or bug fixes. This avoids dependency lock-in and empowers developers with full control.

## Why Shadcn-ui?
1. **Solves the Styling Problem of Radix UI:** Radix UI primitives are unstyled by design, leaving developers to handle all the styling. This can be time-consuming. Shadcn-ui simplifies this by pre-styling the components.
2. **Balances Customization and Speed:** Many component libraries (like Material-UI or Chakra UI) offer pre-styled components but can be hard to customize deeply. Shadcn-ui provides a middle ground: pre-styled but fully customizable components.
3. **Encourages Ownership:** Developers are often frustrated by breaking changes or limitations in third-party libraries. Shadcn-ui eliminates this by giving you full control of the components since the code is scaffolded into your project.

In summary, Shadcn-ui is a framework for scaffolding accessible, customizable, and Tailwind CSS-styled components based on Radix UI primitives. Its core concept is to empower developers with reusable components without enforcing strict dependencies.

# Installation & Setup

Follow the [official documentation](https://ui.shadcn.com/docs/installation/vite) for the detailed steps.

CLI option for setup - https://ui.shadcn.com/docs/cli

#### Install Tailwind CSS
Install tailwindcss and its peer dependencies, then generate your **tailwind.config.js** and **postcss.config.js** files.

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```
#### Update tailwind.config.js:

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Install and Configure ShadCN/UI

```
npm install shadcn/ui
```
#### Add this import header in your main css file, src/index.css in our case

```
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ... */
```

**Ensure that you are configuring the below 2 steps as mentioned to put the compiler options in the jsconfig file and extend it in the .app configuration**. Projects bootstrapped with create-react-app might run into an error during runtime - `Module not found: Error: Can't resolve '@/components/ui`. 

Refer: 
1. https://github.com/shadcn-ui/ui/issues/3705#issuecomment-2186083081
2. https://github.com/shadcn-ui/ui/issues/1101#issuecomment-1998726992

#### Configure the tailwind template paths in tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Edit jsconfig.json file
Add the baseUrl and paths properties to the compilerOptions section of the **jsconfig.json** and extend the same to the **jsconfig.app.json** file.

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "files": [],
  "references": [
    {
      "path": "./jsconfig.app.json"
    }
  ]
}
```

#### Edit jsconfig.app.json file
Add the following code to the jsconfig.app.json file to resolve paths, for your IDE. 

```
{
    "extends": "./jsconfig.json",
    "compilerOptions": {
      "composite": true,
      "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
      "target": "ES2020",
      "useDefineForClassFields": true,
      "lib": ["ES2020", "DOM", "DOM.Iterable"],
      "module": "ESNext",
      "skipLibCheck": true,
  
      /* Bundler mode */
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": true,
      "resolveJsonModule": true,
      "isolatedModules": true,
      "moduleDetection": "force",
      "noEmit": true,
      "jsx": "react-jsx",
  
      /* Linting */
      "strict": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "noFallthroughCasesInSwitch": true
    },
    "include": ["src"]
  }
```

#### Run the CLI
Run the shadcn-ui init command to setup your project.
```
npx shadcn@latest add button
```
OR 
(I had faced issues installing the latest **shadcn**.)
```
npx shadcn-ui@0.8.0 init
```

#### Configure components.json
Answer few questions to configure components.json:

```
✔ Would you like to use TypeScript (recommended)? ... no / yes
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Slate
✔ Where is your global CSS file? ... src/index.css
✔ Would you like to use CSS variables for colors? ... no / yes
✔ Where is your tailwind.config.js located?... tailwind.config.js
✔ Configure the import alias for components: ... src/components
✔ Configure the import alias for utils: ... src/lib/utils
✔ Are you using React Server Components? ... no / yes
✔ Write configuration to components. json. Proceed? ... yes
```

✔ ﻿﻿Writing components. json...<br>
✔ ﻿﻿Initializing project...<br>
✔ ﻿﻿Installing dependencies...

**_Success! Project initialization completed._**

#### Start adding components to your project
```
npx shadcn add button 
```
The command above will add the Button component to your project under the project structure
<img width="492" alt="image" src="https://github.com/user-attachments/assets/b57a25d2-df3c-41b6-b503-cfacbcd9ab23" />

The installed code for the components in the image can be found in the [components/ui directory within the src directory](https://github.com/sauravmishra1710/shadcn-ui/tree/main/experiments-with-shadcn-ui/src/components/ui). 

Taking for example the button.jsx, we see that the complete source code for the element is downloaded & now resides within the project folder giving the developer complete ownership of it.

## Behind the Scenes

What happens when we add an element to project using the `npx shadcn add <element>` command?

On executing the `npx shadcn add <element>` command, the shadcn CLI performs several actions behind the scenes to **scaffold** and **integrate** the specified UI component into your project. Listed below is the breakdown of what happens step-by-step -

1. **Fetches Component Templates**<br>
   The CLI downloads the corresponding pre-configured component template from Shadcn’s repository or local resources. These templates include:
    - Radix UI primitive integration (for accessible behavior).
    - Tailwind CSS classes (for styling).
  
2. **Generates Component Files**<br>
  The CLI creates the component file (e.g., button.jsx, dialog.jsx) in your project, typically in a components directory. It ensures that:
    - The component is self-contained.
    - Styling and structure follow the Tailwind-based design patterns.
  
3. **Installs Required Dependencies**<br>
  Checks for and installs required dependencies, such as:
    - Radix UI primitives (e.g., Radix UI primitives like @radix-ui/react-dialog) are automatically installed if they are not already present.
    - Any additional utilities or libraries (e.g., clsx for class merging or tailwind-merge).
  
4. **Configures Tailwind CSS**<br>
  If applicable, the CLI updates your `tailwind.config.js` file to include any required configuration, such as:
    - Extending the theme (e.g., adding custom colors or spacing).
    - Including necessary plugins for features like animations.
  
5. **Ensures TypeScript Compatibility**<br>
  If you’re using TypeScript, the CLI generates type-safe components and ensures that:
    - Type definitions for the component props are included.
    - Any necessary types from external libraries are installed.
  
6. **Updates Project Structure**<br>
  The CLI might suggest or apply changes to your project’s structure to support the added component, such as:
    - Creating a lib folder for reusable utilities.
    - Adding utility functions (e.g., class name merging). The CLI may create or update a utility file, such as lib/utils.ts, with functions like cn to handle class name merging.<br>
       Sample `lib/utils.js` file - 
       ```
        import { clsx } from "clsx"
        import { twMerge } from "tailwind-merge"
        
        export function cn(...inputs) {
          return twMerge(clsx(inputs))
        }
       ```
  
7. **Scaffolds Tailwind-Based Styling**<br>
  The generated component comes with pre-configured Tailwind CSS classes for consistent design. These classes are:
    - Opinionated but customizable.
    - Tailored to the Radix UI primitive's expected structure.
  
8. **Logs or Provides Usage Instructions**<br>
  After adding the element, the CLI outputs instructions or notes about:
    - The location of the component file.
    - How to use the component in your project.
    - Any additional setup steps.

## Example Workflow for npx shadcn add button

1. Fetch Template: Retrieves the button component template.
2. Scaffold File: Creates `components/button.jsx/.tsx` with tailwind classes.
3. Install Radix UI: Adds `@radix-ui/react-*` primitives (if not already installed).
4. Configure Tailwind: Ensures the `tailwind.config.js` file supports the button's styling.
5. Provide Instructions: Outputs where the button component is located and how to use it.

Example of the fetched button code might look like:

```
import { cn } from "@/lib/utils"; // Utility for class name merging

export function Button({ variant = "default", className, ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded text-white font-medium",
        variant === "default" && "bg-blue-500 hover:bg-blue-600",
        variant === "outline" && "border border-gray-300 text-gray-700",
        className
      )}
      {...props}
    />
  );
}
```
Once the component is generated, we just need to import the component & use it in the application. A sample usage would look like - 
```
import { Button } from "@/components/button";

export default function App() {
  return (
    <div>
      <Button variant="default">Click Me</Button>
      <Button variant="outline">Outlined</Button>
    </div>
  );
}
```
The Shadcn-ui workflow is consistent for all components, but the complexity of the scaffolding process depends on the specific needs of the component. Simpler components like buttons require minimal setup, while interactive and complex components rely on Radix UI primitives, utility libraries, and additional configuration. This unified process ensures that all components are accessible, customizable, and integrated seamlessly into your project, regardless of their complexity.

The comparison below shows how components differ in terms of complexity, corresponding dependencies, radix-ui primitives, and any additional tailwind configurations needed...

## Component Scenarios

| **Component**     | **Complexity**         | **Dependencies**                                     | **Radix Primitives**       | **Tailwind Configuration**                | **Features**                                                                                 |
|--------------------|------------------------|-----------------------------------------------------|----------------------------|-------------------------------------------|---------------------------------------------------------------------------------------------|
| **Button**         | Simple                | `clsx` (for class merging)                          | None                       | Basic styling classes                     | Pre-styled with Tailwind, supports variants like `primary`, `outline`, and customizable.     |
| **Dialog**         | Interactive           | `@radix-ui/react-dialog`, `clsx`, `tailwind-merge`  | `Dialog`, `DialogTrigger`  | Animations (e.g., `transition`, `opacity`) | Includes multiple subcomponents for trigger, overlay, and content. Accessible by default.   |
| **Dropdown**       | Interactive           | `@radix-ui/react-dropdown-menu`, `clsx`             | `DropdownMenu`, `DropdownItem` | Menu item spacing and styling          | Customizable dropdown menu with keyboard navigation and multiple item types.                |
| **Combobox**       | Complex               | `@radix-ui/react-combobox`, optional state library  | `Combobox`, `ComboboxItem` | Extends spacing and animation styles     | Includes search functionality, keyboard navigation, and accessibility.                      |
| **Table**          | Complex               | `clsx`, `tailwind-merge`, optional third-party libs | None                       | Extended styles for tables               | Pre-styled table components, customizable columns, and supports sorting/other interactions. |

---

1. **Simple Components**:
   - Minimal setup required.
   - Typically rely on Tailwind classes for styling and utilities like `clsx`.

2. **Interactive Components**:
   - Require **Radix UI primitives** to handle behavior (e.g., dialogs, dropdowns).
   - May include animations, keyboard navigation, and accessibility out-of-the-box.

3. **Complex Components**:
   - Include multiple subcomponents.
   - Might depend on additional libraries or plugins for state management or extended functionality.
   - Often involve state logic and intricate accessibility requirements.
  
## ShadCN UI in Action 

As part of this project a sample signup form is implemented using the shadcn ui elements like the button, input, label, & card. The components reside in the [src/components/ui](https://github.com/sauravmishra1710/shadcn-ui/tree/main/experiments-with-shadcn-ui/src/components/ui) directory & imported into the [SignupForm.jsx](https://github.com/sauravmishra1710/shadcn-ui/blob/main/experiments-with-shadcn-ui/src/SignupForm.jsx) component. The UI design looks like - 

<img width="450" height="470" alt="SignupForm-Light" src="https://github.com/user-attachments/assets/4b3ff60c-a960-473b-935c-1849fff28427" />
<img width="450" height="480" alt="SignupForm-Dark" src="https://github.com/user-attachments/assets/be549662-4743-4766-9711-e7bcab536ac0" />

Shadcn UI offers a complete solution for crafting functional & visually impressive UX providing extensive customization options to create custom UI components. It equips developers with all the tools needed to bring their web applications to life.
