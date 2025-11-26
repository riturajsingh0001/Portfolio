// Typewriter Effect
const roles = ["Cybersecurity Student", "Ethical Hacker", "Penetration Tester", "Bug Hunter"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 80;
const deleteSpeed = 40;
const delayBetweenRoles = 2000;

function typeWriter() {
    const currentRole = roles[roleIndex];
    const typeWriterElement = document.getElementById('typewriter');

    if (isDeleting) {
        typeWriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeWriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeDelay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
        typeDelay = delayBetweenRoles;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeWriter, typeDelay);
}

document.addEventListener('DOMContentLoaded', () => {
    initMatrixRain(); 
    initNetworkMesh(); // REPLACED DRAGON WITH NETWORK

    // SESSION CHECK: Only run animation if not visited in this session
    if (sessionStorage.getItem('portfolio_booted')) {
        const preloader = document.getElementById('preloader');
        preloader.style.display = 'none';
        document.body.style.overflow = 'auto';
        typeWriter();
        reveal();
    } else {
        startHackSequence();
    }
});

// --- Custom Cursor Logic ---
const cursor = document.getElementById('cyber-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Cursor Hover Effect on Links
document.querySelectorAll('a, button, .nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    link.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

/* --- BRUTE FORCE HACK SEQUENCE (OPTIMIZED SPEED) --- */
function startHackSequence() {
    const preloader = document.getElementById('preloader');
    const hackStream = document.getElementById('hack-stream');
    const decryptText = document.getElementById('decrypt-text');
    const progressBar = document.getElementById('hack-progress-bar');
    const statusMsg = document.getElementById('status-msg');
    const targetId = document.getElementById('target-id');
    
    // Disable scroll
    document.body.style.overflow = 'hidden';

    // 1. Start scrolling hex dump
    let streamInterval = setInterval(() => {
        const chars = '0123456789ABCDEF ';
        let line = '';
        for(let i=0; i<80; i++) line += chars[Math.floor(Math.random() * chars.length)];
        hackStream.innerText += line + '\n';
        if(hackStream.innerText.length > 5000) hackStream.innerText = hackStream.innerText.substring(2000);
    }, 30); // FASTER

    // 2. Show Target immediately
    setTimeout(() => {
        targetId.classList.remove('hidden');
    }, 100);

    // 3. Brute Force Text Effect
    const finalText = "ACCESS GRANTED";
    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let iteration = 0;
    
    // Start progress bar almost immediately
    setTimeout(() => {
        progressBar.style.width = '100%';
        progressBar.style.transition = 'width 1.0s cubic-bezier(0.1, 0.7, 1.0, 0.1)'; // FASTER BAR
    }, 200);

    // Start Text Cycling FASTER
    let hackInterval = setInterval(() => {
        decryptText.innerText = finalText
            .split("")
            .map((letter, index) => {
                if(index < iteration) return letter;
                return possibleChars[Math.floor(Math.random() * possibleChars.length)];
            })
            .join("");
        
        if(iteration >= finalText.length) {
            clearInterval(hackInterval);
            clearInterval(streamInterval);
            
            // Success State
            decryptText.classList.add('access-granted');
            statusMsg.innerText = "SYSTEM BREACH SUCCESSFUL";
            statusMsg.style.color = "#0f0";
            targetId.style.display = 'none';

            // SET SESSION FLAG
            sessionStorage.setItem('portfolio_booted', 'true');

            // 4. Reveal Portfolio FASTER
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
                document.body.style.overflow = 'auto';
                
                // Init Main animations
                typeWriter();
                reveal();
            }, 500); // REDUCED WAIT
        }
        
        // FAST Reveal chars
        iteration += 1 / 2; 
    }, 15); // REDUCED INTERVAL
}


// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Navbar Glass Effect on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scroll-progress');
    
    // Progress Bar Logic
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    scrollProgress.style.width = progress + '%';

    if (window.scrollY > 50) {
        navbar.classList.add('shadow-neon');
        navbar.classList.add('bg-black/95');
    } else {
        navbar.classList.remove('shadow-neon');
        navbar.classList.remove('bg-black/95');
    }
    reveal();
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// --- Matrix Rain Animation ---
function initMatrixRain() {
    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
        rainDrops[x] = Math.floor(Math.random() * canvas.height / fontSize); 
    }

    const draw = () => {
        ctx.fillStyle = 'rgba(2, 2, 2, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00f3ff'; 
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            if (Math.random() > 0.98) {
                ctx.fillStyle = '#ffffff'; 
            } else {
                 ctx.fillStyle = '#00f3ff';
            }
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };
    setInterval(draw, 35); 

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const newColumns = canvas.width / fontSize;
        for (let x = 0; x < newColumns; x++) {
            if (!rainDrops[x]) rainDrops[x] = Math.floor(Math.random() * canvas.height / fontSize);
        }
    });
}

// --- NEW: Network Mesh Animation ---
function initNetworkMesh() {
    const canvas = document.getElementById('network-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50; // Number of nodes
    const connectionDistance = 150;
    const mouseDistance = 200;

    let mouse = { x: null, y: null };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5; // Slow movement
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

            // Mouse Interaction
            if (mouse.x != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouseDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouseDistance - distance) / mouseDistance;
                    // Gentle attraction
                    this.vx += forceDirectionX * force * 0.05;
                    this.vy += forceDirectionY * force * 0.05;
                }
            }
        }

        draw() {
            ctx.fillStyle = '#00f3ff';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            // Draw connections
            for (let j = i; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    ctx.beginPath();
                    // Opacity based on distance
                    let opacity = 1 - (distance / connectionDistance);
                    ctx.strokeStyle = `rgba(0, 243, 255, ${opacity * 0.5})`; 
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// --- Project Slider Logic ---
const projectTrack = document.getElementById('project-track');
const prevBtn = document.getElementById('prev-project');
const nextBtn = document.getElementById('next-project');
let currentSlide = 0;
const maxSlides = 1; 

if (prevBtn && nextBtn && projectTrack) {
    nextBtn.addEventListener('click', () => {
        if (currentSlide < maxSlides) {
            currentSlide++;
            updateSlider();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    });

    function updateSlider() {
        const translateX = -(currentSlide * 100);
        projectTrack.style.transform = `translateX(${translateX}%)`;
        
        prevBtn.disabled = currentSlide === 0;
        prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
        prevBtn.style.cursor = currentSlide === 0 ? 'not-allowed' : 'pointer';

        nextBtn.disabled = currentSlide === maxSlides;
        nextBtn.style.opacity = currentSlide === maxSlides ? '0.5' : '1';
        nextBtn.style.cursor = currentSlide === maxSlides ? 'not-allowed' : 'pointer';
    }
}