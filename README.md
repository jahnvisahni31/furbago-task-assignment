# Travel Dashboard

## Overview

Travel Dashboard is a modern, responsive web application built with Next.js and Tailwind CSS. The app allows users to explore and filter travel sites based on price, location, and duration, providing an intuitive interface for discovering travel opportunities.

## Author

[Jahnvi Sahni](https://github.com/jahnvisahni31)

## Features

- **Sidebar Filters**: Easily filter travel sites by:
  - Price range
  - Location
  - Duration

- **Comprehensive Site Cards**: Each travel site is displayed with:
  - Title
  - Image
  - Location details
  - Trip duration
  - Pricing information

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices

## Project Structure

```
travel-dashboard/
│
├── app/
│   └── page.tsx             # Main entry point for the app's UI
│
├── components/
│   ├── Sidebar.tsx          # Sidebar component for filters
│   └── SiteCard.tsx         # Card component to display travel site details
│
├── public/
│   └── images/              # Images used for cards or other assets
│
├── styles/
│   └── globals.css          # Tailwind and global styles
│
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── README.md                # Project documentation
```

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jahnvisahni31/furbago-task-assignment.git
   cd furbago-task-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   # OR
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # OR
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- PostCSS

## Customization

Feel free to modify the components, add more filters, or expand the functionality to suit your specific travel dashboard needs.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For any inquiries or support, please contact the author: [Jahnvi Sahni](https://github.com/jahnvisahni31)