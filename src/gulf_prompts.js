/**
 * Gulf Arabic Marketing Prompts
 * For B2B Lead Generation in GCC Markets (Saudi, Kuwait, UAE, Bahrain)
 * Ready for OpenAI, Mistral, and other AI APIs
 * 
 * Language: Gulf Arabic (Saudi/Kuwaiti/UAE/Bahraini dialect)
 * Tone: Professional, short, and realistic
 * Target Markets: Saudi Arabia, Kuwait, UAE, Bahrain
 * Use Case: B2B lead generation
 */

class GulfPrompts {
    constructor() {
        this.market = 'GCC';
        this.languages = ['ar-SA', 'ar-KW', 'ar-AE', 'ar-BH'];
        this.version = '1.0.0';
    }

    /**
     * Get WhatsApp outreach message template
     * @param {Object} params - Template parameters
     * @param {string} params.businessName - Target business name
     * @param {string} params.senderName - Sender's name
     * @param {string} params.companyName - Your company name
     * @param {string} params.serviceName - Service being offered
     * @param {string} params.benefit - Key benefit offered
     * @returns {string} WhatsApp message template
     */
    getWhatsAppOutreach(params = {}) {
        const {
            businessName = '${businessName}',
            senderName = '${senderName}',
            companyName = '${companyName}',
            serviceName = '${serviceName}',
            benefit = '${benefit}'
        } = params;

        return `السلام عليكم ${businessName} 👋

أنا ${senderName} من ${companyName}. شفت نشاطكم في ${serviceName} وحبيت أتواصل معاكم بخصوص فرصة تعاون.

عندنا حلول متخصصة تساعدكم في ${benefit}.

ممكن نتواصل ونناقش كيف نقدر نساعدكم؟

شكراً لوقتكم 🙏`;
    }

    /**
     * Get B2B email template with subject and body
     * @param {Object} params - Template parameters
     * @param {string} params.businessName - Target business name
     * @param {string} params.firstName - Contact first name
     * @param {string} params.companyName - Your company name
     * @param {string} params.serviceName - Service being offered
     * @param {string} params.senderName - Sender's name
     * @param {string} params.painPoint - Specific business challenge
     * @param {string} params.benefit - Key benefit offered
     * @returns {Object} Email template with subject and body
     */
    getB2BEmail(params = {}) {
        const {
            businessName = '${businessName}',
            firstName = '${firstName}',
            companyName = '${companyName}',
            serviceName = '${serviceName}',
            senderName = '${senderName}',
            painPoint = '${painPoint}',
            benefit = '${benefit}'
        } = params;

        const subjectOptions = [
            `حل مخصص لـ ${businessName} - ${serviceName}`,
            `فرصة تعاون مع ${companyName}`,
            `تطوير أعمال ${businessName} - ${serviceName}`,
            `${benefit} لشركتكم ${businessName}`
        ];

        const body = `السلام عليكم ورحمة الله ${firstName}،

أتمنى تكون بخير.

أنا ${senderName} من ${companyName}، وأكتب لك اليوم لأني شفت إمكانيات كبيرة في ${businessName}.

لاحظت إن فيه تحدي في ${painPoint}، وعندنا حلول مثبتة تساعد الشركات في ${benefit}.

**اللي نقدمه:**
• حلول متخصصة لقطاعكم
• نتائج ملموسة وقابلة للقياس
• دعم محلي باللغة العربية
• أسعار تنافسية

حاب نناقش كيف نقدر نساعدكم؟ ممكن نرتب مكالمة قصيرة (15 دقيقة) نتكلم فيها عن احتياجاتكم.

**الخطوة التالية:**
رد على هذا الإيميل أو تواصل معاي مباشرة وأنا أرتب لك وقت مناسب.

أشكر وقتك واهتمامك.

تحياتي،
${senderName}
${companyName}`;

        return {
            subjects: subjectOptions,
            subject: subjectOptions[0],
            body: body
        };
    }

