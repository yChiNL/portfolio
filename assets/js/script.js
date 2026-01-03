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

// 透過 assets/js/projects.js 載入資料，避免本地開啟時的 CORS 錯誤
const projectData = typeof PROJECT_DATA !== 'undefined' ? PROJECT_DATA : {};

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
