const additionalProjectData =[
    {
        "id": 1,
        "title": "E-commerce Platform Redesign",
        "description": "Complete overhaul of the existing e-commerce platform with modern UI/UX principles",
        "detailedDescription": "A comprehensive redesign of our e-commerce platform focusing on improved user experience, faster performance, and higher conversion rates. The project aims to implement modern design principles while maintaining familiarity for existing users.",
        "eta": "3 months",
        "priority": "High",
        "tags": ["UI/UX", "Frontend", "Backend"],
        "technicalStack": {
            "frontend": ["React.js", "Redux", "Tailwind CSS", "Next.js"],
            "backend": ["Node.js", "Express", "MongoDB"],
            "devOps": ["Docker", "AWS", "CI/CD"],
            "testing": ["Jest", "Cypress"]
        },
        "keyFeatures": [
            "Responsive design with mobile-first approach",
            "Advanced product search and filtering",
            "Real-time inventory management",
            "Integrated payment gateway",
            "Analytics dashboard"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "Frontend Developer", "count": 2 },
                { "title": "Backend Developer", "count": 2 },
                { "title": "UI/UX Designer", "count": 1 },
                { "title": "Project Manager", "count": 1 }
            ],
            "totalEstimatedHours": 1200
        },
        "milestones": [
            { "phase": "Design and Planning", "duration": "2 weeks" },
            { "phase": "Frontend Development", "duration": "6 weeks" },
            { "phase": "Backend Integration", "duration": "6 weeks" },
            { "phase": "Testing and QA", "duration": "3 weeks" },
            { "phase": "Deployment and Launch", "duration": "1 week" }
        ],
        "risks": [
            "Data migration complexity",
            "Integration with legacy systems",
            "User adoption of new interface"
        ]
    },
    {
        "id": 2,
        "title": "Mobile App Development",
        "description": "Native mobile application for both iOS and Android platforms",
        "detailedDescription": "Development of a feature-rich native mobile application targeting iOS and Android platforms, focusing on seamless user experience and device compatibility.",
        "eta": "4 months",
        "priority": "Medium",
        "tags": ["Mobile", "React Native"],
        "technicalStack": {
            "frontend": ["React Native", "Expo"],
            "backend": ["Firebase", "Node.js"],
            "devOps": ["Fastlane", "CircleCI"],
            "testing": ["Appium", "JUnit"]
        },
        "keyFeatures": [
            "Push notifications",
            "Cross-platform compatibility",
            "Offline mode",
            "Secure user authentication",
            "Real-time data syncing"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "Mobile Developer", "count": 2 },
                { "title": "Backend Developer", "count": 1 },
                { "title": "UI/UX Designer", "count": 1 }
            ],
            "totalEstimatedHours": 800
        },
        "milestones": [
            { "phase": "Requirement Analysis", "duration": "2 weeks" },
            { "phase": "Design", "duration": "3 weeks" },
            { "phase": "Development", "duration": "10 weeks" },
            { "phase": "Testing", "duration": "2 weeks" }
        ],
        "risks": [
            "Platform-specific issues",
            "Battery performance on low-end devices",
            "Data privacy concerns"
        ]
    },
    {
        "id": 3,
        "title": "Data Analytics Dashboard",
        "description": "Real-time analytics dashboard for monitoring business metrics",
        "detailedDescription": "A robust real-time dashboard designed for monitoring and visualizing critical business metrics. Features include customizable widgets and seamless integration with external APIs.",
        "eta": "2 months",
        "priority": "High",
        "tags": ["Analytics", "Data Viz"],
        "technicalStack": {
            "frontend": ["Vue.js", "D3.js", "Chart.js"],
            "backend": ["Python", "Flask", "PostgreSQL"],
            "devOps": ["Docker", "Kubernetes"],
            "testing": ["Selenium", "PyTest"]
        },
        "keyFeatures": [
            "Interactive graphs",
            "Customizable data filters",
            "Real-time data updates",
            "Integration with APIs",
            "User access control"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "Frontend Developer", "count": 1 },
                { "title": "Data Engineer", "count": 1 },
                { "title": "Backend Developer", "count": 1 }
            ],
            "totalEstimatedHours": 600
        },
        "milestones": [
            { "phase": "Design", "duration": "1 week" },
            { "phase": "Development", "duration": "5 weeks" },
            { "phase": "Testing", "duration": "2 weeks" }
        ],
        "risks": [
            "Data visualization inaccuracies",
            "Performance under heavy load",
            "Third-party API changes"
        ]
    },
    {
        "id": 4,
        "title": "Cloud Migration Project",
        "description": "Migrating legacy infrastructure to cloud-native architecture",
        "eta": "5 months",
        "priority": "High",
        "tags": ["Cloud", "DevOps", "Infrastructure"],
        "technicalStack": {
            "frontend": ["React.js"],
            "backend": ["AWS", "Azure", "Google Cloud"],
            "devOps": ["Terraform", "Kubernetes"],
            "testing": ["JUnit", "Selenium"]
        },
        "keyFeatures": [
            "Cloud infrastructure setup",
            "Automated deployment pipeline",
            "Scalability improvements"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "Cloud Architect", "count": 2 },
                { "title": "DevOps Engineer", "count": 2 },
                { "title": "Project Manager", "count": 1 }
            ],
            "totalEstimatedHours": 1000
        },
        "milestones": [
            { "phase": "Planning and Strategy", "duration": "2 weeks" },
            { "phase": "Cloud Infrastructure Setup", "duration": "6 weeks" },
            { "phase": "Testing and Optimization", "duration": "4 weeks" }
        ],
        "risks": [
            "Data migration issues",
            "Downtime during transition",
            "Compatibility with legacy systems"
        ]
    },
    {
        "id": 5,
        "title": "AI Customer Support Bot",
        "description": "Implementing machine learning chatbot for customer service",
        "eta": "4 months",
        "priority": "Medium",
        "tags": ["AI", "Machine Learning", "Customer Service"],
        "technicalStack": {
            "frontend": ["React.js", "Vue.js"],
            "backend": ["Node.js", "TensorFlow"],
            "devOps": ["Docker", "Kubernetes"],
            "testing": ["Mocha", "Jest"]
        },
        "keyFeatures": [
            "Natural language processing",
            "Ticket management integration",
            "Customizable responses"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "AI Engineer", "count": 2 },
                { "title": "Frontend Developer", "count": 1 },
                { "title": "Project Manager", "count": 1 }
            ],
            "totalEstimatedHours": 900
        },
        "milestones": [
            { "phase": "Requirement Analysis", "duration": "2 weeks" },
            { "phase": "Development", "duration": "10 weeks" },
            { "phase": "Testing and Launch", "duration": "2 weeks" }
        ],
        "risks": [
            "Training data accuracy",
            "User adoption rate",
            "Integration with CRM systems"
        ]
    },
    {
        "id": 6,
        "title": "Blockchain Payment Gateway",
        "description": "Developing secure cryptocurrency transaction platform",
        "eta": "6 months",
        "priority": "High",
        "tags": ["Blockchain", "Fintech", "Security"],
        "technicalStack": {
            "frontend": ["React.js", "Vue.js"],
            "backend": ["Ethereum", "Solidity"],
            "devOps": ["Docker", "AWS"],
            "testing": ["Mocha", "Chai"]
        },
        "keyFeatures": [
            "Cryptocurrency transaction processing",
            "Multi-currency support",
            "Fraud detection system"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "Blockchain Developer", "count": 2 },
                { "title": "Frontend Developer", "count": 2 },
                { "title": "Security Engineer", "count": 1 }
            ],
            "totalEstimatedHours": 1200
        },
        "milestones": [
            { "phase": "Blockchain Development", "duration": "3 weeks" },
            { "phase": "Frontend Development", "duration": "5 weeks" },
            { "phase": "Backend Integration", "duration": "6 weeks" }
        ],
        "risks": [
            "Smart contract vulnerabilities",
            "Regulatory compliance",
            "Integration with traditional payment systems"
        ]
    },
    {
        "id": 7,
        "title": "Enterprise Resource Planning System",
        "description": "Comprehensive business management software",
        "eta": "7 months",
        "priority": "High",
        "tags": ["ERP", "Business Management", "Backend"],
        "technicalStack": {
            "frontend": ["Angular", "React"],
            "backend": ["Java", "Spring Boot", "Oracle"],
            "devOps": ["Kubernetes", "Docker"],
            "testing": ["JUnit", "Selenium"]
        },
        "keyFeatures": [
            "Integrated HR and finance modules",
            "Real-time reporting and analytics",
            "Customizable user dashboards"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "Backend Developer", "count": 3 },
                { "title": "Frontend Developer", "count": 2 },
                { "title": "Project Manager", "count": 1 }
            ],
            "totalEstimatedHours": 1500
        },
        "milestones": [
            { "phase": "Design", "duration": "4 weeks" },
            { "phase": "Development", "duration": "12 weeks" },
            { "phase": "Testing", "duration": "4 weeks" }
        ],
        "risks": [
            "Data migration from legacy systems",
            "Complexity of customization",
            "Integration with third-party tools"
        ]
    },
    {
        "id": 8,
        "title": "Healthcare Patient Portal",
        "description": "Secure online platform for medical records and appointments",
        "eta": "3 months",
        "priority": "Critical",
        "tags": ["Healthcare", "Security", "Frontend"],
        "technicalStack": {
            "frontend": ["Angular", "React.js"],
            "backend": ["Node.js", "MongoDB"],
            "devOps": ["AWS", "Docker"],
            "testing": ["Jest", "Cypress"]
        },
        "keyFeatures": [
            "Patient record management",
            "Appointment scheduling",
            "Secure login and data encryption"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "Frontend Developer", "count": 2 },
                { "title": "Backend Developer", "count": 1 },
                { "title": "Security Engineer", "count": 1 }
            ],
            "totalEstimatedHours": 900
        },
        "milestones": [
            { "phase": "Design", "duration": "3 weeks" },
            { "phase": "Development", "duration": "6 weeks" },
            { "phase": "Testing and Deployment", "duration": "2 weeks" }
        ],
        "risks": [
            "Compliance with healthcare regulations",
            "Data privacy issues",
            "Security vulnerabilities"
        ]
    },
    {
        "id": 9,
        "title": "Educational Learning Management System",
        "description": "Online platform for course management and student tracking",
        "eta": "4 months",
        "priority": "Medium",
        "tags": ["Education", "E-learning", "UI/UX"],
        "technicalStack": {
            "frontend": ["React.js", "Vue.js"],
            "backend": ["Node.js", "PostgreSQL"],
            "devOps": ["AWS", "Docker"],
            "testing": ["Jest", "Cypress"]
        },
        "keyFeatures": [
            "Course creation and enrollment",
            "Student progress tracking",
            "Integrated assessment tools"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "Frontend Developer", "count": 2 },
                { "title": "Backend Developer", "count": 1 },
                { "title": "UI/UX Designer", "count": 1 }
            ],
            "totalEstimatedHours": 1000
        },
        "milestones": [
            { "phase": "Design", "duration": "3 weeks" },
            { "phase": "Development", "duration": "6 weeks" },
            { "phase": "Testing", "duration": "2 weeks" }
        ],
        "risks": [
            "User adoption",
            "Integration with third-party tools",
            "Scalability challenges"
        ]
    },
    {
        "id": 10,
        "title": "Fitness Tracking Application",
        "description": "Comprehensive health and workout monitoring app",
        "eta": "3 months",
        "priority": "Medium",
        "tags": ["Health", "Mobile", "Wearables"],
        "technicalStack": {
            "frontend": ["React Native", "Expo"],
            "backend": ["Node.js", "MongoDB"],
            "devOps": ["AWS", "Docker"],
            "testing": ["Appium", "Jest"]
        },
        "keyFeatures": [
            "Workout tracking",
            "Diet and nutrition logging",
            "Health progress analytics"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "Mobile Developer", "count": 2 },
                { "title": "Backend Developer", "count": 1 },
                { "title": "UI/UX Designer", "count": 1 }
            ],
            "totalEstimatedHours": 800
        },
        "milestones": [
            { "phase": "Design", "duration": "2 weeks" },
            { "phase": "Development", "duration": "6 weeks" },
            { "phase": "Testing and Launch", "duration": "1 week" }
        ],
        "risks": [
            "Device compatibility",
            "User engagement",
            "Data privacy concerns"
        ]
    },
    {
        "id": 11,
        "title": "Social Networking Platform",
        "description": "Modern social media application with advanced features",
        "eta": "6 months",
        "priority": "High",
        "tags": ["Social Media", "Mobile", "Backend"],
        "technicalStack": {
            "frontend": ["React.js", "Vue.js"],
            "backend": ["Node.js", "MongoDB"],
            "devOps": ["AWS", "Docker"],
            "testing": ["Jest", "Cypress"]
        },
        "keyFeatures": [
            "User profiles and feeds",
            "Real-time messaging",
            "Content sharing and media uploads"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "Frontend Developer", "count": 2 },
                { "title": "Backend Developer", "count": 3 },
                { "title": "Mobile Developer", "count": 2 }
            ],
            "totalEstimatedHours": 1600
        },
        "milestones": [
            { "phase": "Design", "duration": "3 weeks" },
            { "phase": "Frontend Development", "duration": "6 weeks" },
            { "phase": "Backend Development", "duration": "8 weeks" },
            { "phase": "Testing and QA", "duration": "4 weeks" }
        ],
        "risks": [
            "Security breaches",
            "Server scalability",
            "User data privacy"
        ]
    },
    {
        "id": 12,
        "title": "Automated Inventory System",
        "description": "Implementing an AI-powered inventory management system",
        "eta": "4 months",
        "priority": "Medium",
        "tags": ["AI", "Inventory", "Automation"],
        "technicalStack": {
            "frontend": ["Angular", "React.js"],
            "backend": ["Node.js", "MongoDB"],
            "devOps": ["AWS", "Docker"],
            "testing": ["Mocha", "Jest"]
        },
        "keyFeatures": [
            "AI-powered stock tracking",
            "Automated restocking alerts",
            "Inventory analytics dashboard"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "AI Engineer", "count": 2 },
                { "title": "Frontend Developer", "count": 1 },
                { "title": "Backend Developer", "count": 2 }
            ],
            "totalEstimatedHours": 1200
        },
        "milestones": [
            { "phase": "Design", "duration": "3 weeks" },
            { "phase": "AI Model Development", "duration": "5 weeks" },
            { "phase": "System Integration", "duration": "6 weeks" }
        ],
        "risks": [
            "Data inaccuracies",
            "Real-time system performance",
            "Integration with existing tools"
        ]
    },
    {
        "id": 13,
        "title": "Automated Testing Framework",
        "description": "Building a test automation framework for continuous integration",
        "eta": "2 months",
        "priority": "Medium",
        "tags": ["Testing", "CI/CD", "Automation"],
        "technicalStack": {
            "frontend": ["React.js", "Vue.js"],
            "backend": ["Node.js", "Python"],
            "devOps": ["Jenkins", "Docker"],
            "testing": ["Selenium", "JUnit"]
        },
        "keyFeatures": [
            "Automated unit and integration tests",
            "CI/CD pipeline integration",
            "Test reporting dashboard"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "DevOps Engineer", "count": 1 },
                { "title": "Test Engineer", "count": 2 }
            ],
            "totalEstimatedHours": 600
        },
        "milestones": [
            { "phase": "Framework Design", "duration": "2 weeks" },
            { "phase": "Test Development", "duration": "4 weeks" },
            { "phase": "CI/CD Integration", "duration": "2 weeks" }
        ],
        "risks": [
            "Test environment configuration issues",
            "Integration with legacy systems",
            "Automation tool limitations"
        ]
    },
    {
        "id": 14,
        "title": "Cloud-based File Sharing System",
        "description": "Secure, scalable cloud storage and file sharing solution",
        "eta": "3 months",
        "priority": "Medium",
        "tags": ["Cloud", "Storage", "Security"],
        "technicalStack": {
            "frontend": ["React.js", "Vue.js"],
            "backend": ["Node.js", "AWS S3"],
            "devOps": ["Docker", "Terraform"],
            "testing": ["Mocha", "Jest"]
        },
        "keyFeatures": [
            "File versioning",
            "Real-time collaboration",
            "End-to-end encryption"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "Cloud Engineer", "count": 2 },
                { "title": "Frontend Developer", "count": 1 },
                { "title": "Backend Developer", "count": 1 }
            ],
            "totalEstimatedHours": 800
        },
        "milestones": [
            { "phase": "Design", "duration": "3 weeks" },
            { "phase": "Development", "duration": "6 weeks" },
            { "phase": "Testing and Deployment", "duration": "2 weeks" }
        ],
        "risks": [
            "Data breach risks",
            "Scalability challenges",
            "Compliance with regulations"
        ]
    },
    {
        "id": 15,
        "title": "Online Travel Booking System",
        "description": "A comprehensive online platform for booking flights, hotels, and rentals",
        "eta": "4 months",
        "priority": "High",
        "tags": ["Travel", "Booking", "Integration"],
        "technicalStack": {
            "frontend": ["React.js", "Vue.js"],
            "backend": ["Node.js", "PostgreSQL"],
            "devOps": ["AWS", "Docker"],
            "testing": ["Jest", "Cypress"]
        },
        "keyFeatures": [
            "Flight, hotel, and rental bookings",
            "Dynamic pricing engine",
            "User profile and loyalty program"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "Frontend Developer", "count": 3 },
                { "title": "Backend Developer", "count": 2 },
                { "title": "Integration Specialist", "count": 1 }
            ],
            "totalEstimatedHours": 1200
        },
        "milestones": [
            { "phase": "Requirement Gathering", "duration": "2 weeks" },
            { "phase": "Design and UI/UX", "duration": "4 weeks" },
            { "phase": "Backend Development", "duration": "8 weeks" },
            { "phase": "Testing and QA", "duration": "3 weeks" }
        ],
        "risks": [
            "Third-party integration issues",
            "Payment gateway failures",
            "Customer data privacy concerns"
        ]
    },
    {
        "id": 16,
        "title": "AI-powered Fraud Detection System",
        "description": "Machine learning model to detect fraud in real-time transactions",
        "eta": "5 months",
        "priority": "High",
        "tags": ["AI", "Security", "Fintech"],
        "technicalStack": {
            "frontend": ["React.js", "Vue.js"],
            "backend": ["Python", "Flask", "PostgreSQL"],
            "devOps": ["AWS", "Docker"],
            "testing": ["Mocha", "PyTest"]
        },
        "keyFeatures": [
            "Real-time fraud detection",
            "Machine learning model optimization",
            "Risk scoring"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "AI Engineer", "count": 2 },
                { "title": "Backend Developer", "count": 2 },
                { "title": "Security Analyst", "count": 1 }
            ],
            "totalEstimatedHours": 1500
        },
        "milestones": [
            { "phase": "Data Collection and Model Training", "duration": "4 weeks" },
            { "phase": "System Development", "duration": "8 weeks" },
            { "phase": "Testing and Optimization", "duration": "6 weeks" }
        ],
        "risks": [
            "Data quality for model training",
            "Real-time performance issues",
            "False positives in fraud detection"
        ]
    },
    {
        "id": 17,
        "title": "Video Streaming Platform",
        "description": "Building a scalable platform for streaming high-definition videos",
        "eta": "6 months",
        "priority": "High",
        "tags": ["Streaming", "Cloud", "Backend"],
        "technicalStack": {
            "frontend": ["React.js", "Vue.js"],
            "backend": ["Node.js", "MongoDB"],
            "devOps": ["AWS", "Docker"],
            "testing": ["Jest", "Mocha"]
        },
        "keyFeatures": [
            "HD video streaming",
            "Real-time content delivery network",
            "Subscription-based access"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "Frontend Developer", "count": 2 },
                { "title": "Backend Developer", "count": 3 },
                { "title": "Video Engineer", "count": 1 }
            ],
            "totalEstimatedHours": 1800
        },
        "milestones": [
            { "phase": "Planning and Strategy", "duration": "2 weeks" },
            { "phase": "Backend Development", "duration": "10 weeks" },
            { "phase": "Frontend Development", "duration": "6 weeks" },
            { "phase": "Testing and QA", "duration": "4 weeks" }
        ],
        "risks": [
            "Video buffering",
            "High server costs",
            "Content piracy"
        ]
    },
    {
        "id": 18,
        "title": "Autonomous Delivery Robot",
        "description": "Developing an autonomous robot for package delivery in urban environments",
        "eta": "7 months",
        "priority": "High",
        "tags": ["AI", "Robotics", "Automation"],
        "technicalStack": {
            "frontend": ["React.js", "Node.js"],
            "backend": ["Python", "ROS", "TensorFlow"],
            "devOps": ["AWS", "Docker"],
            "testing": ["Robot Operating System (ROS)"]
        },
        "keyFeatures": [
            "Autonomous navigation",
            "Real-time object recognition",
            "Package delivery tracking"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "Robotics Engineer", "count": 3 },
                { "title": "AI Engineer", "count": 2 },
                { "title": "Software Engineer", "count": 2 }
            ],
            "totalEstimatedHours": 2000
        },
        "milestones": [
            { "phase": "Design and Prototyping", "duration": "6 weeks" },
            { "phase": "Hardware Development", "duration": "8 weeks" },
            { "phase": "Software Integration", "duration": "10 weeks" },
            { "phase": "Testing and Deployment", "duration": "4 weeks" }
        ],
        "risks": [
            "Navigation system errors",
            "Battery life limitations",
            "Safety in urban environments"
        ]
    },
    {
        "id": 19,
        "title": "Smart Home Automation System",
        "description": "A system for automating and controlling smart home devices",
        "eta": "5 months",
        "priority": "Medium",
        "tags": ["IoT", "Automation", "Smart Home"],
        "technicalStack": {
            "frontend": ["React.js", "Vue.js"],
            "backend": ["Node.js", "MongoDB"],
            "devOps": ["AWS", "Docker"],
            "testing": ["Jest", "Cypress"]
        },
        "keyFeatures": [
            "Device automation",
            "Voice control integration",
            "Energy management"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "IoT Developer", "count": 2 },
                { "title": "Backend Developer", "count": 2 },
                { "title": "Frontend Developer", "count": 1 }
            ],
            "totalEstimatedHours": 1200
        },
        "milestones": [
            { "phase": "Design and Requirements", "duration": "3 weeks" },
            { "phase": "System Architecture", "duration": "5 weeks" },
            { "phase": "Device Integration", "duration": "4 weeks" },
            { "phase": "Testing and Deployment", "duration": "3 weeks" }
        ],
        "risks": [
            "Device compatibility",
            "Security vulnerabilities",
            "Network latency"
        ]
    },
    {
        "id": 20,
        "title": "Blockchain-based Voting System",
        "description": "Developing a secure, decentralized voting system using blockchain technology",
        "eta": "6 months",
        "priority": "High",
        "tags": ["Blockchain", "Security", "Voting"],
        "technicalStack": {
            "frontend": ["React.js", "Vue.js"],
            "backend": ["Solidity", "Ethereum"],
            "devOps": ["Docker", "AWS"],
            "testing": ["Truffle", "Mocha"]
        },
        "keyFeatures": [
            "Blockchain-based authentication",
            "Decentralized voting system",
            "Transparent vote tallying"
        ],
        "teamRequirements": {
            "roles": [
                { "title": "Blockchain Developer", "count": 2 },
                { "title": "Frontend Developer", "count": 2 },
                { "title": "Backend Developer", "count": 1 }
            ],
            "totalEstimatedHours": 1600
        },
        "milestones": [
            { "phase": "Design and Architecture", "duration": "4 weeks" },
            { "phase": "Smart Contract Development", "duration": "6 weeks" },
            { "phase": "System Integration", "duration": "6 weeks" },
            { "phase": "Testing and Deployment", "duration": "4 weeks" }
        ],
        "risks": [
            "Smart contract vulnerabilities",
            "Regulatory issues",
            "User adoption"
        ]
    }
]