    /**
     * Get follow-up sequence (3 messages)
     * @param {Object} params - Template parameters
     * @param {string} params.businessName - Target business name
     * @param {string} params.firstName - Contact first name
     * @param {string} params.companyName - Your company name
     * @param {string} params.senderName - Sender's name
     * @param {string} params.serviceName - Service being offered
     * @param {string} params.benefit - Key benefit offered
     * @returns {Object} Follow-up sequence with 3 messages
     */
    getFollowUpSequence(params = {}) {
        const {
            businessName = '${businessName}',
            firstName = '${firstName}',
            companyName = '${companyName}',
            senderName = '${senderName}',
            serviceName = '${serviceName}',
            benefit = '${benefit}'
        } = params;

        return {
            message1: {
                timing: '2-3 days after initial contact',
                subject: `متابعة - ${businessName}`,
                body: `السلام عليكم ${firstName}،

أتمنى تكون بخير. أكتب لك متابعة للإيميل اللي أرسلته قبل كم يوم.

أعرف إنك مشغول، بس حبيت أتأكد إن رسالتي وصلتك وإذا عندك وقت نتكلم عن ${serviceName}.

فيه شركات كثير في الخليج استفادت من حلولنا، وأنا متأكد إنكم بتستفيدون أيضاً.

ممكن نحدد مكالمة قصيرة؟

شكراً،
${senderName}`
            },
            message2: {
                timing: '1 week after message 1',
                subject: `قصة نجاح قد تهمك - ${businessName}`,
                body: `السلام عليكم ${firstName}،

حبيت أشاركك قصة نجاح لأحد عملائنا في قطاعكم.

**النتائج:**
• زيادة ${benefit} بنسبة 40%
• تحسين الكفاءة التشغيلية
• توفير وقت ومجهود الفريق

**التحدي كان:** نفس اللي تواجهونه أنتم اليوم.

لو حاب تعرف كيف حققنا هذي النتائج، أنا جاهز أشاركك التفاصيل في مكالمة سريعة.

هل الأسبوع القادم مناسب لك؟

تحياتي،
${senderName}
${companyName}`
            },
            message3: {
                timing: '2 weeks after message 2',
                subject: `آخر فرصة - عرض خاص لـ ${businessName}`,
                body: `السلام عليكم ${firstName}،

هذا آخر إيميل أرسله لك، وحبيت أعطيك فرصة أخيرة للاستفادة من عرضنا.

**عرض خاص - صالح لمدة 7 أيام:**
• استشارة مجانية (قيمتها 500$)
• تحليل احتياجات شركتكم
• خطة عمل مخصصة

هذا العرض لعدد محدود من الشركات المختارة، و${businessName} واحدة منها.

**آخر موعد للرد:** خلال 7 أيام من تاريخ هذا الإيميل.

لو مهتم، رد على هذا الإيميل بكلمة "نعم" وأنا أرتب لك كل شي.

لو مو مهتم حالياً، أتمنى لك التوفيق في أعمالك.

تحياتي،
${senderName}
${companyName}

ملاحظة: لو تفضل ما أتواصل معاك مستقبلاً، خبرني وأنا أحترم رغبتك.`
            }
        };
    }

    /**
     * Get Instagram DM template
     * @param {Object} params - Template parameters
     * @param {string} params.businessName - Target business name
     * @param {string} params.senderName - Sender's name
     * @param {string} params.companyName - Your company name
     * @param {string} params.serviceName - Service being offered
     * @returns {string} Instagram DM template
     */
    getInstagramDM(params = {}) {
        const {
            businessName = '${businessName}',
            senderName = '${senderName}',
            companyName = '${companyName}',
            serviceName = '${serviceName}'
        } = params;

        const templates = [
            `السلام عليكم! 👋

شفت محتواكم وعجبني جداً 🔥

أنا ${senderName} من ${companyName} - متخصصين في ${serviceName}.

ممكن نتعاون؟ 🤝`,
            
            `مرحباً ${businessName}! ✨

أعجبني اللي تسوونه 💯

عندنا حلول تساعدكم في ${serviceName}.

نتكلم؟ 📱`,
            
            `هلا والله! 👋

متابعكم من فترة وأشوف إن فيه فرصة تعاون 🎯

أنا من ${companyName} - ${serviceName}

إيش رأيك نتواصل؟ ☕️`
        ];

        return {
            templates: templates,
            default: templates[0]
        };
    }

