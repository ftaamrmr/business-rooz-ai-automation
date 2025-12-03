require('dotenv').config();

class MarketingAI {
    constructor() {
        this.openai = null;
        this.initOpenAI();
        this.industryTemplates = this.loadIndustryTemplates();
        this.gulfContext = this.loadGulfContext();
        this.englishContext = this.loadEnglishContext();
        this.marketData = this.loadRealMarketData();
    }

    initOpenAI() {
        try {
            const OpenAI = require('openai');
            this.openai = new OpenAI({
                apiKey: process.env.OPENAI_API_KEY,
            });
            console.log('✅ Enhanced Marketing AI initialized');
        } catch (error) {
            console.error('❌ Error initializing OpenAI:', error.message);
        }
    }

    loadIndustryTemplates() {
        return {
            restaurant: {
                industry: 'restaurant',
                painPoints: [
                    "الطلبات الإلكترونية تشكل 23% فقط من الإيرادات (المعدل في السوق 45%)",
                    "خسارة 67% من العملاء بسبب عدم وجود برنامج ولاء",
                    "هدر الطعام 15-20% بسبب إدارة المخزون اليدوية",
                    "تكلفة اكتساب العملاء ارتفعت 156% على منصات التوصيل",
                    "هامش الربح انخفض 8-12% بسبب عمولات المنصات العالية"
                ],
                solutions: [
                    "نظام POS متكامل مع الطلب الإلكتروني المباشر (تجنب عمولات 20-30%)",
                    "إدارة مخزون بالذكاء الاصطناعي (تقليل الهدر حتى 40%)",
                    "برنامج ولاء العملاء مع أتمتة WhatsApp",
                    "تسويق عبر وسائل التواصل مع تتبع العائد على الاستثمار",
                    "نظام تسعير ديناميكي حسب أنماط الطلب"
                ],
                benefits: [
                    "زيادة الطلبات المباشرة 67% خلال 3 أشهر",
                    "هامش الربح يرتفع 15-25% مع تقليل الاعتماد على المنصات",
                    "معدل الاحتفاظ بالعملاء يزيد 89% مع برنامج الولاء",
                    "هدر الطعام ينخفض 35% مع الإدارة الذكية",
                    "عائد الاستثمار التسويقي يزيد 234% مع الحملات الموجهة"
                ],
                localContext: "سوق المطاعم في دبي 2.8 مليار دولار مع 78% من المستهلكين يطلبون أونلاين أسبوعياً",
                urgency: "المطاعم ذات الحضور الرقمي تنمو 156% أسرع، 34% ممن لا يتكيفون يغلقون خلال سنتين",
                caseStudy: "مطعم النخيل دبي: الإيرادات زادت 189% خلال 6 أشهر بعد تطبيق النظام الرقمي"
            },
            automotive: {
                industry: 'automotive',
                painPoints: [
                    "الحجز اليدوي يسبب خسارة 43% من الفرص",
                    "توقف المركبات 23% بسبب الصيانة غير المجدولة",
                    "معدل فقدان العملاء 56% بسبب بطء الاستجابة",
                    "تكاليف الوقود تتجاوز الميزانية 18% بدون تحسين المسارات",
                    "خسارة إيرادات 2,300 دولار شهرياً لكل مركبة بسبب عدم الكفاءة"
                ],
                solutions: [
                    "نظام حجز آلي مع التوفر الفوري",
                    "صيانة تنبؤية مع مستشعرات IoT",
                    "واجهة WhatsApp Business للدعم الفوري",
                    "تحسين المسارات بالذكاء الاصطناعي لكفاءة الوقود",
                    "تسعير ديناميكي حسب الطلب وتحليل المنافسين"
                ],
                benefits: [
                    "كفاءة الحجز ترتفع 78% مع النظام الآلي",
                    "تكاليف الصيانة تنخفض 34% مع الجدولة التنبؤية",
                    "رضا العملاء يرتفع من 6.2 إلى 8.7 من 10",
                    "تكاليف الوقود تنخفض 22% مع التوجيه الذكي",
                    "الإيرادات لكل مركبة ترتفع 1,890 دولار شهرياً في المتوسط"
                ],
                localContext: "سوق تأجير السيارات في الخليج 8.5 مليار دولار، ينمو 23% سنوياً مع 89% لا يزال يدوياً",
                urgency: "Careem وUber يسيطران على 67% من السوق، اللاعبون التقليديون يجب أن يتحولوا رقمياً أو يخسرون",
                caseStudy: "شركة الرياض للنقل: استخدام الأسطول زاد 145% بعد تطبيق النظام الرقمي"
            },
            retail: {
                industry: 'retail',
                painPoints: [
                    "المبيعات التقليدية انخفضت 34% منذ 2020، الإلكترونية فقط 12% من الإيرادات",
                    "نفاد المخزون 28% بسبب الإدارة اليدوية",
                    "القيمة مدى الحياة للعميل انخفضت 45% بدون تخصيص",
                    "67% من ميزانية التسويق مهدرة بسبب عدم الاستهداف",
                    "خسارة 89% من العملاء المحتملين الذين يتصفحون لكن لا يشترون"
                ],
                solutions: [
                    "تجارة إلكترونية متعددة القنوات مع مزامنة المخزون الفورية",
                    "محرك تخصيص بالذكاء الاصطناعي لتوصيات المنتجات",
                    "منصة بيانات العملاء مع تتبع السلوك",
                    "تسويق آلي عبر البريد وWhatsApp مع التقسيم",
                    "تكامل التجارة الاجتماعية (Instagram Shop، TikTok Shop)"
                ],
                benefits: [
                    "مساهمة الإيرادات الإلكترونية ترتفع من 12% إلى 67% خلال 8 أشهر",
                    "معدل دوران المخزون يزيد 156% مع التنبؤ بالطلب",
                    "القيمة مدى الحياة للعميل ترتفع 234% مع التخصيص",
                    "عائد الاستثمار التسويقي يزيد 445% مع الحملات الموجهة",
                    "معدل التحويل يرتفع من 1.2% إلى 4.8% مع التحسين"
                ],
                localContext: "سوق التجزئة في الخليج 58.3 مليار دولار، اختراق التجارة الإلكترونية 19.6% مقابل 23.4% عالمياً",
                urgency: "Noon وAmazon.ae يسيطران على 78% من التجارة الإلكترونية، التجار المستقلون يخسرون 23% من حصة السوق سنوياً",
                caseStudy: "متجر الإلكترونيات الكويت: الإيرادات زادت 267% خلال سنة مع استراتيجية متعددة القنوات"
            },
            professional: {
                industry: 'professional',
                painPoints: [
                    "اكتساب العملاء 89% من الإحالات، النمو محدود 12% سنوياً",
                    "معدل قبول العروض فقط 23% بسبب العملية اليدوية",
                    "الوقت المستغرق في الإدارة 45% من ساعات العمل الإجمالية",
                    "متوسط قيمة المشروع راكد بسبب عدم وجود تموضع قيمة",
                    "فقدان العملاء 34% بسبب ضعف المتابعة والتواصل"
                ],
                solutions: [
                    "موقع احترافي مع عرض الأعمال والشهادات",
                    "نظام CRM مع رعاية العملاء الآلية",
                    "نظام حجز إلكتروني مع تكامل التقويم",
                    "أتمتة العروض مع التسعير الديناميكي",
                    "استراتيجية تسويق محتوى للريادة الفكرية"
                ],
                benefits: [
                    "توليد العملاء المحتملين يزيد 289% مع الحضور الرقمي",
                    "معدل قبول العروض يرتفع من 23% إلى 67%",
                    "الوقت الإداري ينخفض 56% مع الأتمتة",
                    "متوسط قيمة المشروع يزيد 134% مع التموضع الأفضل",
                    "معدل الاحتفاظ بالعملاء يرتفع إلى 89% مع المتابعة المنهجية"
                ],
                localContext: "سوق الخدمات المهنية في الخليج 22.1 مليار دولار، فقط 34% رقمي بالكامل",
                urgency: "المستقلون والوكالات الرقمية نمت 456% بعد الجائحة، المستشارون التقليديون يخسرون عملاء",
                caseStudy: "مكتب استشارات قانونية دبي: قاعدة العملاء زادت 345% خلال 10 أشهر مع التحول الرقمي"
            },
            healthcare: {
                industry: 'healthcare',
                painPoints: [
                    "معدل عدم الحضور 34% بسبب الحجز اليدوي",
                    "وقت انتظار المريض 67 دقيقة في المتوسط، الرضا 5.8 من 10",
                    "التكلفة الإدارية 23% من الإيرادات بسبب الأوراق",
                    "معدل متابعة المرضى فقط 45% بسبب التتبع اليدوي",
                    "خسارة إيرادات 3,400 دولار شهرياً بسبب عدم كفاءة الجدولة"
                ],
                solutions: [
                    "نظام مواعيد إلكتروني مع تذكيرات آلية",
                    "سجلات مرضى رقمية مع نسخ احتياطي سحابي",
                    "منصة طب عن بُعد للاستشارات والمتابعة",
                    "تكامل WhatsApp لتواصل المرضى",
                    "نظام إدارة العيادة مع الفوترة الآلية"
                ],
                benefits: [
                    "معدل عدم الحضور ينخفض إلى 12% مع التذكيرات الآلية",
                    "رضا المرضى يرتفع إلى 8.9 من 10 مع تقليل الانتظار",
                    "التكلفة الإدارية تنخفض 45% مع الرقمنة",
                    "معدل متابعة المرضى يرتفع إلى 89% مع التتبع المنهجي",
                    "إيرادات العيادة ترتفع 67% مع كفاءة الجدولة الأفضل"
                ],
                localContext: "سوق الرعاية الصحية في الخليج 28.7 مليار دولار، اعتماد الطب عن بُعد زاد 400% بعد الجائحة",
                urgency: "89% من المرضى يتوقعون خدمات رقمية، العيادات بدون رقمنة ستخسر 45% من المرضى",
                caseStudy: "عيادة الصحة الرياض: عدد المرضى زاد 178% مع نظام المواعيد الرقمي"
            },
            education: {
                industry: 'education',
                painPoints: [
                    "معدل الاحتفاظ بالطلاب فقط 67% بسبب ضعف التفاعل",
                    "عبء العمل الإداري 56% من وقت الموظفين الإجمالي",
                    "معدل إتمام الدورات 34% بدون تتبع مناسب",
                    "الإيرادات لكل طالب راكدة بسبب عدم وجود نظام البيع الإضافي",
                    "المنافسة مع المنصات الإلكترونية تسببت في خسارة 23% من الطلاب"
                ],
                solutions: [
                    "نظام إدارة التعلم مع التلعيب",
                    "بوابة الطلاب مع تتبع التقدم والشهادات",
                    "سير عمل إداري آلي",
                    "منصة تعلم هجينة مع جلسات مباشرة ومسجلة",
                    "نظام تواصل أولياء الأمور مع تقارير التقدم"
                ],
                benefits: [
                    "الاحتفاظ بالطلاب يرتفع إلى 89% مع تجربة رقمية جذابة",
                    "الكفاءة الإدارية تزيد 67% مع الأتمتة",
                    "معدل إتمام الدورات يرتفع إلى 78% مع التتبع المناسب",
                    "الإيرادات لكل طالب ترتفع 145% مع فرص البيع الإضافي",
                    "ميزة تنافسية مع تجربة تعلم حديثة"
                ],
                localContext: "سوق التعليم الإلكتروني في الخليج 12.4 مليار دولار، اختراق التعلم الإلكتروني 78% بعد الجائحة",
                urgency: "طلاب الجيل Z يتوقعون التعليم الرقمي أولاً، المؤسسات التقليدية تخسر 34% من التسجيلات",
                caseStudy: "مركز التميز التعليمي جدة: التسجيلات زادت 234% مع منصة التعلم الهجينة"
            },
            realestate: {
                industry: 'realestate',
                painPoints: [
                    "معدل تحويل العملاء المحتملين فقط 8% بسبب ضعف نظام المتابعة",
                    "معدل عدم حضور معاينة العقار 45% بدون جدولة مناسبة",
                    "دورة المبيعات 8.5 أشهر في المتوسط، طويلة جداً مقابل المنافسين 5.2 أشهر",
                    "67% من ميزانية التسويق غير قابلة للقياس من حيث العائد",
                    "قاعدة بيانات العملاء غير منظمة، خسارة 56% من الأعمال المتكررة"
                ],
                solutions: [
                    "نظام CRM عقاري مع تقييم العملاء المحتملين والرعاية الآلية",
                    "تقنية الجولات الافتراضية مع عرض 360° للعقار",
                    "تكامل WhatsApp Business للتواصل الفوري مع العملاء",
                    "لوحة تحليل السوق مع توصيات التسعير",
                    "الإعلان عبر وسائل التواصل مع حملات إعادة الاستهداف"
                ],
                benefits: [
                    "معدل تحويل العملاء المحتملين يرتفع إلى 34% مع المتابعة المنهجية",
                    "معدل حضور معاينة العقار يرتفع إلى 89% مع الجدولة الأفضل",
                    "دورة المبيعات تنخفض إلى 5.8 أشهر مع العملية المبسطة",
                    "عائد الاستثمار التسويقي يزيد 267% مع الحملات الموجهة",
                    "الأعمال المتكررة ترتفع 178% مع قاعدة بيانات العملاء المنظمة"
                ],
                localContext: "سوق العقارات في الخليج 420 مليار دولار، اعتماد PropTech فقط 34% مقابل 67% عالمياً",
                urgency: "Property Finder وBayut يسيطران على 78% من البحث الإلكتروني عن العقارات، الوكلاء المستقلون يخسرون الظهور",
                caseStudy: "وكيل عقارات أبوظبي: حجم المبيعات زاد 289% خلال سنة مع الأدوات الرقمية"
            }
        };
    }

