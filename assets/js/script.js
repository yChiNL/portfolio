lucide.createIcons();

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    const isOpen = mobileMenu.classList.contains('active');
    icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
    lucide.createIcons();
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            mobileMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-card').forEach(el => {
    observer.observe(el);
});

const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

const projectData = {
    aiwave: {
        title: 'AIWave',
        subtitle: '🏆 台灣生成式 AI 應用黑客松',
        description: '整合 AWS 雲端服務與 AI 技術，打造邊緣倉儲的即時數據分析系統',
        fullDescription: `
            <p class="mb-4">AIWave 是一個創新的雲端 AI 解決方案，專為邊緣倉儲設計。這個專案在台灣生成式 AI 應用黑客松中展示了如何運用 AWS 服務構建高效、安全的數據分析工作流。</p>
            <h3 class="text-xl font-bold text-white mb-3 mt-6">核心功能</h3>
            <ul class="space-y-2 mb-4">
                <li>• 即時數據收集與處理</li>
                <li>• AI 驅動的數據分析與預測</li>
                <li>• 安全的雲端儲存架構</li>
                <li>• 直觀的數據視覺化介面</li>
            </ul>
            <h3 class="text-xl font-bold text-white mb-3 mt-6">技術亮點</h3>
            <ul class="space-y-2 mb-4">
                <li>• 使用 AWS Lambda 實現無伺服器架構</li>
                <li>• 整合 AWS Bedrock 提供 AI 能力</li>
                <li>• DynamoDB 確保數據快速存取</li>
                <li>• API Gateway 實現安全的 API 管理</li>
            </ul>
        `,
        video: 'assets/projects/aiwave/web-demo.mp4',
        images: [],
        tags: ['AWS', 'Generative AI', 'Full Stack', 'AWS Lambda', 'DynamoDB'],
        links: {
            github: 'https://github.com/yChiNL/AI-powered-edge-cloud-warehouse',
            demo: ''
        }
    },
    paperassist: {
        title: 'PaperAssist',
        subtitle: '📚 學術研究 RAG 聊天機器人',
        description: '結合 RAG 架構與 LLM，打造專業的學術論文查詢助手',
        fullDescription: `
            <p class="mb-4">PaperAssist 是一個專為學術研究設計的智能聊天機器人，採用先進的 RAG（Retrieval-Augmented Generation）架構，能夠準確理解和回答學術相關問題。</p>
            <h3 class="text-xl font-bold text-white mb-3 mt-6">核心技術</h3>
            <ul class="space-y-2 mb-4">
                <li>• RAG 架構整合 LLM 與外部知識庫</li>
                <li>• 多模型混合檢索策略</li>
                <li>• 向量資料庫實現語義搜索</li>
                <li>• 優化的 Chunking 策略提升檢索品質</li>
            </ul>
            <h3 class="text-xl font-bold text-white mb-4 mt-6">技術挑戰與解決方案</h3>
            <div class="space-y-4 mb-4">
                <div class="bg-slate-800/50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p class="text-blue-400 font-semibold mb-2">💡 挑戰：如何提升檢索的準確性</p>
                    <p class="text-slate-300 ml-4">實驗不同的 Embedding 模型，找出最適合學術領域的方案</p>
                </div>
                <div class="bg-slate-800/50 p-4 rounded-lg border-l-4 border-purple-500">
                    <p class="text-purple-400 font-semibold mb-2">💡 挑戰：長文本的處理</p>
                    <p class="text-slate-300 ml-4">設計智能的 Chunking 策略，保留文本語義完整性</p>
                </div>
                <div class="bg-slate-800/50 p-4 rounded-lg border-l-4 border-green-500">
                    <p class="text-green-400 font-semibold mb-2">💡 挑戰：平衡召回率與精確度</p>
                    <p class="text-slate-300 ml-4">採用混合檢索策略，結合關鍵字與語義搜索</p>
                </div>
            </div>
        `,
        video: '',
        images: ['assets/projects/paperassist/RAGChatBot-1.png'],
        tags: ['Python', 'RAG', 'LLM', 'VectorDB', 'NLP'],
        links: {
            github: 'https://github.com/yChiNL/rag_chatbot',
            demo: ''
        }
    }
};

function openModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    modalBody.innerHTML = `
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">${project.title}</h2>
        <p class="text-purple-400 mb-4 font-medium italic">${project.subtitle}</p>
        <p class="text-lg text-slate-300 mb-6">${project.description}</p>
        
        ${project.video ? `
        <div class="mb-6 rounded-xl overflow-hidden">
            <div class="aspect-video bg-slate-900">
                ${project.video.includes('youtube.com') || project.video.includes('youtu.be') || !project.video.includes('.') ? `
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${project.video}" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen class="rounded-xl"></iframe>
                ` : `
                    <video width="100%" height="100%" controls class="rounded-xl">
                        <source src="${project.video}" type="video/mp4">
                        您的瀏覽器不支援影片播放。
                    </video>
                `}
            </div>
        </div>
        ` : ''}
        
        ${project.images && project.images.length > 0 ? `
        <div class="mb-6">
            <div class="space-y-4">
                ${project.images.map(img => `
                    <img src="${img}" alt="${project.title}" class="rounded-xl w-full h-auto">
                `).join('')}
            </div>
        </div>
        ` : ''}
        
        <div class="prose prose-invert max-w-none mb-6">
            ${project.fullDescription}
        </div>
        
        <div class="flex flex-wrap gap-2 mb-6">
            ${project.tags.map(tag => `
                <span class="project-tag">${tag}</span>
            `).join('')}
        </div>
        
        <div class="flex gap-4 flex-wrap">
            ${project.links.github ? `
            <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" 
               class="glass hover:bg-white/10 px-6 py-3 rounded-full font-semibold transition flex items-center gap-2 border border-slate-700">
                <i data-lucide="github" class="w-5 h-5"></i> GitHub
            </a>
            ` : ''}
            ${project.links.demo ? `
            <a href="${project.links.demo}" target="_blank" rel="noopener noreferrer" 
               class="glass hover:bg-white/10 px-6 py-3 rounded-full font-semibold transition flex items-center gap-2 border border-slate-700">
                <i data-lucide="external-link" class="w-5 h-5"></i> Live Demo
            </a>
            ` : ''}
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        
        const projectId = card.dataset.project;
        openModal(projectId);
    });
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
