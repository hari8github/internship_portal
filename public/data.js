// Project data store
const projectData = {
    projects: [
        {
            id: 1,
            title: 'E-commerce Platform Redesign',
            description: 'Complete overhaul of the existing e-commerce platform with modern UI/UX principles',
            eta: '3 months',
            priority: 'High',
            tags: ['UI/UX', 'Frontend', 'Backend']
        },
        {
            id: 2,
            title: 'Mobile App Development',
            description: 'Native mobile application for both iOS and Android platforms',
            eta: '4 months',
            priority: 'Medium',
            tags: ['Mobile', 'React Native']
        },
        {
            id: 3,
            title: 'Data Analytics Dashboard',
            description: 'Real-time analytics dashboard for monitoring business metrics',
            eta: '2 months',
            priority: 'High',
            tags: ['Analytics', 'Data Viz']
        },
        {
            id: 4,
            title: 'Cloud Migration Project',
            description: 'Migrating legacy infrastructure to cloud-native architecture',
            eta: '5 months',
            priority: 'High',
            tags: ['Cloud', 'DevOps', 'Infrastructure']
        },
        {
            id: 5,
            title: 'AI Customer Support Bot',
            description: 'Implementing machine learning chatbot for customer service',
            eta: '4 months',
            priority: 'Medium',
            tags: ['AI', 'Machine Learning', 'Customer Service']
        },
        {
            id: 6,
            title: 'Blockchain Payment Gateway',
            description: 'Developing secure cryptocurrency transaction platform',
            eta: '6 months',
            priority: 'High',
            tags: ['Blockchain', 'Fintech', 'Security']
        },
        {
            id: 7,
            title: 'Enterprise Resource Planning System',
            description: 'Comprehensive business management software',
            eta: '7 months',
            priority: 'High',
            tags: ['ERP', 'Business Management', 'Backend']
        },
        {
            id: 8,
            title: 'Healthcare Patient Portal',
            description: 'Secure online platform for medical records and appointments',
            eta: '3 months',
            priority: 'Critical',
            tags: ['Healthcare', 'Security', 'Frontend']
        },
        {
            id: 9,
            title: 'Educational Learning Management System',
            description: 'Online platform for course management and student tracking',
            eta: '4 months',
            priority: 'Medium',
            tags: ['Education', 'E-learning', 'UI/UX']
        },
        {
            id: 10,
            title: 'Fitness Tracking Application',
            description: 'Comprehensive health and workout monitoring app',
            eta: '3 months',
            priority: 'Medium',
            tags: ['Health', 'Mobile', 'Wearables']
        },
        {
            id: 11,
            title: 'Social Networking Platform',
            description: 'Modern social media application with advanced features',
            eta: '6 months',
            priority: 'High',
            tags: ['Social Media', 'Mobile', 'Backend']
        },
        {
            id: 12,
            title: 'Travel Booking Platform',
            description: 'Comprehensive travel and accommodation booking system',
            eta: '4 months',
            priority: 'Medium',
            tags: ['Travel', 'E-commerce', 'Frontend']
        },
        {
            id: 13,
            title: 'Supply Chain Management System',
            description: 'Advanced logistics and inventory tracking platform',
            eta: '5 months',
            priority: 'High',
            tags: ['Logistics', 'Enterprise', 'Data Analytics']
        },
        {
            id: 14,
            title: 'Cybersecurity Monitoring Tool',
            description: 'Real-time network security and threat detection system',
            eta: '4 months',
            priority: 'Critical',
            tags: ['Security', 'Monitoring', 'Network']
        },
        {
            id: 15,
            title: 'Human Resources Management Platform',
            description: 'Comprehensive employee management and recruitment system',
            eta: '3 months',
            priority: 'Medium',
            tags: ['HR', 'Enterprise', 'Backend']
        },
        {
            id: 16,
            title: 'Augmented Reality Shopping Experience',
            description: 'AR-enabled product visualization for e-commerce',
            eta: '4 months',
            priority: 'Medium',
            tags: ['AR', 'E-commerce', 'UI/UX']
        },
        {
            id: 17,
            title: 'IoT Smart Home Platform',
            description: 'Integrated home automation and control system',
            eta: '5 months',
            priority: 'High',
            tags: ['IoT', 'Smart Home', 'Backend']
        },
        {
            id: 18,
            title: 'Autonomous Vehicle Simulation',
            description: 'Advanced driving simulation and machine learning platform',
            eta: '6 months',
            priority: 'High',
            tags: ['AI', 'Machine Learning', 'Simulation']
        },
        {
            id: 19,
            title: 'Personal Finance Management App',
            description: 'Comprehensive financial tracking and investment platform',
            eta: '3 months',
            priority: 'Medium',
            tags: ['Fintech', 'Mobile', 'Data Analytics']
        },
        {
            id: 20,
            title: 'Cryptocurrency Trading Platform',
            description: 'Secure digital asset trading and portfolio management',
            eta: '5 months',
            priority: 'High',
            tags: ['Blockchain', 'Fintech', 'Security']
        }
    ],

    // Helper functions for data management
    addProject(project) {
        this.projects.push({
            id: this.projects.length + 1,
            ...project
        });
    },

    deleteProject(id) {
        this.projects = this.projects.filter(project => project.id !== id);
    },

    updateProject(id, updatedProject) {
        const index = this.projects.findIndex(project => project.id === id);
        if (index !== -1) {
            this.projects[index] = { ...this.projects[index], ...updatedProject };
        }
    },

    getProjectById(id) {
        return this.projects.find(project => project.id === id);
    }
};

if (!projectData.updateProject) {
    projectData.updateProject = function(id, updatedData) {
        const index = this.projects.findIndex(p => p.id === id);
        if (index !== -1) {
            this.projects[index] = { ...this.projects[index], ...updatedData };
            renderProjects(); // Re-render after update

function renderProjects() {
    const projectGrid = document.getElementById('projectGrid');
    if (!projectGrid) return;
    projectGrid.innerHTML = ''; // Clear current content
    
    projectData.projects.forEach(project => {
        // Create project card excluding status-related info
        const card = document.createElement('div');
        card.className = 'project-card bg-white shadow rounded-lg p-4';
        card.innerHTML = `
            <h3 class="text-lg font-bold text-gray-800">${project.title}</h3>
            <p class="text-sm text-gray-600">${project.description}</p>
            <div class="mt-2">
                ${project.tags.map(tag => `<span class="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">${tag}</span>`).join(' ')}
            </div>
        `;
        projectGrid.appendChild(card);
    });
}
        }
    };
}