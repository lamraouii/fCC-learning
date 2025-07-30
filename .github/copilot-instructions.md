# Copilot Instructions for AI Agents

## Project Overview
This is a simple static web project consisting of:
- `web.html`: Main HTML file
- `style.css`: Custom CSS for styling
- `tswera.png`: Image asset

There are no build tools, frameworks, or external dependencies. All logic and styling are handled directly in HTML and CSS files.

## Key Patterns & Conventions
- **Styling**: All styles are defined in `style.css`. Custom input validation styles are present (e.g., `input:valid`, `input:invalid`).
- **Form Elements**: Inputs, selects, and textareas use custom border colors for valid/invalid states. Radio buttons have a `.radio-group` class for custom checked styling.
- **Layout**: The body uses a fixed width (`50vw`) and is centered with padding. Background color is set to aquamarine.
- **No JavaScript**: There is currently no JavaScript logic or dynamic behavior.
- **Assets**: Images are referenced directly (e.g., `tswera.png`).

## Developer Workflow
- **Editing**: Directly edit `web.html` and `style.css` for changes. No build or test steps are required.
- **Previewing**: Open `web.html` in a browser to view changes. No local server is needed.
- **Adding Assets**: Place new images or files in the root directory and reference them in HTML/CSS.

## Project-Specific Notes
- **Validation Styling**: Use the CSS patterns in `style.css` for form validation feedback. Example:
  ```css
  input:invalid { border: 2px solid red; }
  input:valid { border: 2px solid green; }
  ```
- **Radio Button Styling**: For custom radio button appearance, use the `.radio-group` class and related selectors.
- **Accessibility**: No explicit accessibility patterns are present; follow standard HTML practices if adding features.

## Example File References
- `web.html`: Main structure and content
- `style.css`: All styling and validation rules
- `tswera.png`: Example image asset

## How to Extend
- Add new HTML elements to `web.html` as needed
- Add or modify styles in `style.css`
- Add images or other assets to the root directory

---
For questions about project structure or conventions, review `web.html` and `style.css` for examples. No build, test, or deployment steps are required.