    loadRealMarketData() {
        return {
            gulf: {
                digitalAdoption: "99% من سكان الخليج يستخدمون الهواتف الذكية، 87% يتسوقون إلكترونياً",
                ecommerceGrowth: "نمو 28% سنوياً، تصل إلى 50 مليار دولار في 2024",
                paymentMethods: "Apple Pay (52%), Mada (48%), Tabby (35%), Tamara (32%), بطاقات ائتمانية 78%",
                socialMedia: "Instagram 32M مستخدم في الخليج، WhatsApp Business 15M+ منشأة",
                marketSize: {
                    restaurant: "سوق المطاعم 18.2 مليار دولار، نمو سنوي 12%",
                    automotive: "قطاع النقل 52.8 مليار دولار، مشاركة الرحلات 8.5 مليار",
                    retail: "سوق التجزئة 58.3 مليار دولار، اعتماد القنوات المتعددة 67%",
                    healthcare: "الرعاية الصحية 28.7 مليار دولار، نمو الطب عن بُعد 400%",
                    education: "EdTech بقيمة 12.4 مليار دولار، اختراق التعلم الإلكتروني 78%",
                    realestate: "سوق العقارات 420 مليار دولار، اعتماد PropTech 34%",
                    professional: "الخدمات المهنية 22.1 مليار دولار، الرقمنة 45%"
                },
                trends: {
                    current: "اعتماد الذكاء الاصطناعي 156%، التركيز على الاستدامة 89%, تفضيل العلامات المحلية 72%",
                    emerging: "التجارة الصوتية، التجارة الاجتماعية، التخصيص الفائق",
                    challenges: "فجوات المعرفة الرقمية، تنوع البنية التحتية، الامتثال التنظيمي"
                }
            },
            global: {
                digitalTransformation: "70% of companies accelerated digital initiatives post-2020",
                aiAdoption: "35% of businesses use AI for customer engagement",
                mobileCommerce: "Mobile accounts for 54% of all e-commerce traffic",
                customerExpectations: "73% expect personalized experiences, 67% want instant responses",
                marketTrends: {
                    restaurant: "$4.2T global food service, 8.7% digital ordering growth",
                    automotive: "$2.9T automotive market, 23% EV adoption rate",
                    retail: "$26.7T global retail, 19.6% e-commerce penetration",
                    healthcare: "$8.3T healthcare market, 38% digital health adoption",
                    education: "$6.2T education market, 15.3% EdTech penetration",
                    realestate: "$3.7T real estate, 12% PropTech adoption",
                    professional: "$1.8T professional services, 42% automation rate"
                }
            }
        };
    }

