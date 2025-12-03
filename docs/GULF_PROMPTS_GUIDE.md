# Gulf Arabic Marketing Prompts Guide

## Overview

The `gulf_prompts.js` module provides a comprehensive set of Gulf Arabic marketing prompts specifically designed for B2B lead generation in GCC markets (Saudi Arabia, Kuwait, UAE, Bahrain).

## Features

- ✅ **Gulf Arabic Language**: Professional, formal, and clean dialect suitable for Saudi/Kuwaiti/UAE/Bahraini markets
- ✅ **B2B Focused**: All templates designed for business-to-business communication
- ✅ **AI-Ready**: Compatible with OpenAI, Mistral, and other AI APIs
- ✅ **Comprehensive**: 7 different prompt categories covering all marketing touchpoints
- ✅ **Customizable**: Full placeholder support for dynamic content

## Installation

The module is located in `src/gulf_prompts.js` and can be required directly:

```javascript
const GulfPrompts = require('./src/gulf_prompts');
const prompts = new GulfPrompts();
```

## Available Prompt Categories

### 1. WhatsApp Outreach
Short, friendly, professional messages for first contact.

```javascript
const message = prompts.getWhatsAppOutreach({
    businessName: 'شركة الابتكار',
    senderName: 'محمد العلي',
    companyName: 'حلول الأعمال الرقمية',
    serviceName: 'التسويق الرقمي',
    benefit: 'زيادة المبيعات بنسبة 40%'
});

console.log(message);
```

**Output:**
```
السلام عليكم شركة الابتكار 👋

أنا محمد العلي من حلول الأعمال الرقمية. شفت نشاطكم في التسويق الرقمي وحبيت أتواصل معاكم بخصوص فرصة تعاون.

عندنا حلول متخصصة تساعدكم في زيادة المبيعات بنسبة 40%.

ممكن نتواصل ونناقش كيف نقدر نساعدكم؟

شكراً لوقتكم 🙏
```

### 2. B2B Email Templates
Professional email with subject line options and body.

```javascript
const email = prompts.getB2BEmail({
    businessName: 'شركة الابتكار',
    firstName: 'أحمد',
    companyName: 'حلول الأعمال الرقمية',
    serviceName: 'التسويق الرقمي',
    senderName: 'محمد العلي',
    painPoint: 'انخفاض المبيعات الإلكترونية',
    benefit: 'زيادة المبيعات بنسبة 40%'
});

console.log('Subject:', email.subject);
console.log('All subject options:', email.subjects);
console.log('Body:', email.body);
```

**Features:**
- 4 subject line variations
- Professional Gulf Arabic tone
- Clear call-to-action
- Structured with bullet points

### 3. Follow-up Sequence
3-message follow-up sequence with timing guidance.

```javascript
const sequence = prompts.getFollowUpSequence({
    businessName: 'شركة الابتكار',
    firstName: 'أحمد',
    companyName: 'حلول الأعمال الرقمية',
    senderName: 'محمد العلي',
    serviceName: 'التسويق الرقمي',
    benefit: 'زيادة المبيعات'
});

console.log('Message 1:', sequence.message1.subject);
console.log('Timing:', sequence.message1.timing); // "2-3 days after initial contact"

console.log('Message 2:', sequence.message2.subject);
console.log('Timing:', sequence.message2.timing); // "1 week after message 1"

console.log('Message 3:', sequence.message3.subject);
console.log('Timing:', sequence.message3.timing); // "2 weeks after message 2"
```

**Sequence Strategy:**
- **Message 1**: Gentle reminder (2-3 days)
- **Message 2**: Value-added with success stories (1 week)
- **Message 3**: Final follow-up with urgency and special offer (2 weeks)

### 4. Instagram DM
Short, casual yet professional messages for Instagram.

```javascript
const instagram = prompts.getInstagramDM({
    businessName: 'شركة الابتكار',
    senderName: 'محمد',
    companyName: 'حلول الأعمال الرقمية',
    serviceName: 'التسويق الرقمي'
});

console.log('Default template:', instagram.default);
console.log('All templates:', instagram.templates); // Array of 3 variations
```

**Features:**
- 3 different variations
- Eye-catching with emojis
- Very short and casual
- Professional enough for business

### 5. LinkedIn Outreach
Professional B2B messages for LinkedIn networking.

```javascript
const linkedin = prompts.getLinkedInOutreach({
    firstName: 'أحمد',
    companyName: 'حلول الأعمال الرقمية',
    senderName: 'محمد العلي',
    specialty: 'التحول الرقمي',
    industry: 'التجزئة',
    location: 'الرياض'
});

console.log('Connection request:', linkedin.connectionRequest.note);
console.log('Follow-up subject:', linkedin.followUpMessage.subject);
console.log('Follow-up body:', linkedin.followUpMessage.body);
```

**Includes:**
- Connection request note (300 chars limit compliant)
- Follow-up message after connection accepted

### 6. Gulf Market Ads
Comprehensive ad templates for different platforms.

```javascript
const ads = prompts.getGulfAds({
    serviceName: 'التسويق الرقمي',
    industry: 'التجزئة',
    benefit: 'زيادة المبيعات'
});

console.log('Headlines:', ads.headlines); // 10 variations
console.log('Ad copy variations:', ads.adCopyVariations); // 5 versions
console.log('Google Ads:', ads.platformSpecific.googleAds);
console.log('Meta Ads:', ads.platformSpecific.metaAds);
console.log('LinkedIn Ads:', ads.platformSpecific.linkedInAds);
```

