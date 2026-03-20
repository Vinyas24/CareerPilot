import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background, 0 0% 96%))',
                foreground: 'hsl(var(--foreground, 0 0% 7%))',
                text: '#111827',
                career: '#7f1d1d',   // Job Notification Tracker (Maroon)
                prep: '#312e81',     // Placement Readiness Platform (Indigo)
                builder: '#000000',  // AI Resume Builder (Black)
                card: {
                    DEFAULT: 'hsl(var(--card, 0 0% 100%))',
                    foreground: 'hsl(var(--card-foreground, 0 0% 7%))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover, 0 0% 100%))',
                    foreground: 'hsl(var(--popover-foreground, 0 0% 7%))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary, 0 100% 27%))',
                    foreground: 'hsl(var(--primary-foreground, 0 0% 98%))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary, 0 0% 96.1%))',
                    foreground: 'hsl(var(--secondary-foreground, 0 0% 7%))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted, 0 0% 96.1%))',
                    foreground: 'hsl(var(--muted-foreground, 0 0% 45.1%))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent, 0 100% 27%))',
                    foreground: 'hsl(var(--accent-foreground, 0 0% 98%))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive, 0 84.2% 60.2%))',
                    foreground: 'hsl(var(--destructive-foreground, 0 0% 98%))'
                },
                border: 'hsl(var(--border, 30 8% 82%))',
                input: 'hsl(var(--input, 30 8% 82%))',
                ring: 'hsl(var(--ring, 0 100% 27%))',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Georgia', 'serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        },
    },
    plugins: [tailwindcssAnimate],
}