    loadEnglishContext() {
        return {
            businessCulture: {
                relationship: "Professional relationships built on trust and reliability",
                communication: "Direct, clear, and results-oriented communication preferred",
                decision: "Data-driven decision making with ROI focus",
                trust: "Credibility established through proven results and testimonials",
                social: "LinkedIn recommendations and case studies drive credibility"
            },
            marketTrends: {
                digital: "Mobile-first approach with 54% of traffic from mobile devices",
                ecommerce: "19.6% of retail sales happen online, growing 14.3% annually",
                social: "LinkedIn for B2B, Instagram for B2C, WhatsApp for customer service",
                payment: "Credit cards, digital wallets, and BNPL solutions dominate",
                delivery: "Same-day delivery expected, sustainability increasingly important"
            },
            challenges: {
                competition: "Intense global competition requiring differentiation",
                technology: "Rapid tech evolution demands continuous adaptation",
                regulation: "GDPR, data privacy, and compliance requirements",
                talent: "Skills gap in digital marketing and technology"
            }
        };
    }

    loadGulfContext() {
        return {
            businessCulture: {
                relationship: "العلاقات الشخصية أساسية في الأعمال الخليجية",
                communication: "التواصل المباشر والمحترم مفضل مع الحفاظ على اللباقة",
                decision: "القرارات التجارية غالباً تشمل العائلة أو الشركاء",
                trust: "بناء الثقة هو مفتاح النجاح في الأعمال",
                social: "الدليل الاجتماعي والشهادات لها تأثير كبير"
            },
            marketTrends: {
                digital: "99% من سكان الخليج يستخدمون الهواتف الذكية",
                ecommerce: "التجارة الإلكترونية تنمو 28% سنوياً",
                social: "Instagram وWhatsApp المنصات الرئيسية",
                payment: "Apple Pay وMada وTabby وTamara طرق الدفع الشائعة",
                delivery: "التوصيل في نفس اليوم أصبح توقعاً معتاداً"
            },
            challenges: {
                infrastructure: "سرعة الإنترنت تختلف عبر المناطق",
                education: "المعرفة الرقمية لا تزال في تطور",
                regulation: "اللوائح الحكومية للأعمال الرقمية",
                competition: "المنافسة الشديدة بين الشركات الأجنبية والمحلية"
            }
        };
    }

