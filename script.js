// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    
    // 移动端菜单切换
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // 点击导航链接后关闭移动端菜单
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
    
    // 导航栏滚动效果
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // 添加/移除滚动样式
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
    // 导航链接高亮
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // 产品分类切换
    const categoryBtns = document.querySelectorAll('.category-btn');
    const markingProducts = document.getElementById('marking-products');
    const weldingProducts = document.getElementById('welding-products');
    
    // 创建更多产品网格
    const cuttingProducts = document.createElement('div');
    cuttingProducts.id = 'cutting-products';
    cuttingProducts.className = 'products-grid hidden';
    cuttingProducts.innerHTML = `
        <div class="product-card">
            <div class="product-image">
                <div class="product-placeholder" style="background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);">
                    <span class="placeholder-icon">✂️</span>
                    <span>光纤激光切割机</span>
                </div>
            </div>
            <div class="product-info">
                <h3>光纤激光切割机</h3>
                <p>高精度金属板材切割，切割速度快，切口光滑</p>
                <ul class="product-specs">
                    <li>激光功率：1000W-12000W</li>
                    <li>切割厚度：0.5-25mm（碳钢）</li>
                    <li>定位精度：±0.03mm</li>
                </ul>
                <div class="product-footer">
                    <span class="product-price">¥ 128,000 起</span>
                    <a href="#contact" class="btn btn-small">咨询详情</a>
                </div>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <div class="product-placeholder" style="background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);">
                    <span class="placeholder-icon">📐</span>
                    <span>精密激光切割机</span>
                </div>
            </div>
            <div class="product-info">
                <h3>精密激光切割机</h3>
                <p>适合精密零部件切割，电子元器件加工</p>
                <ul class="product-specs">
                    <li>激光功率：500W-2000W</li>
                    <li>切割精度：±0.01mm</li>
                    <li>重复精度：±0.005mm</li>
                </ul>
                <div class="product-footer">
                    <span class="product-price">¥ 168,000 起</span>
                    <a href="#contact" class="btn btn-small">咨询详情</a>
                </div>
            </div>
        </div>
    `;
    
    const cleaningProducts = document.createElement('div');
    cleaningProducts.id = 'cleaning-products';
    cleaningProducts.className = 'products-grid hidden';
    cleaningProducts.innerHTML = `
        <div class="product-card">
            <div class="product-image">
                <div class="product-placeholder" style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);">
                    <span class="placeholder-icon">🧽</span>
                    <span>脉冲激光清洗机</span>
                </div>
            </div>
            <div class="product-info">
                <h3>脉冲激光清洗机</h3>
                <p>高效去除金属表面锈迹、油污、涂层，环保无污染</p>
                <ul class="product-specs">
                    <li>激光功率：100W-500W</li>
                    <li>清洗效率：1-5m²/h</li>
                    <li>冷却方式：水冷</li>
                </ul>
                <div class="product-footer">
                    <span class="product-price">¥ 45,000 起</span>
                    <a href="#contact" class="btn btn-small">咨询详情</a>
                </div>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <div class="product-placeholder" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
                    <span class="placeholder-icon">🔫</span>
                    <span>手持激光清洗机</span>
                </div>
                <div class="product-badge hot">便携</div>
            </div>
            <div class="product-info">
                <h3>手持激光清洗机</h3>
                <p>便携式设计，适合大型工件和现场清洗作业</p>
                <ul class="product-specs">
                    <li>激光功率：100W-300W</li>
                    <li>整机重量：约35kg</li>
                    <li>光纤长度：标配3m（可定制）</li>
                </ul>
                <div class="product-footer">
                    <span class="product-price">¥ 38,000 起</span>
                    <a href="#contact" class="btn btn-small">咨询详情</a>
                </div>
            </div>
        </div>
    `;
    
    // 添加新产品网格到DOM
    const productsSection = document.querySelector('.products .container');
    productsSection.appendChild(cuttingProducts);
    productsSection.appendChild(cleaningProducts);
    
    // 分类切换功能
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有活动状态
            categoryBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.products-grid').forEach(grid => {
                grid.classList.add('hidden');
            });
            
            // 添加当前活动状态
            this.classList.add('active');
            const category = this.dataset.category;
            const targetGrid = document.getElementById(category + '-products');
            if (targetGrid) {
                targetGrid.classList.remove('hidden');
            }
        });
    });
    
    // 回到顶部按钮
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 表单提交
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // 模拟提交成功
            alert('感谢您的咨询！我们的客服人员将在24小时内与您联系。');
            contactForm.reset();
        });
    }
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 滚动动画
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 为卡片添加滚动动画
    const animatedElements = document.querySelectorAll('.product-card, .solution-card, .case-card, .advantage-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // 数字动画
    function animateNumber(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateNumber() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start) + '+';
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = target + '+';
            }
        }
        
        updateNumber();
    }
    
    // 数字滚动动画观察器
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNums = entry.target.querySelectorAll('.stat-num');
                statNums.forEach(stat => {
                    const target = parseInt(stat.textContent);
                    if (!isNaN(target)) {
                        animateNumber(stat, target);
                    }
                });
                numberObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        numberObserver.observe(heroStats);
    }
    
    // 添加更多激光束效果
    function createLaserBeams() {
        const heroBg = document.querySelector('.hero-bg');
        if (!heroBg) return;
        
        for (let i = 0; i < 5; i++) {
            const beam = document.createElement('div');
            beam.className = 'laser-beam';
            beam.style.left = Math.random() * 100 + '%';
            beam.style.animationDelay = Math.random() * 3 + 's';
            beam.style.animationDuration = (2 + Math.random() * 2) + 's';
            heroBg.appendChild(beam);
        }
    }
    
    createLaserBeams();
    
    // 产品卡片悬停效果
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // 添加页面加载动画
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
    
    // 技术支持下载标签切换
    const downloadTabs = document.querySelectorAll('.download-tab');
    const downloadLists = document.querySelectorAll('.download-list');
    
    downloadTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有活动状态
            downloadTabs.forEach(t => t.classList.remove('active'));
            downloadLists.forEach(list => list.classList.add('hidden'));
            
            // 添加当前活动状态
            this.classList.add('active');
            const tabName = this.dataset.tab;
            const targetList = document.getElementById(tabName + '-list');
            if (targetList) {
                targetList.classList.remove('hidden');
            }
        });
    });
    
    console.log('🚀 深圳市瑞特激光科技有限公司网站已加载完成');
    console.log('📞 咨询热线：0755-89885481');
});
