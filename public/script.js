class ProjectApp {
    constructor() {
        this.currentFilter = 'all';
        this.searchQuery = '';
        this.init();
    }

    init() {
        this.attachEventListeners();
        this.renderProjects();
    }

    attachEventListeners() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchQuery = e.target.value.toLowerCase();
                this.renderProjects();
            });
        }
    }

    getPriorityColor(priority) {
        switch (priority) {
            case 'Critical':
                return 'bg-red-600 text-white';
            case 'High':
                return 'bg-orange-500 text-white';
            case 'Medium':
                return 'bg-yellow-500 text-black';
            case 'Low':
                return 'bg-blue-500 text-white';
            default:
                return 'bg-gray-500 text-white';
        }
    }

    filterProjects() {
        let filtered = projectData.projects;

        if (this.searchQuery) {
            filtered = filtered.filter(project => 
                project.title.toLowerCase().includes(this.searchQuery) ||
                project.description.toLowerCase().includes(this.searchQuery)
            );
        }

        return filtered;
    }

    createProjectCard(project) {
    return `
        <div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 project-card">
            <div class="p-6">
                <div class="flex justify-between items-start mb-4">
                    <h3 class="text-lg font-semibold text-gray-900">${project.title}</h3>
                    <span class="px-3 py-1 rounded-full text-xs font-medium ${this.getPriorityColor(project.priority)}">
                        ${project.priority}
                    </span>
                </div>
                <p class="text-gray-600 mb-4">${project.description}</p>
                
                <div class="flex items-center space-x-4 mb-4">
                    <div class="flex items-center text-sm text-gray-500">
                        <i class="fas fa-clock mr-1"></i>
                        <span>${project.eta}</span>
                    </div>
                </div>
                
                <div class="space-y-3">
                    <div class="flex flex-wrap gap-2">
                        ${project.tags.map(tag => `
                            <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">${tag}</span>
                        `).join('')}
                    </div>
                    
                    <div class="flex items-center justify-between mt-4">
                        <button 
                            onclick="showProjectDetails(${project.id})"
                            class="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-md transition-colors">
                            <i class="fas fa-info-circle mr-2"></i>
                            More Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

    renderProjects() {
        const projectGrid = document.getElementById('projectGrid');
        if (!projectGrid) return;
        
        const filteredProjects = this.filterProjects();
        projectGrid.innerHTML = filteredProjects.map(project => this.createProjectCard(project)).join('');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new ProjectApp();
});