    async generateIndustrySpecificContent(lead, industry, yourService, campaignStyle = 'balanced', language = 'gulf') {
        if (!this.openai) {
            throw new Error('OpenAI not configured');
        }

        const template = this.industryTemplates[industry];
        if (!template) {
            throw new Error(`Industry template not found: ${industry}`);
        }

        const prompt = this.buildIndustryPrompt(lead, template, yourService, campaignStyle, language);
        
        try {
            const completion = await this.openai.chat.completions.create({
                model: process.env.OPENAI_MODEL || "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content: this.getSystemPrompt(industry, campaignStyle, language)
                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                max_tokens: 3000,
                temperature: 0.6
            });

            return this.parseIndustryResponse(completion.choices[0].message.content);
        } catch (error) {
            console.error('Error generating industry-specific content:', error);
            return null;
        }
    }

    getSystemPrompt(industry, campaignStyle, language = 'gulf') {
        const styleInstructions = {
            conservative: {
                gulf: "محترم، مهني، وبناء الثقة تدريجياً. التركيز على بناء العلاقات طويلة المدى.",
                english: "Respectful, professional, and build trust gradually. Focus on long-term relationship building."
            },
            balanced: {
                gulf: "نهج عمل متوازن بين المهنية والود.",
                english: "Standard business approach with balanced professionalism and approachability."
            },
            aggressive: {
                gulf: "مباشر، خلق إلحاح، والتركيز على اتخاذ إجراء فوري. التأكيد على المزايا التنافسية.",
                english: "Direct, create urgency, and focus on immediate action. Emphasize competitive advantages."
            }
        };

        const marketContext = language === 'gulf' ? this.gulfContext : this.englishContext;
        const marketData = this.marketData[language === 'gulf' ? 'gulf' : 'global'];

        if (language === 'gulf') {
            return `أنت متخصص تسويق B2B في منطقة الخليج خبير في قطاع ${industry}.

الخبرة الصناعية: فهم عميق لتحديات أعمال ${industry} في دول الخليج
الوعي الثقافي: أسلوب التواصل التجاري الخليجي والفروق الثقافية
السوق المحلي: الاتجاهات الحالية والتحديات والفرص في سوق ${industry} الخليجي

أسلوب التواصل: ${styleInstructions[campaignStyle].gulf}

بيانات السوق الفعلية:
- التبني الرقمي: ${marketData.digitalAdoption}
- نمو التجارة الإلكترونية: ${marketData.ecommerceGrowth}
- طرق الدفع: ${marketData.paymentMethods}
- وسائل التواصل: ${marketData.socialMedia}
- حجم سوق ${industry}: ${marketData.marketSize[industry]}

المتطلبات:
1. الكتابة باللغة العربية الخليجية مع المصطلحات التقنية بالإنجليزية عند الحاجة
2. استخدام أسلوب التواصل التجاري الخليجي (محترم، يركز على العلاقات)
3. تضمين نقاط الألم الخاصة بالصناعة والحلول
4. الإشارة إلى السياق والاتجاهات المحلية مع بيانات حقيقية
5. إنشاء عرض قيمة مقنع مع إحصائيات
6. تضمين الدليل الاجتماعي ومؤشرات المصداقية
7. استخدام بيانات السوق الحالية لخلق الإلحاح
8. التركيز على العائد على الاستثمار والنتائج القابلة للقياس

صيغة المخرجات:
إنشاء قوالب البريد الإلكتروني وWhatsApp مع:
- سطر موضوع مقنع مع إحصائيات
- نقاط ألم خاصة بالصناعة مع بيانات
- حلول مخصصة مع فوائد قابلة للقياس
- سياق السوق المحلي مع الاتجاهات الحالية
- دعوة واضحة وملحة للعمل
- نبرة احترافية وودودة
- دليل اجتماعي ومراجع دراسات الحالة`;
        } else {
            return `You are an expert B2B marketing specialist focused on the ${industry} sector.

INDUSTRY EXPERTISE: Deep understanding of ${industry} business challenges globally
CULTURAL AWARENESS: International business communication and cultural nuances
MARKET INTELLIGENCE: Current trends, challenges, and opportunities in global ${industry} market

COMMUNICATION STYLE: ${styleInstructions[campaignStyle].english}

REAL MARKET DATA:
- Digital Transformation: ${marketData.digitalTransformation}
- AI Adoption: ${marketData.aiAdoption}
- Mobile Commerce: ${marketData.mobileCommerce}
- Customer Expectations: ${marketData.customerExpectations}
- ${industry} Market Size: ${marketData.marketTrends[industry]}

REQUIREMENTS:
1. Write in professional English with industry-specific terminology
2. Use international business communication style (direct, results-focused)
3. Include specific industry pain points with supporting data
4. Reference global market context and trends with real statistics
5. Create compelling value propositions with measurable benefits
6. Include social proof and credibility indicators
7. Use current market data to create urgency
8. Focus on ROI and measurable outcomes

OUTPUT FORMAT:
Generate both EMAIL and WHATSAPP templates with:
- Compelling subject lines with statistics
- Industry-specific pain points backed by data
- Tailored solutions with quantified benefits
- Global market context with current trends
- Clear and urgent call-to-action
- Professional and results-oriented tone
- Social proof and case study references`;
        }
    }

