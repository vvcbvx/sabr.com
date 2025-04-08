  // بيانات العائلة مع الصور والوصف والحالة الاجتماعية
  const familyData = [
    { 
        id: "1", 
        name: "حُماده", 
        birthDate: "1930-05-10", 
        deathDate: "2010-02-15", 
        fatherId: null,
        description: "الجد المؤسس",
        image: "",
        status: "married"
    },
    { 
        id: "2", 
        name: "خلوف ", 
        birthDate: "1935-03-15", 
        fatherId: "1",
        description: "جد ذو صيت حسن",
        image: "",
        status: "married"
    },
    { 
        id: "3", 
        name: "علي", 
        birthDate: "1958-09-22", 
        fatherId: "1",
        description: "معروف لدى الناس",
        image: "",
        status: "married"
    },
    { 
        id: "4", 
        name: "ثابت ", 
        birthDate: "1952-01-10", 
        fatherId: "1",
        description: "ذو كلمة هادفة وهو واجها عشائريه",
        image: "",
        status: "married"
    },
    { 
        id: "5", 
        name: "نوري", 
        birthDate: "1980-08-12", 
        fatherId: "1",
        description: "مثقف وضحوك",
        image: "",
        status: "married"
    },
    { 
        id: "6", 
        name: " ساير الأول", 
        birthDate: "1950-04-25", 
        fatherId: "2",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "7", 
        name: "سوري ", 
        birthDate: "1955-11-30", 
        fatherId: "2",
        description: " فلاح نشيط",
        image: "",
        status: "married"
    },
    { 
        id: "8", 
        name: "ساري", 
        birthDate: "1960-07-18", 
        fatherId: "2",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "9", 
        name: "محمد", 
        birthDate: "1968-05-20", 
        fatherId: "2",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "10", 
        name: "ضاهر ", 
        birthDate: "1970-12-15", 
        fatherId: "2",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "11", 
        name: "غنام", 
        birthDate: "1987-07-18", 
        fatherId: "2",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "12", 
        name: " ساير الثاني ", 
        birthDate: "1992-07-18", 
        fatherId: "2",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "13", 
        name: "بشار", 
        birthDate: "1991-07-18", 
        fatherId: "6",
        description: "",
        image: "",
        status: "married"
    },   
    { 
        id: "14", 
        name: "بشار", 
        birthDate: "1997-07-18", 
        fatherId: "7",
        description: "",
        image: "",
        status: "unmarried"
    }, 
    { 
        id: "15", 
        name: "ضاهر", 
        birthDate: "2000-07-18", 
        fatherId: "7",
        description: "",
        image: "",
        status: "unmarried"
    }, 
    { 
        id: "16", 
        name: "محمد", 
        birthDate: "2000-07-18", 
        fatherId: "7",
        description: "",
        image: "",
        status: "young"
    },
    { 
        id: "17", 
        name: "احمد", 
        birthDate: "2000-07-18", 
        fatherId: "7",
        description: "",
        image: "",
        status: "young"
    },   
    { 
        id: "18", 
        name: "غنام", 
        birthDate: "2000-07-18", 
        fatherId: "8",
        description: "",
        image: "",
        status: "married"
    }, 
    { 
        id: "19", 
        name: "فيصل", 
        birthDate: "2000-07-18", 
        fatherId: "8",
        description: "",
        image: "",
        status: "unmarried"
    }, 
    { 
        id: "20", 
        name: "محمد", 
        birthDate: "2000-07-18", 
        fatherId: "8",
        description: "",
        image: "",
        status: "unmarried"
    }, 
    { 
        id: "21", 
        name: "قيس", 
        birthDate: "2000-07-18", 
        fatherId: "8",
        description: "",
        image: "",
        status: "unmarried"
    }, 
    { 
        id: "22", 
        name: "خلوف", 
        birthDate: "2000-07-18", 
        fatherId: "8",
        description: "",
        image: "",
        status: "young"
    },
    { 
        id: "23", 
        name: "أسحاق", 
        birthDate: "2000-07-18", 
        fatherId: "8",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "24", 
        name: "عمر", 
        birthDate: "2000-07-18", 
        fatherId: "8",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "25", 
        name: "أيوب", 
        birthDate: "2000-07-18", 
        fatherId: "8",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "26", 
        name: "جاسم", 
        birthDate: "2000-07-18", 
        fatherId: "9",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "27", 
        name: "ياسر", 
        birthDate: "2000-07-18", 
        fatherId: "9",
        description: "",
        image: "",
        status: "unmarried"
    },  
    { 
        id: "28", 
        name: "بلال", 
        birthDate: "2000-07-18", 
        fatherId: "9",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "29", 
        name: "صالح", 
        birthDate: "2000-07-18", 
        fatherId: "10",
        description: "",
        image: "",
        status: "unmarried"
    },
    { 
        id: "30", 
        name: "عمر", 
        birthDate: "2000-07-18", 
        fatherId: "10",
        description: "",
        image: "",
        status: "young"
    },
    { 
        id: "31", 
        name: "عثمان", 
        birthDate: "2000-07-18", 
        fatherId: "10",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "32", 
        name: "زكريا", 
        birthDate: "2000-07-18", 
        fatherId: "10",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "33", 
        name: "عبد المجيد", 
        birthDate: "2000-07-18", 
        fatherId: "11",
        description: "",
        image: "",
        status: "unmarried"
    },
    { 
        id: "34", 
        name: "هيثم", 
        birthDate: "2000-07-18", 
        fatherId: "11",
        description: "",
        image: "",
        status: "young"
    },
    { 
        id: "35", 
        name: "عبدالله", 
        birthDate: "2000-07-18", 
        fatherId: "11",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "36", 
        name: "محمد", 
        birthDate: "2000-07-18", 
        fatherId: "11",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "37", 
        name: "عبد الرحمن", 
        birthDate: "2000-07-18", 
        fatherId: "11",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "38", 
        name: "فاروق", 
        birthDate: "2000-07-18", 
        fatherId: "12",
        description: "",
        image: "",
        status: "young"
    },
    { 
        id: "39", 
        name: "أسحاق", 
        birthDate: "2000-07-18", 
        fatherId: "12",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "40", 
        name: "حارث", 
        birthDate: "2000-07-18", 
        fatherId: "12",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "41", 
        name: "عبد الرحمن", 
        birthDate: "2000-07-18", 
        fatherId: "13",
        description: "",
        image: "",
        status: "unmarried"
    },
    { 
        id: "42", 
        name: "عبدالله", 
        birthDate: "2000-07-18", 
        fatherId: "13",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "43", 
        name: "عبد الملك", 
        birthDate: "2000-07-18", 
        fatherId: "13",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "44", 
        name: "محمد", 
        birthDate: "2000-07-18", 
        fatherId: "26",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "45", 
        name: "عبد الرحمن ", 
        birthDate: "2000-07-18", 
        fatherId: "3",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "46", 
        name: " باسم", 
        birthDate: "2000-07-18", 
        fatherId: "3",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "47", 
        name: "جمعه ", 
        birthDate: "2000-07-18", 
        fatherId: "3",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "48", 
        name: " جهاد", 
        birthDate: "2000-07-18", 
        fatherId: "3",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "49", 
        name: "محمد ", 
        birthDate: "2000-07-18", 
        fatherId: "3",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "50", 
        name: " شادي", 
        birthDate: "2000-07-18", 
        fatherId: "4",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "51", 
        name: "فادي ", 
        birthDate: "2000-07-18", 
        fatherId: "4",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "52", 
        name: "محمد ", 
        birthDate: "2000-07-18", 
        fatherId: "4",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "53", 
        name: "خلدون ", 
        birthDate: "2000-07-18", 
        fatherId: "4",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "54", 
        name: "أبراهيم ", 
        birthDate: "2000-07-18", 
        fatherId: "4",
        description: "",
        image: "",
        status: "married"
    }, 
    { 
        id: "55", 
        name: "سيف ", 
        birthDate: "2000-07-18", 
        fatherId: "4",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "56", 
        name: "مشاري", 
        birthDate: "2000-07-18", 
        fatherId: "4",
        description: "",
        image: "",
        status: "unmarried"
    },
    { 
        id: "57", 
        name: "سند ", 
        birthDate: "2000-07-18", 
        fatherId: "4",
        description: "",
        image: "",
        status: "young"
    },
    { 
        id: "58", 
        name: " حسن", 
        birthDate: "2000-07-18", 
        fatherId: "5",
        description: "",
        image: "",
        status: "unmarried"
    },
    { 
        id: "59", 
        name: " حسين", 
        birthDate: "2000-07-18", 
        fatherId: "5",
        description: "",
        image: "",
        status: "unmarried"
    },
    { 
        id: "60", 
        name: " فادي", 
        birthDate: "2000-07-18", 
        fatherId: "5",
        description: "",
        image: "",
        status: "young"
    },
    { 
        id: "61", 
        name: " شادي", 
        birthDate: "2000-07-18", 
        fatherId: "5",
        description: "",
        image: "",
        status: "young"
    },
    { 
        id: "62", 
        name: " محمد", 
        birthDate: "2000-07-18", 
        fatherId: "5",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "63", 
        name: "حمزة ", 
        birthDate: "2000-07-18", 
        fatherId: "45",
        description: "",
        image: "",
        status: "unmarried"
    },
    { 
        id: "64", 
        name: " بلال", 
        birthDate: "2000-07-18", 
        fatherId: "45",
        description: "",
        image: "",
        status: "young"
    },
    { 
        id: "65", 
        name: " معتصم", 
        birthDate: "2000-07-18", 
        fatherId: "45",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "66", 
        name: "جهاد ", 
        birthDate: "2000-07-18", 
        fatherId: "45",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "67", 
        name: "علاء ", 
        birthDate: "2000-07-18", 
        fatherId: "46",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "68", 
        name: "صلاح ", 
        birthDate: "2000-07-18", 
        fatherId: "46",
        description: "",
        image: "",
        status: "child"
    },
    { 
        id: "69", 
        name: "حسين ", 
        birthDate: "2000-07-18", 
        fatherId: "3",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "70", 
        name: "صعب ", 
        birthDate: "2000-07-18", 
        fatherId: "69",
        description: "",
        image: "",
        status: "married"
    },
    { 
        id: "71", 
        name: "علي ", 
        birthDate: "2000-07-18", 
        fatherId: "69",
        description: "",
        image: "",
        status: "unmarried"
    },
    { 
        id: "72", 
        name: "عبد الرزاق ", 
        birthDate: "2000-07-18", 
        fatherId: "69",
        description: "",
        image: "",
        status: "unmarried"
    },
    { 
        id: "73", 
        name: "محمد ", 
        birthDate: "2000-07-18", 
        fatherId: "69",
        description: "",
        image: "",
        status: "unmarried"
    },
    { 
        id: "74", 
        name: "جهاد ", 
        birthDate: "2000-07-18", 
        fatherId: "69",
        description: "",
        image: "",
        status: "young"
    },

];

