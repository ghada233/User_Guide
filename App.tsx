
import React, { useState, useMemo, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  Info, 
  CheckCircle2, 
  UserPlus, 
  Mail, 
  Layout, 
  Users, 
  FileText, 
  Globe,
  BookOpen, 
  Languages, 
  GraduationCap, 
  ScrollText, 
  Sunrise, 
  Clock, 
  ExternalLink, 
  Sparkles,
  HelpCircle
} from 'lucide-react';

// Theme Colors
const PRIMARY_GREEN = '#004d32';
const SECONDARY_GREEN = '#006442';
const ACCENT_GOLD = '#b4975a';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('الفجر');

  const steps = useMemo(() => [
    {
      title: "الموقع الرسمي",
      description: "ابدأ بالدخول للموقع الرسمي لإدارة حلقات القرآن الكريم والمتون العلمية.",
      link: "https://qm.edu.sa/",
      action: "اضغط على زر 'التسجيل اضغط هنا' في الواجهة الرئيسية للبدء.",
      icon: <Home className="w-6 h-6" />,
      image: "img\img1.png"
    },
    {
      title: "صفحة تسجيل الدخول",
      description: "سيتم توجيهك لصفحة الدخول الموحدة للمنصة.",
      link: "https://reg.qm.edu.sa/Minton/Account/Login",
      action: "أدخل بياناتك إذا كان لديك حساب مسبق، أو اضغط على 'تسجيل حساب جديد'.",
      icon: <UserPlus className="w-6 h-6" />,
      image: "img\img2.png"
    },
    {
      title: "إنشاء حساب جديد",
      description: "تعبئة البيانات الأساسية المطلوبة للمستخدمين الجدد.",
      action: "أدخل الاسم الرباعي، الجنسية ،الجنس، تاريخ الميلاد، البريد الإلكتروني وكلمة المرور بدقة.",
      icon: <FileText className="w-6 h-6" />,
      image: "img\img3.png"
    },
    {
      title: "تفعيل الحساب",
      description: "تحقق من وصول رسالة التفعيل إلى بريدك الإلكتروني.",
      action: "افتح بريدك الوارد، وفي حال لم تجد الرسالة ابحث في البريد المزعج (Spam).",
      icon: <Mail className="w-6 h-6" />,
      image: "img\img4.png"
    },
    {
      title: "نجاح التفعيل",
      description: "الآن أصبح حسابك جاهزاً للاستخدام الفعلي.",
      action: "بعد الضغط على رابط البريد، ستفتح صفحة تؤكد نجاح التفعيل، اضغط 'دخول'.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      image: "img\img5.png"
    },
    {
      title: "الصفحه الرئيسيه ",
      description: "هذه هي واجهتك الشخصية في نظام الحلقات.",
      action: "في حال كنت مستخدماً جديداً، ستجد خيار 'انضمام لحلقة' متاحاً في القائمة.",
      icon: <Layout className="w-6 h-6" />,
      image: "img\img6.png"
    },
    {
      title: "تحديد المسار",
      description: "اختر نوع التعليم الذي يناسب ظروفك.",
      action: "حدد 'التعليم الحضوري' للدراسة داخل المسجد، أو 'عن بعد' للدراسة إلكترونياً.",
      icon: <Users className="w-6 h-6" />,
      image: "img\img6.png"
    },
    {
      title: "التعليم الحضوري",
      description: "إجراءات الانضمام للحلقات الحضوري.",
      action: "يتطلب هذا المسار إدخال بيانات الهوية/ الاقامه وغيرها .",
      icon: <Info className="w-6 h-6" />,
      image: "img\img7.png"
    },
    {
      title: "تخصيص الدراسة",
      description: "تحديد تفاصيل الحلقة (عن بعد).",
      action: "املأ نموذج التقديم باختيار المسار التعليمي والفترة .",
      icon: <Globe className="w-6 h-6" />,
      image: "img\img8.png"
    },
    {
      title: "اكتمال الطلب",
      description: "ظهور الحلقة للطالب ",
      action: "سيتم تحويلك  لبطاقة الحلقة إلكترونية تحتوي على كافة تفاصيل الحلقة.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      image: "img\img9.png"
    }
  ], []);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setIsAnimating(true);
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setIsAnimating(true);
      setCurrentStep(prev => prev - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentStep]);

  // UI Helpers
  const FormField: React.FC<{ label: string; icon: React.ReactNode; children: React.ReactNode; fullWidth?: boolean }> = ({ label, icon, children, fullWidth }) => (
    <div className={`space-y-4 group transition-all duration-300 ${fullWidth ? 'md:col-span-2' : ''}`}>
      <label className="text-sm font-bold text-slate-700 flex items-center gap-3 transition-colors group-hover:text-[#006442]">
        <span className="p-2.5 bg-white border border-slate-200 rounded-2xl shadow-sm text-[#006442] flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-md">
          {icon}
        </span>
        {label}
      </label>
      <div className="flex flex-wrap gap-3">
        {children}
      </div>
    </div>
  );

  const Chip: React.FC<{ label: string; active?: boolean; disabled?: boolean; onClick?: () => void }> = ({ label, active, disabled, onClick }) => (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all border duration-300 shadow-sm outline-none focus:ring-2 focus:ring-green-100 ${
      active 
        ? 'bg-gradient-to-r from-[#006442] to-[#004d32] border-[#004d32] text-white scale-105 shadow-green-900/10' 
        : disabled 
          ? 'bg-slate-50 border-slate-100 text-slate-400 italic font-normal cursor-not-allowed'
          : 'bg-white border-slate-200 text-slate-600 hover:border-[#b4975a] hover:text-[#b4975a] hover:-translate-y-0.5'
    }`}>
      {label}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden relative">
      {/* Top Fixed Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-slate-100/50">
        <div 
          className="h-full bg-[#b4975a] transition-all duration-700 ease-out shadow-[0_0_10px_#b4975a]"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>

      {/* Floating Help Button (FAB) */}
      <a 
        href="https://help.qm.edu.sa/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-[70] group flex items-center gap-3"
      >
        <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
          <span className="bg-[#004d32] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">تحتاج لمساعدة؟</span>
        </div>
        <div className="w-16 h-16 bg-white border-2 border-[#004d32] text-[#004d32] rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:rotate-12 transition-all duration-300 group-active:scale-95 bg-gradient-to-tr from-white to-slate-50">
           <HelpCircle className="w-10 h-10" strokeWidth={1.5} />
        </div>
      </a>

      {/* Modern Header */}
      <header className="bg-[#004d32] text-white shadow-xl relative z-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="text-center md:text-right">
            <h1 className="text-3xl font-extrabold tracking-tight flex items-center justify-center md:justify-start gap-3 text-white drop-shadow-sm">
              <Sparkles className="text-[#b4975a] w-8 h-8 hidden md:block" />
              دليل حلقات المسجد النبوي
            </h1>
            <p className="text-lg text-green-100/80 mt-2 font-medium">تجربة تفاعلية لخطوات التسجيل</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="px-6 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-md text-sm font-bold hover:bg-white/20 transition-all cursor-default">
               الموقع الرسمي: qm.edu.sa
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-12">
        {/* Animated Progress Tracker */}
        <div className="mb-12 glass p-8 rounded-[2rem] shadow-2xl border border-white/40 transition-all hover:shadow-green-900/5">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <h2 className="text-xl font-extrabold text-slate-800 flex items-center gap-3">
               <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-50 text-[#006442]">
                 <Layout size={20} />
               </span>
               مستوى التقدم في الدليل
               <span className="text-base font-normal text-slate-400 bg-slate-100 px-3 py-1 rounded-lg">
                 {currentStep + 1} من {steps.length}
               </span>
            </h2>
            <div className="flex gap-4">
               <button 
                 onClick={handlePrev} 
                 disabled={currentStep === 0}
                 className="p-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-600 disabled:opacity-20 disabled:cursor-not-allowed transition-all border border-slate-200 shadow-sm hover:shadow-md active:scale-95"
                 aria-label="السابق"
               >
                 <ChevronRight className="w-6 h-6" />
               </button>
               <button 
                 onClick={handleNext}
                 disabled={currentStep === steps.length - 1}
                 className="p-3.5 rounded-2xl bg-gradient-to-r from-[#006442] to-[#004d32] text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all shadow-lg shadow-green-900/20 active:scale-95 hover:brightness-110"
                 aria-label="التالي"
               >
                 <ChevronLeft className="w-6 h-6" />
               </button>
            </div>
          </div>
          
          <div className="relative flex items-center justify-between w-full px-4">
            <div className="absolute top-1/2 left-0 w-full h-2 bg-slate-100/80 -translate-y-1/2 z-0 rounded-full overflow-hidden">
               <div 
                 className="h-full bg-gradient-to-r from-[#006442] to-[#004d32] transition-all duration-700 ease-in-out"
                 style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
               />
            </div>
            {steps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border-2 shadow-sm ${
                  idx <= currentStep 
                    ? 'bg-[#006442] border-[#006442] text-white' 
                    : 'bg-white border-slate-200 text-slate-400 hover:border-[#006442]'
                } ${idx === currentStep ? 'scale-125 ring-8 ring-green-100/50 shadow-xl' : 'hover:scale-105'}`}
              >
                {idx < currentStep ? <CheckCircle2 className="w-5 h-5" /> : <span className="text-sm font-black">{idx + 1}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="grid lg:grid-cols-5 gap-10 pb-20">
          <div className="lg:col-span-3">
            <div 
              className={`glass rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/60 min-h-[600px] flex flex-col transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            >
              <div className="p-10">
                <div className="flex items-center gap-6 mb-10">
                  <div className="p-5 bg-gradient-to-br from-green-50 to-green-100 text-[#006442] rounded-3xl shadow-inner group transition-all duration-500 hover:rotate-12">
                    {steps[currentStep].icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-[#004d32] mb-1">{steps[currentStep].title}</h3>
                    <p className="text-slate-500 font-bold text-lg">{steps[currentStep].description}</p>
                  </div>
                </div>

                <div className="bg-amber-50/70 border-r-[6px] border-[#b4975a] p-8 mb-10 rounded-2xl shadow-sm relative overflow-hidden group">
                  <h4 className="font-extrabold text-amber-900 mb-3 flex items-center gap-3 text-lg">
                    <Info size={20} className="text-[#b4975a] pulse-soft" />
                    الإجراء المطلوب:
                  </h4>
                  <p className="text-amber-800 leading-relaxed text-xl font-medium">{steps[currentStep].action}</p>
                </div>

                {steps[currentStep].link && (
                  <a 
                    href={steps[currentStep].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-4 bg-[#006442] text-white px-10 py-5 rounded-2xl font-black hover:bg-[#004d32] transition-all mb-10 shadow-xl hover:shadow-green-900/30 active:scale-95 text-lg"
                  >
                    انتقل للموقع الآن <ExternalLink className="w-6 h-6 transition-transform group-hover:translate-x-[-4px]" />
                  </a>
                )}

                {currentStep === 8 && (
                   <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 bg-white/50 p-10 rounded-[2.5rem] border border-slate-200/50 shadow-inner">
                      <FormField label="نوع الحلقة *" icon={<BookOpen size={20} />}>
                        <Chip label="القرآن" active />
                        <Chip label="المتون" />
                        <Chip label="إجازات القرآن" />
                      </FormField>

                      <FormField label="إتقان اللغة العربية؟ *" icon={<Languages size={20} />}>
                        <Chip label="نعم" active />
                        <Chip label="لا" />
                      </FormField>

                      <FormField label="مقدار الحفظ الحالي *" icon={<GraduationCap size={20} />}>
                        <Chip label="خاتم" active />
                        <Chip label="أكثر من 5 أجزاء" />
                        <Chip label="أقل من 5 أجزاء" />
                      </FormField>

                      <FormField label="الرواية المعتمدة *" icon={<ScrollText size={20} />}>
                        <Chip label="حفص" active />
                        <Chip label="ورش" />
                        <Chip label="قالون" />
                      </FormField>

                      <FormField label="الفترة الدراسية *" icon={<Sunrise size={20} />} fullWidth>
                        {['الفجر', 'العصر', 'المغرب', 'العشاء'].map((period) => (
                          <Chip 
                            key={period}
                            label={period} 
                            active={selectedPeriod === period} 
                            onClick={() => setSelectedPeriod(period)}
                          />
                        ))}
                      </FormField>
                   </div>
                )}
              </div>

              <div className="mt-auto bg-slate-50/60 p-8 flex justify-between items-center border-t border-slate-100 backdrop-blur-md">
                 <button 
                   onClick={handlePrev} 
                   disabled={currentStep === 0}
                   className="flex items-center gap-3 px-8 py-3.5 rounded-2xl font-black text-slate-500 hover:text-[#004d32] hover:bg-white transition-all disabled:opacity-0 disabled:pointer-events-none"
                 >
                   <ChevronRight className="w-6 h-6" /> الخطوة السابقة
                 </button>
                 <button 
                   onClick={handleNext}
                   disabled={currentStep === steps.length - 1}
                   className="flex items-center gap-3 bg-gradient-to-r from-[#006442] to-[#004d32] text-white px-10 py-4.5 rounded-[1.5rem] font-black hover:scale-105 transition-all shadow-2xl active:scale-95 disabled:opacity-0 disabled:pointer-events-none text-lg"
                 >
                   الخطوة التالية <ChevronLeft className="w-6 h-6" />
                 </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-10">
            <div className="glass p-6 rounded-[2.5rem] shadow-2xl border border-white/60 group">
               <h4 className="font-black text-slate-800 mb-6 flex items-center gap-3">
                 <div className="p-2 bg-amber-100 rounded-xl">
                    <Info className="w-5 h-5 text-[#b4975a]" />
                 </div>
                 معاينة توضيحية
               </h4>
               <div className="rounded-[2rem] overflow-hidden border border-slate-100 bg-slate-50 shadow-inner group-hover:shadow-lg transition-all duration-500">
                 <img 
                    key={currentStep}
                    src={steps[currentStep].image} 
                    alt="Guide step preview" 
                    className={`w-full h-auto object-cover transition-all duration-700 ${isAnimating ? 'scale-110 blur-sm' : 'scale-100 hover:scale-105'}`}
                 />
               </div>
               <div className="mt-4 flex justify-center text-xs text-slate-400 font-bold italic">
                 * الصورة للمعاينة التقريبية
               </div>
            </div>

            {/* Support Message Box */}
            <div className="bg-gradient-to-br from-[#004d32] to-[#006442] p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
               <h4 className="font-black text-xl mb-4">هل تواجه صعوبات؟</h4>
               <p className="text-sm text-green-50 opacity-90 leading-relaxed font-medium">
                 نحن هنا لخدمتكم، لا تتردد في استخدام أيقونة المساعدة العائمة في أسفل الصفحة للتحدث مع فريق الدعم.
               </p>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="bg-[#0b141e] text-[#718096] py-12 text-center text-base border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-medium tracking-wide">
            جميع الحقوق محفوظة لحلقات القرآن الكريم والمتون العلمية بالمسجد النبوي © 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
