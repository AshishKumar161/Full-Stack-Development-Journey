document.addEventListener('DOMContentLoaded', () => {

    // --- Feature Tabs Logic ---
    const featureData = [
        {
            title: "Draw and store all the plans in one place:",
            list: [
                "Terrain modeling",
                "Site plan",
                "Floor plan",
                "Cross section plan",
                "Elevation plan",
                "Roof plan",
                "Materials & Pricing"
            ],
            image: "1f6defef-5a63-4db8-af0e-91d2477b453d.jpeg" // Reusing existing image
        },
        {
            title: "Stunning 3D Visualizations in Minutes:",
            list: [
                "Photorealistic rendering",
                "Day & Night views",
                "Interior & Exterior lighting",
                "Custom textures",
                "4K Export quality",
                "Virtual walkthroughs"
            ],
            image: "f168e1ca875f299be577b66d6a67345d.jpg" // Reusing existing image
        },
        {
            title: "Advanced Terrain & Landscape Design:",
            list: [
                "Slope management",
                "Retaining walls",
                "Driveways & Paths",
                "Pool design",
                "Garden layout",
                "Sun orientation study"
            ],
            image: "architects-home-studio-betweenspaces-bangalore_dezeen_1568_0-936x669.jpg" // Reusing existing image
        },
        {
            title: "Seamless Team Collaboration:",
            list: [
                "Cloud-based project sharing",
                "Real-time comments",
                "Version control",
                "Client presentation mode",
                "Multi-user access",
                "Export to PDF/DWG"
            ],
            image: "1f6defef-5a63-4db8-af0e-91d2477b453d.jpeg" // Reusing existing image
        }
    ];

    const tabs = document.querySelectorAll('.step-link');
    const featureTitle = document.getElementById('feature-title');
    const featureListContainer = document.getElementById('feature-list');
    const featureImg = document.getElementById('feature-img');

    if (tabs.length > 0 && featureTitle && featureListContainer && featureImg) {
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // 1. Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                // 2. Add active class to clicked tab
                tab.classList.add('active');

                // 3. Update Content with Fade Effect
                const contentWrapper = document.querySelector('.features-container');
                contentWrapper.style.opacity = '0.5';

                setTimeout(() => {
                    // Update Title
                    featureData[index].title && (featureTitle.textContent = featureData[index].title);

                    // Update List
                    if (featureData[index].list) {
                        featureListContainer.innerHTML = featureData[index].list.map(item =>
                            `<div class="feature-item"><span class="feature-icon">✔</span> ${item}</div>`
                        ).join('');
                    }

                    // Update Image
                    featureData[index].image && (featureImg.src = featureData[index].image);

                    // Fade back in
                    contentWrapper.style.opacity = '1';
                }, 200);
            });
        });
    }
});
