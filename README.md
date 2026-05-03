# 🛡️ Cyberpunk Security Portfolio
> "System Online. Access Granted."

A responsive, immersive personal portfolio website designed for a Cybersecurity Specialist. The interface mimics a high-tech terminal environment, featuring interactive canvas animations, a "hack sequence" preloader, and a neon-infused dark mode aesthetic.

# 🔗 Live Demo
[ https://portfolioriturajsingh.netlify.app/]

# ✨ Key Features

* 🔓 Brute-Force Preloader: A cinematic entry sequence simulating a password crack and system breach. (Includes session storage logic to run only on the first visit).
* 🌧️ Matrix Rain Background: A classic, dynamic falling code effect drawn on HTML5 Canvas.
* 🕸️ Interactive Network Mesh: A background particle system that reacts to mouse movement, symbolizing network nodes and connections.
* 🖱️ Custom Cyber Cursor: A stylized cursor with hover states and a trail effect.
* 💎 Glassmorphism UI: Modern, frosted-glass cards with neon borders and glowing shadows.
* 📱 Fully Responsive: Optimized for mobile, tablet, and desktop views using Tailwind CSS.
* ⚡ Dynamic Content: Typewriter text effects and scroll-reveal animations.

## 🛠️ Tech Stack

* Core: HTML5, CSS3, Vanilla JavaScript (ES6+)
* Styling: [Tailwind CSS](https://tailwindcss.com/) (via CDN for lightweight deployment)
* Icons: [FontAwesome](https://fontawesome.com/)
* Fonts: JetBrains Mono (Coding font), Orbitron (Headers), Rajdhani (Body)

🚀 Installation & Setup
Since this project uses the Tailwind CSS CDN, no build step (npm/node) is strictly required to view it.

1.Clone the repository:
git clone https://github.com/riturajsingh0001/Portfolio.git

2.Open the project:

Simply open index.html in your browser.
Recommended: Use the "Live Server" extension in VS Code for the smoothest experience with canvas rendering.

🎨 Customization
If you want to use this template for your own portfolio:

Edit index.html: Update the text content (Name, About, Experience) and links.
Update Images: Replace My_photo1.jpg and My_photo2.jpg with your own images.
Modify Colors: The site uses a custom Tailwind config inside the <head> of index.html. You can change the cyber-neon or cyber-purple hex codes there to change the entire color scheme.

## 📂 Project Structure

```bash
├── index.html      # Main DOM structure and content
├── style.css       # Custom animations, scrollbars, and overrides
├── script.js       # Logic for matrix, network mesh, preloader, and DOM manipulation
├── My_photo1.jpg   # Profile image (About section)
├── My_photo2.jpg   # Profile image (Hero section)
└── README.md       # Documentation