// متغيرات التطبيق
let currentMemberId = "1";
let memberPath = [];
let zoomLevel = 1;
let darkMode = false;
let clickCount = 0;
let lastClickedId = null;
let clickTimer = null;

// قائمة ببطاقات الأعضاء المميزة (يمكن تغييرها حسب الحاجة)
const specialMembers = ["33",]; // مثال: بطاقات بعينها ID 33, 45, 60

// عناصر DOM
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const familyTree = document.getElementById('familyTree');
const breadcrumb = document.getElementById('breadcrumb');
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const resetBtn = document.getElementById('resetBtn');
const themeToggle = document.getElementById('themeToggle');
const memberDetails = document.getElementById('memberDetails');
const detailsClose = document.getElementById('detailsClose');
const detailsCard = document.getElementById('detailsCard');
const detailsImage = document.getElementById('detailsImage');
const detailsName = document.getElementById('detailsName');
const detailsDates = document.getElementById('detailsDates');
const detailsAge = document.getElementById('detailsAge');
const detailsStatus = document.getElementById('detailsStatus');
const detailsDescription = document.getElementById('detailsDescription');
const familyMembersList = document.getElementById('familyMembersList');
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const allMembersBtn = document.getElementById('allMembers');
const unmarriedMembersBtn = document.getElementById('unmarriedMembers');
const marriedMembersBtn = document.getElementById('marriedMembers');
const childMembersBtn = document.getElementById('childMembers');
const youngMembersBtn = document.getElementById('youngMembers');
const shareMemberBtn = document.getElementById('shareMemberBtn');
const shareCard = document.getElementById('shareCard');
const shareCardImage = document.getElementById('shareCardImage');
const shareCardName = document.getElementById('shareCardName');
const shareCardUrl = document.getElementById('shareCardUrl');
const copyShareUrl = document.getElementById('copyShareUrl');
const closeShareCard = document.getElementById('closeShareCard');
const facebookShare = document.querySelector('.share-btn.facebook');
const twitterShare = document.querySelector('.share-btn.twitter');
const whatsappShare = document.querySelector('.share-btn.whatsapp');
const linkShare = document.querySelector('.share-btn.link');
const aboutBtn = document.getElementById('aboutBtn');
const aboutModal = document.getElementById('aboutModal');
const aboutClose = document.getElementById('aboutClose');

