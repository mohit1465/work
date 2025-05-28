// Work Data
let workItems = [
    { src: "assets/work/logos/Cursor.png", category: "logos", text: "Poster 1" },
    { src: "assets/work/logos/Music.png", category: "logos", text: "Poster 1" },
    { src: "assets/work/logos/DESIGN.gif", category: "logos", text: "Poster 1" },
    { src: "assets/work/logos/PrimeX.png", category: "logos", text: "Poster 1" },
    { src: "assets/work/logos/Text Editor.png", category: "logos", text: "Poster 1" },
    { src: "assets/work/logos/The Nirvana.png", category: "logos", text: "Poster 1" },

    { src: "assets/work/posters/Beast.png", category: "posters", text: "Poster 2" },
    { src: "assets/work/posters/Bhartiya.png", category: "posters", text: "Poster 2" },
    { src: "assets/work/posters/BURGUR.png", category: "posters", text: "Poster 2" },
    { src: "assets/work/posters/Gallery 1.png", category: "posters", text: "Poster 2" },
    { src: "assets/work/posters/L-shape.png", category: "posters", text: "Poster 2" },
    { src: "assets/work/posters/Music Beats.png", category: "posters", text: "Poster 2" },
    { src: "assets/work/posters/nirvana-wed.jpg", category: "posters", text: "Poster 2" },
    { src: "assets/work/posters/nirvana.jpg", category: "posters", text: "Poster 2" },
    { src: "assets/work/posters/saree.png", category: "posters", text: "Poster 2" },
    { src: "assets/work/posters/कंवर सिंह यादव 1.png", category: "posters", text: "Poster 2" },
    { src: "assets/work/posters/कंवर सिंह यादव 2.png", category: "posters", text: "Poster 2" },

    { src: "assets/work/Thumbnails/thumbnail (1).png", category: "thumbnail", text: "Thumbnail 1" },
    { src: "assets/work/Thumbnails/thumbnail (2).png", category: "thumbnail", text: "Thumbnail 1" },
    { src: "assets/work/Thumbnails/thumbnail (3).png", category: "thumbnail", text: "Thumbnail 1" },
    { src: "assets/work/Thumbnails/thumbnail (4).png", category: "thumbnail", text: "Thumbnail 1" },
    { src: "assets/work/Thumbnails/thumbnail (5).png", category: "thumbnail", text: "Thumbnail 1" },
    { src: "assets/work/Thumbnails/thumbnail (6).png", category: "thumbnail", text: "Thumbnail 1" },
    { src: "assets/work/Thumbnails/thumbnail (7).png", category: "thumbnail", text: "Thumbnail 1" },
    { src: "assets/work/Thumbnails/thumbnail (8).png", category: "thumbnail", text: "Thumbnail 1" },
    { src: "assets/work/Thumbnails/thumbnail (9).png", category: "thumbnail", text: "Thumbnail 1" },

    { src: "assets/work/ui-designs/UI (1).mp4", category: "UI", text: "UI 1" },
    { src: "assets/work/ui-designs/UI (1).png", category: "UI", text: "UI 1" },
    { src: "assets/work/ui-designs/UI (2).png", category: "UI", text: "UI 1" },
    { src: "assets/work/ui-designs/UI (3).png", category: "UI", text: "UI 1" },
    { src: "assets/work/ui-designs/UI (4).png", category: "UI", text: "UI 1" },

    { src: "assets/work/videos/videos (1).mp4", category: "videos", text: "videos 1" },
    { src: "assets/work/videos/videos (2).mp4", category: "videos", text: "videos 1" },
    { src: "assets/work/videos/videos (3).mp4", category: "videos", text: "videos 1" },
    { src: "assets/work/videos/videos (4).mp4", category: "videos", text: "videos 1" },
];


