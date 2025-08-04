# Namma Veetu Samayal

A cloud kitchen website for authentic, hygienic, and affordable homemade meals delivered to your doorstep.

## Features

- Browse menu by categories (Breakfast, Lunch, Dinner, Custom Plans)
- Filter dishes by dietary preferences and spice levels
- Real-time cart management
- Secure checkout process
- Order tracking
- User account management
- Saved addresses
- Order history

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **UI Components**: Headless UI, Hero Icons
- **State Management**: React Hooks
- **Authentication**: NextAuth.js (to be implemented)
- **Database**: PostgreSQL with Prisma (to be implemented)
- **Payment**: Razorpay (to be implemented)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
namma-veetu-samayal/
├── src/
│   ├── app/              # Next.js app directory (pages)
│   ├── components/       # Reusable UI components
│   ├── lib/             # Utility functions
│   ├── models/          # Database models and types
│   └── api/             # API routes
├── public/              # Static files
└── prisma/             # Database schema (to be added)
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
DATABASE_URL=
NEXT_PUBLIC_RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT
