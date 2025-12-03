# GitHub Codespaces Configuration

This directory contains the configuration for GitHub Codespaces, enabling you to develop the Business Leads AI Automation tool directly in your browser.

## What's Included

- **Node.js 20**: Latest LTS version for optimal performance
- **Chromium**: Pre-installed for Puppeteer web scraping
- **VS Code Extensions**: Essential extensions for Node.js development
- **Port Forwarding**: Automatic port 3000 forwarding for the web dashboard
- **Auto Setup**: Dependencies are installed automatically on container creation

## Quick Start with Codespaces

1. Click the "Code" button on the repository page
2. Select "Codespaces" tab
3. Click "Create codespace on main" (or your branch)
4. Wait for the environment to build (first time takes ~2-3 minutes)
5. Once ready, update your `.env` file with your OpenAI API key
6. Run `npm run web` to start the web dashboard

## Configuration Files

- **devcontainer.json**: Main configuration file defining the container, features, and settings
- **setup.sh**: Post-creation script that installs Chromium and project dependencies
- **README.md**: This file

## Environment Variables

The setup script automatically creates a `.env` file from `.env.example`. Make sure to update it with your actual configuration:

```bash
OPENAI_API_KEY=your-actual-api-key-here
```

## Available Commands

Once your Codespace is ready:

```bash
# Start web dashboard
npm run web

# Start in development mode with auto-reload
npm run web:dev

# Run CLI version
npm start

# Run interactive setup wizard
npm run setup
```

## Troubleshooting

### Puppeteer Issues
If you encounter Puppeteer/Chromium issues:
```bash
# Reinstall Chromium dependencies
sudo apt-get update
sudo apt-get install -y chromium chromium-sandbox
```

### Port Not Accessible
- Check that port 3000 is forwarded in the "Ports" tab
- Make sure the web server is running (`npm run web`)

### Dependencies Not Installed
```bash
# Reinstall dependencies
npm install
```

## Customization

You can customize the Codespace environment by modifying:

- **devcontainer.json**: Add VS Code extensions, change Node version, or add more features
- **setup.sh**: Add additional dependencies or setup steps

## Resources

- [GitHub Codespaces Documentation](https://docs.github.com/en/codespaces)
- [Dev Container Specification](https://containers.dev/)
- [VS Code Remote Development](https://code.visualstudio.com/docs/remote/remote-overview)