// Project Data
const projectsData = {
    'primex': {
        title: 'PrimeX',
        description: 'A comprehensive suite of web development tools including text editor, image editor, image resizer, and AI assistant. Features include dark/light theme support, responsive design, cloud integration, and real-time preview.',
        img: 'https://placehold.co/800x500/6C63FF/FFFFFF?text=PrimeX',
        tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        liveLink: 'https://mohit1465.github.io/HelpDesk.github.io/',
        codeLink: 'https://github.com/mohit1465/HelpDesk.github.io'
    },
    'text-editor': {
        title: 'Text Editor',
        description: 'Advanced code and text editor with syntax highlighting, code folding, and real-time preview. Features include file management, directory structure, auto-completion, and theme customization.',
        img: 'https://placehold.co/800x500/FF6584/FFFFFF?text=Text+Editor',
        tags: ['Code Editor', 'Syntax Highlighting', 'File Management'],
        liveLink: 'https://mohit1465.github.io/HelpDesk.github.io/text-editor.html',
        codeLink: 'https://github.com/mohit1465/HelpDesk.github.io'
    },
    'image-editor': {
        title: 'Image Editor',
        description: 'Professional image editing tool with advanced features like filters, transformations, and batch processing. Includes basic adjustments, transform tools, and export options.',
        img: 'https://placehold.co/800x500/00F5A0/000000?text=Image+Editor',
        tags: ['Image Processing', 'Filters', 'Batch Processing'],
        liveLink: 'https://mohit1465.github.io/HelpDesk.github.io/image-editor.html',
        codeLink: 'https://github.com/mohit1465/HelpDesk.github.io'
    },
    'image-resizer': {
        title: 'Image Resizer',
        description: 'Specialized tool for batch image resizing with custom dimensions and format conversion. Features include aspect ratio maintenance, quality control, and multiple export formats.',
        img: 'https://placehold.co/800x500/6C63FF/FFFFFF?text=Image+Resizer',
        tags: ['Image Resizing', 'Batch Processing', 'Format Conversion'],
        liveLink: 'https://mohit1465.github.io/HelpDesk.github.io/image-resizer.html',
        codeLink: 'https://github.com/mohit1465/HelpDesk.github.io'
    },
    'krish-ai': {
        title: 'Krish AI (Beta)',
        description: 'Intelligent AI assistant for code generation, explanation, and optimization. Features include natural language processing, bug detection, and code suggestions.',
        img: 'https://placehold.co/800x500/FF6584/FFFFFF?text=Krish+AI',
        tags: ['AI', 'Code Generation', 'NLP'],
        liveLink: 'https://mohit1465.github.io/HelpDesk.github.io/Krish.html',
        codeLink: 'https://github.com/mohit1465/HelpDesk.github.io'
    }
};


// Initialize essential features immediately
document.addEventListener('DOMContentLoaded', () => {
    // Remove preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => preloader.remove(), 300);
    }

    // Initialize critical features
    initNavigation();
    initTheme();
    setupMobileNav();
    setupCertificateViewer();

    // Setup lazy loading for images
    setupLazyLoading();

    // Initialize non-critical features with requestIdleCallback
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            initParticles();
            initSkillBars();
            setupProjectModals();
            setupGalleryLightbox();
            setupworkPreview();
            setupContactForm();
            setupScrollEffects();
        });
    } else {
        setTimeout(() => {
            initParticles();
            initSkillBars();
            setupProjectModals();
            setupGalleryLightbox();
            setupworkPreview();
            setupContactForm();
            setupScrollEffects();
        }, 100);
    }
});

// Setup lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.1
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize 3D particles background with performance optimizations
function initParticles() {
    const particlesContainer = document.getElementById('particlesContainer');
    if (!particlesContainer) return;

    const colors = ['rgba(108, 99, 255, 0.3)', 'rgba(255, 101, 132, 0.3)', 'rgba(0, 245, 160, 0.3)'];
    const particleCount = window.innerWidth < 768 ? 15 : 25; // Reduced particle count
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const size = Math.random() * 6 + 2; // Smaller particles
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 10 + 5; // Shorter animations
        
        particle.style.cssText = `
            left: ${posX}%;
            top: ${posY}%;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            animation-duration: ${duration}s;
            box-shadow: 0 0 ${size}px ${color};
            will-change: transform;
        `;
        
        fragment.appendChild(particle);
    }
    
    particlesContainer.appendChild(fragment);
}

// Initialize multi-page navigation
function initNavigation() {
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Get the page id
    const pageId = link.getAttribute('data-page');
    
    // Remove active class from all links and pages
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    pages.forEach(page => page.classList.remove('active'));
    
    // Add active class to current link and page
    link.classList.add('active');
    document.getElementById(pageId).classList.add('active');
    });
});
}

// Theme toggle functionality
function initTheme() {
const themeToggleBtn = document.getElementById('themeToggleBtn');
const icon = themeToggleBtn.querySelector('i');

// Check for saved theme preference or use device preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

// Theme toggle event handler
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Update icon and save preference
    if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
    } else {
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
    }
});
}

// Mobile navigation functionality
function setupMobileNav() {
const menuToggleBtn = document.getElementById('menuToggleBtn');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

menuToggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggleBtn.querySelector('i').classList.toggle('fa-bars');
    menuToggleBtn.querySelector('i').classList.toggle('fa-times');
});

// Close menu when link is clicked
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggleBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
});
}

// Initialize skill progress bars animation
function initSkillBars() {
const skillBars = document.querySelectorAll('.skill-progress-bar');

// Function to animate skill bars when in view
function animateSkillBars() {
    skillBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    
    // Check if the bar is in view
    const rect = bar.getBoundingClientRect();
    const isInView = (rect.top <= window.innerHeight && rect.bottom >= 0);
    
    if (isInView) {
        bar.style.width = width;
    }
    });
}

// Initial animation
setTimeout(animateSkillBars, 500);

// Animate on scroll
window.addEventListener('scroll', animateSkillBars);
}

// Project modals setup
function setupProjectModals() {
const projectItems = document.querySelectorAll('.project-item');
const projectModal = document.getElementById('projectModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalTags = document.getElementById('modalTags');
const modalDescription = document.getElementById('modalDescription');
const modalLiveLink = document.getElementById('modalLiveLink');
const modalCodeLink = document.getElementById('modalCodeLink');

// Open modal when project is clicked
projectItems.forEach(project => {
    project.addEventListener('click', () => {
    const projectId = project.getAttribute('data-project');
    const projectData = projectsData[projectId];
    
    if (projectData) {
        // Set modal content
        modalImg.src = projectData.img;
        modalImg.alt = projectData.title;
        modalTitle.textContent = projectData.title;
        
        // Set tags
        modalTags.innerHTML = '';
        projectData.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'project-tag';
        tagSpan.textContent = tag;
        modalTags.appendChild(tagSpan);
        });
        
        // Set description and links
        modalDescription.textContent = projectData.description;
        modalLiveLink.href = projectData.liveLink;
        modalCodeLink.href = projectData.codeLink;
        
        // Show modal
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    });
});

// Close modal
modalCloseBtn.addEventListener('click', () => {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    }
});
}

// work Previewlightbox setup
function setupworkPreview() {
    const workItems = document.querySelectorAll('.work-item');
    const workPreviewlightbox = document.getElementById('workPreview');
    
    // Open workPreviewlightbox when gallery item is clicked
    workItems.forEach(item => {
        item.addEventListener('click', () => {
        const imgSrc = item.getAttribute('data-image');
        console.log("imgSrc.src");


        if (imgSrc.endsWith(".mp4")) {
            workPreviewlightbox.innerHTML = `
            <button class="work-preview-close" id="workPreviewCloseBtn">
                <i class="fas fa-times"></i>
            </button>
            <video src="${imgSrc}" alt="" class="work-preview-vid" id="workPreviewVid" controls autoplay>
            `;
        } else {
            workPreviewlightbox.innerHTML = `
            <button class="work-preview-close" id="workPreviewCloseBtn">
                <i class="fas fa-times"></i>
            </button>
            <img src="${imgSrc}" alt="" class="work-preview-img" id="workPreviewImg">
            `;
        }

        workPreviewlightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        });
    });

    const workPreview = document.getElementById('workPreview');
    
    // Close workPreview
    workPreview.addEventListener('click', () => {
        workPreview.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close workPreview when clicking outside
    workPreview.addEventListener('click', (e) => {
    if (e.target === workPreview) {
        workPreview.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    });

}

document.addEventListener("DOMContentLoaded", function () {
    loadWorkItems();
});

function loadWorkItems(category = "all") {
    let workContainer = document.querySelector(".work-container");
    workContainer.innerHTML = "";

    let filteredItems = category === "all" ? workItems : workItems.filter(item => item.category === category);

    filteredItems.forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("work-item");
        itemDiv.setAttribute("data-category", item.category);
        itemDiv.setAttribute("data-image", item.src);

        if (item.src.endsWith(".mp4")) {
            let video = document.createElement("video");
            video.src = item.src;
            video.controls = true;
            video.classList.add("work-image");
            itemDiv.appendChild(video);
        } else {
            let img = document.createElement("img");
            img.src = item.src;
            img.classList.add("work-image");
            itemDiv.appendChild(img);
        }

        let text = document.createElement("div");
        text.innerText = item.text;
        text.classList.add("work-text");
        itemDiv.appendChild(text);

        workContainer.appendChild(itemDiv);
    });

    // 🧠 Reattach click events to new items
    setupworkPreview();
}

document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", function() {
        document.querySelectorAll(".filter").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        loadWorkItems(this.getAttribute("data-category"));
    });
});



// Gallery lightbox setup
function setupGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
    const lightboxImg = document.getElementById('lightboxImg');
    
    // Open lightbox when gallery item is clicked
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
        const imgSrc = item.getAttribute('data-img');
        lightboxImg.src = imgSrc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    lightboxCloseBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close lightbox when clicking outside
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        }
    });
}

function setupContactForm() {
    const formControls = document.querySelectorAll('.form-control');
    const contactForm = document.getElementById('contactForm');

    // Input animations
    formControls.forEach(control => {
        control.addEventListener('focus', () => {
        control.classList.add('has-value');
        });

        control.addEventListener('blur', () => {
        if (control.value === '') {
            control.classList.remove('has-value');
        }
        });

        // Check if already filled
        if (control.value !== '') {
        control.classList.add('has-value');
        }
    });

    // Real form submission (using FormSubmit API)
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('nameInput').value;
        const email = document.getElementById('emailInput').value;
        const subject = document.getElementById('subjectInput').value;
        const message = document.getElementById('messageInput').value;

        const formData = new FormData(contactForm);

        fetch("https://formsubmit.co/Mohit8307521465@gmail.com", {
        method: "POST",
        body: formData
        })
        .then(response => {
        if (response.ok) {
            contactForm.innerHTML = `
            <div style="text-align:center; padding:2rem;">
                <i class="fas fa-check-circle" style="font-size:3rem; color:var(--primary); margin-bottom:1rem;"></i>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for your message, ${name}. I'll get back to you as soon as possible.</p>
            </div>
            `;
        } else {
            contactForm.innerHTML = `
            <div style="text-align:center; padding:2rem;">
                <i class="fas fa-exclamation-circle" style="font-size:3rem; color:red; margin-bottom:1rem;"></i>
                <h3>Message Failed!</h3>
                <p>Sorry ${name}, there was a problem. Please try again later.</p>
            </div>
            `;
        }
        })
        .catch(error => {
        console.error("Form Error:", error);
        contactForm.innerHTML = `
            <div style="text-align:center; padding:2rem;">
            <i class="fas fa-exclamation-circle" style="font-size:3rem; color:red; margin-bottom:1rem;"></i>
            <h3>Something went wrong!</h3>
            <p>Sorry ${name}, we couldn't send your message. Try again later.</p>
            </div>
        `;
        });
    });
}

