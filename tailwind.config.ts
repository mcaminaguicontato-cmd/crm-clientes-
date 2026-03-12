import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}", // Path for shadcn/ui components
  ],
  theme: {
    extend: {
      // Add any custom themes or extend the existing theme here
    },
  },
  plugins: [
    // Include any necessary plugins here, if required
  ],
};

export default config;