    /**
     * Get LinkedIn outreach template
     * @param {Object} params - Template parameters
     * @param {string} params.firstName - Contact first name
     * @param {string} params.companyName - Your company name
     * @param {string} params.senderName - Sender's name
     * @param {string} params.specialty - Area of expertise
     * @param {string} params.industry - Target industry
     * @param {string} params.location - City/Country
     * @returns {Object} LinkedIn templates (connection request + follow-up)
     */
    getLinkedInOutreach(params = {}) {
        const {
            firstName = '${firstName}',
            companyName = '${companyName}',
            senderName = '${senderName}',
            specialty = '${specialty}',
            industry = '${industry}',
            location = '${location}'
        } = params;

        return {
            connectionRequest: {
                note: `أهلاً ${firstName}،

تشرفت بالتواصل معك. أنا متخصص في ${specialty} وشايف إن فيه فرصة للتعاون في ${industry}.

حاب نتواصل ونتبادل الخبرات.

تحياتي،
${senderName}`
            },
            followUpMessage: {
                subject: `شكراً على القبول ${firstName}`,
                body: `السلام عليكم ${firstName}،

شكراً على قبول طلب الإضافة 🙏

أنا ${senderName} من ${companyName}. نحن متخصصون في ${specialty} ونخدم شركات في ${industry} في ${location} والخليج.

**خبرتنا تشمل:**
• تطوير استراتيجيات نمو مستدامة
• حلول رقمية للشركات
• تحسين العمليات والإنتاجية

شفت ملفك الشخصي ولاحظت إنك نشيط في ${industry}. حاب نتناقش عن التحديات اللي تواجهونها وكيف نقدر نساعد.

متى يكون وقت مناسب لمكالمة قصيرة؟

تحياتي،
${senderName}
${companyName}`
            }
        };
    }

    /**
     * Get Gulf market ad templates
     * @param {Object} params - Template parameters
     * @param {string} params.serviceName - Service being offered
     * @param {string} params.industry - Target industry
     * @param {string} params.benefit - Key benefit offered
     * @returns {Object} Ad templates with headlines and copy variations
     */
    getGulfAds(params = {}) {
        const {
            serviceName = '${serviceName}',
            industry = '${industry}',
            benefit = '${benefit}'
        } = params;

        return {
            headlines: [
                'حلول رقمية للشركات في الخليج',
                'طور أعمالك مع خبراء التسويق',
                'نتائج ملموسة - بدون مبالغات',
                'احترافية - سرعة - جودة',
                'شريكك في النجاح الرقمي',
                `${serviceName} - للشركات الطموحة`,
                'من الفكرة إلى التنفيذ',
                'رؤية 2030 تبدأ من هنا 🇸🇦',
                'نمّي عملك في الخليج',
                'الحل الأمثل لشركتك'
            ],
            
            adCopyVariations: [
                {
                    title: 'نسخة مباشرة - للشركات الجادة',
                    copy: `**${serviceName} للشركات في ${industry}**

✅ نتائج مثبتة
✅ أسعار تنافسية
✅ دعم باللغة العربية
✅ ${benefit}

**احجز استشارة مجانية الآن**
👈 اضغط للتواصل`
                },
                
                {
                    title: 'نسخة بالأرقام - Data-Driven',
                    copy: `**ساعدنا +50 شركة في الخليج**

📊 زيادة ${benefit} بنسبة 40%
⚡ نتائج خلال 90 يوم
💰 عائد استثمار مضمون
🏆 تقييم 4.9/5.0

**${serviceName} - جرّب الفرق**
تواصل معنا اليوم 👇`
                },
                
                {
                    title: 'نسخة بالمشكلة والحل',
                    copy: `**تعاني من تحديات في ${industry}؟**

المشكلة: معظم الشركات تخسر فرص بسبب...
الحل: ${serviceName} من ${params.companyName || 'شركتنا'}

✨ ${benefit}
✨ دعم مستمر
✨ نتائج ملموسة

**استشارة مجانية - لفترة محدودة**
تواصل الآن 👇`
                },
                
                {
                    title: 'نسخة مع Social Proof',
                    copy: `**"أفضل استثمار سويناه في ${industry}"**
- مدير تنفيذي، شركة في الرياض

${serviceName} ساعد شركات رائدة في:
✅ ${benefit}
✅ تحسين الكفاءة
✅ زيادة المبيعات

**انضم لعملائنا الناجحين**
استشارة مجانية 👈 احجز الآن`
                },
                
                {
                    title: 'نسخة مع Urgency',
                    copy: `**⏰ عرض خاص - صالح لـ 48 ساعة فقط**

${serviceName} لشركات ${industry}

🎁 استشارة مجانية (قيمة 500$)
🎁 تحليل احتياجات شامل
🎁 خطة عمل مخصصة

**لأول 10 شركات فقط**
${benefit} مضمون أو نرجع فلوسك

👇 احجز مكانك الآن`
                }
            ],
            
            platformSpecific: {
                googleAds: {
                    headline1: 'حلول رقمية للشركات',
                    headline2: `${serviceName}`,
                    headline3: 'نتائج مضمونة',
                    description1: `${benefit} - أسعار تنافسية - دعم باللغة العربية`,
                    description2: 'استشارة مجانية لفترة محدودة. احجز الآن!'
                },
                
                metaAds: {
                    primary: `طور أعمالك مع ${serviceName}`,
                    headline: 'نتائج ملموسة للشركات في الخليج',
                    description: `${benefit} - استشارة مجانية`,
                    cta: 'احجز الآن'
                },
                
                linkedInAds: {
                    headline: `${serviceName} للشركات المحترفة`,
                    description: `نساعد شركات ${industry} في تحقيق ${benefit}. خبرة مثبتة وأرقام حقيقية.`,
                    cta: 'تعرف على المزيد'
                }
            }
        };
    }

