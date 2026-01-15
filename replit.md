# Cino Universal Gym

## Overview
A modern fitness center website for Cino Universal Gym located in Nigeria. Built with React, TypeScript, and Vite. Features an AI assistant powered by Gemini API.

## Project Structure
- `/` - Root contains main App.tsx, index.tsx, and configuration files
- `/components` - React components (Hero, Navbar, About, Programs, Trainers, Gallery, Contact, Footer, AIAssistant, Modal, IconRenderer)
- `/services` - Service files including Gemini API integration

## Tech Stack
- React 19
- TypeScript
- Vite 6
- Tailwind CSS (via CDN)
- Lucide React icons
- Google Gemini AI integration

## Configuration
- **Dev server**: Port 5000, host 0.0.0.0
- **Build output**: dist/
- **Deployment**: Static site

## Environment Variables
- `GEMINI_API_KEY` - Required for AI assistant functionality

## Recent Changes
- 2026-01-15: Initial import and Replit environment setup
  - Updated Vite config to use port 5000 with allowedHosts: true
  - Added script tag to index.html for Vite compatibility
  - Configured workflow and deployment