// Scroll effects setup
function setupScrollEffects() {
// Header scroll effect
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');


    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY;
        let windowHeight = window.innerHeight;
        let documentHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= documentHeight - 150) {
            footer.classList.add('footerScrolled');
        } else {
            footer.classList.remove('footerScrolled')
        }
    });

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
    header.classList.add('scrolled');
    } else {
    header.classList.remove('scrolled');
    }
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-delay-1, .fade-in-delay-2, .fade-in-delay-3');
    
    animatedElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    }
    });
});
}

// Project randomization (adapted from original code)
function update() {
    const projects = document.querySelectorAll('.project-item');
    
    projects.forEach(project => {
        // Get random rotation and translation
        const randomRotate = Math.random() * 10 - 5; // -5 to 5 degrees
        const randomTranslateY = Math.random() * 20 - 10; // -10px to 10px
        
        // Apply random animation
        project.style.transition = 'transform 0.5s ease';
        project.style.transform = `translateY(${randomTranslateY}px) rotate(${randomRotate}deg)`;
        
        // Reset after animation
        setTimeout(() => {
        project.style.transition = 'transform 0.3s ease';
        project.style.transform = 'translateY(0) rotate(0deg)';
        }, 500);
    });
}

const cursorMid = document.querySelector('.custom-cursorMid');
    document.addEventListener('mousemove', (e) => {
    cursorMid.style.left = `${e.pageX}px`;
    cursorMid.style.top = `${e.pageY}px`;
});

// Click event to increase size
document.addEventListener('mousedown', () => {
    cursorMid.style.width = '20px';
    cursorMid.style.height = '20px';
});

// Release event to reset size
document.addEventListener('mouseup', () => {
    cursorMid.style.width = '10px';
    cursorMid.style.height = '10px';
});

const cursor = document.querySelector('.custom-cursor');
    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

function animateCursor() {
    posX += (mouseX - posX) * 0.1; // Smooth transition effect
    posY += (mouseY - posY) * 0.1;

    cursor.style.transform = `translate(${posX}px, ${posY}px)`;
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Certificate Viewer Setup
function setupCertificateViewer() {
    const certificateItems = document.querySelectorAll('.certificate-item');
    const certificateModal = document.getElementById('certificateModal');
    const certificateModalImg = document.getElementById('certificateModalImg');
    const certificateModalCloseBtn = document.getElementById('certificateModalCloseBtn');

    certificateItems.forEach(item => {
        item.addEventListener('click', () => {
            const certificatePath = item.getAttribute('data-certificate');
            
            // Show loading state
            certificateModalImg.src = '';
            certificateModalImg.style.opacity = '0';
            certificateModal.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Load the image
            const img = new Image();
            img.onload = () => {
                certificateModalImg.src = certificatePath;
                certificateModalImg.style.opacity = '1';
            };
            img.onerror = () => {
                certificateModalImg.src = 'assets/error.png'; // Fallback image
                certificateModalImg.style.opacity = '1';
                console.error('Failed to load certificate image:', certificatePath);
            };
            img.src = certificatePath;
        });
    });

    // Close modal when clicking close button
    certificateModalCloseBtn.addEventListener('click', () => {
        certificateModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        // Reset image after modal is closed
        setTimeout(() => {
            certificateModalImg.src = '';
        }, 300);
    });

    // Close modal when clicking outside
    certificateModal.addEventListener('click', (e) => {
        if (e.target === certificateModal) {
            certificateModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            // Reset image after modal is closed
            setTimeout(() => {
                certificateModalImg.src = '';
            }, 300);
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && certificateModal.classList.contains('active')) {
            certificateModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            // Reset image after modal is closed
            setTimeout(() => {
                certificateModalImg.src = '';
            }, 300);
        }
    });
}

