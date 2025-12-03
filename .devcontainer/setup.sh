#!/bin/bash

# Exit on error
set -e

echo "🚀 Setting up Business Leads AI Automation development environment..."

# Install Chromium and dependencies for Puppeteer
echo "📦 Installing Chromium and dependencies..."
sudo apt-get update
sudo apt-get install -y \
    chromium \
    chromium-sandbox \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libgdk-pixbuf2.0-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    libgbm1 \
    libxshmfence1

# Install Node.js dependencies
echo "📦 Installing Node.js dependencies..."
npm install

# Copy .env.example to .env if .env doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from .env.example..."
    cp .env.example .env
    echo ""
    echo "⚠️  IMPORTANT: Please update your .env file with your OpenAI API key!"
    echo "   Edit .env and set: OPENAI_API_KEY=your-actual-api-key"
    echo ""
fi

# Create output directory if it doesn't exist
echo "📁 Creating output directory..."
mkdir -p output
mkdir -p data

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎉 Welcome to Business Leads AI Automation!"
echo ""
echo "Quick Start Commands:"
echo "  npm run web       - Start the web dashboard (http://localhost:3000)"
echo "  npm run web:dev   - Start web dashboard in development mode"
echo "  npm start         - Run CLI version"
echo "  npm run setup     - Run interactive setup wizard"
echo ""
echo "📚 Documentation:"
echo "  - README.md for full documentation"
echo "  - docs/USER_GUIDE.md for application user guide"
echo "  - docs/CODESPACES_GUIDE.md for Codespaces guide"
echo ""
echo "⚠️  Don't forget to add your OpenAI API key to the .env file!"
echo ""
