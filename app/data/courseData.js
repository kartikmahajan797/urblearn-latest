const courseData = {
    'full-stack-with-gen-ai': {
        slug: 'full-stack-with-gen-ai',
        title: 'Full Stack with Gen AI',
        subtitle: 'Build Intelligent, Production-Ready Applications',
        desc: 'Master full-stack development powered by Generative AI — build intelligent, production-ready apps from frontend to backend. Learn to integrate LLMs, AI agents, and smart automation into real-world web applications.',
        tag: 'Popular',
        price: '₹8,999',
        duration: '16 Weeks',
        modules: 14,
        rating: 4.9,
        students: '2,400+',
        image: '/images/course1.jpg',
        highlights: ['Live Interactive Classes', '1:1 Mentorship Sessions', 'Real-World Projects', 'Placement Assistance', 'Certificate of Completion'],
        syllabus: [
            {
                module: 'Module 1',
                title: 'Web Fundamentals & HTML/CSS',
                topics: ['HTML5 Semantic Elements', 'CSS3 Flexbox & Grid', 'Responsive Design Principles', 'CSS Animations & Transitions'],
            },
            {
                module: 'Module 2',
                title: 'JavaScript Mastery',
                topics: ['ES6+ Features', 'Async/Await & Promises', 'DOM Manipulation', 'Error Handling & Debugging'],
            },
            {
                module: 'Module 3',
                title: 'React.js & Frontend Architecture',
                topics: ['Component-Based Architecture', 'Hooks & State Management', 'React Router & Navigation', 'Context API & Redux'],
            },
            {
                module: 'Module 4',
                title: 'Node.js & Express Backend',
                topics: ['Server-Side JavaScript', 'RESTful API Design', 'Middleware & Authentication', 'Error Handling & Logging'],
            },
            {
                module: 'Module 5',
                title: 'Databases — SQL & NoSQL',
                topics: ['MongoDB & Mongoose', 'PostgreSQL Fundamentals', 'Database Design & Relationships', 'Query Optimization'],
            },
            {
                module: 'Module 6',
                title: 'Introduction to Generative AI',
                topics: ['What are LLMs?', 'OpenAI API & GPT Models', 'Prompt Engineering Basics', 'Token Management & Cost Optimization'],
            },
            {
                module: 'Module 7',
                title: 'AI-Powered Feature Development',
                topics: ['Building AI Chatbots', 'Smart Search & Recommendations', 'Content Generation Systems', 'AI-Driven Form Validation'],
            },
            {
                module: 'Module 8',
                title: 'RAG & Vector Databases',
                topics: ['Retrieval Augmented Generation', 'Pinecone & ChromaDB', 'Embedding Models', 'Building Knowledge Bases'],
            },
            {
                module: 'Module 9',
                title: 'AI Agents & Automation',
                topics: ['LangChain Framework', 'Building AI Agents', 'Tool Calling & Function Execution', 'Multi-Agent Systems'],
            },
            {
                module: 'Module 10',
                title: 'Authentication & Security',
                topics: ['JWT & OAuth 2.0', 'Role-Based Access Control', 'API Security Best Practices', 'Data Encryption'],
            },
            {
                module: 'Module 11',
                title: 'Testing & Quality Assurance',
                topics: ['Unit Testing with Jest', 'Integration Testing', 'API Testing with Supertest', 'End-to-End Testing'],
            },
            {
                module: 'Module 12',
                title: 'DevOps & Deployment',
                topics: ['Docker Containerization', 'CI/CD Pipelines', 'AWS & Vercel Deployment', 'Monitoring & Logging'],
            },
            {
                module: 'Module 13',
                title: 'Capstone Project — AI SaaS App',
                topics: ['Project Planning & Architecture', 'Full Stack Implementation', 'AI Feature Integration', 'Deployment & Presentation'],
            },
            {
                module: 'Module 14',
                title: 'Career Prep & Interview Training',
                topics: ['Resume & Portfolio Building', 'System Design Interviews', 'Coding Interview Prep', 'Mock Interviews & Feedback'],
            },
        ],
        features: [
            { icon: '🔴', text: 'Live Interactive Classes — Real-time doubt solving' },
            { icon: '👤', text: '1:1 Mentorship — Personal guidance from industry experts' },
            { icon: '🛠️', text: '5+ Real-World Projects with AI integration' },
            { icon: '📜', text: 'Industry-Recognized Certificate' },
            { icon: '💼', text: 'Placement Assistance & Interview Prep' },
            { icon: '♾️', text: 'Lifetime Access to Course Materials' },
        ],
        mentor: {
            name: 'Ayush Patel',
            role: 'Senior Full Stack Engineer',
            experience: '5+ Years',
            company: 'Ex-Amazon, AI Architect',
            img: '/images/ayush.jpg',
            bio: 'Ayush is a veteran software engineer specializing in Gen AI and Full Stack development. He has architected scalable systems for global companies and is passionate about mentoring the next generation of builders.',
            contact: 'https://wa.me/919999999999'
        }
    },

    'generative-ai': {
        slug: 'generative-ai',
        title: 'Generative AI',
        subtitle: 'Master the Future of Artificial Intelligence',
        desc: 'Deep dive into LLMs, prompt engineering, RAG, fine-tuning, and building real-world AI-powered applications. From fundamentals to advanced agent systems.',
        tag: 'Trending',
        price: '₹5,999',
        duration: '12 Weeks',
        modules: 12,
        rating: 4.8,
        students: '3,100+',
        image: '/images/course2.jpg',
        highlights: ['Live Interactive Classes', '1:1 Mentorship Sessions', 'Hands-On AI Projects', 'Industry Certificate', 'Community Access'],
        syllabus: [
            {
                module: 'Module 1',
                title: 'Introduction to AI & Machine Learning',
                topics: ['AI Landscape Overview', 'Supervised vs Unsupervised Learning', 'Neural Network Fundamentals', 'Introduction to Deep Learning'],
            },
            {
                module: 'Module 2',
                title: 'Natural Language Processing (NLP)',
                topics: ['Text Processing & Tokenization', 'Word Embeddings', 'Sequence Models (RNN, LSTM)', 'Attention Mechanism'],
            },
            {
                module: 'Module 3',
                title: 'Transformer Architecture',
                topics: ['Self-Attention Deep Dive', 'Encoder-Decoder Architecture', 'Positional Encoding', 'Multi-Head Attention'],
            },
            {
                module: 'Module 4',
                title: 'Large Language Models (LLMs)',
                topics: ['GPT Architecture & Training', 'BERT, T5, LLaMA Overview', 'Tokenizers & Vocabulary', 'Scaling Laws & Emergent Abilities'],
            },
            {
                module: 'Module 5',
                title: 'Prompt Engineering Mastery',
                topics: ['Zero-Shot & Few-Shot Prompting', 'Chain-of-Thought Reasoning', 'System Prompts & Roles', 'Prompt Templates & Optimization'],
            },
            {
                module: 'Module 6',
                title: 'OpenAI & API Integration',
                topics: ['GPT-4 API Setup', 'Chat Completions & Streaming', 'Function Calling', 'Token Management & Pricing'],
            },
            {
                module: 'Module 7',
                title: 'RAG — Retrieval Augmented Generation',
                topics: ['Vector Databases (Pinecone, ChromaDB)', 'Embedding Models', 'Chunking Strategies', 'Hybrid Search Techniques'],
            },
            {
                module: 'Module 8',
                title: 'Fine-Tuning LLMs',
                topics: ['LoRA & QLoRA Techniques', 'Dataset Preparation', 'Hugging Face Transformers', 'Evaluation & Benchmarking'],
            },
            {
                module: 'Module 9',
                title: 'LangChain & AI Frameworks',
                topics: ['Chains & Agents', 'Memory & Context Management', 'Tool Integration', 'Building Complex Workflows'],
            },
            {
                module: 'Module 10',
                title: 'AI Agents & Multi-Agent Systems',
                topics: ['Autonomous AI Agents', 'CrewAI & AutoGen', 'Task Planning & Execution', 'Agent Communication Patterns'],
            },
            {
                module: 'Module 11',
                title: 'Image & Multimodal AI',
                topics: ['Stable Diffusion & DALL-E', 'Vision Language Models', 'Image Understanding', 'Multimodal Applications'],
            },
            {
                module: 'Module 12',
                title: 'Capstone — Build Your AI Product',
                topics: ['End-to-End AI Application', 'Production Deployment', 'Scalability & Monitoring', 'Portfolio Presentation'],
            },
        ],
        features: [
            { icon: '🔴', text: 'Live Interactive Classes — Learn in real-time' },
            { icon: '👤', text: '1:1 Mentorship — Personalized AI career guidance' },
            { icon: '🤖', text: '8+ Hands-On AI Projects' },
            { icon: '📜', text: 'Industry-Recognized Certificate' },
            { icon: '🧠', text: 'Access to GPU Resources for Training' },
            { icon: '♾️', text: 'Lifetime Access to Course Materials' },
        ],
        mentor: {
            name: 'Chennaveer Jogur',
            role: 'AI & Data Science Specialist',
            experience: '6+ Years',
            company: 'AI Research Lead',
            img: '/images/chennaveer.png',
            bio: 'Chennaveer is an expert in Generative AI and Machine Learning. He has led multiple AI research projects and has a deep understanding of LLMs, RAG pipelines, and AI agent architectures.',
            contact: 'https://wa.me/919999999999'
        }
    },

    'backend-development': {
        slug: 'backend-development',
        title: 'Backend Development',
        subtitle: 'Build Scalable Server-Side Applications',
        desc: 'Learn server-side programming, REST APIs, authentication, databases, and deployment with Node.js and Express. Master the backbone of modern web applications.',
        tag: 'Hot',
        price: '₹6,999',
        duration: '14 Weeks',
        modules: 12,
        rating: 4.7,
        students: '1,800+',
        image: '/images/course3.jpg',
        highlights: ['Live Interactive Classes', '1:1 Mentorship Sessions', 'API Projects', 'Deployment Training', 'Certificate of Completion'],
        syllabus: [
            {
                module: 'Module 1',
                title: 'Introduction to Backend Development',
                topics: ['Client-Server Architecture', 'HTTP Protocol Deep Dive', 'Request-Response Cycle', 'Backend vs Frontend Roles'],
            },
            {
                module: 'Module 2',
                title: 'Node.js Fundamentals',
                topics: ['Event Loop & Async Model', 'File System & Streams', 'NPM & Package Management', 'Environment Configuration'],
            },
            {
                module: 'Module 3',
                title: 'Express.js Framework',
                topics: ['Routing & Controllers', 'Middleware Pipeline', 'Template Engines', 'Error Handling Patterns'],
            },
            {
                module: 'Module 4',
                title: 'RESTful API Design',
                topics: ['REST Principles & Best Practices', 'CRUD Operations', 'Request Validation', 'API Versioning & Documentation'],
            },
            {
                module: 'Module 5',
                title: 'Database — MongoDB',
                topics: ['Document-Based Data Modeling', 'Mongoose ODM', 'Aggregation Pipeline', 'Indexing & Performance'],
            },
            {
                module: 'Module 6',
                title: 'Database — PostgreSQL',
                topics: ['Relational Data Modeling', 'SQL Queries & Joins', 'Sequelize ORM', 'Migrations & Seeds'],
            },
            {
                module: 'Module 7',
                title: 'Authentication & Authorization',
                topics: ['Password Hashing (bcrypt)', 'JWT Tokens', 'OAuth 2.0 & Social Login', 'Role-Based Access Control'],
            },
            {
                module: 'Module 8',
                title: 'Advanced API Concepts',
                topics: ['GraphQL Basics', 'WebSockets & Real-Time', 'Rate Limiting & Throttling', 'Caching Strategies (Redis)'],
            },
            {
                module: 'Module 9',
                title: 'File Handling & Cloud Storage',
                topics: ['Multer File Uploads', 'AWS S3 Integration', 'Cloudinary for Media', 'Streaming Large Files'],
            },
            {
                module: 'Module 10',
                title: 'Testing Backend Applications',
                topics: ['Unit Testing with Jest', 'Integration Testing', 'API Testing (Postman, Supertest)', 'Test-Driven Development'],
            },
            {
                module: 'Module 11',
                title: 'DevOps & Deployment',
                topics: ['Docker Basics', 'CI/CD with GitHub Actions', 'Deploy to AWS / Railway', 'Monitoring & Logging'],
            },
            {
                module: 'Module 12',
                title: 'Capstone — Production API',
                topics: ['Architecture Planning', 'Full API Implementation', 'Security Audit', 'Documentation & Deployment'],
            },
        ],
        features: [
            { icon: '🔴', text: 'Live Interactive Classes — Real-time coding sessions' },
            { icon: '👤', text: '1:1 Mentorship — Personal code reviews & guidance' },
            { icon: '🛠️', text: '6+ Backend Projects with real databases' },
            { icon: '📜', text: 'Industry-Recognized Certificate' },
            { icon: '🚀', text: 'Deploy to Cloud — AWS & Railway' },
            { icon: '♾️', text: 'Lifetime Access to Course Materials' },
        ],
        mentor: {
            name: 'Shruti Grover',
            role: 'Senior Backend Engineer',
            experience: '6+ Years',
            company: 'Enterprise Java Expert',
            img: '/images/shruti.jpg',
            bio: 'Shruti is an expert in building enterprise-grade backend systems. With years of experience in Java, Spring Boot, and Node.js, she guides students through the complexities of scalable server-side architecture.',
            contact: 'https://wa.me/919999999999'
        }
    },

    'system-design': {
        slug: 'system-design',
        title: 'System Design',
        subtitle: 'Architect Systems That Scale to Millions',
        desc: 'Master scalable architecture, distributed systems, load balancing, caching, and design patterns used at top tech companies. Prepare for senior-level interviews.',
        tag: 'New',
        price: '₹7,499',
        duration: '10 Weeks',
        modules: 10,
        rating: 4.9,
        students: '1,200+',
        image: '/images/course1.jpg',
        highlights: ['Live Interactive Classes', '1:1 Mentorship Sessions', 'Case Studies', 'Interview Prep', 'Certificate of Completion'],
        syllabus: [
            {
                module: 'Module 1',
                title: 'Fundamentals of System Design',
                topics: ['Scalability Concepts', 'Latency vs Throughput', 'CAP Theorem', 'Horizontal vs Vertical Scaling'],
            },
            {
                module: 'Module 2',
                title: 'Networking & Protocols',
                topics: ['DNS & CDN', 'TCP/IP & HTTP/HTTPS', 'WebSockets & gRPC', 'API Gateway Patterns'],
            },
            {
                module: 'Module 3',
                title: 'Databases at Scale',
                topics: ['SQL vs NoSQL Trade-offs', 'Sharding & Partitioning', 'Replication Strategies', 'Database Indexing Deep Dive'],
            },
            {
                module: 'Module 4',
                title: 'Caching Strategies',
                topics: ['Redis & Memcached', 'Cache Invalidation Patterns', 'CDN Caching', 'Write-Through vs Write-Behind'],
            },
            {
                module: 'Module 5',
                title: 'Load Balancing & Proxies',
                topics: ['Load Balancer Algorithms', 'Reverse Proxy (Nginx)', 'Health Checks & Failover', 'Global Server Load Balancing'],
            },
            {
                module: 'Module 6',
                title: 'Message Queues & Event-Driven',
                topics: ['Kafka & RabbitMQ', 'Pub/Sub Patterns', 'Event Sourcing', 'CQRS Pattern'],
            },
            {
                module: 'Module 7',
                title: 'Microservices Architecture',
                topics: ['Monolith to Microservices', 'Service Discovery', 'API Gateway', 'Circuit Breaker Pattern'],
            },
            {
                module: 'Module 8',
                title: 'Designing Real Systems',
                topics: ['Design URL Shortener', 'Design Twitter/X Feed', 'Design WhatsApp', 'Design Netflix Streaming'],
            },
            {
                module: 'Module 9',
                title: 'Distributed Systems',
                topics: ['Consensus Algorithms (Raft, Paxos)', 'Distributed Locking', 'Leader Election', 'Consistent Hashing'],
            },
            {
                module: 'Module 10',
                title: 'Interview Mastery & Mock Rounds',
                topics: ['Framework for System Design Interviews', 'Communication & Trade-off Analysis', 'Mock Interview Sessions', 'Feedback & Improvement'],
            },
        ],
        features: [
            { icon: '🔴', text: 'Live Interactive Classes — Whiteboard sessions' },
            { icon: '👤', text: '1:1 Mentorship — Mock interviews with seniors' },
            { icon: '🏗️', text: '10+ Real System Design Case Studies' },
            { icon: '📜', text: 'Industry-Recognized Certificate' },
            { icon: '💼', text: 'FAANG Interview Preparation' },
            { icon: '♾️', text: 'Lifetime Access to Course Materials' },
        ],
        mentor: {
            name: 'Ayush Patel',
            role: 'System Architect',
            experience: '7+ Years',
            company: 'Infrastructure Lead',
            img: '/images/ayush.jpg',
            bio: 'Ayush has designed and scaled systems that handle millions of requests per second. He brings deep industry knowledge of distributed systems and high-availability architecture to this course.',
            contact: 'https://wa.me/919999999999'
        }
    },

    'mern-stack': {
        slug: 'mern-stack',
        title: 'MERN Stack',
        subtitle: 'Full-Stack JavaScript Development',
        desc: 'Build full-stack web apps with MongoDB, Express, React, and Node.js — from zero to deployment. The most in-demand web development stack.',
        tag: 'Popular',
        price: '₹7,999',
        duration: '14 Weeks',
        modules: 12,
        rating: 4.8,
        students: '2,800+',
        image: '/images/course2.jpg',
        highlights: ['Live Interactive Classes', '1:1 Mentorship Sessions', 'Full-Stack Projects', 'Job Assistance', 'Certificate of Completion'],
        syllabus: [
            {
                module: 'Module 1',
                title: 'HTML5, CSS3 & Responsive Design',
                topics: ['Semantic HTML', 'Flexbox & CSS Grid', 'Media Queries', 'CSS Variables & Animations'],
            },
            {
                module: 'Module 2',
                title: 'JavaScript ES6+ Mastery',
                topics: ['Arrow Functions & Destructuring', 'Promises & Async/Await', 'Modules & Classes', 'Higher-Order Functions'],
            },
            {
                module: 'Module 3',
                title: 'React.js Fundamentals',
                topics: ['JSX & Components', 'Props & State', 'Lifecycle & Effects', 'Conditional Rendering'],
            },
            {
                module: 'Module 4',
                title: 'Advanced React',
                topics: ['React Router v6', 'Context API & useReducer', 'Custom Hooks', 'Performance Optimization'],
            },
            {
                module: 'Module 5',
                title: 'State Management with Redux',
                topics: ['Redux Toolkit', 'Actions & Reducers', 'Async Thunks', 'Redux DevTools'],
            },
            {
                module: 'Module 6',
                title: 'Node.js & Express.js',
                topics: ['Server Setup & Routing', 'Middleware & Controllers', 'Environment Variables', 'Error Handling'],
            },
            {
                module: 'Module 7',
                title: 'MongoDB & Mongoose',
                topics: ['Schema Design', 'CRUD Operations', 'Aggregation Framework', 'Indexing & Population'],
            },
            {
                module: 'Module 8',
                title: 'Authentication & Security',
                topics: ['JWT Authentication', 'Bcrypt Password Hashing', 'OAuth Integration', 'Security Best Practices'],
            },
            {
                module: 'Module 9',
                title: 'REST API Development',
                topics: ['RESTful Design Patterns', 'File Upload with Multer', 'Pagination & Filtering', 'API Documentation (Swagger)'],
            },
            {
                module: 'Module 10',
                title: 'Real-Time Features',
                topics: ['Socket.IO Integration', 'Real-Time Chat App', 'Notifications System', 'Live Data Updates'],
            },
            {
                module: 'Module 11',
                title: 'Testing & Deployment',
                topics: ['Jest & React Testing Library', 'API Testing', 'Docker Basics', 'Deploy to Vercel & Railway'],
            },
            {
                module: 'Module 12',
                title: 'Capstone — Full-Stack MERN App',
                topics: ['Project Planning & Design', 'Frontend + Backend Integration', 'Payment Gateway (Razorpay)', 'Production Deployment'],
            },
        ],
        features: [
            { icon: '🔴', text: 'Live Interactive Classes — Code along in real-time' },
            { icon: '👤', text: '1:1 Mentorship — Weekly progress reviews' },
            { icon: '🛠️', text: '6+ Full-Stack MERN Projects' },
            { icon: '📜', text: 'Industry-Recognized Certificate' },
            { icon: '💼', text: 'Job Assistance & Portfolio Review' },
            { icon: '♾️', text: 'Lifetime Access to Course Materials' },
        ],
        mentor: {
            name: 'Ayush Patel',
            role: 'Full Stack Developer',
            experience: '5+ Years',
            company: 'MERN Expert',
            img: '/images/ayush.jpg',
            bio: 'Ayush is a master of the MERN stack. He focuses on building production-ready applications and teaching students the best practices of modern web development using JavaScript and React.',
            contact: 'https://wa.me/919999999999'
        }
    },

    'java-full-stack': {
        slug: 'java-full-stack',
        title: 'Java Full Stack',
        subtitle: 'Enterprise-Grade Development with Java',
        desc: 'End-to-end Java development with Spring Boot, Hibernate, React, and microservices architecture. Build enterprise-level applications from scratch.',
        tag: 'In Demand',
        price: '₹8,499',
        duration: '16 Weeks',
        modules: 14,
        rating: 4.8,
        students: '1,900+',
        image: '/images/course3.jpg',
        highlights: ['Live Interactive Classes', '1:1 Mentorship Sessions', 'Enterprise Projects', 'Placement Support', 'Certificate of Completion'],
        syllabus: [
            {
                module: 'Module 1',
                title: 'Java Core Fundamentals',
                topics: ['OOP Concepts', 'Data Types & Control Flow', 'Exception Handling', 'Collections Framework'],
            },
            {
                module: 'Module 2',
                title: 'Advanced Java',
                topics: ['Generics & Streams API', 'Lambda Expressions', 'Multithreading & Concurrency', 'File I/O & Serialization'],
            },
            {
                module: 'Module 3',
                title: 'SQL & Database Design',
                topics: ['Relational DB Concepts', 'SQL Queries & Joins', 'Stored Procedures', 'Normalization & Indexing'],
            },
            {
                module: 'Module 4',
                title: 'JDBC & Hibernate ORM',
                topics: ['JDBC Connection & Queries', 'Hibernate Configuration', 'Entity Mapping & Relationships', 'HQL & Criteria API'],
            },
            {
                module: 'Module 5',
                title: 'Spring Framework Core',
                topics: ['Dependency Injection', 'Bean Lifecycle', 'Spring AOP', 'Spring Configuration'],
            },
            {
                module: 'Module 6',
                title: 'Spring Boot',
                topics: ['Auto Configuration', 'Spring Boot Starters', 'Application Properties', 'Profiles & Actuator'],
            },
            {
                module: 'Module 7',
                title: 'RESTful APIs with Spring Boot',
                topics: ['REST Controller & Mapping', 'Request Validation', 'Exception Handling', 'Swagger Documentation'],
            },
            {
                module: 'Module 8',
                title: 'Spring Security',
                topics: ['Authentication & Authorization', 'JWT Token Implementation', 'OAuth2 Integration', 'Method-Level Security'],
            },
            {
                module: 'Module 9',
                title: 'Frontend — HTML, CSS & JavaScript',
                topics: ['Modern HTML5 & CSS3', 'JavaScript ES6+', 'DOM Manipulation', 'Responsive Design'],
            },
            {
                module: 'Module 10',
                title: 'React.js for Java Developers',
                topics: ['React Fundamentals', 'Hooks & State Management', 'Axios for API Calls', 'React Router'],
            },
            {
                module: 'Module 11',
                title: 'Microservices Architecture',
                topics: ['Microservices Patterns', 'Spring Cloud Gateway', 'Service Discovery (Eureka)', 'Config Server & Feign Client'],
            },
            {
                module: 'Module 12',
                title: 'DevOps for Java',
                topics: ['Maven & Gradle', 'Docker Containerization', 'CI/CD with Jenkins', 'AWS Deployment'],
            },
            {
                module: 'Module 13',
                title: 'Testing & Quality',
                topics: ['JUnit 5 & Mockito', 'Integration Testing', 'SonarQube Code Quality', 'Performance Testing'],
            },
            {
                module: 'Module 14',
                title: 'Capstone — Enterprise Application',
                topics: ['Microservices-Based Project', 'Full Stack Integration', 'Security & Payment Gateway', 'Production Deployment'],
            },
        ],
        features: [
            { icon: '🔴', text: 'Live Interactive Classes — Industry-paced learning' },
            { icon: '👤', text: '1:1 Mentorship — Guided by Java architects' },
            { icon: '🏢', text: '4+ Enterprise-Level Projects' },
            { icon: '📜', text: 'Industry-Recognized Certificate' },
            { icon: '💼', text: 'Placement Support & Interview Prep' },
            { icon: '♾️', text: 'Lifetime Access to Course Materials' },
        ],
        mentor: {
            name: 'Shruti Grover',
            role: 'Senior Java Architect',
            experience: '6+ Years',
            company: 'Enterprise Solutions Expert',
            img: '/images/shruti.jpg',
            bio: 'Shruti specializes in building robust enterprise applications using Java and Spring Boot. She has helped hundreds of students transition into corporate roles with her deep technical expertise.',
            contact: 'https://wa.me/919999999999'
        }
    },

    'data-structures-algorithms': {
        slug: 'data-structures-algorithms',
        title: 'Data Structures & Algorithms',
        subtitle: 'Crack Any Coding Interview with Confidence',
        desc: 'Master arrays, trees, graphs, dynamic programming, and problem-solving techniques to crack top tech interviews. From basics to advanced competitive programming.',
        tag: 'Essential',
        price: '₹5,499',
        duration: '12 Weeks',
        modules: 12,
        rating: 4.9,
        students: '3,500+',
        image: '/images/course1.jpg',
        highlights: ['Live Interactive Classes', '1:1 Mentorship Sessions', '500+ Problems', 'Mock Interviews', 'Certificate of Completion'],
        syllabus: [
            {
                module: 'Module 1',
                title: 'Complexity Analysis & Basics',
                topics: ['Big O, Omega, Theta Notation', 'Time & Space Complexity', 'Recursion Fundamentals', 'Mathematical Foundations'],
            },
            {
                module: 'Module 2',
                title: 'Arrays & Strings',
                topics: ['Two Pointer Technique', 'Sliding Window', 'Prefix Sum', 'Matrix Problems'],
            },
            {
                module: 'Module 3',
                title: 'Linked Lists',
                topics: ['Singly & Doubly Linked Lists', 'Fast & Slow Pointers', 'Reversal Techniques', 'Cycle Detection'],
            },
            {
                module: 'Module 4',
                title: 'Stacks & Queues',
                topics: ['Stack Applications', 'Monotonic Stack', 'Queue Variations', 'Priority Queue & Heap'],
            },
            {
                module: 'Module 5',
                title: 'Hashing & Hash Maps',
                topics: ['Hash Table Internals', 'Collision Resolution', 'Frequency Counting', 'Anagram & Substring Problems'],
            },
            {
                module: 'Module 6',
                title: 'Trees & Binary Search Trees',
                topics: ['Tree Traversals (BFS, DFS)', 'BST Operations', 'Balanced Trees (AVL)', 'Lowest Common Ancestor'],
            },
            {
                module: 'Module 7',
                title: 'Heaps & Priority Queues',
                topics: ['Min Heap & Max Heap', 'Top K Elements', 'Merge K Sorted Lists', 'Median of Data Stream'],
            },
            {
                module: 'Module 8',
                title: 'Graphs',
                topics: ['BFS & DFS on Graphs', 'Topological Sort', 'Shortest Path (Dijkstra, Bellman-Ford)', 'Union-Find'],
            },
            {
                module: 'Module 9',
                title: 'Dynamic Programming',
                topics: ['Memoization & Tabulation', '1D & 2D DP Problems', 'Knapsack Variations', 'Longest Common Subsequence'],
            },
            {
                module: 'Module 10',
                title: 'Greedy Algorithms',
                topics: ['Activity Selection', 'Huffman Encoding', 'Interval Scheduling', 'Greedy vs DP Trade-offs'],
            },
            {
                module: 'Module 11',
                title: 'Advanced Topics',
                topics: ['Tries & Segment Trees', 'Bit Manipulation', 'Backtracking', 'Divide & Conquer'],
            },
            {
                module: 'Module 12',
                title: 'Interview Preparation & Contests',
                topics: ['Company-Specific Problem Sets', 'Timed Mock Contests', 'Communication & Approach Tips', 'Mock Interview Sessions'],
            },
        ],
        features: [
            { icon: '🔴', text: 'Live Interactive Classes — Problem-solving sessions' },
            { icon: '👤', text: '1:1 Mentorship — Personalized doubt clearing' },
            { icon: '💡', text: '500+ Curated Coding Problems' },
            { icon: '📜', text: 'Industry-Recognized Certificate' },
            { icon: '🏆', text: 'Weekly Coding Contests' },
            { icon: '♾️', text: 'Lifetime Access to Course Materials' },
        ],
        mentor: {
            name: 'David Chen',
            role: 'Algorithms & DS Specialist',
            experience: '5+ Years',
            company: 'Competitive Programmer',
            img: 'https://i.pravatar.cc/300?u=davidchen',
            bio: 'David is a competitive programming veteran who has cracked interviews at major tech firms. He focuses on building a strong problem-solving intuition and mastering complex data structures.',
            contact: 'https://wa.me/919999999999'
        }
    },

    'data-science': {
        slug: 'data-science',
        title: 'Data Science',
        subtitle: 'Turn Data into Decisions & Predictions',
        desc: 'Learn Python, statistics, machine learning, and data visualization to extract insights from complex datasets and drive business decisions. From EDA to deep learning — become a complete data scientist.',
        tag: 'Trending',
        price: '₹7,999',
        duration: '14 Weeks',
        modules: 12,
        rating: 4.8,
        students: '2,200+',
        image: '/images/course2.jpg',
        highlights: ['Live Interactive Classes', '1:1 Mentorship Sessions', 'Real Datasets & Projects', 'Placement Assistance', 'Certificate of Completion'],
        syllabus: [
            {
                module: 'Module 1',
                title: 'Python for Data Science',
                topics: ['Python Fundamentals & Data Types', 'NumPy Arrays & Operations', 'Pandas DataFrames', 'Data Cleaning & Manipulation'],
            },
            {
                module: 'Module 2',
                title: 'Statistics & Probability',
                topics: ['Descriptive Statistics', 'Probability Distributions', 'Hypothesis Testing', 'Confidence Intervals & p-values'],
            },
            {
                module: 'Module 3',
                title: 'Data Visualization',
                topics: ['Matplotlib & Seaborn', 'Plotly Interactive Charts', 'Dashboard Design Principles', 'Storytelling with Data'],
            },
            {
                module: 'Module 4',
                title: 'Exploratory Data Analysis (EDA)',
                topics: ['Data Profiling & Cleaning', 'Feature Engineering', 'Outlier Detection', 'Correlation & Multicollinearity'],
            },
            {
                module: 'Module 5',
                title: 'Supervised Learning — Regression',
                topics: ['Linear & Polynomial Regression', 'Regularization (Lasso, Ridge)', 'Model Evaluation Metrics', 'Cross-Validation Techniques'],
            },
            {
                module: 'Module 6',
                title: 'Supervised Learning — Classification',
                topics: ['Logistic Regression', 'Decision Trees & Random Forests', 'SVM & KNN', 'Precision, Recall & F1 Score'],
            },
            {
                module: 'Module 7',
                title: 'Unsupervised Learning',
                topics: ['K-Means Clustering', 'Hierarchical Clustering', 'PCA & Dimensionality Reduction', 'Anomaly Detection'],
            },
            {
                module: 'Module 8',
                title: 'Feature Engineering & Pipelines',
                topics: ['Feature Scaling & Encoding', 'Pipeline Construction (sklearn)', 'Feature Selection Methods', 'Handling Imbalanced Data'],
            },
            {
                module: 'Module 9',
                title: 'Deep Learning Foundations',
                topics: ['Neural Network Architecture', 'Activation Functions & Optimizers', 'TensorFlow & Keras Basics', 'Image Classification with CNNs'],
            },
            {
                module: 'Module 10',
                title: 'Natural Language Processing',
                topics: ['Text Preprocessing & Tokenization', 'TF-IDF & Word Embeddings', 'Sentiment Analysis', 'Text Classification Projects'],
            },
            {
                module: 'Module 11',
                title: 'Model Deployment & MLOps',
                topics: ['Flask & FastAPI for ML Models', 'Docker for Data Science', 'Model Versioning (MLflow)', 'Cloud Deployment (AWS SageMaker)'],
            },
            {
                module: 'Module 12',
                title: 'Capstone — End-to-End Data Science Project',
                topics: ['Problem Definition & Data Collection', 'EDA, Modeling & Evaluation', 'Deployment & Monitoring', 'Portfolio Presentation'],
            },
        ],
        features: [
            { icon: '🔴', text: 'Live Interactive Classes — Hands-on coding sessions' },
            { icon: '👤', text: '1:1 Mentorship — Guided by data science professionals' },
            { icon: '📊', text: '8+ Real-World Data Projects' },
            { icon: '📜', text: 'Industry-Recognized Certificate' },
            { icon: '💼', text: 'Placement Assistance & Resume Review' },
            { icon: '♾️', text: 'Lifetime Access to Course Materials' },
        ],
        mentor: {
            name: 'Chennaveer Jogur',
            role: 'Senior Data Scientist',
            experience: '6+ Years',
            company: 'Data Insights Lead',
            img: '/images/chennaveer.png',
            bio: 'Chennaveer is a data science veteran with a deep passion for unlocking insights from complex datasets. He has helped numerous companies leverage data to drive growth and innovation.',
            contact: 'https://wa.me/919999999999'
        }
    },

    'data-analytics': {
        slug: 'data-analytics',
        title: 'Data Analytics',
        subtitle: 'Transform Raw Data into Business Intelligence',
        desc: 'Master Excel, SQL, Power BI, and Python for analytics to transform raw data into actionable business intelligence. Learn the skills every company is hiring for.',
        tag: 'In Demand',
        price: '₹5,999',
        duration: '10 Weeks',
        modules: 10,
        rating: 4.7,
        students: '2,600+',
        image: '/images/course3.jpg',
        highlights: ['Live Interactive Classes', '1:1 Mentorship Sessions', 'Industry Case Studies', 'Job Assistance', 'Certificate of Completion'],
        syllabus: [
            {
                module: 'Module 1',
                title: 'Introduction to Data Analytics',
                topics: ['What is Data Analytics?', 'Types of Analytics (Descriptive, Diagnostic, Predictive, Prescriptive)', 'Analytics Workflow & Lifecycle', 'Business Problem Framing'],
            },
            {
                module: 'Module 2',
                title: 'Advanced Excel for Analytics',
                topics: ['Pivot Tables & Power Pivot', 'VLOOKUP, INDEX-MATCH & XLOOKUP', 'Conditional Formatting & Data Validation', 'Macros & VBA Basics'],
            },
            {
                module: 'Module 3',
                title: 'SQL for Data Analysis',
                topics: ['SELECT, WHERE, GROUP BY, HAVING', 'JOINs & Subqueries', 'Window Functions (ROW_NUMBER, RANK, LAG)', 'CTEs & Query Optimization'],
            },
            {
                module: 'Module 4',
                title: 'Python for Analytics',
                topics: ['Pandas for Data Manipulation', 'NumPy for Numerical Computing', 'Data Cleaning & Transformation', 'Automating Reports with Python'],
            },
            {
                module: 'Module 5',
                title: 'Data Visualization with Power BI',
                topics: ['Power BI Desktop & Service', 'DAX Formulas & Measures', 'Interactive Dashboards', 'Data Modeling in Power BI'],
            },
            {
                module: 'Module 6',
                title: 'Statistics for Business',
                topics: ['Measures of Central Tendency & Spread', 'Probability Basics', 'A/B Testing & Statistical Significance', 'Regression Analysis for Business'],
            },
            {
                module: 'Module 7',
                title: 'Data Visualization with Tableau',
                topics: ['Tableau Interface & Workbooks', 'Charts, Maps & Calculated Fields', 'Dashboard Actions & Filters', 'Publishing & Sharing Dashboards'],
            },
            {
                module: 'Module 8',
                title: 'Data Storytelling & Reporting',
                topics: ['Structuring Analytical Reports', 'Crafting Data Narratives', 'Executive Dashboard Design', 'Presentation Best Practices'],
            },
            {
                module: 'Module 9',
                title: 'Real-World Analytics Projects',
                topics: ['E-Commerce Sales Analysis', 'Customer Segmentation (RFM)', 'HR Analytics Dashboard', 'Financial KPI Tracking'],
            },
            {
                module: 'Module 10',
                title: 'Capstone — Business Intelligence Project',
                topics: ['End-to-End BI Solution', 'Data Pipeline & ETL Basics', 'Interactive Dashboard Delivery', 'Portfolio Presentation & Review'],
            },
        ],
        features: [
            { icon: '🔴', text: 'Live Interactive Classes — Real-time case studies' },
            { icon: '👤', text: '1:1 Mentorship — Career & project guidance' },
            { icon: '📈', text: '6+ Industry Analytics Projects' },
            { icon: '📜', text: 'Industry-Recognized Certificate' },
            { icon: '💼', text: 'Job Assistance & Interview Prep' },
            { icon: '♾️', text: 'Lifetime Access to Course Materials' },
        ],
        mentor: {
            name: 'Chennaveer Jogur',
            role: 'Data Analytics Expert',
            experience: '5+ Years',
            company: 'BI Solutions Architect',
            img: '/images/chennaveer.png',
            bio: 'Chennaveer is an expert in Business Intelligence and Data Analytics. He teaches students how to transform raw data into actionable stories that drive business success.',
            contact: 'https://wa.me/919999999999'
        }
    },

    'mathematics-for-tech': {
        slug: 'mathematics-for-tech',
        title: 'Mathematics for Tech',
        subtitle: 'The Mathematical Foundation Every Tech Professional Needs',
        desc: 'Build a strong foundation in linear algebra, calculus, probability, and statistics — essential for AI, ML, and competitive programming. Math is the language of technology.',
        tag: 'Foundation',
        price: '₹4,499',
        duration: '10 Weeks',
        modules: 10,
        rating: 4.8,
        students: '1,500+',
        image: '/images/course1.jpg',
        highlights: ['Live Interactive Classes', '1:1 Mentorship Sessions', 'Visual & Intuitive Learning', 'Practice Problem Sets', 'Certificate of Completion'],
        syllabus: [
            {
                module: 'Module 1',
                title: 'Mathematical Thinking & Logic',
                topics: ['Propositional & Predicate Logic', 'Proof Techniques (Induction, Contradiction)', 'Set Theory & Venn Diagrams', 'Functions & Relations'],
            },
            {
                module: 'Module 2',
                title: 'Linear Algebra — Vectors & Matrices',
                topics: ['Vectors & Vector Spaces', 'Matrix Operations & Properties', 'Determinants & Inverse', 'Systems of Linear Equations'],
            },
            {
                module: 'Module 3',
                title: 'Linear Algebra — Advanced',
                topics: ['Eigenvalues & Eigenvectors', 'Matrix Decomposition (SVD, LU)', 'Orthogonality & Projections', 'Applications in ML & Computer Graphics'],
            },
            {
                module: 'Module 4',
                title: 'Calculus I — Differential Calculus',
                topics: ['Limits & Continuity', 'Derivatives & Differentiation Rules', 'Chain Rule & Implicit Differentiation', 'Applications: Optimization & Rate of Change'],
            },
            {
                module: 'Module 5',
                title: 'Calculus II — Integral & Multivariable',
                topics: ['Definite & Indefinite Integrals', 'Partial Derivatives & Gradients', 'Multivariable Calculus Basics', 'Gradient Descent — The ML Connection'],
            },
            {
                module: 'Module 6',
                title: 'Probability Theory',
                topics: ['Sample Space & Events', "Conditional Probability & Bayes' Theorem", 'Random Variables (Discrete & Continuous)', 'Probability Distributions (Binomial, Poisson, Normal)'],
            },
            {
                module: 'Module 7',
                title: 'Statistics for Data & AI',
                topics: ['Descriptive Statistics & Visualization', 'Sampling & Central Limit Theorem', 'Hypothesis Testing (Z-test, T-test, Chi-Square)', 'Confidence Intervals & p-values'],
            },
            {
                module: 'Module 8',
                title: 'Discrete Mathematics',
                topics: ['Combinatorics & Counting Principles', 'Graph Theory Fundamentals', 'Recurrence Relations', 'Number Theory & Modular Arithmetic'],
            },
            {
                module: 'Module 9',
                title: 'Optimization & Numerical Methods',
                topics: ['Convex Optimization Basics', 'Gradient Descent Variants', 'Numerical Integration & Differentiation', 'Lagrange Multipliers & Constraints'],
            },
            {
                module: 'Module 10',
                title: 'Capstone — Math in Real Tech Problems',
                topics: ['Math Behind Neural Networks', 'PCA & Dimensionality Reduction', 'PageRank Algorithm (Linear Algebra)', 'Portfolio of Solved Problems'],
            },
        ],
        features: [
            { icon: '🔴', text: 'Live Interactive Classes — Visual intuitive teaching' },
            { icon: '👤', text: '1:1 Mentorship — Doubt clearing & problem solving' },
            { icon: '🧮', text: '200+ Practice Problems with Solutions' },
            { icon: '📜', text: 'Industry-Recognized Certificate' },
            { icon: '🧠', text: 'Math for AI/ML — Real-World Applications' },
            { icon: '♾️', text: 'Lifetime Access to Course Materials' },
        ],
    },

    'science-computational-thinking': {
        slug: 'science-computational-thinking',
        title: 'Science & Computational Thinking',
        subtitle: 'Think Like a Scientist, Code Like an Engineer',
        desc: 'Explore physics, computational science, and scientific modelling to build a strong analytical and problem-solving mindset. Bridging the gap between science and technology.',
        tag: 'New',
        price: '₹4,999',
        duration: '10 Weeks',
        modules: 10,
        rating: 4.7,
        students: '900+',
        image: '/images/course2.jpg',
        highlights: ['Live Interactive Classes', '1:1 Mentorship Sessions', 'Simulation Projects', 'Scientific Computing', 'Certificate of Completion'],
        syllabus: [
            {
                module: 'Module 1',
                title: 'Introduction to Computational Thinking',
                topics: ['Decomposition & Pattern Recognition', 'Abstraction & Algorithms', 'Problem-Solving Frameworks', 'Computational vs Mathematical Thinking'],
            },
            {
                module: 'Module 2',
                title: 'Physics for Engineers — Mechanics',
                topics: ["Newton's Laws & Motion", 'Energy, Work & Power', 'Rotational Dynamics', 'Simulating Motion with Python'],
            },
            {
                module: 'Module 3',
                title: 'Physics — Waves, Optics & Thermodynamics',
                topics: ['Wave Properties & Interference', 'Geometric & Physical Optics', 'Laws of Thermodynamics', 'Heat Transfer Simulations'],
            },
            {
                module: 'Module 4',
                title: 'Physics — Electricity & Magnetism',
                topics: ["Electrostatics & Coulomb's Law", "Circuits & Ohm's Law", 'Electromagnetic Induction', "Maxwell's Equations Overview"],
            },
            {
                module: 'Module 5',
                title: 'Scientific Computing with Python',
                topics: ['NumPy for Scientific Data', 'SciPy for Advanced Computation', 'SymPy for Symbolic Mathematics', 'Solving Differential Equations'],
            },
            {
                module: 'Module 6',
                title: 'Data Collection & Experimentation',
                topics: ['Scientific Method & Experiment Design', 'Sensor Data & IoT Basics', 'Data Logging & Cleaning', 'Error Analysis & Uncertainty'],
            },
            {
                module: 'Module 7',
                title: 'Simulation & Modeling',
                topics: ['Monte Carlo Simulations', 'Agent-Based Modeling', 'Finite Element Methods (Intro)', 'Visualizing Simulations (Matplotlib, VPython)'],
            },
            {
                module: 'Module 8',
                title: 'Environmental & Earth Science',
                topics: ['Climate Data Analysis', 'GIS & Geospatial Basics', 'Pollution & Environmental Modeling', 'Sustainability Metrics'],
            },
            {
                module: 'Module 9',
                title: 'Bioinformatics & Life Sciences',
                topics: ['DNA Sequence Analysis Basics', 'Protein Structure Prediction', 'Epidemiological Modeling', 'Data Science in Healthcare'],
            },
            {
                module: 'Module 10',
                title: 'Capstone — Scientific Research Project',
                topics: ['Choose a Research Problem', 'Data Collection & Analysis', 'Simulation or Modeling Solution', 'Research Paper & Presentation'],
            },
        ],
        features: [
            { icon: '🔴', text: 'Live Interactive Classes — Lab-style sessions' },
            { icon: '👤', text: '1:1 Mentorship — Guided research & problem solving' },
            { icon: '🔬', text: '6+ Scientific Computing Projects' },
            { icon: '📜', text: 'Industry-Recognized Certificate' },
            { icon: '🌍', text: 'Real-World Science & Data Integration' },
            { icon: '♾️', text: 'Lifetime Access to Course Materials' },
        ],
    },

    'android-development': {
        slug: 'android-development',
        title: 'Android Development',
        subtitle: 'Build Native Android Apps from Scratch',
        desc: 'Build native Android apps from scratch using Kotlin and Jetpack Compose. Learn API integration, local databases, and publish to the Play Store.',
        tag: 'Popular',
        price: '₹6,499',
        duration: '12 Weeks',
        modules: 12,
        rating: 4.8,
        students: '1,200+',
        image: '/images/course2.jpg',
        highlights: ['Live Interactive Classes', '1:1 Mentorship Sessions', 'Native App Projects', 'Publish to Play Store', 'Certificate of Completion'],
        syllabus: [
            {
                module: 'Module 1',
                title: 'Introduction to Kotlin',
                topics: ['Kotlin Basics & Syntax', 'Variables, Data Types & Control Flow', 'Functions & Lambdas', 'Object-Oriented Programming in Kotlin'],
            },
            {
                module: 'Module 2',
                title: 'Android Studio & App Fundamentals',
                topics: ['Setting up Android Studio', 'App Architecture Overview', 'Activity Lifecycle', 'Manifest & Resources'],
            },
            {
                module: 'Module 3',
                title: 'Jetpack Compose Basics',
                topics: ['Declarative UI Concepts', 'Compose Functions & Modifiers', 'State & Recomposition', 'Basic Layouts (Column, Row, Box)'],
            },
            {
                module: 'Module 4',
                title: 'Advanced Jetpack Compose',
                topics: ['Lists & LazyColumn', 'Custom Components', 'Animation & Gestures', 'Material Design 3 Components'],
            },
            {
                module: 'Module 5',
                title: 'Navigation in Compose',
                topics: ['Navigation Component Basics', 'Passing Arguments between Screens', 'Bottom Navigation & Drawer', 'Deep Linking'],
            },
            {
                module: 'Module 6',
                title: 'Networking & APIs',
                topics: ['REST APIs Overview', 'Retrofit & OkHttp', 'Parsing JSON with Moshi/GSON', 'Coroutines for Async Calls'],
            },
            {
                module: 'Module 7',
                title: 'Architecture Components (MVVM)',
                topics: ['ViewModel & LiveData/StateFlow', 'Separation of Concerns', 'Repository Pattern', 'Dependency Injection (Hilt/Dagger)'],
            },
            {
                module: 'Module 8',
                title: 'Local Storage & Databases',
                topics: ['SharedPreferences & DataStore', 'Room Database Overview', 'Entities, DAOs, & Queries', 'Offline-First Architecture'],
            },
            {
                module: 'Module 9',
                title: 'Background Processing',
                topics: ['WorkManager Overview', 'Periodic & One-Time Tasks', 'BroadcastReceivers', 'Services & Foreground Tasks'],
            },
            {
                module: 'Module 10',
                title: 'Device Capabilities',
                topics: ['Permissions Handling', 'Camera & Media Access', 'Location Services & Maps', 'Push Notifications (Firebase)'],
            },
            {
                module: 'Module 11',
                title: 'Testing & Optimization',
                topics: ['Unit Testing with JUnit & MockK', 'UI Testing for Compose', 'Memory Profiling', 'App Size Reduction'],
            },
            {
                module: 'Module 12',
                title: 'Publishing to Google Play',
                topics: ['App Signing & Release Build', 'Play Store Console Setup', 'App Store Optimization (ASO)', 'Continuous Integration (CI/CD)'],
            },
        ],
        features: [
            { icon: '🔴', text: 'Live Interactive Classes — Code native apps together' },
            { icon: '👤', text: '1:1 Mentorship — App review & code optimization' },
            { icon: '📱', text: '5+ Real-World Android Apps' },
            { icon: '📜', text: 'Industry-Recognized Certificate' },
            { icon: '🚀', text: 'Publish Your Own App to Play Store' },
            { icon: '♾️', text: 'Lifetime Access to Course Materials' },
        ],
    },
};

export default courseData;
