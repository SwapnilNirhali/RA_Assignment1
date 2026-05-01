# Product Requirements Document (PRD)

## 1. Project Overview

### Project Name
**React Custom Hooks Demo** (react-advance-ra2)

### Project Type
Web Application - Interactive Demo / Learning Platform

### Core Functionality
A React-based demonstration application showcasing custom hooks functionality including counter, toggle, data fetching, value logging, and local storage management.

### Target Users
- React developers learning custom hooks
- Frontend developers exploring state management patterns
- Students learning React best practices

---

## 2. User Stories

| ID | User Story | Priority |
|-----|------------|----------|
| US1 | As a user, I want to increment/decrement a counter so that I can see numeric state changes | Must Have |
| US2 | As a user, I want to reset the counter to zero | Must Have |
| US3 | As a user, I want to toggle a boolean state on/off | Must Have |
| US4 | As a user, I want to fetch and display data from an external API | Must Have |
| US5 | As a user, I want to see logged values as I type in an input field | Must Have |
| US6 | As a user, I want to store and retrieve values from browser localStorage | Should Have |

---

## 3. Functional Requirements

### 3.1 Counter Feature (`useCounter`)
- **FR1.1**: Display current counter value (starts at 0)
- **FR1.2**: Increment button increases counter by 1
- **FR1.3**: Decrement button decreases counter by 1
- **FR1.4**: Reset button sets counter back to 0
- **FR1.5**: Use functional state update `setCounter(prev => prev + 1)`

### 3.2 Toggle Feature (`useToggle`)
- **FR2.1**: Display current boolean state (true/false)
- **FR2.2**: Toggle button switches between true and false
- **FR2.3**: Visual indicator shows "Enabled" or "Disabled" text

### 3.3 Data Fetching Feature (`useFetch`)
- **FR3.1**: Fetch data from JSONPlaceholder API (`https://jsonplaceholder.typicode.com/users`)
- **FR3.2**: Display loading state while fetching
- **FR3.3**: Display error message if fetch fails
- **FR3.4**: Display list of user names from API response

### 3.4 Value Logging Feature (`useLogger`)
- **FR3.1**: Text input captures user keystrokes
- **FR3.2**: Log each value change to console
- **FR3.3**: Display current input value on screen

### 3.5 Local Storage Feature (`useLocalStorage`)
- **FR5.1**: Text input stores value to browser localStorage
- **FR5.2**: Retrieve and display stored value on page load
- **FR5.3**: Use key "myKey" for storage operations

---

## 4. Technical Architecture

### Tech Stack
| Technology | Version | Purpose |
|------------|---------|---------|
| React | ^19.2.4 | UI Framework |
| Vite | ^8.0.4 | Build Tool |
| Bootstrap | ^5.3.8 | CSS Framework |
| ESLint | ^9.39.4 | Code Linting |

### Custom Hooks Structure
```
src/
├── useCounter.jsx    # Counter state management
├── useToggle.jsx     # Boolean toggle state
├── useFetch.jsx      # Data fetching with loading/error states
├── useLogger.jsx    # Input value logging
└── useLocalStorage.jsx  # Browser localStorage integration
```

### File Dependencies
| File | Imports |
|------|---------|
| App.jsx | useCounter, useCustomLogger, useToggle, useFetch, useLogger, useLocalStorage |
| useCounter.jsx | useState |
| useToggle.jsx | useState |
| useFetch.jsx | useState, useEffect |
| useLogger.jsx | useState, useEffect |
| useLocalStorage.jsx | useState, useEffect |

---

## 5. UI/UX Requirements

### Layout Structure
- Single page application
- Centered content layout
- Section-based component arrangement

### Visual Design
- **Framework**: Bootstrap 5
- **Icons**: Custom images for buttons (plus, minus, reset)
- **Images**: React logo, Vite logo, hero image
- **Styling**: App.css for custom styles

### Components
| Component | Description |
|-----------|-------------|
| Hero Section | Logo display with framework icons |
| Counter Section | Counter display with 3 action buttons |
| Toggle Section | Toggle switch with state indicator |
| Fetch Section | User list with loading/error states |
| Logger Section | Input field with live value display |
| Storage Section | Input field with localStorage persistence |

---

## 6. Non-Functional Requirements

### Performance
- Initial load time < 3 seconds
- No memory leaks from useEffect hooks
- Proper cleanup of subscriptions

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest)

### Code Quality
- ESLint with React hooks plugin
- No unused variables (except those starting with uppercase)
- Proper React hooks dependencies array

---

## 7. API Integration

### External APIs
| API | Endpoint | Purpose |
|-----|----------|----------|
| JSONPlaceholder | `https://jsonplaceholder.typicode.com/users` | User data fetching |

### Error Handling
- Network errors: Display "Network response was not ok"
- Fetch errors: Display "An error occurred while fetching data"
- Loading state: Show "Loading..." text

---

## 8. Out of Scope

The following features are **not included** in this version:
- User authentication
- Data persistence to backend database
- Server-side rendering
- Progressive Web App (PWA) features
- Unit/Integration tests
- Dark mode / theming

---

## 9. Success Metrics

| Metric | Target |
|--------|--------|
| Build Success Rate | 100% |
| ESLint Errors | 0 |
| Console Errors | 0 |
| Page Load Time | < 3s |

---

## 10. Future Enhancements

- Add TypeScript support
- Implement unit tests with Jest/React Testing Library
- Add form validation
- Create additional custom hooks (useDebounce, useLocalStorage)
- Add routing with React Router
- Implement state management with Context API or Redux

---

**Document Version**: 1.0  
**Last Updated**: April 25, 2026  
**Author**: Development Team