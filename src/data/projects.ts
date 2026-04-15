export type Project = {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  category: "E-Commerce" | "Healthcare" | "AI/Web" | "Real Estate" | "Fitness";
  tech: string[];
  features: string[];
  imageUrl: string;
  /** Placeholder demo URLs — replace with production links */
  liveUrl?: string;
  githubUrl?: string;
  client: {
    name: string;
    role: string;
    company: string;
    rating: number;
    quote: string;
    /** Client portrait — replace with your own assets in /public if needed */
    avatarUrl: string;
  };
  details: {
    client: string;
    industry: string;
    duration: string;
    completed: string;
  };
};

export const projectCategories: string[] = ["All", "E-Commerce", "Healthcare", "Fitness", "AI/Web", "Real Estate"];

export const projects: Project[] = [
  {
    slug: "healthwire",
    title: "HealthWire",
    shortDesc: "Healthcare appointment & patient management system for clinics and hospitals.",
    longDesc:
      "HealthWire is a full-stack healthcare platform that helps clinics and hospitals manage appointments, patient records, and doctor schedules from a single dashboard. It includes secure authentication, role-based access for doctors, staff, and admins, and real-time notifications for upcoming visits.",
    category: "Healthcare",
    tech: ["MongoDB", "Express", "React", "Next.js", "Node.js"],
    features: ["Appointment Booking", "Patient Records", "Admin Dashboard"],
    imageUrl:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200",
    client: {
      name: "Sarah K.",
      role: "Product Manager",
      company: "MediCare Solutions",
      rating: 5,
      quote:
        "He understood our healthcare app requirements perfectly and built a robust, scalable solution that our team loves using every day.",
      avatarUrl:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    details: {
      client: "MediCare Solutions",
      industry: "Healthcare & Wellness",
      duration: "6 months",
      completed: "July 2024",
    },
    liveUrl: "https://healthwire-demo.example.com",
    githubUrl: "https://github.com/example/healthwire",
  },
  {
    slug: "shopease-ecommerce",
    title: "ShopEase E-Commerce",
    shortDesc: "Full-featured online store with cart, payments, and admin analytics.",
    longDesc:
      "ShopEase is a production-ready e-commerce platform built with the MERN stack. It supports product management, advanced filters, secure Stripe payments, order tracking, and an analytics-focused admin dashboard for store owners.",
    category: "E-Commerce",
    tech: ["MERN + Next.js", "Stripe"],
    features: ["Payment Integration", "Order Tracking", "Admin Panel"],
    imageUrl:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200",
    client: {
      name: "Ahmed R.",
      role: "Startup Founder",
      company: "ShopEase",
      rating: 5,
      quote:
        "Ateeb delivered our e-commerce platform ahead of schedule. Clean code, fast performance, and the final product exceeded expectations.",
      avatarUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    details: {
      client: "ShopEase",
      industry: "E-Commerce",
      duration: "5 months",
      completed: "October 2023",
    },
    liveUrl: "https://shopease-demo.example.com",
    githubUrl: "https://github.com/example/shopease-mern",
  },
  {
    slug: "real-estate-hub",
    title: "RealEstate Hub",
    shortDesc: "Property listing and real estate platform with smart search and agent dashboards.",
    longDesc:
      "RealEstate Hub is a modern real estate web app where users can explore properties with advanced filters, map-based search, and saved favorites. Agents get their own dashboards to manage listings, leads, and inquiries in real time.",
    category: "Real Estate",
    tech: ["React", "Next.js", "Node.js", "MongoDB"],
    features: ["Property Search", "Agent Dashboards", "Map Integration"],
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200",
    client: {
      name: "Fatima Z.",
      role: "Business Owner",
      company: "EstateWorld",
      rating: 5,
      quote:
        "Our real estate platform looks premium and works flawlessly. The custom dashboards made our agents’ daily work much easier.",
      avatarUrl:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    details: {
      client: "EstateWorld",
      industry: "Real Estate",
      duration: "4 months",
      completed: "March 2024",
    },
    liveUrl: "https://realestate-hub-demo.example.com",
    githubUrl: "https://github.com/example/realestate-hub",
  },
  {
    slug: "ai-to-web",
    title: "AI-to-Web Converter",
    shortDesc: "Turn AI-generated designs and prompts into live, editable web pages.",
    longDesc:
      "AI-to-Web Converter connects AI design tools with a custom React builder. Users can paste prompts or upload designs and instantly get responsive web layouts that they can tweak visually with drag-and-drop components.",
    category: "AI/Web",
    tech: ["React", "Next.js", "OpenAI API", "Node.js"],
    features: ["AI Integration", "Code Generation", "Live Preview"],
    imageUrl:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200",
    client: {
      name: "James L.",
      role: "Tech Lead",
      company: "NovaLabs",
      rating: 5,
      quote:
        "Exceptional React skills. Our AI-to-Web tool feels smooth and fast, and the new frontend improved usability by a huge margin.",
      avatarUrl:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    },
    details: {
      client: "NovaLabs",
      industry: "AI Tools",
      duration: "3 months",
      completed: "January 2024",
    },
    liveUrl: "https://ai-to-web-demo.example.com",
    githubUrl: "https://github.com/example/ai-to-web",
  },
  {
    slug: "task-manager",
    title: "Task Management App",
    shortDesc: "Real-time team collaboration with boards, sprints, and live updates.",
    longDesc:
      "This task management app provides Kanban-style boards, sprint planning, and real-time updates using WebSockets. Teams can manage backlog, sprints, and notifications from one fast, responsive interface.",
    category: "AI/Web",
    tech: ["MERN + Next.js", "Socket.io"],
    features: ["Real-time Sync", "Team Boards", "Sprint Planning"],
    imageUrl:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200",
    client: {
      name: "Ali M.",
      role: "CTO",
      company: "SprintFlow",
      rating: 5,
      quote:
        "Real-time collaboration works perfectly. Socket.io integration was seamless and the UI makes it easy for our team to stay in sync.",
      avatarUrl:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    details: {
      client: "SprintFlow",
      industry: "Productivity",
      duration: "4 months",
      completed: "May 2024",
    },
    liveUrl: "https://sprintflow-demo.example.com",
    githubUrl: "https://github.com/example/sprintflow",
  },
  {
    slug: "portfolio-builder",
    title: "Portfolio Builder",
    shortDesc: "Dynamic portfolio generator with ready-made templates and analytics.",
    longDesc:
      "Portfolio Builder lets developers generate personal portfolio sites in minutes. They can pick templates, connect GitHub, and view visitor analytics from a clean dashboard. The app handles theming, routing, and deployment hooks.",
    category: "AI/Web",
    tech: ["React", "Next.js", "Node.js", "MongoDB"],
    features: ["Templates", "Analytics", "Custom Domains"],
    imageUrl:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
    client: {
      name: "Maria S.",
      role: "Freelance Designer",
      company: "Self-employed",
      rating: 5,
      quote:
        "The portfolio builder is elegant and easy to use. It saved me hours and my clients love the final result.",
      avatarUrl:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    details: {
      client: "Multiple Creators",
      industry: "Creative & Freelance",
      duration: "Ongoing",
      completed: "First release in 2023",
    },
    liveUrl: "https://folioforge-demo.example.com",
    githubUrl: "https://github.com/example/portfolio-builder",
  },
  {
    slug: "learnpath-lms",
    title: "LearnPath LMS",
    shortDesc: "Course delivery, progress tracking, and instructor dashboards for online education teams.",
    longDesc:
      "LearnPath is a MERN-based learning platform with modular courses, video embeds, quizzes, and role-separated views for students, instructors, and admins. Progress and completion metrics feed a lightweight analytics layer for cohort reporting.",
    category: "AI/Web",
    tech: ["MongoDB", "Express", "React", "Next.js", "Node.js", "JWT"],
    features: ["Course modules", "Progress tracking", "Instructor analytics", "Role-based access"],
    imageUrl:
      "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1200",
    client: {
      name: "David P.",
      role: "Program Director",
      company: "EduStream",
      rating: 5,
      quote:
        "Clean course structure and reliable auth. We launched our pilot cohort without firefighting infrastructure issues.",
      avatarUrl:
        "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    details: {
      client: "EduStream",
      industry: "EdTech",
      duration: "5 months",
      completed: "August 2024",
    },
    liveUrl: "https://learnpath-demo.example.com",
    githubUrl: "https://github.com/example/learnpath-lms",
  },
  {
    slug: "vendorlink-b2b",
    title: "VendorLink B2B Portal",
    shortDesc: "Supplier onboarding, catalog sync, and order status for wholesale buyers.",
    longDesc:
      "VendorLink connects distributors with approved suppliers: MongoDB-backed catalogs, Express APIs for order state machines, and a React workspace for buyers to track shipments and invoices. Designed for multi-tenant isolation and audit-friendly activity logs.",
    category: "E-Commerce",
    tech: ["MongoDB", "Express", "React", "Next.js", "Node.js", "REST"],
    features: ["Supplier onboarding", "Catalog sync", "Order pipeline", "Activity logs"],
    imageUrl:
      "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1200",
    client: {
      name: "Elena V.",
      role: "Operations Lead",
      company: "TradeGrid",
      rating: 5,
      quote:
        "Finally one place for our buyers and vendors. Onboarding time dropped sharply after launch.",
      avatarUrl:
        "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    details: {
      client: "TradeGrid",
      industry: "B2B wholesale",
      duration: "6 months",
      completed: "December 2024",
    },
    liveUrl: "https://vendorlink-demo.example.com",
    githubUrl: "https://github.com/example/vendorlink-b2b",
  },
  {
    slug: "pulsefit-mern",
    title: "PulseFit Studio",
    shortDesc: "Memberships, class bookings, and trainer scheduling for gyms and fitness studios.",
    longDesc:
      "PulseFit is a MERN platform for gyms: member onboarding, Stripe-powered subscriptions, weekly class calendars, trainer availability, and check-in kiosks. Admins get occupancy and revenue snapshots; members book and pay from one responsive app.",
    category: "Fitness",
    tech: ["MongoDB", "Express", "React", "Next.js", "Node.js", "Stripe"],
    features: ["Class booking", "Membership billing", "Trainer dashboard"],
    imageUrl:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200",
    client: {
      name: "Jordan T.",
      role: "Gym Owner",
      company: "PulseFit Collective",
      rating: 5,
      quote:
        "Members finally book classes without calling the front desk. Billing and attendance in one place cut our admin time in half.",
      avatarUrl:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    details: {
      client: "PulseFit Collective",
      industry: "Fitness & Wellness",
      duration: "4 months",
      completed: "February 2025",
    },
    liveUrl: "https://pulsefit-demo.example.com",
    githubUrl: "https://github.com/example/pulsefit-mern",
  },
  {
    slug: "teammind-rag",
    title: "TeamMind RAG",
    shortDesc: "Internal doc Q&A with RAG: secure MERN APIs, embeddings, and team workspaces.",
    longDesc:
      "TeamMind lets companies upload policies and runbooks; a MERN backend stores chunks with vector search while OpenAI powers grounded answers with citations. Department-scoped spaces, audit logs, and SSO-ready auth make it suitable for real teams adopting AI assistants in 2025.",
    category: "AI/Web",
    tech: ["MongoDB", "Express", "React", "Next.js", "Node.js", "OpenAI", "Vector search"],
    features: ["RAG Q&A", "Doc upload", "Team RBAC"],
    imageUrl:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    client: {
      name: "Priya N.",
      role: "Head of Engineering",
      company: "NorthScale",
      rating: 5,
      quote:
        "We replaced scattered Confluence searches with one assistant. The MERN stack stayed familiar while RAG actually matched our internal terminology.",
      avatarUrl:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    details: {
      client: "NorthScale",
      industry: "B2B SaaS",
      duration: "5 months",
      completed: "January 2025",
    },
    liveUrl: "https://teammind-demo.example.com",
    githubUrl: "https://github.com/example/teammind-rag",
  },
  {
    slug: "eventhive-mern",
    title: "EventHive",
    shortDesc: "Conference ticketing, attendee check-in, and organiser dashboards for live events.",
    longDesc:
      "EventHive is a MERN ticketing platform for conferences and meetups: tiered passes, Stripe Checkout, QR-based entry, waitlists, and exportable attendee lists. Organisers see real-time sales, refund handling, and on-site check-in apps that work offline-first.",
    category: "E-Commerce",
    tech: ["MongoDB", "Express", "React", "Next.js", "Node.js", "Stripe"],
    features: ["Ticket tiers", "QR check-in", "Sales analytics"],
    imageUrl:
      "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200",
    client: {
      name: "Marcus L.",
      role: "Event Director",
      company: "Summit Labs",
      rating: 5,
      quote:
        "We moved off spreadsheets. Check-in lines disappeared and finance finally trusted the numbers from one dashboard.",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    details: {
      client: "Summit Labs",
      industry: "Events & conferences",
      duration: "4 months",
      completed: "March 2025",
    },
    liveUrl: "https://eventhive-demo.example.com",
    githubUrl: "https://github.com/example/eventhive-mern",
  },
  {
    slug: "scalemeter-saas",
    title: "ScaleMeter",
    shortDesc: "Multi-tenant subscriptions, usage metering, and MRR dashboards for B2B SaaS teams.",
    longDesc:
      "ScaleMeter is a MERN SaaS control plane: each customer workspace lives in MongoDB with isolated billing data, Express handles Stripe webhooks for invoices and plan changes, and the React app surfaces MRR, churn, seat counts, and usage-based overages. Teams ship pricing experiments without rebuilding auth or payments from scratch.",
    category: "AI/Web",
    tech: ["MongoDB", "Express", "React", "Next.js", "Node.js", "Stripe"],
    features: ["Multi-tenant", "Usage metering", "Revenue analytics"],
    imageUrl:
      "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1200",
    client: {
      name: "Daniel W.",
      role: "Co-founder & CTO",
      company: "Northbeam SaaS",
      rating: 5,
      quote:
        "We finally have one place for tenants, Stripe events, and revenue charts, and our launch timeline shrank by weeks.",
      avatarUrl:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    details: {
      client: "Northbeam SaaS",
      industry: "B2B SaaS",
      duration: "5 months",
      completed: "April 2025",
    },
    liveUrl: "https://scalemeter-demo.example.com",
    githubUrl: "https://github.com/example/scalemeter-saas",
  },
  {
    slug: "chatflow-ai-assistant",
    title: "AI-Powered OCR Document & AI ChatBot Intelligence SaaS",
    shortDesc: "Smart SaaS platform for OCR document extraction, AI chatbot workflows, and operations analytics.",
    longDesc:
      "This MERN SaaS product combines OCR document intelligence with AI chatbot automation in one platform. Teams can upload invoices, forms, and PDFs, extract structured fields using OCR pipelines, and trigger chatbot-based workflows for support, verification, and follow-ups. The dark analytics dashboard provides delivery performance, response quality, route efficiency, and alert-based monitoring for operations teams.",
    category: "AI/Web",
    tech: ["MongoDB", "Express", "React", "Next.js", "Node.js", "OpenAI API"],
    features: ["OCR extraction", "AI chatbot orchestration", "Workflow automation", "Dark analytics dashboard"],
    imageUrl:
      "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1200",
    client: {
      name: "Nadia F.",
      role: "Customer Experience Lead",
      company: "HelpNest",
      rating: 5,
      quote:
        "The chatbot reduced repetitive tickets and gave our support team clear context before taking over chats. Response times improved significantly.",
      avatarUrl:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    details: {
      client: "HelpNest",
      industry: "Customer support SaaS",
      duration: "4 months",
      completed: "November 2025",
    },
    liveUrl: "https://chatflow-demo.example.com",
    githubUrl: "https://github.com/example/chatflow-ai-assistant",
  },
  {
    slug: "restaurant-food-delivery",
    title: "Restaurant & Food Delivery Web App",
    shortDesc: "Online ordering, delivery tracking, and restaurant dashboards for food businesses.",
    longDesc:
      "A full MERN platform for restaurants and cloud kitchens: browse menus, cart, Stripe payments, real-time order status, rider assignment, and an admin dashboard for menus, orders, and peak-hour analytics. Built for reliability during busy service hours.",
    category: "E-Commerce",
    tech: ["MongoDB", "Express", "React", "Next.js", "Node.js", "Stripe"],
    features: ["Menu & cart", "Delivery tracking", "Admin orders"],
    imageUrl:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1200",
    client: {
      name: "Omar S.",
      role: "Operations Lead",
      company: "TasteRoute",
      rating: 5,
      quote:
        "Orders flow from web to kitchen without chaos. Our staff finally sees one live queue and fewer wrong deliveries.",
      avatarUrl:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    details: {
      client: "TasteRoute",
      industry: "Food & hospitality",
      duration: "5 months",
      completed: "June 2025",
    },
    liveUrl: "https://tasteroute-demo.example.com",
    githubUrl: "https://github.com/example/restaurant-food-delivery",
  },
];

