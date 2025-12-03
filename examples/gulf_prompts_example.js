/**
 * Gulf Prompts Example Usage
 * 
 * This file demonstrates how to use the Gulf Arabic marketing prompts
 * in a real B2B lead generation scenario.
 */

const GulfPrompts = require('../src/gulf_prompts');

// Initialize the prompts module
const prompts = new GulfPrompts();

console.log('========================================');
console.log('   Gulf Prompts - Usage Examples');
console.log('========================================');
console.log('');
console.log('Market:', prompts.market);
console.log('Languages:', prompts.languages.join(', '));
console.log('Version:', prompts.version);
console.log('');

// Example: Company reaching out to a prospect
const prospectInfo = {
    businessName: 'مؤسسة التقنية الحديثة',
    firstName: 'عبدالله',
    industry: 'تكنولوجيا المعلومات',
    location: 'الرياض'
};

const yourCompanyInfo = {
    companyName: 'حلول الأعمال الرقمية',
    senderName: 'محمد العلي',
    serviceName: 'التحول الرقمي',
    specialty: 'استشارات التحول الرقمي',
    painPoint: 'انخفاض الكفاءة التشغيلية',
    benefit: 'زيادة الإنتاجية بنسبة 50% وتقليل التكاليف'
};

console.log('========================================');
console.log('Scenario: Initial Outreach Campaign');
console.log('========================================');
console.log('');

// Step 1: WhatsApp Outreach (First Touch)
console.log('📱 STEP 1: WhatsApp Initial Contact');
console.log('-----------------------------------');
const whatsappMessage = prompts.getWhatsAppOutreach({
    ...prospectInfo,
    ...yourCompanyInfo
});
console.log(whatsappMessage);
console.log('');

// Step 2: Follow-up Email (Second Touch)
console.log('📧 STEP 2: Follow-up Email (if no response)');
console.log('-----------------------------------');
const emailTemplate = prompts.getB2BEmail({
    ...prospectInfo,
    ...yourCompanyInfo
});
console.log('Subject Options:');
emailTemplate.subjects.forEach((subject, index) => {
    console.log(`  ${index + 1}. ${subject}`);
});
console.log('');
console.log('Recommended Subject:', emailTemplate.subject);
console.log('');
console.log('Email Body:');
console.log(emailTemplate.body);
console.log('');

// Step 3: Follow-up Sequence (if still no response)
console.log('🔄 STEP 3: Follow-up Sequence');
console.log('-----------------------------------');
const followUpSequence = prompts.getFollowUpSequence({
    ...prospectInfo,
    ...yourCompanyInfo
});

console.log('Follow-up Message 1:');
console.log('Timing:', followUpSequence.message1.timing);
console.log('Subject:', followUpSequence.message1.subject);
console.log('Body (preview):', followUpSequence.message1.body.substring(0, 150) + '...');
console.log('');

console.log('Follow-up Message 2:');
console.log('Timing:', followUpSequence.message2.timing);
console.log('Subject:', followUpSequence.message2.subject);
console.log('');

console.log('Follow-up Message 3 (Final):');
console.log('Timing:', followUpSequence.message3.timing);
console.log('Subject:', followUpSequence.message3.subject);
console.log('');

console.log('========================================');
console.log('Social Media Outreach');
console.log('========================================');
console.log('');

// Instagram DM
console.log('📸 Instagram Direct Message');
console.log('-----------------------------------');
const instagramDM = prompts.getInstagramDM({
    ...prospectInfo,
    ...yourCompanyInfo
});
console.log('Template 1:');
console.log(instagramDM.templates[0]);
console.log('');
console.log('Template 2:');
console.log(instagramDM.templates[1]);
console.log('');

// LinkedIn Outreach
console.log('💼 LinkedIn Outreach');
console.log('-----------------------------------');
const linkedInOutreach = prompts.getLinkedInOutreach({
    ...prospectInfo,
    ...yourCompanyInfo
});
console.log('Connection Request Note:');
console.log(linkedInOutreach.connectionRequest.note);
console.log('');
console.log('Follow-up Message (after connection accepted):');
console.log('Subject:', linkedInOutreach.followUpMessage.subject);
console.log('Body:', linkedInOutreach.followUpMessage.body);
console.log('');