    buildIndustryPrompt(lead, template, yourService, campaignStyle, language = 'gulf') {
        const marketData = this.marketData[language === 'gulf' ? 'gulf' : 'global'];
        const context = language === 'gulf' ? this.gulfContext : this.englishContext;
        
        if (language === 'gulf') {
            return `أنشئ محتوى تسويقي مخصص لهذا العمل ${template.localContext}:

تفاصيل العمل:
- الاسم: ${lead.name}
- العنوان: ${lead.address}
- الهاتف: ${lead.phone}
- التقييم: ${lead.rating || 'غير متوفر'}
- الموقع الإلكتروني: ${lead.website || 'لا يوجد موقع'}

خدمتك: ${yourService}

سياق الصناعة:
نقاط الألم: ${template.painPoints.join('، ')}
الحلول: ${template.solutions.join('، ')}
الفوائد: ${template.benefits.join('، ')}
السياق المحلي: ${template.localContext}
إلحاح السوق: ${template.urgency}

بيانات السوق الفعلية:
- حجم السوق: ${marketData.marketSize[template.industry] || marketData.marketSize.professional}
- الاتجاهات الحالية: ${marketData.trends.current}
- التحديات: ${marketData.trends.challenges}

ثقافة الأعمال الخليجية:
- التواصل يركز على العلاقات
- الثقة والمصداقية في غاية الأهمية
- الدليل الاجتماعي له تأثير كبير
- WhatsApp هو التواصل التجاري الأساسي
- فهم السوق المحلي حاسم

أسلوب الحملة: ${campaignStyle}

يرجى إنشاء:
1. قالب البريد الإلكتروني مع سطر موضوع مقنع وإحصائيات
2. قالب WHATSAPP للمتابعة الودية

اجعله محدداً لأعمالهم، ضمّن السياق الخليجي مع بيانات حقيقية، وأنشئ إلحاحاً بناءً على اتجاهات السوق الحالية. استخدم الإحصائيات والبيانات لزيادة المصداقية.`;
        } else {
            return `Create personalized marketing content for this ${template.localContext} business:

BUSINESS DETAILS:
- Name: ${lead.name}
- Address: ${lead.address}
- Phone: ${lead.phone}
- Rating: ${lead.rating || 'N/A'}
- Website: ${lead.website || 'No website'}

YOUR SERVICE: ${yourService}

INDUSTRY CONTEXT:
Pain Points: ${template.painPoints.join(', ')}
Solutions: ${template.solutions.join(', ')}
Benefits: ${template.benefits.join(', ')}
Local Context: ${template.localContext}
Market Urgency: ${template.urgency}

REAL MARKET DATA:
- Market Size: ${marketData.marketTrends[template.industry] || marketData.marketTrends.professional}
- Digital Transformation: ${marketData.digitalTransformation}
- Customer Expectations: ${marketData.customerExpectations}

BUSINESS CULTURE:
- Results-oriented communication
- Trust built through proven ROI
- Data-driven decision making
- Professional networking important
- Global market understanding crucial

CAMPAIGN STYLE: ${campaignStyle}

Please generate:
1. EMAIL TEMPLATE with compelling subject line and statistics
2. WHATSAPP TEMPLATE for professional follow-up

Make it specific to their business, include relevant market data, and create urgency based on current trends. Use statistics and data to increase credibility and conversion probability.`;
        }
    }

