# Cards App

A beautiful Next.js application for creating and managing cards, built with modern web development best practices.

## Features

- 🎨 Create beautiful cards
- 📋 Manage card collections
- 📤 Share your creations
- 🎯 Ready-to-use templates
- 🛡️ Security-first approach with proper headers
- ♿ Full accessibility support
- 📱 Responsive design with dark mode
- 🚀 TypeScript for better development experience
- 🧪 Comprehensive testing setup

## Tech Stack

- **Next.js 14** - React framework with server-side rendering
- **React 18** - UI library with latest features
- **TypeScript** - Type-safe JavaScript
- **CSS Modules** - Scoped styling solution
- **Jest & React Testing Library** - Comprehensive testing
- **ESLint & Prettier** - Code quality and formatting

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cards
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Testing
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## Project Structure

```
cards/
├── pages/                    # Next.js pages and API routes
│   ├── index.tsx            # Main landing page
│   ├── _app.tsx             # App component with error boundary
│   ├── _document.tsx        # Document head configuration
│   └── api/                 # API routes
│       ├── hello.ts         # Example API endpoint
│       └── cards.ts         # Cards management API
├── components/              # Reusable React components
│   └── Card.tsx             # Card component
│   └── ErrorBoundary.tsx    # Error boundary component
├── styles/                  # CSS modules
│   ├── globals.css          # Global styles
│   ├── Home.module.css      # Home page styles
│   ├── Card.module.css      # Card component styles
│   └── ErrorBoundary.module.css # Error boundary styles
├── __tests__/              # Jest test files
│   ├── Home.test.tsx        # Home page tests
│   └── Card.test.tsx        # Card component tests
├── .env.local.example       # Environment variables template
├── jest.config.js           # Jest configuration
├── jest.setup.js            # Jest setup
├── next.config.js           # Next.js configuration
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── .eslintrc.js             # ESLint configuration
├── .prettierrc              # Prettier configuration
├── .gitignore               # Git ignore rules
├── tsconfig.json            # TypeScript configuration
├── next-env.d.ts            # Next.js TypeScript definitions
├── package.json             # Project dependencies and scripts
└── README.md               # Project documentation
```

## Security Features

This project includes several security features:
- **Content Security Policy** headers
- **XSS Protection** headers
- **CORS** configuration for API routes
- **Input validation** for API endpoints
- **Error boundary** protection for React components

## Accessibility Features

- **Semantic HTML** structure
- **ARIA attributes** where needed
- **Keyboard navigation** support
- **Focus management** with visible focus states
- **Screen reader** friendly content

## Performance Optimizations

- **Image optimization** configuration
- **Code splitting** ready
- **Static site generation** support
- **Server-side rendering** capabilities
- **Bundle optimization** with SWC

## API Endpoints

### GET /api/hello
Returns basic API information and available endpoints.

### GET /api/cards
Returns all available cards with optional filtering by category.

### POST /api/cards
Creates a new card (requires authentication in production).

## Testing

The project includes comprehensive testing:
- **Unit tests** for components
- **Integration tests** for API routes
- **Accessibility tests** with proper ARIA testing
- **Coverage reports** to ensure code quality

Run tests with:
```bash
npm test
```

## Code Quality

The project enforces high code quality standards:
- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Jest** for testing
- **React Testing Library** for component testing

## Environment Variables

Copy `.env.local.example` to `.env.local` and configure your environment variables:

```bash
cp .env.local.example .env.local
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Contact

For questions and support, please open an issue in the repository.