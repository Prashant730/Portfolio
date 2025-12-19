export const projects = [
  {
    id: 'bidmaster',
    title: 'BidMaster',
    featured: true,
    shortDesc:
      'Real-time auction platform with live bidding, role-based access, and admin controls.',
    tech: [
      'React 19',
      'Node.js',
      'MongoDB',
      'Socket.IO',
      'JWT',
      'Tailwind CSS',
    ],
    problem:
      'Online auctions require real-time synchronization, secure authentication, and strict role management to prevent fraud and ensure fair bidding.',
    solution:
      'Built a full-stack, real-time auction platform with WebSocket-powered live bidding, JWT-based authentication supporting Admin, Seller, and Bidder roles, seller approval workflows, and automatic auction expiry using scheduled background jobs.',
    impact:
      'Demonstrates production-grade architecture: real-time systems with Socket.IO, secure role-based authorization, centralized error handling, and scalable REST APIs.',
    features: [
      'Live bidding with instant updates using Socket.IO',
      'JWT-based authentication with Admin, Seller, and Bidder roles',
      'Seller approval workflow controlled by Admin',
      'Automatic auction expiry using scheduled background jobs',
      'Admin dashboard with live activity monitoring',
      'Centralized error handling and secure REST APIs',
    ],
    github: 'https://github.com/Prashant730/BidMaster',
    demo: 'https://project1-steel-ten.vercel.app/',
  },
  {
    id: 'birdnet',
    title: 'BirdNet',
    featured: false,
    shortDesc:
      'Production website for a real business with responsive design and SEO optimization.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    problem:
      'A bird-netting services company needed a professional online presence to attract customers and showcase their services.',
    solution:
      'Delivered a production-ready business website with fully responsive layout, SEO-friendly structure, optimized assets for fast load times, and clean maintainable component architecture.',
    impact:
      'Actively used by real users on a live domain. Demonstrates ability to deliver and deploy real products for real clients — not just academic demos.',
    features: [
      'Fully responsive layout (mobile, tablet, desktop)',
      'SEO-friendly structure',
      'Fast load times and optimized assets',
      'Clean, maintainable component structure',
    ],
    github: 'https://github.com/Prashant730/BirdNet',
    demo: 'https://npbirdnet.com',
  },
  {
    id: 'career-guidance',
    title: 'Career Guidance Platform',
    featured: false,
    shortDesc:
      'Skill-based career recommendation system with role-based dashboards.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    problem:
      'Students often struggle to identify suitable career paths based on their skills and interests without proper guidance.',
    solution:
      'Developed a backend-focused platform that generates career recommendations using structured input logic, with separate dashboards for students and admins, secure authentication, and admin-managed content.',
    impact:
      'Demonstrates backend logic, database design, role separation, and problem-oriented system design.',
    features: [
      'Skill-based career recommendations',
      'Student and admin dashboards',
      'Secure authentication and session handling',
      'Admin-managed content',
    ],
    github: 'https://github.com/Prashant730/Career-Guidance-Platform',
    demo: 'https://careercompass1.rf.gd/?i=2',
  },
  {
    id: 'learning-tutor',
    title: 'Learning Tutor',
    featured: false,
    shortDesc: 'Frontend learning platform for tutor-student interaction.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    problem:
      'Need for a clean, role-oriented interface to facilitate tutor-student interactions in an educational context.',
    solution:
      'Built a frontend-focused application practicing component-based architecture and role-oriented UI design using React with modular, reusable components.',
    impact:
      'Supports frontend development skills with clean UI patterns and component architecture.',
    features: [
      'Tutor and student role interfaces',
      'Modular React components',
      'Clean and intuitive UI',
    ],
    github: 'https://github.com/Prashant730/learning-tutor',
    demo: 'https://prashant730.github.io/learning-tutor/',
  },
]