    parseIndustryResponse(response) {
        const sections = response.split(/(?:EMAIL TEMPLATE|WHATSAPP TEMPLATE)/i);
        
        let emailContent = '';
        let whatsappContent = '';
        
        if (sections.length >= 2) {
            emailContent = sections[1]?.trim() || '';
            whatsappContent = sections[2]?.trim() || '';
        } else {
            // Fallback if format is different
            const lines = response.split('\n');
            let currentSection = '';
            
            for (const line of lines) {
                if (line.toLowerCase().includes('email')) {
                    currentSection = 'email';
                    continue;
                } else if (line.toLowerCase().includes('whatsapp')) {
                    currentSection = 'whatsapp';
                    continue;
                }
                
                if (currentSection === 'email' && line.trim()) {
                    emailContent += line + '\n';
                } else if (currentSection === 'whatsapp' && line.trim()) {
                    whatsappContent += line + '\n';
                }
            }
        }

        return {
            email: this.cleanTemplate(emailContent),
            whatsapp: this.cleanTemplate(whatsappContent),
            industry: true,
            generated: new Date().toISOString()
        };
    }

    cleanTemplate(content) {
        return content
            .replace(/^[^\w\n]*/, '') // Remove leading non-word characters
            .replace(/EMAIL TEMPLATE:?/gi, '')
            .replace(/WHATSAPP TEMPLATE:?/gi, '')
            .trim();
    }

    async generateMultiTouchSequence(lead, industry, yourService, language = 'gulf') {
        const sequences = {
            email1: await this.generateIndustrySpecificContent(lead, industry, yourService, 'conservative', language),
            email2: await this.generateFollowUpContent(lead, industry, yourService, 'balanced', language),
            email3: await this.generateClosingContent(lead, industry, yourService, 'aggressive', language),
            whatsapp: await this.generateIndustrySpecificContent(lead, industry, yourService, 'balanced', language)
        };

        return sequences;
    }