console.log('========================================');
console.log('Advertising Campaign');
console.log('========================================');
console.log('');

// Gulf Market Ads
const gulfAds = prompts.getGulfAds({
    serviceName: yourCompanyInfo.serviceName,
    industry: prospectInfo.industry,
    benefit: yourCompanyInfo.benefit
});

console.log('📢 Ad Headlines (Top 5):');
console.log('-----------------------------------');
gulfAds.headlines.slice(0, 5).forEach((headline, index) => {
    console.log(`${index + 1}. ${headline}`);
});
console.log('');

console.log('📝 Ad Copy Example (Data-Driven):');
console.log('-----------------------------------');
console.log(gulfAds.adCopyVariations[1].title);
console.log(gulfAds.adCopyVariations[1].copy);
console.log('');

console.log('🎯 Platform-Specific Ads:');
console.log('-----------------------------------');
console.log('Google Ads:');
console.log('  Headline 1:', gulfAds.platformSpecific.googleAds.headline1);
console.log('  Headline 2:', gulfAds.platformSpecific.googleAds.headline2);
console.log('  Description:', gulfAds.platformSpecific.googleAds.description1);
console.log('');
console.log('Meta Ads (Facebook/Instagram):');
console.log('  Primary Text:', gulfAds.platformSpecific.metaAds.primary);
console.log('  Headline:', gulfAds.platformSpecific.metaAds.headline);
console.log('  CTA:', gulfAds.platformSpecific.metaAds.cta);
console.log('');
console.log('LinkedIn Ads:');
console.log('  Headline:', gulfAds.platformSpecific.linkedInAds.headline);
console.log('  Description:', gulfAds.platformSpecific.linkedInAds.description);
console.log('');

console.log('========================================');
console.log('Business Analysis for AI');
console.log('========================================');
console.log('');

const analysisPrompt = prompts.getBusinessAnalysisPrompt({
    ...prospectInfo,
    website: 'https://example.com',
    socialMedia: '@moderntech_sa'
});

console.log('🔍 AI Analysis Setup:');
console.log('-----------------------------------');
console.log('This prompt is designed to be used with AI APIs like OpenAI or Mistral');
console.log('to generate detailed business analysis and personalized outreach strategies.');
console.log('');
console.log('System Prompt length:', analysisPrompt.systemPrompt.length, 'characters');
console.log('User Prompt length:', analysisPrompt.userPrompt.length, 'characters');
console.log('');
console.log('Expected Output Format:');
console.log(JSON.stringify(analysisPrompt.outputFormat, null, 2));
console.log('');

console.log('========================================');
console.log('Helper Functions');
console.log('========================================');
console.log('');

// Available categories
console.log('📋 Available Categories:');
console.log('-----------------------------------');
const categories = prompts.getAvailableCategories();
categories.forEach((cat, index) => {
    console.log(`${index + 1}. ${cat.name}`);
    console.log(`   ${cat.description}`);
    console.log(`   Method: ${cat.method}`);
});
console.log('');

// Placeholders
console.log('🔤 Supported Placeholders:');
console.log('-----------------------------------');
const placeholders = prompts.getPlaceholders();
Object.entries(placeholders).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
});
console.log('');

console.log('========================================');
console.log('✅ Complete Usage Example Finished');
console.log('========================================');
console.log('');
console.log('💡 Tips:');
console.log('  - Always personalize with as many parameters as possible');
console.log('  - Respect Gulf business culture (respectful, brief, honest)');
console.log('  - Follow the recommended timing for follow-ups');
console.log('  - Test messages before sending to real prospects');
console.log('  - Use the right template for each platform');
console.log('');
console.log('📚 For more information, see: docs/GULF_PROMPTS_GUIDE.md');
