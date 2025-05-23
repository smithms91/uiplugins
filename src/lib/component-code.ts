interface ComponentCode {
  jsx: string
  html: string
  description?: string
}

export const componentCode: Record<string, ComponentCode> = {
  "header-1": {
    jsx: `import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold text-xl">Acme</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a
              href="/features"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Features
            </a>
            <a
              href="/pricing"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Pricing
            </a>
            <a
              href="/about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </a>
            <a
              href="/contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </a>
          </nav>
          <button
            className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="/features"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Features
            </a>
            <a
              href="/pricing"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Pricing
            </a>
            <a
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
            >
              About
            </a>
            <a
              href="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Header Example</title>
  <script>
    function toggleMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    }
  </script>
  <style>
    .header {
      position: sticky;
      top: 0;
      z-index: 50;
      width: 100%;
      border-bottom: 1px solid #e5e7eb;
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .nav-link {
      color: #6b7280;
      transition: color 0.2s;
    }
    .nav-link:hover {
      color: #1f2937;
    }
    @media (max-width: 768px) {
      .desktop-nav {
        display: none;
      }
    }
    .mobile-menu {
      display: none;
    }
    .mobile-menu.active {
      display: block;
    }
  </style>
</head>
<body>
  <header class="header">
    <div class="container" style="display: flex; height: 4rem; align-items: center;">
      <div style="margin-right: 1rem; display: flex;">
        <a href="/" style="margin-right: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-weight: bold; font-size: 1.25rem;">Acme</span>
        </a>
      </div>
      <div style="flex: 1; display: flex; align-items: center; justify-content: space-between;">
        <nav class="desktop-nav" style="display: flex; gap: 1.5rem; font-size: 0.875rem; font-weight: 500;">
          <a href="/features" class="nav-link">Features</a>
          <a href="/pricing" class="nav-link">Pricing</a>
          <a href="/about" class="nav-link">About</a>
          <a href="/contact" class="nav-link">Contact</a>
        </nav>
        <button
          onclick="toggleMenu()"
          style="display: none; padding: 0.5rem; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500;"
          class="md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;">Toggle menu</span>
        </button>
      </div>
    </div>
    <div id="mobile-menu" class="mobile-menu" style="display: none;">
      <div style="padding: 0.5rem 1rem 0.75rem;">
        <a href="/features" style="display: block; padding: 0.5rem 0.75rem; border-radius: 0.375rem; font-size: 1rem; font-weight: 500;">Features</a>
        <a href="/pricing" style="display: block; padding: 0.5rem 0.75rem; border-radius: 0.375rem; font-size: 1rem; font-weight: 500;">Pricing</a>
        <a href="/about" style="display: block; padding: 0.5rem 0.75rem; border-radius: 0.375rem; font-size: 1rem; font-weight: 500;">About</a>
        <a href="/contact" style="display: block; padding: 0.5rem 0.75rem; border-radius: 0.375rem; font-size: 1rem; font-weight: 500;">Contact</a>
      </div>
    </div>
  </header>
</body>
</html>`,
    description: "A modern, responsive header with mobile menu support. Features a logo on the left and navigation links on the right. Includes a mobile-friendly hamburger menu for smaller screens."
  },
  // Add more components here as needed
} 