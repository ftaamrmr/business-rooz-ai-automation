/**
 * Gulf Arabic Marketing Prompts
 * For B2B Lead Generation in GCC Markets
 * Compatible with OpenAI, Mistral, and other AI APIs
 * 
 * Target Markets: Saudi Arabia 🇸🇦, Kuwait 🇰🇼, UAE 🇦🇪, Bahrain 🇧🇭
 * Language: Gulf Arabic (formal and professional)
 * Use Case: B2B lead generation for SMEs and agencies
 * 
 * @module gulfPrompts
 */

const gulfPrompts = {
    /**
     * System prompts for AI models
     */
    systemPrompts: {
        /**
         * Marketing expert prompt for generating B2B content
         */
        marketingExpert: `أنت خبير تسويق B2B متخصص في أسواق دول الخليج العربي.

الخبرة:
- فهم عميق لثقافة الأعمال الخليجية
- إلمام بالسوق السعودي والإماراتي والكويتي والبحريني
- خبرة في التسويق الرقمي للشركات الصغيرة والمتوسطة
- معرفة بأفضل الممارسات في التواصل التجاري الخليجي

المهارات:
- كتابة رسائل تسويقية احترافية بالعربية الخليجية
- تحليل احتياجات العملاء وتقديم حلول مناسبة
- بناء علاقات تجارية طويلة الأمد
- استخدام البيانات والإحصائيات لدعم الحجج

الأسلوب:
- احترافي ولكن ودي
- مباشر وواضح
- محترم للثقافة المحلية
- يركز على القيمة والنتائج المحسوسة`,

        /**
         * Business analyst prompt for analyzing target businesses
         */
        businessAnalyst: `أنت محلل أعمال متخصص في تقييم الشركات الصغيرة والمتوسطة في منطقة الخليج.

المهام:
1. تحليل نقاط الضعف (Pain Points) للشركات المستهدفة
2. تحديد الفرص التجارية الممكنة
3. اقتراح النهج الأمثل للتواصل
4. تقييم مستوى النضج الرقمي للشركة

المخرجات المطلوبة:
- ملخص عن نشاط الشركة
- التحديات المحتملة التي تواجهها
- الحلول المقترحة
- أسلوب التواصل الموصى به
- درجة الأولوية (عالية/متوسطة/منخفضة)

المعايير:
- التحليل يعتمد على البيانات المتاحة
- يأخذ في الاعتبار السوق المحلي
- يراعي خصوصية كل قطاع
- يقدم توصيات عملية قابلة للتنفيذ`
    },

    /**
     * WhatsApp message templates
     */
    whatsapp: {
        /**
         * Initial outreach message for WhatsApp
         * Placeholders: {businessName}, {ownerName}, {service}
         */
        outreach: `السلام عليكم {ownerName} 👋

شفت نشاطكم في {businessName} وعجبني شغلكم.

عندي خدمة {service} ممكن تفيدكم في تطوير المبيعات.

تحب أرسلك تفاصيل أكثر؟`,

        /**
         * Follow-up message for WhatsApp after initial contact
         * Placeholders: {ownerName}, {service}
         */
        followUp: `مرحباً {ownerName}

أرسلت لك رسالة قبل كم يوم عن {service}.

لو مهتم نتكلم، أنا جاهز أوضحلك كيف نقدر نساعدكم.

متى يناسبك نتواصل؟`
    },

    /**
     * Email templates for professional B2B communication
     */
    email: {
        /**
         * Professional B2B email template
         */
        b2b: {
            /**
             * Email subject line templates
             * Placeholders: {businessName}, {benefit}
             */
            subject: [
                "فرصة تعاون مع {businessName}",
                "حل بسيط يزيد مبيعاتك 30%",
                "{ownerName}، عندي فكرة تهمك",
                "كيف تطور {businessName} رقمياً؟",
                "عرض خاص لـ {businessName}"
            ],

            /**
             * Email body template
             * Placeholders: {businessName}, {ownerName}, {service}, {benefit}, {senderName}, {senderCompany}
             */
            body: `السلام عليكم {ownerName}،

اسمحلي أعرف نفسي - أنا {senderName} من {senderCompany}.

تابعت نشاطكم في {businessName} ولاحظت إنكم عندكم إمكانيات كبيرة في السوق.

نحن نقدم {service} ساعدنا فيها شركات مشابهة في تحقيق {benefit}.

**ليش نحن؟**
✓ خبرة محلية في السوق الخليجي
✓ نتائج محسوسة وقابلة للقياس
✓ دعم فني مستمر بالعربي

يسعدني نتواصل ونتكلم أكثر عن كيف نقدر نساعدكم.

متى يناسبك مكالمة قصيرة؟

تحياتي،
{senderName}
{senderCompany}
📱 [رقم التواصل]
📧 [البريد الإلكتروني]`
        },

        /**
         * Follow-up email sequence (3 messages)
         */
        followUpSequence: [
            {
                /**
                 * First follow-up (Day 2-3): Gentle reminder
                 * Placeholders: {ownerName}, {businessName}, {service}
                 */
                day: 2,
                subject: "متابعة - {businessName}",
                message: `السلام عليكم {ownerName}،

أرسلت لك رسالة قبل يومين عن {service}.

أعرف إنك مشغول، بس حبيت أتأكد إن الرسالة وصلتك.

لو عندك أي استفسار، أنا جاهز أساعدك.

تحياتي،
{senderName}`
            },
            {
                /**
                 * Second follow-up (Day 5-7): Value-added with insights
                 * Placeholders: {ownerName}, {businessName}, {service}
                 */
                day: 5,
                subject: "معلومة تهمك عن {businessName}",
                message: `مرحباً {ownerName}،

شفت آخر إحصائية تقول إن 78% من الشركات في الخليج زادت مبيعاتها بعد التحول الرقمي.

وأنا متأكد إن {businessName} عندها فرصة كبيرة تستفيد من {service}.

شاركت في المرفق case study لشركة مشابهة حققت نتائج ممتازة.

متى نقدر نتكلم عن وضعكم؟

تحياتي،
{senderName}`
            },
            {
                /**
                 * Third follow-up (Day 10-14): Final follow-up with urgency
                 * Placeholders: {ownerName}, {businessName}, {service}
                 */
                day: 10,
                subject: "آخر فرصة - عرض خاص لـ {businessName}",
                message: `السلام عليكم {ownerName}،

هذي آخر رسالة مني عن {service}.

عندنا عرض خاص ينتهي نهاية الشهر - تخفيض 25% على الباقة الأولى.

لو مهتم تستفيد من العرض، خبرني خلال الأسبوع الجاي.

وإن ما كان الوقت مناسب حالياً، تشرفنا بالتواصل مستقبلاً.

بالتوفيق لـ {businessName}!

تحياتي،
{senderName}`
            }
        ]
    },

    /**
     * Social media templates
     */
    social: {
        /**
         * Instagram direct message templates
         */
        instagram: {
            /**
             * Cold DM for Instagram
             * Very short and casual, suitable for Instagram
             * Placeholders: {ownerName}, {businessName}, {service}
             */
            dm: `هلا {ownerName} 👋

شفت حساب {businessName} - محتوى رهيب! 🔥

عندي {service} ممكن يضاعف تفاعلكم.

مهتم تسمع أكثر؟`
        },

        /**
         * LinkedIn outreach templates
         */
        linkedin: {
            /**
             * LinkedIn connection request message
             * Professional tone for decision-makers
             * Placeholders: {ownerName}, {industry}, {service}
             */
            connectionRequest: `مرحباً {ownerName}،

تابعت نشاطكم في {industry} وأعجبني توجهكم الاحترافي.

نحن نشتغل مع شركات مثلكم في {service}.

يسعدني نتواصل ونتبادل الأفكار والخبرات.

تحياتي،
{senderName}`,

            /**
             * LinkedIn follow-up message after connection
             * Placeholders: {ownerName}, {businessName}, {service}, {benefit}
             */
            followUp: `شكراً {ownerName} على قبول الدعوة!

أحب أعرفك أكثر عن {service} اللي نقدمه.

ساعدنا شركات في قطاعكم تحقق {benefit}.

متى يناسبك نسوي meeting قصير؟

يمكن نتكلم 15-20 دقيقة بس.

تحياتي،
{senderName}`
        }
    },

    /**
     * Advertising copy for Gulf markets
     * Suitable for Google Ads, Meta Ads, LinkedIn Ads
     */
    ads: {
        /**
         * Headlines for ads (max 30 characters each)
         */
        headlines: [
            "ضاعف مبيعاتك اليوم",
            "حلول B2B احترافية",
            "زد أرباحك 3 أضعاف",
            "تحول رقمي سريع",
            "نتائج خلال 30 يوم",
            "خدمات خليجية مميزة",
            "طور شركتك الآن",
            "ROI مضمون 100%"
        ],

        /**
         * Ad body copy (max 90 characters each)
         */
        bodyCopy: [
            "خدمات B2B متخصصة للشركات الخليجية. نتائج حقيقية ومحسوسة.",
            "نساعدك تزيد مبيعاتك وتطور شركتك رقمياً. استشارة مجانية!",
            "حلول تسويق رقمي تناسب السوق الخليجي. جربنا اليوم!",
            "زد أرباحك مع خبراء التسويق الخليجي. عرض لفترة محدودة.",
            "تحول رقمي كامل لشركتك. دعم محلي بالعربي على مدار الساعة.",
            "احصل على عملاء جدد كل يوم. استراتيجية مجربة ونتائج مضمونة."
        ],

        /**
         * Call-to-action phrases
         */
        callToAction: [
            "اطلب استشارة مجانية",
            "ابدأ الآن",
            "تواصل معنا",
            "احجز موعدك",
            "جرب مجاناً",
            "اعرف المزيد",
            "سجل الآن",
            "احصل على عرض"
        ]
    },

    /**
     * Business analysis and intelligence prompts
     */
    analysis: {
        /**
         * Business summary and analysis prompt
         * Input: business name, industry, location, website (if available)
         * Output: pain points, opportunities, recommended approach
         */
        businessSummary: `قم بتحليل الشركة التالية وتقديم تقرير شامل:

**معلومات الشركة:**
- الاسم: {businessName}
- القطاع: {industry}
- الموقع: {location}
- الموقع الإلكتروني: {website}

**المطلوب:**

1. **نقاط الضعف المحتملة (Pain Points):**
   - ما هي التحديات التي قد تواجه هذه الشركة؟
   - أين يمكن أن تخسر عملاء أو مبيعات؟

2. **الفرص التجارية:**
   - كيف يمكن تحسين أدائها؟
   - ما هي الفرص غير المستغلة؟

3. **التوصيات:**
   - ما هو أفضل نهج للتواصل معهم؟
   - ما هي الخدمات التي قد تهمهم أكثر؟
   - ما هي درجة الأولوية (عالية/متوسطة/منخفضة)؟

4. **رسالة مخصصة:**
   - اقترح نص رسالة WhatsApp أو email مناسبة لهم

**ملاحظة:** التحليل يجب أن يأخذ في الاعتبار خصوصية السوق الخليجي وثقافة الأعمال المحلية.`
    },

    /**
     * Helper function to fill template placeholders
     * 
     * @param {string} template - The template string with placeholders
     * @param {Object} data - Object containing placeholder values
     * @returns {string} Template with filled placeholders
     * 
     * @example
     * const message = gulfPrompts.fillTemplate(
     *   gulfPrompts.whatsapp.outreach,
     *   {
     *     ownerName: "أحمد",
     *     businessName: "شركة النجاح",
     *     service: "التسويق الرقمي"
     *   }
     * );
     */
    fillTemplate: function(template, data) {
        if (typeof template !== 'string') {
            return template;
        }

        let result = template;
        
        // Replace all placeholders in the format {key}
        for (const [key, value] of Object.entries(data)) {
            const placeholder = `{${key}}`;
            result = result.split(placeholder).join(value || '');
        }
        
        return result;
    },

    /**
     * Get a random item from an array
     * Useful for selecting random headlines or ad copy
     * 
     * @param {Array} array - The array to select from
     * @returns {*} Random item from the array
     * 
     * @example
     * const headline = gulfPrompts.getRandomItem(gulfPrompts.ads.headlines);
     */
    getRandomItem: function(array) {
        if (!Array.isArray(array) || array.length === 0) {
            return null;
        }
        return array[Math.floor(Math.random() * array.length)];
    },

    /**
     * Generate complete outreach content for a business
     * 
     * @param {Object} business - Business information
     * @param {string} business.name - Business name
     * @param {string} business.ownerName - Owner name
     * @param {string} business.industry - Industry/sector
     * @param {Object} service - Service information
     * @param {string} service.name - Service name
     * @param {string} service.benefit - Main benefit
     * @param {Object} sender - Sender information
     * @param {string} sender.name - Sender name
     * @param {string} sender.company - Sender company
     * @returns {Object} Complete outreach content (WhatsApp, Email, LinkedIn, Instagram)
     * 
     * @example
     * const content = gulfPrompts.generateOutreach(
     *   { name: "شركة النجاح", ownerName: "أحمد", industry: "التجزئة" },
     *   { name: "التسويق الرقمي", benefit: "زيادة المبيعات 40%" },
     *   { name: "محمد", company: "حلول التسويق" }
     * );
     */
    generateOutreach: function(business, service, sender) {
        const data = {
            businessName: business.name,
            ownerName: business.ownerName,
            industry: business.industry,
            service: service.name,
            benefit: service.benefit,
            senderName: sender.name,
            senderCompany: sender.company
        };

        return {
            whatsapp: this.fillTemplate(this.whatsapp.outreach, data),
            email: {
                subject: this.fillTemplate(this.getRandomItem(this.email.b2b.subject), data),
                body: this.fillTemplate(this.email.b2b.body, data)
            },
            instagram: this.fillTemplate(this.social.instagram.dm, data),
            linkedin: {
                connectionRequest: this.fillTemplate(this.social.linkedin.connectionRequest, data),
                followUp: this.fillTemplate(this.social.linkedin.followUp, data)
            },
            followUpSequence: this.email.followUpSequence.map(fu => ({
                day: fu.day,
                subject: this.fillTemplate(fu.subject, data),
                message: this.fillTemplate(fu.message, data)
            }))
        };
    },

    /**
     * Get metadata about available templates
     * 
     * @returns {Object} Metadata about templates, channels, and markets
     */
    getMetadata: function() {
        return {
            version: "1.0.0",
            targetMarkets: ["Saudi Arabia 🇸🇦", "Kuwait 🇰🇼", "UAE 🇦🇪", "Bahrain 🇧🇭"],
            language: "Gulf Arabic (formal)",
            channels: ["WhatsApp", "Email", "LinkedIn", "Instagram"],
            templateCount: {
                whatsapp: 2,
                email: this.email.b2b.subject.length + 3,
                social: 3,
                ads: this.ads.headlines.length + this.ads.bodyCopy.length
            },
            features: [
                "Multi-channel templates",
                "Follow-up sequences",
                "Ad copy variations",
                "Business analysis prompts",
                "Template placeholder system",
                "Random content selection"
            ]
        };
    }
};

// Export for Node.js (CommonJS)
module.exports = gulfPrompts;
