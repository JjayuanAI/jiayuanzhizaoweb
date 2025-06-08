// 主题管理
class ThemeManager {
    constructor() {
        this.dayStartHour = 6; // 早上6点开始日间模式
        this.nightStartHour = 18; // 晚上6点开始夜间模式
        this.init();
    }

    init() {
        // 添加主题切换按钮
        this.addThemeToggleButton();
        // 设置初始主题
        this.updateTheme();
        // 每分钟检查一次时间
        setInterval(() => this.updateTheme(), 60000);
    }

    addThemeToggleButton() {
        const button = document.createElement('button');
        button.className = 'theme-toggle';
        button.innerHTML = '<i class="fas fa-moon"></i>';
        button.addEventListener('click', () => this.toggleTheme());
        document.body.appendChild(button);
    }

    updateTheme() {
        const currentHour = new Date().getHours();
        const isDayTime = currentHour >= this.dayStartHour && currentHour < this.nightStartHour;
        
        if (isDayTime) {
            this.setDayMode();
        } else {
            this.setNightMode();
        }
    }

    setDayMode() {
        document.body.classList.remove('night-mode');
        document.body.classList.add('day-mode');
        document.querySelector('.theme-toggle i').className = 'fas fa-moon';
    }

    setNightMode() {
        document.body.classList.remove('day-mode');
        document.body.classList.add('night-mode');
        document.querySelector('.theme-toggle i').className = 'fas fa-sun';
    }

    toggleTheme() {
        if (document.body.classList.contains('day-mode')) {
            this.setNightMode();
        } else {
            this.setDayMode();
        }
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化主题管理器
    new ThemeManager();

    // 处理联系表单提交
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // 这里可以添加发送表单数据的逻辑
            console.log('表单数据：', formData);
            
            // 显示提交成功消息
            alert('消息已发送！我们会尽快回复您。');
            
            // 重置表单
            contactForm.reset();
        });
    }
    
    // 添加导航栏活动状态
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 地图交互效果
    const mapItems = document.querySelectorAll('.map-item');
    
    mapItems.forEach(item => {
        item.addEventListener('click', function() {
            const nation = this.getAttribute('data-nation');
            const nationInfo = {
                '蒙德': '风之城邦，自由的象征',
                '璃月': '岩之国度，商业的中心',
                '稻妻': '雷之国度，永恒的追求',
                '须弥': '草之国度，智慧的殿堂',
                '枫丹': '水之国度，正义的象征',
                '纳塔': '火之国度，战争的熔炉'
            };
            
            alert(`${nation}：${nationInfo[nation]}`);
        });
        
        // 添加悬停效果
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}); 