    async generateFollowUpContent(lead, industry, yourService, style, language = 'gulf') {
        if (!this.openai) {
            throw new Error('OpenAI not configured');
        }

        const template = this.industryTemplates[industry];
        const marketData = this.marketData[language === 'gulf' ? 'gulf' : 'global'];
        
        const prompt = language === 'gulf' ?
            `أنشئ بريد متابعة لـ ${lead.name} في صناعة ${industry}.
            هذه نقطة الاتصال الثانية - افترض أنهم شاهدوا البريد الأول.
            ركز على دراسات الحالة والدليل الاجتماعي والفوائد المحددة مع البيانات.
            الخدمة: ${yourService}
            الأسلوب: ${style}
            ضمّن أمثلة السوق الخليجي وقصص النجاح مع إحصائيات حقيقية.
            بيانات السوق: ${marketData.marketSize[industry]}
            استخدم الإلحاح بناءً على الاتجاهات: ${marketData.trends.current}` :
            `Create a follow-up email for ${lead.name} in ${industry} industry.
            This is the SECOND touch point - assume they've seen your first email.
            Focus on case studies, social proof, and specific benefits with data.
            Service: ${yourService}
            Style: ${style}
            Include market examples and success stories with real statistics.
            Market data: ${marketData.marketTrends[industry]}
            Use urgency based on trends: ${marketData.digitalTransformation}`;

        try {
            const completion = await this.openai.chat.completions.create({
                model: process.env.OPENAI_MODEL || "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content: this.getSystemPrompt(industry, style, language) +
                                "\n\nFOCUS: This is a FOLLOW-UP email. Include case studies, testimonials, and specific ROI examples."
                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                max_tokens: 3000,
                temperature: 0.6
            });

            return this.parseIndustryResponse(completion.choices[0].message.content);
        } catch (error) {
            console.error('Error generating follow-up content:', error);
            return null;
        }
    }

    async generateClosingContent(lead, industry, yourService, style, language = 'gulf') {
        if (!this.openai) {
            throw new Error('OpenAI not configured');
        }

        const template = this.industryTemplates[industry];
        const marketData = this.marketData[language === 'gulf' ? 'gulf' : 'global'];
        
        const prompt = language === 'gulf' ?
            `أنشئ بريد ختامي لـ ${lead.name} في صناعة ${industry}.
            هذه نقطة الاتصال الأخيرة - اخلق إلحاحاً وخطوات تالية واضحة.
            ضمّن عروضاً محدودة الوقت وعكس المخاطر ودعوة قوية للعمل.
            الخدمة: ${yourService}
            الأسلوب: ${style}
            اجعله مقنعاً لصانعي القرار في الأعمال الخليجية مع بيانات ملموسة.
            استخدم إحصائيات: ${marketData.marketSize[industry]}
            أكد على الخسارة من عدم التصرف الآن.` :
            `Create a closing email for ${lead.name} in ${industry} industry.
            This is the FINAL touch point - create urgency and clear next steps.
            Include limited-time offers, risk reversal, and strong CTA.
            Service: ${yourService}
            Style: ${style}
            Make it compelling for business decision makers with concrete data.
            Use statistics: ${marketData.marketTrends[industry]}
            Emphasize the cost of inaction.`;

        try {
            const completion = await this.openai.chat.completions.create({
                model: process.env.OPENAI_MODEL || "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content: this.getSystemPrompt(industry, style, language) +
                                "\n\nFOCUS: This is a CLOSING email. Create maximum urgency, include guarantees, and make the next step crystal clear."
                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                max_tokens: 3000,
                temperature: 0.6
            });

            return this.parseIndustryResponse(completion.choices[0].message.content);
        } catch (error) {
            console.error('Error generating closing content:', error);
            return null;
        }
    }

    getIndustryInsights(industry) {
        const template = this.industryTemplates[industry];
        if (!template) return null;

        return {
            painPoints: template.painPoints,
            solutions: template.solutions,
            benefits: template.benefits,
            localContext: template.localContext,
            urgency: template.urgency,
            marketSize: this.getMarketSize(industry)
        };
    }