    /**
     * Get business analysis prompt for AI
     * @param {Object} params - Template parameters
     * @param {string} params.businessName - Target business name
     * @param {string} params.industry - Target industry
     * @param {string} params.location - City/Country
     * @param {string} params.website - Business website
     * @param {string} params.socialMedia - Social media handles
     * @returns {Object} System prompt and instructions for AI
     */
    getBusinessAnalysisPrompt(params = {}) {
        const {
            businessName = '${businessName}',
            industry = '${industry}',
            location = '${location}',
            website = '${website}',
            socialMedia = '${socialMedia}'
        } = params;

        return {
            systemPrompt: `أنت خبير تحليل أعمال متخصص في السوق الخليجي (السعودية، الكويت، الإمارات، البحرين).

مهمتك: تحليل الأعمال المستهدفة وتقديم رؤى عميقة لمساعدة فريق المبيعات في إعداد عروض مخصصة.

خبرتك تشمل:
- فهم عميق لثقافة الأعمال الخليجية
- معرفة بالتحديات المشتركة في مختلف القطاعات
- القدرة على تحديد فرص النمو
- فهم رؤية 2030 وتأثيرها على الأعمال

استخدم اللغة العربية الفصحى الاحترافية مع المصطلحات التقنية بالإنجليزية عند الحاجة.`,

            userPrompt: `قم بتحليل شامل للعمل التالي:

**معلومات العمل:**
- اسم الشركة: ${businessName}
- القطاع: ${industry}
- الموقع: ${location}
- الموقع الإلكتروني: ${website}
- وسائل التواصل: ${socialMedia}

**المطلوب:**

1. **نظرة عامة:**
   - حجم الشركة المقدر
   - مستوى النضج الرقمي (1-10)
   - نقاط القوة الظاهرة

2. **التحديات المحتملة:**
   - التحديات الخاصة بالقطاع
   - فجوات رقمية ملاحظة
   - فرص التحسين

3. **فرص العمل:**
   - الخدمات التي قد يحتاجونها
   - الفوائد المتوقعة
   - عائد الاستثمار المقدر

4. **استراتيجية التواصل:**
   - أفضل قناة للتواصل
   - النبرة المناسبة
   - نقاط البيع الرئيسية
   - المخاوف المتوقعة

5. **توصيات العرض:**
   - هيكل العرض المقترح
   - السعر التقديري المناسب
   - شروط الدفع المفضلة
   - المدة الزمنية المتوقعة

**تنسيق الإخراج:**
قدم التحليل في صيغة JSON منظمة مع جميع الحقول المطلوبة.`,

            outputFormat: {
                businessAnalysis: {
                    overview: {
                        estimatedSize: 'small|medium|large',
                        digitalMaturity: 'number (1-10)',
                        strengths: ['array of strengths']
                    },
                    challenges: {
                        industrySpecific: ['array of challenges'],
                        digitalGaps: ['array of gaps'],
                        improvements: ['array of opportunities']
                    },
                    opportunities: {
                        neededServices: ['array of services'],
                        expectedBenefits: ['array of benefits'],
                        estimatedROI: 'string with percentage'
                    },
                    outreachStrategy: {
                        preferredChannel: 'whatsapp|email|linkedin|phone',
                        appropriateTone: 'formal|balanced|casual',
                        keySellingPoints: ['array of points'],
                        expectedConcerns: ['array of concerns']
                    },
                    proposalRecommendations: {
                        structure: 'string describing structure',
                        pricingRange: 'string with range',
                        paymentTerms: 'string',
                        timeline: 'string'
                    }
                }
            },

            exampleUsage: `// استخدام مع OpenAI
const analysis = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
    ],
    response_format: { type: "json_object" }
});`
        };
    }