// تهيئة التطبيق
function init() {
    // تحميل الوضع من localStorage
    const savedMode = localStorage.getItem('familyTreeDarkMode');
    if (savedMode === 'true') {
        toggleDarkMode();
    }
    
    renderFamilyTree(currentMemberId);
    setupSearch();
    updateBreadcrumb();
    setupEventListeners();
    updateCategoryCounts();
    
    // عرض الجد كافتراضي
    if (familyData.some(m => m.id === currentMemberId)) {
        const member = familyData.find(m => m.id === currentMemberId);
        if (member.fatherId === null) {
            memberPath = [member.id];
        }
    }
}

// حساب العمر بناءً على تاريخ الميلاد
function calculateAge(birthDate, deathDate = null) {
    if (!birthDate) return null;
    
    const birth = new Date(birthDate);
    const today = deathDate ? new Date(deathDate) : new Date();
    
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

// تنسيق العمر لعرضه
function formatAge(age, isDeceased = false) {
    if (age === null) return '';
    return isDeceased ? `عمره عند الوفاة: ${age} سنة` : `العمر: ${age} سنة`;
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // أحداث التحكم بالتكبير/التصغير
    zoomInBtn.addEventListener('click', () => {
        if (zoomLevel < 1.1) {
            zoomLevel += 0.1;
            familyTree.style.transform = `scale(${zoomLevel})`;
        }
    });
    
    zoomOutBtn.addEventListener('click', () => {
        if (zoomLevel > 0.9) {
            zoomLevel -= 0.1;
            familyTree.style.transform = `scale(${zoomLevel})`;
        }
    });
    
    // إعادة التعيين
    resetBtn.addEventListener('click', () => {
        zoomLevel = 1;
        familyTree.style.transform = 'scale(1)';
        currentMemberId = "1";
        renderFamilyTree(currentMemberId);
        updateBreadcrumb();
    });
    
    // تبديل الوضع الليلي
    themeToggle.addEventListener('click', toggleDarkMode);
    
    // إغلاق تفاصيل العضو
    detailsClose.addEventListener('click', () => {
        memberDetails.classList.remove('active');
    });
    
    // إغلاق عند النقر خارج التفاصيل
    memberDetails.addEventListener('click', (e) => {
        if (e.target === memberDetails) {
            memberDetails.classList.remove('active');
        }
    });
    
    // القائمة الجانبية للهواتف
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
    
    // تصفية الأعضاء حسب الفئة
    allMembersBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveCategory('allMembers');
        currentMemberId = "1";
        renderFamilyTree(currentMemberId);
        updateBreadcrumb();
    });
    
    unmarriedMembersBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveCategory('unmarriedMembers');
        showMembersByStatus('unmarried');
    });
    
    marriedMembersBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveCategory('marriedMembers');
        showMembersByStatus('married');
    });
    
    childMembersBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveCategory('childMembers');
        showMembersByStatus('child');
    });
    
    youngMembersBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveCategory('youngMembers');
        showMembersByStatus('young');
    });
    
    // مشاركة العضو
    shareMemberBtn.addEventListener('click', () => {
        const member = familyData.find(m => m.id === currentMemberId);
        if (member) {
            showShareCard(member);
        }
    });
    
    // إغلاق بطاقة المشاركة
    closeShareCard.addEventListener('click', () => {
        shareCard.classList.remove('active');
    });
    
    // نسخ رابط المشاركة
    copyShareUrl.addEventListener('click', () => {
        const url = shareCardUrl.textContent;
        navigator.clipboard.writeText(url).then(() => {
            copyShareUrl.innerHTML = '<i class="fas fa-check"></i> تم النسخ!';
            setTimeout(() => {
                copyShareUrl.innerHTML = '<i class="fas fa-copy"></i> نسخ الرابط';
            }, 2000);
        });
    });
    
    // مشاركة الموقع
    facebookShare.addEventListener('click', shareSite.bind(null, 'facebook'));
    twitterShare.addEventListener('click', shareSite.bind(null, 'twitter'));
    whatsappShare.addEventListener('click', shareSite.bind(null, 'whatsapp'));
    linkShare.addEventListener('click', copySiteLink);
    
    // أحداث قسم "حول البرنامج"
    aboutBtn.addEventListener('click', () => {
        aboutModal.classList.add('active');
    });
    
    aboutClose.addEventListener('click', () => {
        aboutModal.classList.remove('active');
    });
    
    document.querySelector('.about-content').addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    aboutModal.addEventListener('click', (e) => {
        if(e.target === aboutModal) {
            aboutModal.classList.remove('active');
        }
    });
    
    // إغلاق بالنقر على زر ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            memberDetails.classList.remove('active');
            shareCard.classList.remove('active');
            aboutModal.classList.remove('active');
        }
    });
    
    // إخفاء نتائج البحث عند النقر خارجها
    document.addEventListener('click', function(e) {
        if (!searchResults.contains(e.target) && e.target !== searchInput) {
            searchResults.style.display = 'none';
        }
    });
}