// Function to show project details
function showProjectDetails(projectId) {
    const project = additionalProjectData.find(p => p.id === projectId);
    if (project) {
        // Get modal elements
        const detailsModal = document.getElementById('projectDetailsModal');
        const modalContent = detailsModal.querySelector('.bg-white');
        
        // Create the modal content
        modalContent.innerHTML = `
            <h3 class="text-xl font-bold text-gray-800 mb-4">${project.title}</h3>
            <div class="space-y-4">
                <p class="text-gray-700">${project.detailedDescription}</p>
                
                <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-gray-700"><span class="font-semibold">ETA:</span> ${project.eta}</p>
                    <p class="text-gray-700"><span class="font-semibold">Priority:</span> ${project.priority}</p>
                </div>
                
                <div>
                    <h4 class="font-semibold mb-2">Key Features:</h4>
                    <ul class="list-disc pl-5 text-gray-700">
                        ${project.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-semibold mb-2">Technical Stack:</h4>
                    <div class="grid grid-cols-2 gap-4 text-gray-700">
                        <div><span class="font-medium">Frontend:</span> ${project.technicalStack.frontend.join(', ')}</div>
                        <div><span class="font-medium">Backend:</span> ${project.technicalStack.backend.join(', ')}</div>
                        <div><span class="font-medium">DevOps:</span> ${project.technicalStack.devOps.join(', ')}</div>
                        <div><span class="font-medium">Testing:</span> ${project.technicalStack.testing.join(', ')}</div>
                    </div>
                </div>
                
                <div>
                    <h4 class="font-semibold mb-2">Team Requirements:</h4>
                    <ul class="list-disc pl-5 text-gray-700">
                        ${project.teamRequirements.roles.map(role => 
                            `<li>${role.title} (${role.count})</li>`
                        ).join('')}
                    </ul>
                    <p class="mt-2 text-gray-700">Total Estimated Hours: ${project.teamRequirements.totalEstimatedHours}</p>
                </div>
                
                <div>
                    <h4 class="font-semibold mb-2">Milestones:</h4>
                    <ul class="list-disc pl-5 text-gray-700">
                        ${project.milestones.map(milestone => 
                            `<li>${milestone.phase} - ${milestone.duration}</li>`
                        ).join('')}
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-semibold mb-2">Risks:</h4>
                    <ul class="list-disc pl-5 text-gray-700">
                        ${project.risks.map(risk => `<li>${risk}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="mt-6 flex justify-end space-x-4">
                <button onclick="closeProjectDetails()" class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors">Close</button>
                <button onclick="chooseProject(${project.id})" class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">Choose Project</button>
            </div>
        `;
        
        // Show the modal
        detailsModal.classList.remove('hidden');
    }
}

// Function to close the modal
function closeProjectDetails() {
    const detailsModal = document.getElementById('projectDetailsModal');
    detailsModal.classList.add('hidden');
}

// Function to handle project selection
function chooseProject(projectId) {
    // For now, just show an alert
    alert(`Project ${projectId} selected! This is a dummy action.`);
    closeProjectDetails();
}

// Close modal when clicking outside
document.addEventListener('click', (event) => {
    const detailsModal = document.getElementById('projectDetailsModal');
    const modalContent = detailsModal.querySelector('.bg-white');
    if (event.target === detailsModal && !modalContent.contains(event.target)) {
        closeProjectDetails();
    }
});