    /**
     * Get all available prompt categories
     * @returns {Array} List of available prompt categories
     */
    getAvailableCategories() {
        return [
            {
                name: 'whatsappOutreach',
                description: 'رسائل WhatsApp للتواصل الأولي',
                method: 'getWhatsAppOutreach'
            },
            {
                name: 'b2bEmail',
                description: 'قوالب البريد الإلكتروني الاحترافية',
                method: 'getB2BEmail'
            },
            {
                name: 'followUpSequence',
                description: 'سلسلة المتابعة (3 رسائل)',
                method: 'getFollowUpSequence'
            },
            {
                name: 'instagramDM',
                description: 'رسائل Instagram المباشرة',
                method: 'getInstagramDM'
            },
            {
                name: 'linkedInOutreach',
                description: 'رسائل LinkedIn الاحترافية',
                method: 'getLinkedInOutreach'
            },
            {
                name: 'gulfAds',
                description: 'إعلانات السوق الخليجي',
                method: 'getGulfAds'
            },
            {
                name: 'businessAnalysis',
                description: 'تحليل الأعمال المستهدفة',
                method: 'getBusinessAnalysisPrompt'
            }
        ];
    }

    /**
     * Get common placeholder variables
     * @returns {Object} Object with placeholder descriptions
     */
    getPlaceholders() {
        return {
            businessName: 'اسم الشركة المستهدفة',
            firstName: 'الاسم الأول للشخص المستهدف',
            senderName: 'اسم المرسل',
            companyName: 'اسم شركتك',
            serviceName: 'اسم الخدمة المقدمة',
            specialty: 'مجال التخصص',
            industry: 'القطاع المستهدف',
            location: 'المدينة/البلد (الرياض، دبي، الكويت، إلخ)',
            painPoint: 'التحدي الخاص بالعمل',
            benefit: 'الفائدة الرئيسية المقدمة'
        };
    }

    /**
     * Generate example usage with sample data
     * @returns {Object} Example usage for all prompt types
     */
    getExampleUsage() {
        const sampleParams = {
            businessName: 'شركة الابتكار التقني',
            firstName: 'أحمد',
            senderName: 'محمد العلي',
            companyName: 'حلول الأعمال الرقمية',
            serviceName: 'التسويق الرقمي',
            specialty: 'التحول الرقمي',
            industry: 'التجزئة',
            location: 'الرياض',
            painPoint: 'انخفاض المبيعات الإلكترونية',
            benefit: 'زيادة المبيعات الإلكترونية بنسبة 40%'
        };

        return {
            whatsapp: this.getWhatsAppOutreach(sampleParams),
            email: this.getB2BEmail(sampleParams),
            followUp: this.getFollowUpSequence(sampleParams),
            instagram: this.getInstagramDM(sampleParams),
            linkedin: this.getLinkedInOutreach(sampleParams),
            ads: this.getGulfAds(sampleParams),
            analysis: this.getBusinessAnalysisPrompt(sampleParams)
        };
    }
}

module.exports = GulfPrompts;