// تبديل الوضع الليلي/النهاري
function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    
    // تغيير الأيقونة
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon', !darkMode);
    icon.classList.toggle('fa-sun', darkMode);
    
    // حفظ التفضيل في localStorage
    localStorage.setItem('familyTreeDarkMode', darkMode);
}

// عرض شجرة العائلة
function renderFamilyTree(memberId) {
    familyTree.innerHTML = '';
    familyTree.style.transform = `scale(${zoomLevel})`;
    
    // الحصول على العضو الحالي وأسلافه
    const currentMember = familyData.find(m => m.id === memberId);
    if (!currentMember) return;
    
    // تحديث مسار العائلة
    updateMemberPath(currentMember);
    
    // عرض الأجيال
    showGenerations(currentMember);
}

// عرض الأجيال
function showGenerations(currentMember) {
    // الحصول على جميع الأسلاف
    const ancestors = getAncestors(currentMember.id);
    
    // عرض كل جيل
    ancestors.forEach((generation, genIndex) => {
        const generationDiv = document.createElement('div');
        generationDiv.className = 'generation';
        
        generation.forEach((member, idx) => {
            const memberDiv = createMemberElement(member, genIndex);
            generationDiv.appendChild(memberDiv);
            
            // تأخير ظهور كل عضو لإنشاء تأثير متتالي
            memberDiv.style.animationDelay = `${idx * 0.1}s`;
        });
        
        familyTree.appendChild(generationDiv);
        
        // إضافة موصلات بين الأجيال
        if (genIndex < ancestors.length - 1) {
            addConnectors(generationDiv, ancestors[genIndex + 1]);
        }
    });
    
    // عرض الأبناء للعضو الحالي
    showChildren(currentMember);
}

