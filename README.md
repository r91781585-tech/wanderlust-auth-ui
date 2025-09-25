# 🌍 Wanderlust Auth UI - Travellista Tours

A modern, responsive authentication interface for travel websites built with Next.js 14, TypeScript, and Tailwind CSS. Features a beautiful split-screen design with travel imagery and comprehensive authentication flows.

![Wanderlust Auth UI](https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## ✨ Features

### 🎨 Design & UI
- **Split-screen layout** with stunning travel imagery
- **Responsive design** that works on all devices
- **Blue gradient theme** matching travel aesthetics
- **Smooth animations** with Framer Motion
- **Custom decorative elements** and patterns
- **Professional typography** with Poppins and Playfair Display

### 🔐 Authentication Features
- **Login Form** with email/password validation
- **Registration Form** with confirmation fields
- **Forgot Password** with email reset flow
- **Social Login** buttons (Google, Facebook, Apple)
- **Form validation** with Zod schemas
- **Toast notifications** for user feedback
- **Loading states** and error handling

### 🛠 Technical Stack
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Hook Form** for form management
- **Zod** for schema validation
- **Framer Motion** for animations
- **Lucide React** for icons

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/r91781585-tech/wanderlust-auth-ui.git
   cd wanderlust-auth-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
wanderlust-auth-ui/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main page with auth switching
├── components/
│   ├── auth/                    # Authentication components
│   │   ├── AuthLayout.tsx       # Split-screen layout
│   │   ├── LoginForm.tsx        # Login form
│   │   ├── SignupForm.tsx       # Registration form
│   │   └── ForgotPasswordForm.tsx # Password reset
│   ├── common/                  # Shared components
│   │   └── DecorativeElements.tsx # UI decorations
│   ├── providers/               # Context providers
│   │   └── NotificationProvider.tsx # Toast notifications
│   └── ui/                      # Reusable UI components
│       ├── Button.tsx           # Custom button
│       ├── Input.tsx            # Form input
│       └── SocialButton.tsx     # Social login buttons
├── hooks/                       # Custom React hooks
│   ├── useAuth.ts              # Authentication logic
│   └── useNotification.ts      # Notification management
├── lib/                        # Utilities
│   ├── utils.ts                # Helper functions
│   └── validations.ts          # Zod schemas
└── types/                      # TypeScript definitions
    └── auth.ts                 # Auth-related types
```

## 🎯 Key Components

### AuthLayout
The main layout component featuring:
- Split-screen design with travel imagery
- Responsive breakpoints
- Decorative elements and branding
- "Travellista Tours" branding with tagline

### Authentication Forms
- **LoginForm**: Email/password with social login options
- **SignupForm**: Registration with confirmation fields
- **ForgotPasswordForm**: Password reset with email verification

### UI Components
- **Button**: Multiple variants with loading states
- **Input**: Form inputs with icons and validation
- **SocialButton**: Branded social login buttons

## 🎨 Design System

### Colors
- **Primary Blue**: `#2196f3` (Material Blue 500)
- **Blue Gradient**: From `#42a5f5` to `#1565c0`
- **Success**: `#4caf50`
- **Error**: `#f44336`
- **Warning**: `#ff9800`

### Typography
- **Primary**: Poppins (sans-serif)
- **Headings**: Playfair Display (serif)
- **Weights**: 300, 400, 500, 600, 700

### Spacing & Layout
- **Container**: Max-width 6xl (1152px)
- **Form Width**: Max-width md (448px)
- **Padding**: Responsive 4-12 units
- **Border Radius**: 12-24px for modern look

## 🔧 Customization

### Changing Colors
Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your custom color palette
    500: '#your-color',
  }
}
```

### Adding New Social Providers
1. Add provider to `SocialButton.tsx`
2. Update the `handleSocialLogin` functions
3. Add provider icons and styling

### Form Validation
Modify validation schemas in `lib/validations.ts`:

```typescript
export const customSchema = z.object({
  // Your validation rules
})
```

## 📱 Responsive Design

The interface adapts seamlessly across devices:
- **Desktop**: Full split-screen layout
- **Tablet**: Stacked layout with maintained proportions
- **Mobile**: Single column with optimized spacing

## 🔒 Security Features

- **Client-side validation** with Zod schemas
- **Password strength requirements**
- **Email format validation**
- **CSRF protection ready**
- **Sanitized inputs**

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the .next folder
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Unsplash** for beautiful travel imagery
- **Lucide** for clean, consistent icons
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations

## 📞 Support

For support, email support@travellista.com or join our Slack channel.

---

**Built with ❤️ for travelers by travelers** 🌍✈️