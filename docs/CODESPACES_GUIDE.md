# GitHub Codespaces Guide

## 🚀 Quick Start with Codespaces

GitHub Codespaces allows you to develop this project entirely in the cloud, without any local setup. Perfect for testing, development, or when you don't have Node.js installed locally.

### Starting a Codespace

1. **Via Badge:**
   - Click the "Open in GitHub Codespaces" badge in the README
   - Or visit: https://codespaces.new/ftaamrmr/business-rooz-ai-automation

2. **Via Repository:**
   - Navigate to the repository on GitHub
   - Click the green "Code" button
   - Select the "Codespaces" tab
   - Click "Create codespace on [branch-name]"

3. **Wait for Setup:**
   - First-time setup takes ~2-3 minutes
   - The environment will automatically install:
     - Node.js 20
     - Chromium browser for Puppeteer
     - All npm dependencies
     - VS Code extensions

### Initial Configuration

Once your Codespace is ready:

1. **Set up your API key:**
   ```bash
   # The .env file is automatically created from .env.example
   # Edit it to add your OpenAI API key
   nano .env
   # or use VS Code editor
   ```

2. **Update the OPENAI_API_KEY:**
   ```env
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

3. **Save the file** (Ctrl+O, Enter, Ctrl+X for nano)

### Running the Application

#### Web Dashboard (Recommended)

```bash
npm run web
```

- The web dashboard will start on port 3000
- Codespaces automatically forwards the port
- Click the notification or go to "Ports" tab to open the URL
- Access the dashboard in your browser

#### Development Mode with Auto-reload

```bash
npm run web:dev
```

- Automatically reloads when you make code changes
- Great for development and testing

#### Command Line Interface

```bash
npm start -- -q "Restaurant Jakarta" -l 10 -m "Your marketing message"
```

- Results are saved in the `output/` directory
- View files in the VS Code explorer

### Using the Codespace

#### Terminal

- Open terminal: View → Terminal (or Ctrl+`)
- Multiple terminals available
- All npm scripts work as expected

#### File Explorer

- Browse files in the left sidebar
- Edit any file with syntax highlighting
- Changes are auto-saved

#### Port Forwarding

- Port 3000 is automatically forwarded for the web dashboard
- View all ports in the "Ports" tab (View → Ports)
- Make ports public or private as needed

#### VS Code Extensions

Pre-installed extensions:
- ESLint for code linting
- Prettier for code formatting
- npm IntelliSense for package imports
- npm Scripts for easy script running
- Docker support (if needed later)

### Tips & Tricks

#### Keyboard Shortcuts

- `Ctrl+`` - Open terminal
- `Ctrl+P` - Quick file open
- `Ctrl+Shift+F` - Search across files
- `F5` - Start debugging
- `Ctrl+/` - Toggle comment

#### Saving Work

- Changes are automatically saved to the Codespace
- Commit and push as you would normally:
  ```bash
  git add .
  git commit -m "Your message"
  git push
  ```

#### Installing Additional Packages

```bash
npm install package-name
```

#### Restarting the Codespace

- Changes persist across restarts
- Stop: Codespaces menu → Stop Codespace
- Restart: Return to GitHub and start the Codespace again

### Common Tasks

#### View Application Logs

```bash
# Web dashboard logs appear in the terminal
npm run web

# Or for more verbose output
DEBUG=* npm run web
```

#### Export Data

```bash
# Data is saved in the output/ directory
# Download files by right-clicking in the file explorer
# Or use the VS Code download option
```

#### Update Dependencies

```bash
npm install
# or
npm update
```

#### Check Package Info

```bash
npm list
npm outdated
```

### Troubleshooting

#### Port 3000 Not Accessible

1. Check the "Ports" tab in VS Code
2. Ensure port 3000 shows as forwarded
3. Click the globe icon to open in browser
4. If needed, make the port public

#### Puppeteer/Chromium Issues

```bash
# Reinstall Chromium
sudo apt-get update
sudo apt-get install -y chromium chromium-sandbox

# Check Chromium installation
which chromium
chromium --version
```

#### npm Install Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### Out of Memory

```bash
# Check available memory
free -h

# If needed, increase Node memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run web
```

#### Environment Variables Not Working

```bash
# Verify .env file exists
ls -la .env

# Check contents (be careful not to expose secrets)
cat .env | grep -v "OPENAI_API_KEY"

# Recreate if needed
cp .env.example .env
nano .env
```

### Managing Codespaces

#### Stop a Codespace

- Codespaces menu → Stop Codespace
- Automatically stops after 30 minutes of inactivity
- No charges when stopped

#### Delete a Codespace

- Go to https://github.com/codespaces
- Find your codespace
- Click "..." → Delete

#### Billing

- Free tier: 60 hours/month for personal accounts
- 2-core machine by default
- Check usage: https://github.com/settings/billing

### Best Practices

1. **Commit Regularly:** Save your work with git commits
2. **Stop When Done:** Stop codespaces to preserve free hours
3. **Use .env:** Never commit API keys or secrets
4. **Test Changes:** Use the web dashboard to verify functionality
5. **Check Logs:** Monitor terminal output for errors

### Advanced Configuration

#### Customize the Codespace

Edit `.devcontainer/devcontainer.json` to:
- Add VS Code extensions
- Change Node.js version
- Add additional features
- Modify environment variables

#### Add More Ports

```json
"forwardPorts": [3000, 5000, 8080]
```

#### Pre-install Global Packages

Edit `.devcontainer/setup.sh`:
```bash
npm install -g some-global-package
```

### Resources

- [GitHub Codespaces Documentation](https://docs.github.com/en/codespaces)
- [VS Code in Codespaces](https://code.visualstudio.com/docs/remote/codespaces)
- [Dev Container Reference](https://containers.dev/)
- [Puppeteer Documentation](https://pptr.dev/)

### Getting Help

If you encounter issues:

1. Check this guide for troubleshooting steps
2. Review the [main README](../README.md)
3. Check [existing issues](https://github.com/ftaamrmr/business-rooz-ai-automation/issues)
4. Create a new issue with:
   - Codespace details (2-core, 4-core, etc.)
   - Error messages
   - Steps to reproduce

---

**Happy Coding in the Cloud! ☁️**