// عرض أبناء العضو الحالي
function showChildren(member) {
    const children = familyData.filter(m => m.fatherId === member.id);
    if (children.length === 0) return;
    
    const childrenDiv = document.createElement('div');
    childrenDiv.className = 'generation';
    
    children.forEach((child, idx) => {
        const childDiv = createMemberElement(child, 0);
        childrenDiv.appendChild(childDiv);
        
        // تأخير ظهور كل ابن لإنشاء تأثير متتالي
        childDiv.style.animationDelay = `${idx * 0.1}s`;
    });
    
    familyTree.appendChild(childrenDiv);
    
    // إضافة موصلات بين الأب وأبنائه
    addChildConnectors(childrenDiv, member.id);
}

// إنشاء عنصر العضو مع إضافة الشرط للبطاقات المميزة
function createMemberElement(member, genIndex) {
    const memberDiv = document.createElement('div');
    memberDiv.className = 'member';
    memberDiv.dataset.id = member.id;
    
    // تحديد إذا كانت البطاقة مميزة
    const isSpecial = specialMembers.includes(member.id);
    
    const memberCard = document.createElement('div');
    memberCard.className = `member-card ${member.id === currentMemberId ? 'active' : ''} ${isSpecial ? 'special' : ''}`;
    
    // صورة العضو
    const memberImage = document.createElement('img');
    memberImage.className = 'member-image';
    memberImage.src = member.image || 'https://via.placeholder.com/80';
    memberImage.alt = member.name;
    memberImage.onerror = () => {
        memberImage.src = 'https://via.placeholder.com/80';
    };
   




    
    // حالة العضو الاجتماعية
    const memberStatus = document.createElement('div');
    memberStatus.className = `member-status ${
        member.status === 'married' ? 'status-married' : 
        member.status === 'unmarried' ? 'status-unmarried' :
        member.status === 'child' ? 'status-child' : 'status-young'
    }`;
    
    // نص الحالة الاجتماعية
    memberStatus.textContent = 
        member.status === 'married' ? 'متزوج' : 
        member.status === 'unmarried' ? 'عزابي' : 
        member.status === 'child' ? 'طفل' : 'شاب';
    
    // حساب العمر
    const age = calculateAge(member.birthDate, member.deathDate);
    const ageElement = document.createElement('div');
    ageElement.className = 'member-age';
    ageElement.textContent = formatAge(age, !!member.deathDate);
    
    // إنشاء محتوى البطاقة
    memberCard.innerHTML = `
        <div class="member-name">${member.name}</div>
        <div class="member-dates">
            ${member.birthDate ? `الميلاد: ${member.birthDate}` : ''}
            ${member.deathDate ? `<br>الوفاة: ${member.deathDate}` : ''}
        </div>
        ${member.description ? `<div class="member-description">${member.description.substring(0, 50)}...</div>` : ''}
    `;
    
    // إضافة العناصر إلى البطاقة
    memberCard.insertBefore(memberImage, memberCard.firstChild);
    memberCard.appendChild(ageElement);
    memberCard.appendChild(memberStatus);
    
    // أحداث النقر
    memberCard.onclick = (e) => {
        e.stopPropagation();
        
        // التحقق من النقر المزدوج
        if (lastClickedId === member.id && clickCount === 1) {
            clearTimeout(clickTimer);
            clickCount = 0;
            showMemberDetails(member);
        } else {
            clickCount = 1;
            lastClickedId = member.id;
            clickTimer = setTimeout(() => {
                clickCount = 0;
                currentMemberId = member.id;
                renderFamilyTree(currentMemberId);
                updateBreadcrumb();
            }, 300);
        }
        
        // تأثير النقر
        memberCard.style.transform = 'translateY(-5px) rotateY(20deg)';
        setTimeout(() => {
            memberCard.style.transform = 'translateY(-5px) rotateY(0deg)';
        }, 300);
    };
    
    // تأثيرات 3D عند التحويم
    memberCard.addEventListener('mouseenter', () => {
        memberCard.style.transform = 'rotateY(10deg) translateZ(10px)';
        memberCard.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
    });
    
    memberCard.addEventListener('mouseleave', () => {
        memberCard.style.transform = 'rotateY(0deg) translateZ(0)';
        memberCard.style.boxShadow = isSpecial ? '0 0 15px rgba(255, 0, 255, 0.5)' : 'var(--shadow)';
    });
    
    memberDiv.appendChild(memberCard);
    return memberDiv;
}

