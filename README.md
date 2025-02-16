# Understanding Shadcn-UI: A Deep Dive into Tailwind-Styled Radix Components

My attempt at understanding the [shadcn-ui component library](https://ui.shadcn.com/) which has some beautifully designed components made with Tailwind CSS. The framework provides a collection of reusable components that can be customized to fit any project.

Shadcn UI is a relatively new project, with its first release on March 8, 2023.

The main idea behind building such a framework is to give the consumer ownership and control over the code, allowing them to decide how the components are built and styled. It attempts to remove the restrictions imposed by other component libraries.

The Shadcn/ui framework transforms how we design and build web apps. It solves most of the issues we’ve had with the npm packaged UI framework libraries that bloat the complete project by importing thousands of dependencies.

Shadcn-ui is essentially a wrapper or scaffolding system that builds on top of [RADIX UI](https://www.radix-ui.com/) components. The core idea is to build a system that ties together the un-styled primitive components and fully styled components.

# Key Benefits
1.	Consumers have complete control on how they want their components are styled & can have their own custom styles defined as per the need of the project allowing customizability.
2.	Since the components are built on top of the Radix UI primitives, they are completely accessible, ensuring applications can be used by everyone.
3.	The components are lightweight and efficient selectively installing only the components they need to work with, minimizes the impact on performance.

# Key Principles & Features:
1.	**Component Scaffolding:** Shadcn-ui is not like those traditional component libraries installed via npm into the node_modules. Instead, the components are scaffolded into the project essentially acting as wrappers to the radix UI primitives.
2.	**Radix UI Primitives:** A Shadcn component in built on tops of the corresponding Radix UI primitive. Radix ensures the components are fully accessible & unopinionated. It provides the basic functionality for the component, while Shadcn handles the styling part as per the requirement.
3.	**Tailwind CSS:**  The components utilize tailwind for all styling needs. Using tailwind has the following advantages - faster development, allows customization as per the requirement, avoids unnecessary CSS bloat & thus reducing the file size.
4.	**Avoid Dependency Locks:** As the component’s source code reside within the project, the consumer retains full ownership & is not tied to any of the libraries for updates or bug fixes thus waiting for future releases. However, if there is any enhancement made to the base component by Shadcn, consumer will have to re-install the component into the project to receive those updates.
5.	**Performance Optimization:** The modular approach allows consumers to selectively import only the components they need to work with, additionally tailwind’s approach with utility classes ensures only have the classes that are needed and avoids unused css. This ensures enhanced performance with reduced bundle sizes & faster load times.

In summary, Shadcn-ui is _a collection of reusable components one can copy and paste into their application_ that reside within the project’s source code. It provides out of the box accessibility, is customizable, and tailwind styled components based on Radix primitives empower consumers with full ownership of the components without enforcing strict dependencies.

# Installation & Setup

Follow the [official documentation](https://ui.shadcn.com/docs/installation/vite) for the detailed steps.

CLI option for setup - https://ui.shadcn.com/docs/cli
<details>
  <summary>Expand to see detailed steps</summary>
  
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

</details>

## Behind the Scenes

When we add/install any component to project using the `npx shadcn add <element>` command, the CLI executes following actions to scaffold the component into the project. Listed below is the breakdown of what happens step-by-step -

1. CLI downloads the corresponding pre-configured component template. The templates include - integration with Radix UI primitive (for accessibility), Tailwind CSS classes (for styling).
2. Once the template is fetched, CLI will create the component file (e.g., button.jsx, dialog.jsx), within the component directory.
3. CLI then proceeds to install the required Radix UI primitive dependencies & utilities.
4. Once the dependencies are installed, CLI updates your `tailwind.config.js` configuration for styling the component.
5. If the project is based on typescript, the CLI generates type-safe components and ensures type definitions are included.
6. CLI might apply changes to the project’s structure to support the added component, such as creating a lib folder for reusable utilities, adding utility functions (e.g., class name merging). The CLI creates the utility file (utils.js) within the `lib` directory  to handle class name merging.
7. Styles the installed component with tailwind classes for consistent design.
8. Lastly, it publishes instructions regarding the location of the component file, how to use the component, etc..

## Example Workflow for npx shadcn add button

1. Fetches the button component template.
2. Creates `components/button.jsx/.tsx` with the components directory & pre-configured with tailwind classes.
3. Installs `@radix-ui/react-*` primitives (if not already installed).
4. Ensures the `tailwind.config.js` file supports styling for the button component.
5. Publishes information about the button component location and usage.

After executing the above steps, the button code might look like:

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

function App() {
  return (
    <div>
      <Button variant="default">Create Account</Button>
      <Button variant="outline">Create Account with Github</Button>
    </div>
  );
}

export default App;
```

ShadCN's scaffolding process is similar for all components. However, depending on the need & component complexity there may be a few additional dependencies getting installed. Simple components (button, input, label, etc..) have minimal setup requirements, while complex components (table, dialog, etc..) rely on their corresponding Radix UI primitives, utility libraries, subcomponents,  and additional configuration which gets installed as additional dependencies.


The comparison below shows how components differ in terms of complexity, corresponding dependencies, radix-ui primitives, and any additional tailwind configurations needed.

## Component Scenarios

| **Component**     | **Complexity**         | **Dependencies**                                     | **Radix Primitives**       | **Tailwind Configuration**                | **Features**                                                                                 |
|--------------------|------------------------|-----------------------------------------------------|----------------------------|-------------------------------------------|---------------------------------------------------------------------------------------------|
| **Button**         | Simple                | `clsx` (for class merging)                          | None                       | Basic styling classes                     | Pre-styled with Tailwind, supports variants like `primary`, `outline`, and customizable.     |
| **Combobox**       | Complex               | `@radix-ui/react-combobox`, optional state library  | `Combobox`, `ComboboxItem` | Extends spacing and animation styles     | Includes search functionality, keyboard navigation, and accessibility.                      |
| **Dropdown**       | Interactive           | `@radix-ui/react-dropdown-menu`, `clsx`             | `DropdownMenu`, `DropdownItem` | Menu item spacing and styling          | Customizable dropdown menu with keyboard navigation and multiple item types.                |
| **Table**          | Complex               | `clsx`, `tailwind-merge`, optional third-party libs | None                       | Extended styles for tables               | Pre-styled table components, customizable columns, and supports sorting/other interactions. |
| **Dialog**         | Interactive           | `@radix-ui/react-dialog`, `clsx`, `tailwind-merge`  | `Dialog`, `DialogTrigger`  | Animations (e.g., `transition`, `opacity`) | Includes multiple subcomponents for trigger, overlay, and content. Accessible by default.   |

As we see in the table above, simpler components have minimal dependencies & requirements to live in the project while as the complexity grows additional radix primitives along with additional configuration to serve the styling needs for the components get incorporated into the project. Components like dialog & table could also include several sub-components to fully support the functional & styling requirements. 

---

## ShadCN UI in Action 

As part of this project a sample signup form is implemented using the shadcn ui elements like the button, input, label, & card. The components reside in the [src/components/ui](https://github.com/sauravmishra1710/shadcn-ui/tree/main/experiments-with-shadcn-ui/src/components/ui) directory & imported into the [SignupForm.jsx](https://github.com/sauravmishra1710/shadcn-ui/blob/main/experiments-with-shadcn-ui/src/SignupForm.jsx) component. The UI design looks like - 

<img width="400" height="470" alt="SignupForm-Light" src="https://github.com/user-attachments/assets/4b3ff60c-a960-473b-935c-1849fff28427" />
<img width="400" height="480" alt="SignupForm-Dark" src="https://github.com/user-attachments/assets/be549662-4743-4766-9711-e7bcab536ac0" />

## Conclusion
Shadcn, being a relatively new UI framework it goes a long way in providing a complete solution for producing visually impressive UX. It allows complete ownership of the components to its consumers, enables customization, provides out of the box accessibility which enables usability to all categories of users. Though it increases maintainability to some extent on the consumer as the code for the components resides in the project, its features & capabilities make it equip consumers to create seamless & delightful UX experiences.
