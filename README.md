# KIA School Management System - Landing Page

## Overview

This is a professional landing page for the KIA School Management System. The landing page showcases two main features:

1. Report-Card Making Portal
2. AoI Scenario Generator

The landing page is designed to be responsive, modern, and visually appealing, providing a professional introduction to the KIA School Management System.

## Features

- Responsive design that works on all devices (desktop, tablet, mobile)
- Modern and clean UI with smooth animations
- Interactive elements including smooth scrolling and form validation
- Sections for features, about, testimonials, and contact
- SVG illustrations for better performance and scalability

## File Structure

```
KIA Landing Page/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── images/             # Image assets
│   ├── hero-image.svg
│   ├── about-image.svg
│   ├── testimonial-1.svg
│   └── testimonial-2.svg
└── README.md           # This file
```

## How to Use

1. Simply open the `index.html` file in a web browser to view the landing page.
2. All assets are included in the project, so no additional downloads are required.

## Customization

### Changing Colors

The color scheme can be easily modified by editing the CSS variables at the top of the `styles.css` file:

```css
:root {
    --primary-color: #4a6bff;
    --secondary-color: #6c63ff;
    --accent-color: #ff6b6b;
    --text-color: #333;
    --text-light: #666;
    --bg-color: #fff;
    --bg-light: #f8f9fa;
    --border-color: #e1e4e8;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}
```

### Updating Content

To update the content of the landing page, edit the text within the HTML file (`index.html`). The structure is organized into sections, making it easy to locate and modify specific content.

### Adding or Removing Sections

Each section of the landing page is contained within a `<section>` tag with a unique ID. You can add new sections by copying the structure of an existing section and modifying it as needed, or remove sections by deleting the corresponding HTML code.

### Modifying Images

The landing page uses SVG images for better performance and scalability. You can edit these SVG files directly to change colors, shapes, or other elements, or replace them with your own images.

## Browser Compatibility

The landing page is compatible with all modern browsers, including:

- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

## Credits

- Font Awesome for icons
- Google Fonts for the Poppins font family

## License

This landing page is provided for use by KIA School Management System. All rights reserved.