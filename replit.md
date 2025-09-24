# Ambiente Sensorial - Giovana Romeu

## Overview

This is a Portuguese-language sensory architecture website that explores how the five senses interact with architectural design. The project serves as an educational platform showcasing sensory experiences in built environments, featuring content about vision, hearing, touch, smell, and taste in architectural contexts. The website presents theoretical concepts through an interactive, responsive design that emphasizes accessibility and user engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static Site Architecture**: Pure HTML/CSS/JavaScript implementation without frameworks
- **Styling Framework**: Tailwind CSS via CDN for rapid UI development and consistent design system
- **Typography**: Google Fonts integration (Roboto and Poppins) for enhanced readability
- **Color System**: Custom teal color palette extending Tailwind's default theme
- **Responsive Design**: Mobile-first approach with breakpoint-based navigation patterns

### Design Patterns
- **Component-Based Structure**: Modular HTML sections for navigation, content areas, and interactive elements
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced features added via script
- **Accessibility Focus**: ARIA attributes, semantic HTML, and keyboard navigation support
- **Smooth Scrolling**: CSS scroll-behavior for improved user experience

### JavaScript Architecture
- **Vanilla JS Approach**: No external JavaScript frameworks or libraries
- **Event-Driven Interactions**: DOM event listeners for mobile menu, drawer navigation, and scroll effects
- **Modular Event Handling**: Separate functions for different UI components (header effects, mobile menu, vision drawer)
- **Graceful Degradation**: Feature detection prevents errors on missing elements

### Navigation System
- **Sticky Header**: Dynamic shadow effects based on scroll position
- **Mobile Menu**: Collapsible navigation with proper ARIA states
- **Vision Drawer**: Interactive overlay system for detailed content presentation
- **Smooth Anchor Links**: Hash-based navigation with smooth scrolling behavior

### Content Strategy
- **Multi-Page Structure**: Separate pages for different content sections (main site, senses exploration)
- **Bilingual Considerations**: Portuguese language implementation with proper lang attributes
- **Semantic Content**: Descriptive class names and structured HTML for content organization

## External Dependencies

### CDN Services
- **Tailwind CSS**: Frontend styling framework delivered via CDN for rapid prototyping
- **Google Fonts**: Typography service providing Roboto and Poppins font families
- **Google Fonts Preconnect**: Performance optimization for faster font loading

### Asset Requirements
- **Logo Asset**: SVG logo file referenced but not included in current repository
- **Potential Image Assets**: Architecture and sensory experience imagery (referenced but not present)

### Browser APIs
- **Scroll Events**: Window scroll monitoring for header effects
- **DOM Manipulation**: Native browser APIs for interactive elements
- **CSS Custom Properties**: Browser support for Tailwind configuration extensions