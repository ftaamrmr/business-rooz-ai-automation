require('dotenv').config();

class MarketingAI {
    constructor() {
        this.openai = null;
        this.initOpenAI();
        this.industryTemplates = this.loadIndustryTemplates();
        this.gulfContext = this.loadGulfContext();
        this.indonesianContext = this.loadIndonesianContext();
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
                    "الطلبات الإلكترونية تشكل 23% فقط من إيراداتكم، بينما المعدل في السوق الخليجي 45%",
                    "فقدان 67% من العملاء بسبب عدم وجود برنامج ولاء",
                    "هدر 15-20% من الطعام بسبب الإدارة اليدوية للمخزون",
                    "تكلفة اكتساب العملاء ارتفعت 156% على منصات التوصيل",
                    "هامش الربح انخفض 8-12% بسبب عمولات المنصات العالية"
                ],
                solutions: [
                    "نظام POS متكامل مع طلبات إلكترونية مباشرة (توفير عمولات 20-30%)",
                    "إدارة مخزون ذكية بالذكاء الاصطناعي (تقليل الهدر حتى 40%)",
                    "برنامج ولاء العملاء عبر واتساب الأعمال",
                    "تسويق عبر وسائل التواصل الاجتماعي مع تتبع العائد على الاستثمار",
                    "نظام تسعير ديناميكي حسب الطلب"
                ],
                benefits: [
                    "زيادة الطلبات المباشرة 67% خلال 3 أشهر",
                    "هامش الربح يرتفع 15-25% مع تقليل الاعتماد على المنصات",
                    "معدل الاحتفاظ بالعملاء يزيد 89% مع برنامج الولاء",
                    "تقليل هدر الطعام 35% مع الإدارة الذكية",
                    "العائد على الاستثمار التسويقي يزيد 234% مع الحملات الموجهة"
                ],
                localContext: "سوق المطاعم الخليجي $8.5B مع 82% من المستهلكين يطلبون إلكترونياً أسبوعياً",
                urgency: "المطاعم ذات الحضور الرقمي تنمو 156% أسرع، 34% التي لا تتكيف تغلق خلال سنتين",
                caseStudy: "مطعم في دبي: زادت الإيرادات 85% خلال 4 أشهر بعد تطبيق نظام الطلب الإلكتروني"
            },
            automotive: {
                industry: 'automotive',
                painPoints: [
                    "الحجز اليدوي يسبب فقدان 43% من الفرص",
                    "توقف المركبات 23% بسبب الصيانة غير المجدولة",
                    "معدل فقدان العملاء 56% بسبب بطء الاستجابة",
                    "تجاوز تكاليف الوقود 18% بدون تحسين المسارات",
                    "خسارة إيرادات 8,500 ريال شهرياً لكل مركبة بسبب عدم الكفاءة"
                ],
                solutions: [
                    "نظام حجز آلي مع توفر الوقت الفعلي",
                    "صيانة تنبؤية مع مستشعرات IoT",
                    "واتساب الأعمال API لدعم العملاء الفوري",
                    "تحسين المسارات بالذكاء الاصطناعي لكفاءة الوقود",
                    "تسعير ديناميكي حسب الطلب وتحليل المنافسين"
                ],
                benefits: [
                    "كفاءة الحجز ترتفع 78% مع النظام الآلي",
                    "تكاليف الصيانة تنخفض 34% مع الجدولة التنبؤية",
                    "رضا العملاء يرتفع من 6.2 إلى 8.7/10",
                    "تكاليف الوقود تقل 22% مع المسارات الذكية",
                    "الإيرادات لكل مركبة ترتفع 7,000 ريال شهرياً"
                ],
                localContext: "سوق تأجير السيارات الخليجي $12.5B، ينمو 23% سنوياً مع 89% لا تزال يدوية",
                urgency: "Careem و Uber يسيطران على 67% من حصة السوق، اللاعبون التقليديون يجب أن يتحولوا رقمياً",
                caseStudy: "شركة تأجير في الرياض: استخدام الأسطول زاد 145% بعد تطبيق النظام الرقمي"
            },
            retail: {
                industry: 'retail',
                painPoints: [
                    "المبيعات التقليدية انخفضت 34% منذ 2020، الإلكترونية 12% فقط من الإيرادات",
                    "معدل نفاد المخزون 28% بسبب الإدارة اليدوية",
                    "قيمة عمر العميل انخفضت 45% بدون تخصيص",
                    "هدر 67% من ميزانية التسويق بسبب عدم الاستهداف",
                    "فقدان 89% من العملاء المحتملين الذين يتصفحون دون شراء"
                ],
                solutions: [
                    "تجارة إلكترونية متعددة القنوات مع مزامنة المخزون الفوري",
                    "محرك تخصيص بالذكاء الاصطناعي لتوصيات المنتجات",
                    "منصة بيانات العملاء مع تتبع السلوك",
                    "تسويق آلي عبر البريد الإلكتروني/واتساب مع التقسيم",
                    "تكامل التجارة الاجتماعية (Instagram Shop، TikTok Shop)"
                ],
                benefits: [
                    "مساهمة الإيرادات الإلكترونية ترتفع من 12% إلى 67% خلال 8 أشهر",
                    "معدل دوران المخزون يزيد 156% مع التنبؤ بالطلب",
                    "قيمة عمر العميل ترتفع 234% مع التخصيص",
                    "العائد على الاستثمار التسويقي يزيد 445% مع الحملات الموجهة",
                    "معدل التحويل يرتفع من 1.2% إلى 4.8% مع التحسين"
                ],
                localContext: "سوق التجزئة الخليجي $95B، اختراق التجارة الإلكترونية 28.6% مقابل 23.4% عالمياً",
                urgency: "Noon و Amazon يسيطران على 78% من التجزئة الإلكترونية، التجار المستقلون يفقدون 23% من حصة السوق سنوياً",
                caseStudy: "متجر إلكترونيات في الكويت: الإيرادات زادت 267% خلال سنة مع استراتيجية متعددة القنوات"
            },
            professional: {
                industry: 'professional',
                painPoints: [
                    "اكتساب العملاء 89% من الإحالات، النمو محدود 12% سنوياً",
                    "معدل تحويل العروض 23% فقط بسبب العملية اليدوية",
                    "الوقت المستهلك في الإدارة 45% من ساعات العمل",
                    "متوسط قيمة المشروع راكد بسبب عدم تحديد القيمة",
                    "فقدان 34% من العملاء بسبب ضعف المتابعة والتواصل"
                ],
                solutions: [
                    "موقع احترافي مع عرض الأعمال والشهادات",
                    "نظام CRM مع رعاية العملاء الآلية",
                    "نظام حجز إلكتروني مع تكامل التقويم",
                    "أتمتة العروض مع التسعير الديناميكي",
                    "استراتيجية تسويق بالمحتوى للريادة الفكرية"
                ],
                benefits: [
                    "توليد العملاء المحتملين يزيد 289% مع الحضور الرقمي",
                    "معدل نجاح العروض يرتفع من 23% إلى 67%",
                    "الوقت الإداري ينخفض 56% مع الأتمتة",
                    "متوسط قيمة المشروع يزيد 134% مع تحديد أفضل للقيمة",
                    "معدل الاحتفاظ بالعملاء يرتفع إلى 89% مع المتابعة المنظمة"
                ],
                localContext: "سوق الخدمات المهنية الخليجي $28.5B، 34% فقط رقمية بالكامل",
                urgency: "المستقلون والوكالات الرقمية نمت 456% بعد الجائحة، الاستشاريون التقليديون يفقدون العملاء",
                caseStudy: "مكتب استشاري قانوني في جدة: قاعدة العملاء زادت 345% خلال 10 أشهر مع التحول الرقمي"
            },
            healthcare: {
                industry: 'healthcare',
                painPoints: [
                    "معدل عدم الحضور 34% بسبب الحجز اليدوي",
                    "وقت انتظار المرضى 67 دقيقة، درجة الرضا 5.8/10",
                    "التكاليف الإدارية 23% من الإيرادات بسبب الأوراق",
                    "معدل متابعة المرضى 45% فقط بسبب التتبع اليدوي",
                    "خسارة إيرادات 12,500 ريال شهرياً بسبب عدم كفاءة الجدولة"
                ],
                solutions: [
                    "نظام حجز مواعيد إلكتروني مع تذكيرات آلية",
                    "سجلات مرضى رقمية مع نسخ احتياطي سحابي",
                    "منصة طب عن بعد للاستشارات والمتابعة",
                    "تكامل واتساب لتواصل المرضى",
                    "نظام إدارة العيادة مع فوترة آلية"
                ],
                benefits: [
                    "معدل عدم الحضور ينخفض إلى 12% مع التذكيرات الآلية",
                    "رضا المرضى يرتفع إلى 8.9/10 مع تقليل الانتظار",
                    "التكاليف الإدارية تنخفض 45% مع الرقمنة",
                    "معدل متابعة المرضى يرتفع إلى 89% مع التتبع المنظم",
                    "إيرادات العيادة ترتفع 67% مع كفاءة الجدولة"
                ],
                localContext: "سوق الرعاية الصحية الخليجي $42B، اعتماد الطب عن بعد زاد 400% بعد الجائحة",
                urgency: "89% من المرضى يتوقعون خدمات رقمية، العيادات بدون رقمنة ستفقد 45% من المرضى",
                caseStudy: "عيادة في البحرين: حجم المرضى زاد 178% مع نظام المواعيد الرقمي"
            },
            education: {
                industry: 'education',
                painPoints: [
                    "معدل الاحتفاظ بالطلاب 67% فقط بسبب ضعف التفاعل",
                    "عبء العمل الإداري 56% من وقت الموظفين",
                    "معدل إتمام الدورات 34% بدون تتبع مناسب",
                    "الإيراد لكل طالب راكد بسبب عدم وجود نظام بيع إضافي",
                    "المنافسة مع المنصات الإلكترونية تسببت في فقدان 23% من الطلاب"
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
                    "الإيراد لكل طالب يزيد 145% مع فرص البيع الإضافي",
                    "ميزة تنافسية مع تجربة تعلم حديثة"
                ],
                localContext: "سوق تقنية التعليم الخليجي $8.2B، اختراق التعلم الإلكتروني 78% بعد الجائحة",
                urgency: "طلاب الجيل Z يتوقعون تعليماً رقمياً أولاً، المؤسسات التقليدية تفقد 34% من التسجيل",
                caseStudy: "مركز تدريب في دبي: تسجيل الطلاب زاد 234% مع منصة التعلم الهجينة"
            },
            realestate: {
                industry: 'realestate',
                painPoints: [
                    "معدل تحويل العملاء المحتملين 8% فقط بسبب ضعف نظام المتابعة",
                    "معدل عدم حضور معاينة العقار 45% بدون جدولة مناسبة",
                    "دورة المبيعات 8.5 أشهر، طويلة جداً مقارنة بالمنافسين 5.2 أشهر",
                    "67% من إنفاق التسويق غير قابل لقياس العائد",
                    "قاعدة بيانات العملاء غير منظمة، فقدان 56% من الأعمال المتكررة"
                ],
                solutions: [
                    "نظام CRM عقاري مع تصنيف العملاء المحتملين ورعاية آلية",
                    "تقنية الجولات الافتراضية مع عرض العقار 360°",
                    "تكامل واتساب الأعمال للتواصل الفوري مع العملاء",
                    "لوحة تحليل السوق مع توصيات التسعير",
                    "إعلانات وسائل التواصل الاجتماعي مع حملات إعادة الاستهداف"
                ],
                benefits: [
                    "معدل تحويل العملاء المحتملين يرتفع إلى 34% مع المتابعة المنظمة",
                    "معدل حضور معاينة العقار يرتفع إلى 89% مع جدولة أفضل",
                    "دورة المبيعات تقل إلى 5.8 أشهر مع عملية مبسطة",
                    "العائد على الاستثمار التسويقي يزيد 267% مع الحملات الموجهة",
                    "الأعمال المتكررة ترتفع 178% مع قاعدة بيانات منظمة"
                ],
                localContext: "سوق العقارات الخليجي $620B، اعتماد PropTech 34% مقابل 67% عالمياً",
                urgency: "Bayut و Property Finder يسيطران على 78% من البحث العقاري الإلكتروني، الوكلاء المستقلون يفقدون الظهور",
                caseStudy: "وكيل عقاري في أبوظبي: حجم المبيعات زاد 289% خلال سنة مع الأدوات الرقمية"
            }
        };
    }

    loadRealMarketData() {
        return {
            gulf: {
                digitalAdoption: "95% من سكان الخليج يستخدمون الهواتف الذكية، 78% يتسوقون إلكترونياً",
                ecommerceGrowth: "نمو 25% سنوياً، السوق يصل إلى 50 مليار دولار في 2024",
                paymentMethods: "Apple Pay (38%)، Mada (45%)، Tabby (28%)، Tamara (25%)",
                socialMedia: "انستقرام 45 مليون مستخدم، واتساب أعمال 15 مليون+ شركة صغيرة ومتوسطة",
                marketSize: {
                    restaurant: "$8.5B سوق المطاعم الخليجي، نمو 12% سنوياً",
                    automotive: "$12.5B قطاع النقل، خدمات التوصيل $3.2B",
                    retail: "$95B سوق التجزئة، اعتماد القنوات المتعددة 67%",
                    healthcare: "$42B الرعاية الصحية، نمو الطب عن بعد 400%",
                    education: "$8.2B تقنية التعليم، اختراق التعلم الإلكتروني 78%",
                    realestate: "$620B سوق العقارات، اعتماد PropTech 34%",
                    professional: "$28.5B الخدمات المهنية، الرقمنة 45%"
                },
                trends: {
                    current: "اعتماد الذكاء الاصطناعي 156%، رؤية 2030، التحول الرقمي في الخليج",
                    emerging: "التجارة الصوتية، التجارة الاجتماعية، التخصيص الفائق",
                    challenges: "المنافسة القوية، توقعات الجودة العالية، الامتثال للأنظمة المحلية"
                }
            },
            indonesia: {
                digitalAdoption: "88% of Indonesians use smartphones, 77% shop online",
                ecommerceGrowth: "35% YoY growth, reaching $55B in 2024",
                paymentMethods: "GoPay (45%), OVO (32%), Dana (28%), QRIS adoption 89%",
                socialMedia: "Instagram 89M users, WhatsApp Business 50M+ SMEs",
                marketSize: {
                    restaurant: "$18.2B F&B market, 12% annual growth",
                    automotive: "$52.8B transportation, ride-sharing $8.5B",
                    retail: "$58.3B retail market, omnichannel adoption 67%",
                    healthcare: "$28.7B healthcare, telemedicine growth 400%",
                    education: "$12.4B EdTech, online learning penetration 78%",
                    realestate: "$420B property market, PropTech adoption 34%",
                    professional: "$22.1B professional services, digitalization 45%"
                },
                trends: {
                    current: "AI adoption 156%, sustainability focus 89%, local brand preference 72%",
                    emerging: "Voice commerce, social commerce, hyper-personalization",
                    challenges: "Digital literacy gaps, infrastructure variations, regulatory compliance"
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
                relationship: "العلاقات الشخصية والثقة أساس النجاح في الأعمال الخليجية",
                communication: "التواصل المحترم والمباشر مع احترام الوقت",
                decision: "القرارات تُتخذ بناءً على الثقة والسمعة والنتائج المثبتة",
                trust: "بناء الثقة يحتاج وقت، لكنه استثمار طويل المدى",
                social: "السمعة والتوصيات الشخصية لها تأثير كبير"
            },
            marketTrends: {
                digital: "95% من السكان يستخدمون الهواتف الذكية",
                ecommerce: "التجارة الإلكترونية تنمو 25% سنوياً",
                social: "انستقرام وواتساب هي المنصات الرئيسية للأعمال",
                payment: "Apple Pay، Mada، Tabby، Tamara هي طرق الدفع الشائعة",
                delivery: "التوصيل في نفس اليوم أصبح توقع أساسي"
            },
            challenges: {
                competition: "منافسة قوية تتطلب التميز والجودة",
                expectations: "توقعات عالية للخدمة والجودة",
                talent: "الحاجة لكوادر متخصصة في التسويق الرقمي",
                regulation: "الامتثال للأنظمة المحلية مهم"
            }
        };
    }

    loadIndonesianContext() {
        return {
            businessCulture: {
                relationship: "Hubungan personal sangat penting dalam bisnis Indonesia",
                communication: "Komunikasi tidak langsung dan sopan lebih disukai",
                decision: "Keputusan bisnis often melibatkan family atau partner",
                trust: "Trust building adalah kunci sukses berbisnis",
                social: "Social proof dan testimonial sangat berpengaruh"
            },
            marketTrends: {
                digital: "88% populasi Indonesia menggunakan smartphone",
                ecommerce: "E-commerce tumbuh 35% per tahun",
                social: "Instagram dan WhatsApp adalah platform utama",
                payment: "GoPay, OVO, Dana adalah metode pembayaran populer",
                delivery: "Same-day delivery sudah menjadi expectation"
            },
            challenges: {
                infrastructure: "Internet speed varies across regions",
                education: "Digital literacy masih developing",
                regulation: "Government regulations untuk digital business",
                competition: "Foreign dan local companies compete intensely"
            }
        };
    }

    async generateIndustrySpecificContent(lead, industry, yourService, campaignStyle = 'balanced', language = 'indonesian') {
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

    getSystemPrompt(industry, campaignStyle, language = 'indonesian') {
        const styleInstructions = {
            conservative: {
                gulf: "محترم ومهني، نبني الثقة خطوة بخطوة. نركز على العلاقات طويلة المدى.",
                indonesian: "Sopan, profesional, dan membangun kepercayaan secara bertahap. Fokus pada hubungan jangka panjang.",
                english: "Respectful, professional, and build trust gradually. Focus on long-term relationship building."
            },
            balanced: {
                gulf: "نهج عملي متوازن يجمع بين الاحترافية والود.",
                indonesian: "Pendekatan bisnis standar dengan keseimbangan profesionalisme dan keramahan.",
                english: "Standard business approach with balanced professionalism and approachability."
            },
            aggressive: {
                gulf: "مباشر، نوضح الفرصة، ونركز على اتخاذ القرار. نبرز الميزة التنافسية.",
                indonesian: "Langsung, ciptakan urgensi, dan fokus pada tindakan segera. Tekankan keunggulan kompetitif.",
                english: "Direct, create urgency, and focus on immediate action. Emphasize competitive advantages."
            }
        };

        let marketContext, marketData;
        
        if (language === 'gulf' || language === 'arabic') {
            marketContext = this.gulfContext;
            marketData = this.marketData.gulf;
        } else if (language === 'indonesian') {
            marketContext = this.indonesianContext;
            marketData = this.marketData.indonesia;
        } else {
            marketContext = this.englishContext;
            marketData = this.marketData.global;
        }

        if (language === 'gulf' || language === 'arabic') {
            return `أنت متخصص في التسويق B2B للسوق الخليجي، خبير في قطاع ${industry}.

الخبرة: فهم عميق لتحديات الأعمال في ${industry} بمنطقة الخليج
الوعي الثقافي: أسلوب التواصل التجاري الخليجي المحترم والمباشر
السوق المحلي: الاتجاهات والفرص في سوق ${industry} الخليجي

أسلوب التواصل: ${styleInstructions[campaignStyle].gulf}

بيانات السوق:
- التحول الرقمي: ${marketData.digitalAdoption}
- نمو التجارة الإلكترونية: ${marketData.ecommerceGrowth}
- طرق الدفع: ${marketData.paymentMethods}
- حجم سوق ${industry}: ${marketData.marketSize[industry]}

المتطلبات:
1. اكتب بالعربية الخليجية الرسمية مع المصطلحات التقنية بالإنجليزية عند الحاجة
2. استخدم أسلوب تواصل محترم ومباشر يناسب رجال الأعمال الخليجيين
3. ركز على القيمة الحقيقية والنتائج المثبتة
4. تجنب المبالغة والوعود غير الواقعية
5. ابني الثقة من خلال الشفافية والمصداقية
6. استخدم بيانات حقيقية لدعم النقاط
7. اجعل الرسالة قصيرة وواضحة ومباشرة

صيغة المخرجات:
قالب إيميل وواتساب مع:
- عنوان واضح وجذاب
- نقاط الألم الحقيقية للصناعة
- حلول عملية مع فوائد ملموسة
- دعوة للتواصل واضحة ومحترمة
- نبرة مهنية وودية بدون مبالغة`;
        } else if (language === 'indonesian') {
            return `Anda adalah spesialis marketing B2B Indonesia yang ahli di sektor ${industry}.

KEAHLIAN INDUSTRI: Pemahaman mendalam tentang tantangan bisnis ${industry} di Indonesia
KESADARAN BUDAYA: Gaya komunikasi bisnis Indonesia dan nuansa budaya
PASAR LOKAL: Tren terkini, tantangan, dan peluang di pasar ${industry} Indonesia

GAYA KOMUNIKASI: ${styleInstructions[campaignStyle].indonesian}

DATA PASAR REAL:
- Adopsi Digital: ${marketData.digitalAdoption}
- Pertumbuhan E-commerce: ${marketData.ecommerceGrowth}
- Metode Pembayaran: ${marketData.paymentMethods}
- Media Sosial: ${marketData.socialMedia}
- Ukuran Pasar ${industry}: ${marketData.marketSize[industry]}

PERSYARATAN:
1. Tulis dalam Bahasa Indonesia dengan istilah teknis dalam bahasa Inggris jika diperlukan
2. Gunakan gaya komunikasi bisnis Indonesia (sopan, fokus hubungan)
3. Sertakan pain points industri spesifik dan solusi
4. Referensikan konteks dan tren pasar lokal dengan data real
5. Buat value proposition yang compelling dengan statistik
6. Sertakan social proof dan indikator kredibilitas
7. Gunakan data pasar terkini untuk menciptakan urgensi
8. Fokus pada ROI dan hasil yang terukur

FORMAT OUTPUT:
Generate template EMAIL dan WHATSAPP dengan:
- Subject line yang compelling dengan statistik
- Pain points industri spesifik dengan data
- Solusi yang disesuaikan dengan benefit terukur
- Konteks pasar lokal dengan tren terkini
- Call-to-action yang jelas dan mendesak
- Tone profesional namun approachable
- Social proof dan case study reference`;
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

    buildIndustryPrompt(lead, template, yourService, campaignStyle, language = 'indonesian') {
        let marketData, context;
        
        if (language === 'gulf' || language === 'arabic') {
            marketData = this.marketData.gulf;
            context = this.gulfContext;
        } else if (language === 'indonesian') {
            marketData = this.marketData.indonesia;
            context = this.indonesianContext;
        } else {
            marketData = this.marketData.global;
            context = this.englishContext;
        }
        
        if (language === 'gulf' || language === 'arabic') {
            return `أنشئ محتوى تسويقي مخصص لهذا النشاط التجاري:

معلومات النشاط:
- الاسم: ${lead.name}
- العنوان: ${lead.address}
- الهاتف: ${lead.phone}
- التقييم: ${lead.rating || 'غير متوفر'}
- الموقع الإلكتروني: ${lead.website || 'لا يوجد موقع حالياً'}

خدمتك: ${yourService}

سياق الصناعة:
التحديات: ${template.painPoints.join('، ')}
الحلول: ${template.solutions.join('، ')}
الفوائد: ${template.benefits.join('، ')}

ثقافة الأعمال الخليجية:
- الثقة والسمعة أساس العلاقات التجارية
- التواصل المحترم والمباشر مُقدّر
- النتائج المثبتة أهم من الوعود
- الوقت ثمين، كن مختصراً ومفيداً

أسلوب الحملة: ${campaignStyle}

المطلوب:
1. قالب إيميل مع عنوان واضح ومحتوى مقنع
2. قالب واتساب قصير ومهني

ملاحظات مهمة:
- كن صادقاً ومباشراً
- تجنب المبالغة والكلام التسويقي المزعج
- ركز على كيف يمكنك مساعدتهم فعلاً
- اجعل الدعوة للتواصل سهلة ومحترمة`;
        } else if (language === 'indonesian') {
            return `Buat konten marketing yang dipersonalisasi untuk bisnis ${template.localContext} ini:

DETAIL BISNIS:
- Nama: ${lead.name}
- Alamat: ${lead.address}
- Telepon: ${lead.phone}
- Rating: ${lead.rating || 'N/A'}
- Website: ${lead.website || 'Belum ada website'}

LAYANAN ANDA: ${yourService}

KONTEKS INDUSTRI:
Pain Points: ${template.painPoints.join(', ')}
Solusi: ${template.solutions.join(', ')}
Manfaat: ${template.benefits.join(', ')}
Konteks Lokal: ${template.localContext}
Urgensi Pasar: ${template.urgency}

DATA PASAR REAL:
- Ukuran Pasar: ${marketData.marketSize[template.industry] || marketData.marketSize.professional}
- Tren Terkini: ${marketData.trends.current}
- Tantangan: ${marketData.trends.challenges}

BUDAYA BISNIS INDONESIA:
- Komunikasi fokus pada hubungan
- Kepercayaan dan kredibilitas sangat penting
- Social proof berpengaruh signifikan
- WhatsApp adalah komunikasi bisnis utama
- Pemahaman pasar lokal sangat krusial

GAYA KAMPANYE: ${campaignStyle}

Harap generate:
1. TEMPLATE EMAIL dengan subject line yang compelling dan statistik
2. TEMPLATE WHATSAPP untuk follow-up yang casual

Buat spesifik untuk bisnis mereka, sertakan konteks Indonesia dengan data real, dan ciptakan urgensi berdasarkan tren pasar terkini. Gunakan statistik dan data untuk meningkatkan kredibilitas.`;
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

    async generateMultiTouchSequence(lead, industry, yourService, language = 'indonesian') {
        const sequences = {
            email1: await this.generateIndustrySpecificContent(lead, industry, yourService, 'conservative', language),
            email2: await this.generateFollowUpContent(lead, industry, yourService, 'balanced', language),
            email3: await this.generateClosingContent(lead, industry, yourService, 'aggressive', language),
            whatsapp: await this.generateIndustrySpecificContent(lead, industry, yourService, 'balanced', language)
        };

        return sequences;
    }

    async generateFollowUpContent(lead, industry, yourService, style, language = 'indonesian') {
        if (!this.openai) {
            throw new Error('OpenAI not configured');
        }

        const template = this.industryTemplates[industry];
        let marketData;
        
        if (language === 'gulf' || language === 'arabic') {
            marketData = this.marketData.gulf;
        } else if (language === 'indonesian') {
            marketData = this.marketData.indonesia;
        } else {
            marketData = this.marketData.global;
        }
        
        let prompt;
        
        if (language === 'gulf' || language === 'arabic') {
            prompt = `أنشئ إيميل متابعة لـ ${lead.name} في قطاع ${industry}.
            هذه هي نقطة الاتصال الثانية - افترض أنهم شاهدوا الإيميل الأول.
            ركز على دراسات الحالة، الإثبات الاجتماعي، والفوائد المحددة مع البيانات.
            الخدمة: ${yourService}
            الأسلوب: ${style}
            أضف أمثلة من السوق الخليجي وقصص نجاح مع إحصائيات حقيقية.
            بيانات السوق: ${marketData.marketSize[industry]}
            استخدم الفرصة بناءً على الاتجاهات: ${marketData.trends.current}
            
            تذكر:
            - كن محترماً ومهنياً
            - استخدم بيانات حقيقية
            - تجنب المبالغة
            - ركز على القيمة الفعلية`;
        } else if (language === 'indonesian') {
            prompt = `Buat email follow-up untuk ${lead.name} di industri ${industry}.
            Ini adalah touch point KEDUA - asumsikan mereka sudah melihat email pertama.
            Fokus pada case studies, social proof, dan manfaat spesifik dengan data.
            Layanan: ${yourService}
            Gaya: ${style}
            Sertakan contoh pasar Indonesia dan success stories dengan statistik real.
            Data pasar: ${marketData.marketSize[industry]}
            Gunakan urgency berdasarkan tren: ${marketData.trends.current}`;
        } else {
            prompt = `Create a follow-up email for ${lead.name} in ${industry} industry.
            This is the SECOND touch point - assume they've seen your first email.
            Focus on case studies, social proof, and specific benefits with data.
            Service: ${yourService}
            Style: ${style}
            Include market examples and success stories with real statistics.
            Market data: ${marketData.marketTrends[industry]}
            Use urgency based on trends: ${marketData.digitalTransformation}`;
        }

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

    async generateClosingContent(lead, industry, yourService, style, language = 'indonesian') {
        if (!this.openai) {
            throw new Error('OpenAI not configured');
        }

        const template = this.industryTemplates[industry];
        let marketData;
        
        if (language === 'gulf' || language === 'arabic') {
            marketData = this.marketData.gulf;
        } else if (language === 'indonesian') {
            marketData = this.marketData.indonesia;
        } else {
            marketData = this.marketData.global;
        }
        
        let prompt;
        
        if (language === 'gulf' || language === 'arabic') {
            prompt = `أنشئ إيميل ختامي لـ ${lead.name} في قطاع ${industry}.
            هذه هي نقطة الاتصال الأخيرة - وضح الخطوات التالية بشكل واضح.
            أضف عرض محدود الوقت، وضمانات، ودعوة قوية للتواصل.
            الخدمة: ${yourService}
            الأسلوب: ${style}
            اجعله مقنعاً لأصحاب القرار في الأعمال الخليجية مع بيانات محددة.
            استخدم الإحصائيات: ${marketData.marketSize[industry]}
            وضح تكلفة عدم التحرك الآن، لكن بطريقة محترمة.
            
            تذكر:
            - كن محترماً ومباشراً
            - لا تكن ضاغطاً أو مزعجاً
            - ركز على الفرصة والقيمة
            - اجعل التواصل سهلاً`;
        } else if (language === 'indonesian') {
            prompt = `Buat email closing untuk ${lead.name} di industri ${industry}.
            Ini adalah touch point TERAKHIR - ciptakan urgensi dan langkah selanjutnya yang jelas.
            Sertakan penawaran terbatas waktu, risk reversal, dan CTA yang kuat.
            Layanan: ${yourService}
            Gaya: ${style}
            Buat compelling untuk decision makers bisnis Indonesia dengan data konkret.
            Gunakan statistik: ${marketData.marketSize[industry]}
            Tekankan kerugian jika tidak bertindak sekarang.`;
        } else {
            prompt = `Create a closing email for ${lead.name} in ${industry} industry.
            This is the FINAL touch point - create urgency and clear next steps.
            Include limited-time offers, risk reversal, and strong CTA.
            Service: ${yourService}
            Style: ${style}
            Make it compelling for business decision makers with concrete data.
            Use statistics: ${marketData.marketTrends[industry]}
            Emphasize the cost of inaction.`;
        }

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

    getMarketSize(industry, language = 'indonesian') {
        const marketData = {
            gulf: {
                restaurant: "$8.5B سوق المطاعم الخليجي مع نمو 12% سنوياً",
                automotive: "$12.5B قطاع النقل، خدمات التوصيل $3.2B",
                retail: "$95B سوق التجزئة، اختراق التجارة الإلكترونية 28.6%",
                professional: "$28.5B الخدمات المهنية، الرقمنة 45%",
                healthcare: "$42B سوق الرعاية الصحية، الطب عن بعد ينمو 400%",
                education: "$8.2B تقنية التعليم، اختراق التعلم الإلكتروني 78%",
                realestate: "$620B سوق العقارات، اعتماد PropTech 34%"
            },
            indonesian: {
                restaurant: "$18.2B industri F&B Indonesia dengan pertumbuhan 12% annually",
                automotive: "$52.8B sektor transportasi, ride-sharing $8.5B",
                retail: "$58.3B pasar retail, e-commerce penetrasi 19.6%",
                professional: "$22.1B layanan profesional, digitalisasi 45%",
                healthcare: "$28.7B pasar healthcare, telemedicine tumbuh 400%",
                education: "$12.4B EdTech, penetrasi online learning 78%",
                realestate: "$420B pasar properti, PropTech adoption 34%"
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

        const langKey = (language === 'gulf' || language === 'arabic') ? 'gulf' : 
                        (language === 'indonesian' ? 'indonesian' : 'english');
        const langData = marketData[langKey];
        return langData[industry] || (langKey === 'gulf' ? 
            "فرصة سوقية خليجية متنامية" :
            (langKey === 'indonesian' ? "Peluang pasar Indonesia yang berkembang" : "Growing market opportunity"));
    }

    // New method to get available languages
    getAvailableLanguages() {
        return [
            { code: 'gulf', name: 'العربية الخليجية', flag: '🇦🇪🇸🇦🇰🇼🇧🇭' },
            { code: 'indonesian', name: 'Bahasa Indonesia', flag: '🇮🇩' },
            { code: 'english', name: 'English', flag: '🇺🇸' }
        ];
    }

    // New method to get campaign styles with descriptions
    getCampaignStyles(language = 'indonesian') {
        if (language === 'gulf' || language === 'arabic') {
            return [
                {
                    code: 'conservative',
                    name: 'محافظ',
                    description: 'محترم، مهني، نبني الثقة تدريجياً'
                },
                {
                    code: 'balanced',
                    name: 'متوازن',
                    description: 'نهج عملي متوازن بين الاحترافية والود'
                },
                {
                    code: 'aggressive',
                    name: 'مباشر',
                    description: 'واضح، يركز على الفرصة والإجراء الفوري'
                }
            ];
        } else if (language === 'indonesian') {
            return [
                {
                    code: 'conservative',
                    name: 'Konservatif',
                    description: 'Sopan, profesional, membangun kepercayaan bertahap'
                },
                {
                    code: 'balanced',
                    name: 'Seimbang',
                    description: 'Pendekatan standar dengan keseimbangan profesional dan ramah'
                },
                {
                    code: 'aggressive',
                    name: 'Agresif',
                    description: 'Langsung, menciptakan urgensi, fokus tindakan segera'
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
    getAvailableIndustries(language = 'indonesian') {
        const industries = Object.keys(this.industryTemplates);
        
        const descriptions = {
            gulf: {
                restaurant: 'المطاعم والأغذية',
                automotive: 'السيارات والنقل',
                retail: 'التجزئة والتجارة الإلكترونية',
                professional: 'الخدمات المهنية',
                healthcare: 'الرعاية الصحية والعيادات',
                education: 'التعليم والتدريب',
                realestate: 'العقارات'
            },
            indonesian: {
                restaurant: 'Restoran & F&B',
                automotive: 'Otomotif & Transportasi',
                retail: 'Retail & E-commerce',
                professional: 'Jasa Profesional',
                healthcare: 'Kesehatan & Klinik',
                education: 'Pendidikan & Kursus',
                realestate: 'Properti & Real Estate'
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

        const langKey = (language === 'gulf' || language === 'arabic') ? 'gulf' : 
                        (language === 'indonesian' ? 'indonesian' : 'english');
        const langDesc = descriptions[langKey];
        
        return industries.map(industry => ({
            code: industry,
            name: langDesc[industry] || industry,
            marketSize: this.getMarketSize(industry, language)
        }));
    }

    // Method to validate and enhance lead data
    validateAndEnhanceLead(lead) {
        const enhanced = {
            name: lead.name || 'Business Owner',
            address: lead.address || 'Indonesia',
            phone: lead.phone || 'N/A',
            rating: lead.rating || 'N/A',
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