// عرض تفاصيل العضو
function showMemberDetails(member) {
    detailsImage.src = member.image || 'https://via.placeholder.com/120';
    detailsImage.alt = member.name;
    detailsName.textContent = member.name;
    
    let datesText = '';
    if (member.birthDate) datesText += `الميلاد: ${member.birthDate}`;
    if (member.deathDate) datesText += ` - الوفاة: ${member.deathDate}`;
    detailsDates.textContent = datesText;
    
    // حساب العمر وعرضه
    const age = calculateAge(member.birthDate, member.deathDate);
    detailsAge.textContent = formatAge(age, !!member.deathDate);
    
    detailsStatus.textContent = member.status === 'married' ? 'متزوج' : member.status === 'unmarried' ? 'عزابي' : member.status === 'child' ? 'طفل' : 'شاب';
    detailsStatus.className = `details-status ${
        member.status === 'married' ? 'status-married' : 
        member.status === 'unmarried' ? 'status-unmarried' : 
        member.status === 'child' ? 'status-child' : 'status-young'
    }`;


    const nameElement = document.createElement('div');
nameElement.className = 'member-name';

if (specialMembers.includes(member.id)) {
nameElement.innerHTML = `${member.name} <span class="special-badge">مميز</span>`;
} else {
nameElement.textContent = member.name;
}

    
    detailsDescription.textContent = member.description || 'لا يوجد وصف متاح';
    
    // عرض أفراد العائلة
    showFamilyMembers(member);
    
    // عرض تفاصيل العضو
    memberDetails.classList.add('active');
}

// عرض أفراد العائلة (الأب والأبناء)
function showFamilyMembers(member) {
    familyMembersList.innerHTML = '';
    
    // عرض الأب إذا كان موجوداً
    if (member.fatherId) {
        const father = familyData.find(m => m.id === member.fatherId);
        if (father) {
            const familyMember = createFamilyMemberElement(father, 'الأب');
            familyMembersList.appendChild(familyMember);
        }
    }
    
    // عرض الأبناء
    const children = familyData.filter(m => m.fatherId === member.id);
    if (children.length > 0) {
        children.forEach(child => {
            const familyMember = createFamilyMemberElement(child, 'الابن');
            familyMembersList.appendChild(familyMember);
        });
    } else {
        const noChildren = document.createElement('div');
        noChildren.textContent = 'لا يوجد أبناء';
        noChildren.style.padding = '10px';
        noChildren.style.color = 'var(--border-color)';
        noChildren.style.textAlign = 'center';
        familyMembersList.appendChild(noChildren);
    }





}

// إنشاء عنصر فرد العائلة للقائمة
function createFamilyMemberElement(member, relation) {
    const div = document.createElement('div');
    div.className = 'family-member';
    
    // حساب العمر
    const age = calculateAge(member.birthDate, member.deathDate);
    const ageText = age ? ` (${age} سنة)` : '';
    
    div.innerHTML = `
        <img src="${member.image || 'https://via.placeholder.com/40'}" alt="${member.name}">
        <div>
            <div>${member.name}</div>
            <small style="color: var(--border-color);">${relation}${ageText}</small>
        </div>
    `;
    
    div.onclick = () => {
        currentMemberId = member.id;
        renderFamilyTree(currentMemberId);
        updateBreadcrumb();
        showMemberDetails(member);
    };
    
    return div;
}