**Includes:**
- 10 headline options
- 5 full ad copy variations (different styles)
- Platform-specific templates for:
  - Google Ads
  - Meta Ads (Facebook/Instagram)
  - LinkedIn Ads

**Ad Copy Styles:**
1. Direct approach for serious businesses
2. Data-driven with numbers
3. Problem-solution format
4. Social proof focused
5. Urgency-based

### 7. Business Analysis Prompt
AI prompt for analyzing target businesses.

```javascript
const analysis = prompts.getBusinessAnalysisPrompt({
    businessName: 'شركة الابتكار',
    industry: 'تكنولوجيا',
    location: 'الرياض',
    website: 'https://example.com',
    socialMedia: '@innovation'
});

// Use with OpenAI
const result = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
        { role: "system", content: analysis.systemPrompt },
        { role: "user", content: analysis.userPrompt }
    ],
    response_format: { type: "json_object" }
});
```

**Output Format:**
The analysis returns structured JSON with:
- Overview (size, digital maturity, strengths)
- Challenges (industry-specific, digital gaps, improvements)
- Opportunities (needed services, benefits, ROI)
- Outreach strategy (channel, tone, selling points)
- Proposal recommendations (structure, pricing, terms)

## Helper Methods

### Get Available Categories

```javascript
const categories = prompts.getAvailableCategories();
// Returns array of objects with name, description, and method
```

### Get Placeholders

```javascript
const placeholders = prompts.getPlaceholders();
// Returns object with all supported placeholders and descriptions
```

### Get Example Usage

```javascript
const examples = prompts.getExampleUsage();
// Returns examples for all prompt types with sample data
```

## Supported Placeholders

All methods support the following placeholders:

| Placeholder | Description | Arabic |
|------------|-------------|---------|
| `${businessName}` | Target business name | اسم الشركة المستهدفة |
| `${firstName}` | Contact first name | الاسم الأول |
| `${senderName}` | Your name | اسم المرسل |
| `${companyName}` | Your company | اسم شركتك |
| `${serviceName}` | Service offered | اسم الخدمة |
| `${specialty}` | Area of expertise | مجال التخصص |
| `${industry}` | Target industry | القطاع |
| `${location}` | City/Country | المدينة/البلد |
| `${painPoint}` | Business challenge | التحدي |
| `${benefit}` | Key benefit | الفائدة الرئيسية |

## Best Practices

### 1. Personalization
Always provide as many parameters as possible for better personalization:

```javascript
// Good
const message = prompts.getWhatsAppOutreach({
    businessName: 'شركة الابتكار التقني',
    senderName: 'محمد العلي',
    companyName: 'حلول الأعمال الرقمية',
    serviceName: 'التسويق الرقمي',
    benefit: 'زيادة المبيعات بنسبة 40%'
});

// Less effective
const message = prompts.getWhatsAppOutreach({
    businessName: 'شركة الابتكار'
});
```

### 2. Cultural Sensitivity
The prompts are designed for Gulf culture. Key principles:
- Respectful and warm tone
- Not overly formal
- Brief and to the point
- Honest without exaggeration
- Professional emojis used sparingly

### 3. Follow-up Timing
Respect the recommended timing in the follow-up sequence:
- Message 1: 2-3 days after initial contact
- Message 2: 1 week after message 1
- Message 3: 2 weeks after message 2

### 4. Platform Appropriateness
Use the right template for each platform:
- WhatsApp: Casual, friendly with emojis
- Email: Professional, structured
- Instagram: Very short, visual, casual
- LinkedIn: Professional, B2B focused

### 5. Testing
Always test your messages before sending to real prospects:

```javascript
// Generate and review
const examples = prompts.getExampleUsage();
console.log('WhatsApp preview:', examples.whatsapp);
console.log('Email preview:', examples.email.body);
```

## Integration with AI APIs

### OpenAI Example

```javascript
const GulfPrompts = require('./src/gulf_prompts');
const OpenAI = require('openai');

const prompts = new GulfPrompts();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Generate personalized content
const template = prompts.getWhatsAppOutreach({
    businessName: 'شركة الابتكار',
    senderName: 'محمد'
});

// Use AI to enhance or translate
const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
        {
            role: "system",
            content: "أنت خبير تسويق B2B في السوق الخليجي"
        },
        {
            role: "user",
            content: `قم بتحسين هذه الرسالة: ${template}`
        }
    ]
});
```

### Mistral Example

```javascript
// Similar integration with Mistral or other AI providers
const response = await mistral.chat.complete({
    model: "mistral-large",
    messages: [
        { role: "system", content: analysis.systemPrompt },
        { role: "user", content: analysis.userPrompt }
    ]
});
```

## Module Properties

```javascript
const prompts = new GulfPrompts();

console.log(prompts.market);      // 'GCC'
console.log(prompts.languages);   // ['ar-SA', 'ar-KW', 'ar-AE', 'ar-BH']
console.log(prompts.version);     // '1.0.0'
```

## Support

For issues or questions:
1. Check the example usage with `prompts.getExampleUsage()`
2. Review available categories with `prompts.getAvailableCategories()`
3. Verify placeholders with `prompts.getPlaceholders()`

## License

This module is part of the business-rooz-ai-automation project.

---

**Created for**: GCC Markets (Saudi Arabia, Kuwait, UAE, Bahrain)  
**Language**: Gulf Arabic (formal and professional)  
**Purpose**: B2B Lead Generation  
**Compatible with**: OpenAI, Mistral, and other AI APIs
