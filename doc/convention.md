# Project Todo List Convention Guide

## Styling

### Colors

- **Primary Color :**

  - Blue Gradient : `#27445F` - `#4B7494`
  - Medium Gray : `#7F7F7F`
  - Off White : `#F2F2F2`

<br>

- **Secondary Color :**
  - Midnight Black : `#212529`
  - Slate Gray : `#484848`
  - Blue Gray : `#557C93`
  - Slate Blue Gray : `#6C757D`
  - Faded Blue : `#ADB5BD`
  - Cloudy White : `#E9ECEF`

### Screen display

- Mobile screen : `375px`
- Desktop screen : `1440px`

<br>

### Typography

- Font family : [`'Source Code Pro', monospace`](https://fonts.google.com/specimen/Source+Code+Pro)
- Font weight : `400, 500, 700`
- Font size :

  - font size 1 : `12px - 14px`
  - font size 2 : `16px`
  - title : `24px - 48px`

<br>

- No inline CSS

## Icons

- [`react-icons.github.io`](https://react-icons.github.io/react-icons)

<br>
<br>

# Linting

Use a linting tool like ESLint to enforce coding standards and catch common errors in your code. ESLint can be configured with rules to ensure consistent formatting, code style, and best practices.

<br>
<br>

# Commenting Rules

Ensure that the comments are meaningful and provide context where necessary, especially for complex logic or components.. In JavaScript and JSX, use single-line and multi-line comments:

```JSX
// Single-line comment

{/*
  jsx comment
*/}

/*
  Multi-line comment
  explaining the purpose
  of the code.
*/
```

<br>
<br>

# Folder Structure

```bash
	my-react-app/
	|-- doc
	| |-- convention.md
	| 
	|-- public/
	|
	|-- src/
	|   |-- assets/
	|   |-- components/
	|		|		|-- App.jsx
	|   |   |-- Task.jsx
	|   |   |-- InputForm.jsx
	|   |
	|   |-- styles/
	|   |   |-- App.css
	|   |   |-- Task.css
	|   |   |-- InputForm.css
	|		|
	|   |-- utility/
	|   |		|-- trimString.js
	|   |
	|   |-- index.css
	|   |-- main.jsx
	|		
	|
	|-- .eslintrc.cjs
	|-- .gitignore
	|-- package.json
	|-- README.md
```

- `doc` : Contains project's documentation `convention.md`
- `public` : Contains static assets: index.html, favicon.
- `src` : Contains the main source code for your application. It contains the root component `main.jsx`, `main.css`, and other folders.
- `assets` : Contains images.
- `components` : folder contains all react components.
- `styles` : folder container all react components's css.
- `utility` : folder container the function for reusable purpose.

<br>
<br>

# React code conventions

## Naming for Components and Files

Ensure that the component name matches the css file name.

```bash
	components/
	|-- components/
	|	|-- App.jsx
	|	|-- Task.jsx
	|
	|-- style/
	|	|-- App.css
	|	|-- Task.css
```

<br>

## DRY (Don't Repeat Yourself) Principle

Look for opportunities to reuse code by extracting common functionality into utility functions or higher-order components.

<br>

## Naming conventions

**Use PascalCase in components**

```JavaScript
	function InputForm() {
		// ...
	}
```

**Use camelCase for JavaScript data types like variables, arrays, objects, etc.**

```JavaScript
	function handleAddTask {
		// ...
	}

	const handleEditTask = () => {
		// ...
	}

	const initialTask = [...]
```

## Component structure

```JavaScript
// 1. Imports - Prefer destructuring imports to minimize writen code
import { useState, useEffect } from "react";

// 2. Additional variables
const constantValue = "something";
let calcTasks = 2;

// 3. Component
function Component({ someProperty }) {
	// 3.1 Definitions
	const [state, setState] = useState(true);

	// 3.2 Functions
	function handleToggleState() {
		setState(!state);
	}

	// 3.3 Effects
	useEffect(() => {
		// ...
	}, []);

	return (
		<div>
			<Tasks />

			<div>
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque
					arcu. Et harum quidem rerum facilis est et expedita distinctio.
				</p>
				<button>Add</button>
			</div>
		</div>


	);
}

// 6. Exports
export default Component;
```

<br>

## Separate function from the JSX if it takes more than 1 line

```JavaScript

	<button onClick={() => setState(!state)} />

  const handleToggleTask = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
	<DisplayTask onToggleTask={handleToggleTask} />
```

<br>

## Prefer destructuring properties

Prefer destructuring properties so it is clear what properties are used in the component.

```JavaScript

// Avoid
function Button(props) {
  return <button>{ props.text }</button>;
}

// Correct
function Button({ text }) {
  return <button>{ text }</button>;
}
```

## Avoid huge components

Avoiding huge components and shortening them into smaller, focused components in lists improves code readability, maintainability, reusability, and collaboration.

<br>

## Use shorthand for boolean props

```JavaScript

  // Avoid
  <Form showComplete={true} showIncomplete={false} />

  // Correct
  <Form showComplete !showIncomplete />
```

<br>

## Avoid using inline styles

Avoiding inline styles in favor of external CSS enhances maintainability, reusability, performance, and separation of concerns in web applications.

<br>

## Prefer conditional rendering with ternary operator

```JavaScript

<button onClick={ toggleIncomplete }>
	{showIncompleteTask
		? "Hide Incomplete Tasks"
		: "Show Incomplete Tasks"}
</button>
```

<br>

## Use descriptive variable names

```JavaScript

// Avoid single letter and meaningless variables
const c = false;
// Correct
const completed = false;

// Avoid abbreviations
const et = "go to school";
// Correct
const editedTitle = "go to school";

```

<br>

## Use object destructuring

```JavaScript
// Avoid
return (
	<>
		<div>{task.id}</div>
		<div>{task.title}</div>
	</>
);

// Correct
const { id, title } = task;

return (
	<>
		<div>{id}</div>
		<div>{title}</div>
	</>
);
```

<br>

## Using template literals

```js
// Avoid
const showTask = task.id + " : " + task.title;

// Correct
const showTask = `${task.id} : ${task.title}`;
```

<br>
<br>

# Git / Github Convention

## Git Branch Strategy

- Git Branch Strategy Convention
- Use the Git Flow branching strategy for managing code changes.
- Create branches with clear names that reflect the purpose of the work.
- Common branch types:
  - `main`: Represents the production-ready codebase.
  - `develop`: Integration branch for ongoing development.
  - `feature/<feature-name>`: For developing new features.
  - `bugfix/<bug-description>`: For fixing bugs.
  - `hotfix/<issue-description>`: For critical fixes in production.
  - `release/<version>`: Preparing a release version.

<br>

## Commit Message Convention

- `feat`: New feature or enhancement.
- `fix`: Bug fix.
- `docs`: Documentation updates.
- `style`: Code style changes (e.g., formatting).
- `refactor`: Code changes that aren't bug fixes or features.
- `test`: Adding or modifying tests.
- `chore`: Maintenance tasks, build changes, etc.
