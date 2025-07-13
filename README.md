# AI Chat Assistant

A beautiful, responsive chat interface built with React, Vite, and Tailwind CSS for communicating with an AI assistant. Features complete user authentication and authorization system.

## Features

- 🔐 **Complete Authentication System** - User registration and login with JWT tokens
- 🎨 **Beautiful, modern chat interface** with markdown support
- 📱 **Fully responsive design** (mobile-friendly)
- ⚡ **Real-time typing animations**
- 🤖 **AI-powered responses** with proper formatting
- 🎯 **Clean, professional UI** with gradients and smooth animations
- ⌨️ **Keyboard shortcuts** (Enter to send, Shift+Enter for new line)
- 🔒 **Secure API calls** with JWT authorization
- 💾 **Persistent login** with localStorage

## Authentication Flow

1. **First Visit**: Users see the login page
2. **Registration**: New users can sign up with name, email, and password
3. **Login**: Existing users login with email and password
4. **JWT Token**: Secure token-based authentication
5. **Auto-logout**: Automatic logout on token expiration
6. **Persistent Session**: Login state persists across browser sessions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend server running on port 3000 (for authentication and chat APIs)

### Installation

1. Clone the repository or download the files
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   # .env file is already created with:
   VITE_API_BASE_URL=http://localhost:3000
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## API Endpoints

The application requires a backend server with the following endpoints:

### Authentication

- `POST /auth/register` - User registration
- `POST /auth/login` - User login

### Chat

- `POST /api/chat` - Send message to AI (requires JWT token)

## Usage

### Registration

1. Click "Sign up" on the login page
2. Enter your name, email, and password
3. Account is created and you're automatically logged in

### Login

1. Enter your email and password
2. Click "Sign In"
3. You'll be redirected to the chat interface

### Chat

1. Type your message in the input field at the bottom
2. Press Enter to send or Shift+Enter for a new line
3. Watch the typing animation while the AI processes your message
4. View beautifully formatted AI responses with markdown support

### Logout

1. Click the "Logout" button in the top-right corner
2. You'll be redirected back to the login page

## Technical Details

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Markdown**: React Markdown for AI response formatting
- **Authentication**: JWT token-based with localStorage persistence
- **State Management**: React Context API
- **API Integration**: RESTful APIs with proper error handling
- **Responsive**: Mobile-first design with breakpoints

## Security Features

- JWT token-based authentication
- Automatic token validation
- Secure API calls with Authorization headers
- Auto-logout on unauthorized responses
- Input validation and error handling
- HTTPS-ready for production

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Environment Variables

- `VITE_API_BASE_URL`: Backend API base URL (default: http://localhost:3000)

## License

This project is open source and available under the MIT License.