// إضافة موصلات بين الأجيال
function addConnectors(parentGenDiv, childGen) {
    const parentMembers = Array.from(parentGenDiv.children);
    
    parentMembers.forEach(parentDiv => {
        const parentId = parentDiv.dataset.id;
        const children = childGen.filter(m => m.fatherId === parentId);
        
        if (children.length > 0) {
            const connector = document.createElement('div');
            connector.className = 'connector';
            connector.style.height = '20px';
            connector.style.bottom = '-20px';
            parentDiv.appendChild(connector);
            
            if (children.length > 1) {
                const firstChild = familyTree.querySelector(`[data-id="${children[0].id}"]`);
                const lastChild = familyTree.querySelector(`[data-id="${children[children.length - 1].id}"]`);
                
                if (firstChild && lastChild) {
                    const horizontalConnector = document.createElement('div');
                    horizontalConnector.className = 'horizontal-connector';
                    
                    const firstRect = firstChild.getBoundingClientRect();
                    const lastRect = lastChild.getBoundingClientRect();
                    
                    horizontalConnector.style.width = `${lastRect.left - firstRect.left}px`;
                    horizontalConnector.style.left = `${firstRect.left - familyTree.getBoundingClientRect().left + firstRect.width / 2}px`;
                    horizontalConnector.style.top = `${firstRect.top - familyTree.getBoundingClientRect().top}px`;
                    
                    familyTree.appendChild(horizontalConnector);
                }
            }
        }
    });
}

// إضافة موصلات بين الأب وأبنائه
function addChildConnectors(childrenDiv, parentId) {
    const parentElement = familyTree.querySelector(`[data-id="${parentId}"]`);
    if (!parentElement) return;
    
    const connector = document.createElement('div');
    connector.className = 'connector';
    connector.style.height = '20px';
    connector.style.bottom = '-20px';
    parentElement.appendChild(connector);
    
    if (childrenDiv.children.length > 1) {
        const firstChild = childrenDiv.firstChild;
        const lastChild = childrenDiv.lastChild;
        
        const horizontalConnector = document.createElement('div');
        horizontalConnector.className = 'horizontal-connector';
        
        const firstRect = firstChild.getBoundingClientRect();
        const lastRect = lastChild.getBoundingClientRect();
        
        horizontalConnector.style.width = `${lastRect.left - firstRect.left}px`;
        horizontalConnector.style.left = `${firstRect.left - familyTree.getBoundingClientRect().left + firstRect.width / 2}px`;
        horizontalConnector.style.top = `${firstRect.top - familyTree.getBoundingClientRect().top}px`;
        
        familyTree.appendChild(horizontalConnector);
    }
}

// الحصول على الأسلاف
function getAncestors(memberId) {
    const ancestors = [];
    let currentId = memberId;
    
    while (currentId) {
        const member = familyData.find(m => m.id === currentId);
        if (!member) break;
        
        const generation = [member];
        ancestors.unshift(generation);
        
        currentId = member.fatherId;
    }
    
    return ancestors;
}

// تحديث مسار العائلة
function updateMemberPath(member) {
    memberPath = [];
    let currentId = member.id;
    
    while (currentId) {
        memberPath.unshift(currentId);
        const m = familyData.find(m => m.id === currentId);
        currentId = m ? m.fatherId : null;
    }
}

// تحديث مسار التنقل
function updateBreadcrumb() {
    breadcrumb.innerHTML = '';
    
    memberPath.forEach((id, index) => {
        const member = familyData.find(m => m.id === id);
        if (!member) return;
        
        const item = document.createElement('li');
        item.className = `breadcrumb-item ${index === memberPath.length - 1 ? 'active' : ''}`;
        
        if (index < memberPath.length - 1) {
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = member.name;
            link.onclick = (e) => {
                e.preventDefault();
                currentMemberId = member.id;
                renderFamilyTree(currentMemberId);
                updateBreadcrumb();
            };
            item.appendChild(link);
        } else {
            item.textContent = member.name;
        }
        
        breadcrumb.appendChild(item);
    });
}

// إعداد البحث
function setupSearch() {
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim().toLowerCase();
        
        if (searchTerm.length < 2) {
            searchResults.style.display = 'none';
            return;
        }
        
        const results = familyData.filter(member => 
            member.name.toLowerCase().includes(searchTerm)
        );
        
        displaySearchResults(results);
    });
}

