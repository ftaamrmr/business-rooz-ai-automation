# 🚀 Business Leads AI Automation v2.0

**Open-source lead generation tool with AI-powered content creation and web dashboard**

Generate business leads from Google Maps, create personalized marketing content using OpenAI, and manage everything through a modern web interface.

[![GitHub stars](https://img.shields.io/github/stars/asiifdev/business-leads-ai-automation?style=social)](https://github.com/asiifdev/business-leads-ai-automation/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/asiifdev/business-leads-ai-automation?style=social)](https://github.com/asiifdev/business-leads-ai-automation/fork)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/ftaamrmr/business-rooz-ai-automation)

---

## 🎯 What it does

This tool helps you:
- **Scrape business information** from Google Maps (name, address, phone, rating)
- **Generate AI marketing content** personalized for each business
- **Manage campaigns** through a modern web dashboard
- **Track lead quality** with AI-powered scoring
- **Export results** in CSV and JSON formats
- **Create email and WhatsApp templates** automatically
- **Monitor performance** with real-time analytics

**Perfect for:** Digital agencies, freelance marketers, SME consultants, and business developers looking for an affordable lead generation solution with professional management tools.

---

## 🚀 Quick Start

### Option 1: GitHub Codespaces (Recommended for Quick Testing)

The fastest way to try this project! No local setup required.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/ftaamrmr/business-rooz-ai-automation)

1. Click the "Open in GitHub Codespaces" badge above
2. Wait for the environment to build (~2-3 minutes first time)
3. Update `.env` file with your OpenAI API key
4. Run `npm run web` to start the dashboard
5. Access the web interface through the forwarded port 3000

📚 **[Complete Codespaces Guide](docs/CODESPACES_GUIDE.md)** - Detailed instructions, tips, and troubleshooting

### Option 2: Local Installation

#### Prerequisites
- Node.js 16+
- OpenAI API key ([get one here](https://platform.openai.com/))

#### Installation

```bash
git clone https://github.com/asiifdev/business-leads-ai-automation.git
cd business-leads-ai-automation
npm install
```

#### Setup

```bash
# Copy environment template
cp .env.example .env

# Add your OpenAI API key to .env
OPENAI_API_KEY=your-openai-key-here
```

### Usage Options

#### 🌐 Web Dashboard (Recommended)
```bash
# Start the web dashboard
npm run web

# Open your browser to http://localhost:3000
# Create campaigns, manage leads, and view analytics through the web interface
```

#### 💻 Command Line Interface
```bash
# Basic CLI usage
node index.js -q "Restaurant Jakarta" -l 20 -m "Increase your restaurant sales with digital marketing"

# Results will be saved in the output/ folder
```

---

## 📊 Example Output

### Input:
```bash
node index.js -q "Coffee Shop Jakarta" -l 5 -m "Boost your coffee shop with online ordering system"
```

### Generated Files:

**📄 leads_[timestamp].csv**
```csv
ID,Name,Address,Phone,Website,Rating
1,"Kopi Tuku","Jl. Kemang Raya No.1","+6281234567890","kopituku.com","4.5"
2,"Filosofi Kopi","Jl. Senopati No.5","+6281234567891","filosofikopi.com","4.3"
```

**📧 email_template.txt**
```
Subject: Tingkatkan Penjualan Coffee Shop dengan Sistem Online

Halo Tim Kopi Tuku,

Saya melihat coffee shop Anda di Kemang dengan rating 4.5 stars - impressive!

Apakah Anda tertarik meningkatkan penjualan dengan sistem online ordering yang terbukti efektif untuk coffee shop?

[Your personalized message continues...]
```

**📱 whatsapp_template.txt**
```
Halo Kopi Tuku! ☕

Lihat coffee shop Anda di Kemang rating 4.5⭐ - keren!

Mau boost penjualan pakai sistem online ordering? 📱

[Continues with personalized content...]
```

---

## ⚙️ Current Features

### ✅ Core Features
- **Google Maps scraping** with auto-scroll
- **Business data extraction** (name, address, phone, rating, website)
- **AI content generation** using OpenAI GPT
- **Lead quality scoring** with AI intelligence
- **Dual template creation** (email + WhatsApp)
- **CSV and JSON export**
- **Indonesian market optimization**
- **Rate limiting** to avoid blocking

### 🌐 Web Dashboard Features
- **Modern web interface** for non-technical users
- **Campaign management** with real-time progress tracking
- **Lead management** with filtering and sorting
- **Analytics dashboard** with performance insights
- **Responsive design** for mobile and desktop
- **Real-time notifications** via Server-Sent Events
- **Data export** functionality (CSV/JSON)
- **Campaign templates** for different industries

### 🚧 Known Limitations
- **Email finding** returns empty array (work in progress)
- **Phone number validation** could be improved
- **Error handling** needs enhancement for edge cases

### 🎯 Planned Features
- [ ] Fix email discovery functionality
- [ ] Better phone number validation for Indonesian numbers
- [ ] Multiple search engine support
- [ ] Advanced AI prompt customization
- [ ] Batch processing for multiple queries
- [ ] API integrations (CRM, email marketing)

---

## 📖 Usage Guide

### 🌐 Web Dashboard
For the best experience, use the web dashboard:

```bash
npm run web
```

Then open http://localhost:3000 in your browser. The web interface provides:
- **Campaign Creation**: Easy form-based campaign setup
- **Real-time Monitoring**: Live progress tracking
- **Lead Management**: Filter, sort, and export leads
- **Analytics**: Performance insights and reporting

📚 **Full Web Dashboard Guide**: [docs/WEB_DASHBOARD_GUIDE.md](docs/WEB_DASHBOARD_GUIDE.md)

### 💻 Command Line Options

```bash
node index.js [options]

Required:
  -q, --query <query>     Google Maps search query
  -l, --limit <number>    Number of results to scrape
  -m, --message <text>    Your marketing message for AI templates

Optional:
  -o, --output <format>   Output format: csv or json (default: csv)
  -h, --help             Show help information

Examples:
  node index.js -q "Restaurant Bandung" -l 50 -m "Digital marketing for restaurants"
  node index.js -q "Salon Jakarta" -l 30 -m "Online booking system" -o json
```

### 🚀 Available Scripts

```bash
npm run web          # Start web dashboard (recommended)
npm run web:dev      # Start web dashboard in development mode
npm run cli          # Run CLI version
npm test             # Run tests
```

---

## 🔧 Configuration

Edit `.env` file for customization:

```env
# Required
OPENAI_API_KEY=your-openai-key-here

# Web Dashboard (optional)
PORT=3000                     # Web dashboard port
HOST=localhost                # Web dashboard host

# Scraping Configuration (optional)
DELAY_BETWEEN_SCRAPES=2000    # Milliseconds between requests
MAX_RETRIES=3                 # Retry failed requests
OUTPUT_FORMAT=csv             # Default output format

# Database (optional)
DB_PATH=./data/leads.db       # SQLite database path
```

---

## 🌟 Why Use This Tool?

### 💰 Cost Effective
- **Free to use** vs $99-299/month for SaaS alternatives
- **Open source** - modify as needed
- **No monthly subscriptions**

### 🎯 Indonesian Market Focus
- **Local business understanding** in AI prompts
- **WhatsApp marketing** integration (popular in Indonesia)
- **Indonesian language** optimization

### 🛠️ Developer Friendly
- **Full source code access**
- **Easy to customize and extend**
- **Well-documented codebase**
- **Active community support**

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Report bugs** via GitHub Issues
2. **Suggest features** you'd like to see
3. **Submit pull requests** for improvements
4. **Share your use cases** and success stories

### Development Setup

```bash
# Fork the repo, then clone your fork
git clone https://github.com/YOUR_USERNAME/business-leads-ai-automation.git
cd business-leads-ai-automation
npm install

# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes and test
npm test

# Submit a pull request
```

---

## ⚖️ Legal & Ethics

- **Public data only** - scrapes publicly available information
- **Respectful scraping** - includes rate limiting
- **No spam** - use for legitimate business outreach only
- **MIT License** - free for commercial use

Please read our [DISCLAIMER.md](DISCLAIMER.md) for full legal information.

---

## 📞 Support & Documentation

### 📚 Documentation
- **[GitHub Codespaces Guide](docs/CODESPACES_GUIDE.md)**: Complete guide for cloud development
- **[Web Dashboard Guide](docs/WEB_DASHBOARD_GUIDE.md)**: Complete user guide for the web interface
- **[Deployment Guide](docs/DEPLOYMENT_GUIDE.md)**: Production deployment instructions
- **[API Documentation](docs/API.md)**: REST API reference (coming soon)

### 🆘 Getting Help
- **GitHub Issues**: For bug reports and feature requests
- **Discussions**: For questions and community chat
- **Email**: [your-email] for urgent matters

### 🚀 Deployment
Ready for production? Check our comprehensive deployment guide:
- VPS/Server deployment
- Docker containerization
- Cloud platform deployment (Heroku, AWS, etc.)
- SSL/HTTPS setup
- Monitoring and maintenance

📚 **Full Deployment Guide**: [docs/DEPLOYMENT_GUIDE.md](docs/DEPLOYMENT_GUIDE.md)

---

## 🙏 Acknowledgments

- Built with [Puppeteer](https://pptr.dev/) for web scraping
- Powered by [OpenAI](https://openai.com/) for AI content generation
- Inspired by the need for affordable lead generation tools in Indonesia

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**⭐ Star this repo if you find it useful!**

Made with ❤️ for Indonesian businesses