    getMarketSize(industry, language = 'gulf') {
        const marketData = {
            gulf: {
                restaurant: "18.2 مليار دولار صناعة المطاعم في الخليج مع نمو 12% سنوياً",
                automotive: "52.8 مليار دولار قطاع النقل، مشاركة الرحلات 8.5 مليار",
                retail: "58.3 مليار دولار سوق التجزئة، اختراق التجارة الإلكترونية 19.6%",
                professional: "22.1 مليار دولار الخدمات المهنية، الرقمنة 45%",
                healthcare: "28.7 مليار دولار سوق الرعاية الصحية، الطب عن بُعد ينمو 400%",
                education: "12.4 مليار دولار EdTech، اختراق التعلم الإلكتروني 78%",
                realestate: "420 مليار دولار سوق العقارات، اعتماد PropTech 34%"
            },
            english: {
                restaurant: "$4.2T global food service market, 8.7% digital ordering growth",
                automotive: "$2.9T automotive market, 23% EV adoption rate",
                retail: "$26.7T global retail, 19.6% e-commerce penetration",
                professional: "$1.8T professional services, 42% automation rate",
                healthcare: "$8.3T healthcare market, 38% digital health adoption",
                education: "$6.2T education market, 15.3% EdTech penetration",
                realestate: "$3.7T real estate market, 12% PropTech adoption"
            }
        };

        const langData = marketData[language] || marketData.gulf;
        return langData[industry] || (language === 'gulf' ?
            "فرصة سوق خليجية متنامية" :
            "Growing market opportunity");
    }

    // New method to get available languages
    getAvailableLanguages() {
        return [
            { code: 'gulf', name: 'العربية الخليجية', flag: '🇸🇦🇦🇪🇰🇼' },
            { code: 'english', name: 'English', flag: '🇺🇸' }
        ];
    }

    // New method to get campaign styles with descriptions
    getCampaignStyles(language = 'gulf') {
        if (language === 'gulf') {
            return [
                {
                    code: 'conservative',
                    name: 'محافظ',
                    description: 'محترم، مهني، بناء الثقة تدريجياً'
                },
                {
                    code: 'balanced',
                    name: 'متوازن',
                    description: 'نهج عمل متوازن بين المهنية والود'
                },
                {
                    code: 'aggressive',
                    name: 'قوي',
                    description: 'مباشر، يخلق إلحاحاً، يركز على الإجراء الفوري'
                }
            ];
        } else {
            return [
                {
                    code: 'conservative',
                    name: 'Conservative',
                    description: 'Respectful, professional, gradual trust building'
                },
                {
                    code: 'balanced',
                    name: 'Balanced',
                    description: 'Standard business approach with professional friendliness'
                },
                {
                    code: 'aggressive',
                    name: 'Aggressive',
                    description: 'Direct, urgent, immediate action focused'
                }
            ];
        }
    }

    // Enhanced method to get industry list with descriptions
    getAvailableIndustries(language = 'gulf') {
        const industries = Object.keys(this.industryTemplates);
        
        const descriptions = {
            gulf: {
                restaurant: 'مطاعم ومأكولات',
                automotive: 'سيارات ونقل',
                retail: 'تجزئة وتجارة إلكترونية',
                professional: 'خدمات مهنية',
                healthcare: 'رعاية صحية وعيادات',
                education: 'تعليم وتدريب',
                realestate: 'عقارات'
            },
            english: {
                restaurant: 'Restaurant & F&B',
                automotive: 'Automotive & Transportation',
                retail: 'Retail & E-commerce',
                professional: 'Professional Services',
                healthcare: 'Healthcare & Clinics',
                education: 'Education & Training',
                realestate: 'Real Estate & Property'
            }
        };

        const langDesc = descriptions[language] || descriptions.gulf;
        
        return industries.map(industry => ({
            code: industry,
            name: langDesc[industry] || industry,
            marketSize: this.getMarketSize(industry, language)
        }));
    }

    // Method to validate and enhance lead data
    validateAndEnhanceLead(lead) {
        const enhanced = {
            name: lead.name || 'صاحب العمل',
            address: lead.address || 'الخليج',
            phone: lead.phone || 'غير متوفر',
            rating: lead.rating || 'غير متوفر',
            website: lead.website || null,
            // Add enhancement based on available data
            businessSize: this.estimateBusinessSize(lead),
            digitalMaturity: this.assessDigitalMaturity(lead),
            urgencyScore: this.calculateUrgencyScore(lead)
        };

        return enhanced;
    }

    estimateBusinessSize(lead) {
        // Simple heuristic based on available data
        if (lead.website && lead.rating > 4.0) return 'medium-large';
        if (lead.website || lead.rating > 3.5) return 'small-medium';
        return 'small';
    }

    assessDigitalMaturity(lead) {
        let score = 0;
        if (lead.website) score += 3;
        if (lead.rating && lead.rating > 4.0) score += 2; // Good online presence
        if (lead.phone && lead.phone.includes('WhatsApp')) score += 1;
        
        if (score >= 4) return 'high';
        if (score >= 2) return 'medium';
        return 'low';
    }

    calculateUrgencyScore(lead) {
        let urgency = 5; // Base urgency
        
        // Increase urgency for businesses that need digital transformation
        if (!lead.website) urgency += 3;
        if (lead.rating && lead.rating < 3.5) urgency += 2;
        
        return Math.min(urgency, 10); // Cap at 10
    }
}

module.exports = MarketingAI;