// عرض نتائج البحث
function displaySearchResults(results) {
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results">لا توجد نتائج مطابقة</div>';
        searchResults.style.display = 'block';
        return;
    }
    
    results.forEach(member => {
        const result = document.createElement('div');
        result.className = 'search-result';
        
        // حساب العمر
        const age = calculateAge(member.birthDate, member.deathDate);
        const ageText = age ? ` (${age} سنة)` : '';
        
        // الحصول على سلسلة الأسلاف
        const ancestors = [];
        let currentId = member.fatherId;
        
        while (currentId) {
            const ancestor = familyData.find(m => m.id === currentId);
            if (ancestor) {
                ancestors.unshift(ancestor.name);
                currentId = ancestor.fatherId;
            } else {
                currentId = null;
            }
        }
        
        result.innerHTML = `
            <img src="${member.image || 'https://via.placeholder.com/40'}" alt="${member.name}">
            <div class="info">
                <div class="name">${member.name}${ageText}</div>
                <div class="ancestors">${ancestors.join(' ← ')}</div>
            </div>
            <div class="member-status ${
                member.status === 'married' ? 'status-married' : 
                member.status === 'unmarried' ? 'status-unmarried' : 
                member.status === 'child' ? 'status-child' : 'status-young'
            }">
                ${member.status === 'married' ? 'متزوج' : member.status === 'unmarried' ? 'عزابي' : member.status === 'child' ? 'طفل' : 'شاب'}
            </div>
        `;
        
        result.onclick = () => {
            currentMemberId = member.id;
            renderFamilyTree(currentMemberId);
            updateBreadcrumb();
            searchResults.style.display = 'none';
            searchInput.value = '';
            showMemberDetails(member);
        };
        
        searchResults.appendChild(result);
    });
    
    searchResults.style.display = 'block';
}

// تحديث عدد الأعضاء في كل فئة
function updateCategoryCounts() {
    const unmarriedCount = familyData.filter(m => m.status === 'unmarried').length;
    const marriedCount = familyData.filter(m => m.status === 'married').length;
    const childCount = familyData.filter(m => m.status === 'child').length;
    const youngCount = familyData.filter(m => m.status === 'young').length;
    
    document.querySelector('#unmarriedMembers .category-badge').textContent = unmarriedCount;
    document.querySelector('#marriedMembers .category-badge').textContent = marriedCount;
    document.querySelector('#childMembers .category-badge').textContent = childCount;
    document.querySelector('#youngMembers .category-badge').textContent = youngCount;
}

// تعيين الفئة النشطة في القائمة الجانبية
function setActiveCategory(categoryId) {
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(categoryId).classList.add('active');
}

// عرض الأعضاء حسب الحالة الاجتماعية
function showMembersByStatus(status) {
    familyTree.innerHTML = '';
    
    const members = familyData.filter(m => m.status === status);
    if (members.length === 0) {
        familyTree.innerHTML = `<div style="text-align:center; padding:20px; color:var(--border-color)">لا يوجد أعضاء في هذه الفئة</div>`;
        return;
    }
    
    const generationDiv = document.createElement('div');
    generationDiv.className = 'generation';
    
    members.forEach((member, idx) => {
        const memberDiv = createMemberElement(member, 0);
        generationDiv.appendChild(memberDiv);
        memberDiv.style.animationDelay = `${idx * 0.1}s`;
    });
    
    familyTree.appendChild(generationDiv);
    
    // تحديث المسار
    breadcrumb.innerHTML = `
        <li class="breadcrumb-item"><a href="#" id="backToTree">شجرة العائلة</a></li>
        <li class="breadcrumb-item active">${
            status === 'unmarried' ? 'العزابي' : 
            status === 'married' ? 'المتزوجين' : 
            status === 'child' ? 'الأطفال' : 'الشباب'
        }</li>
    `;
    
    document.getElementById('backToTree').addEventListener('click', (e) => {
        e.preventDefault();
        currentMemberId = "1";
        renderFamilyTree(currentMemberId);
        updateBreadcrumb();
    });
}

// عرض بطاقة المشاركة
function showShareCard(member) {
    shareCardImage.src = member.image || 'https://via.placeholder.com/400x200';
    shareCardName.textContent = member.name;
    
    // إنشاء رابط خاص بالعضو
    const url = `${window.location.origin}${window.location.pathname}?member=${member.id}`;
    shareCardUrl.textContent = url;
    
    shareCard.classList.add('active');
}

// مشاركة الموقع على وسائل التواصل الاجتماعي
function shareSite(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('شجرة العائلة الذكية - اكتشف شجرة عائلتنا');
    
    let shareUrl = '';
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${title} ${url}`;
            break;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// نسخ رابط الموقع
function copySiteLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        const originalHtml = linkShare.innerHTML;
        linkShare.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            linkShare.innerHTML = originalHtml;
        }, 2000);
    });
}

// تحميل عضو من الرابط إذا كان موجوداً
function loadMemberFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const memberId = urlParams.get('member');
    
    if (memberId && familyData.some(m => m.id === memberId)) {
        currentMemberId = memberId;
        renderFamilyTree(currentMemberId);
        updateBreadcrumb();
    }
}

// بدء التطبيق
window.onload = function() {
    init();
    loadMemberFromUrl();
};