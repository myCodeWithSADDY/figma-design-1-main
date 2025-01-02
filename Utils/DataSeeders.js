import { Expand } from "@mui/icons-material";
import { subject } from "./Data";
const icon1 = 'https://s3-alpha-sig.figma.com/img/a14b/eb69/5156ca479007631826e12e19dc127d06?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UsfOV58FMe3yK~criO8pa9sGlSWTemUr99588hPrP9kcCc2WJXYjd4ZicbDzFjhse71csQvnZLMeT4QuRdHog8bXxT4Rk3lk-WwAuICLyvNflFaKwlgCvQ1hh1-GKdfROBuJUWLDzi4pX7F~SNGr84Qsu4dE0zsQ5MyAf-ai8WKYPtO~BC~~Q9WgnaBoy2AlqznfkBByxM6AVLw0gU1xBLwJ0j-miiLFDY4M78FBtmhCkWahMKa4iqt-0Yy-BUCmHKdwZDjREcsL0BVrBrsEYTPrBGcv-3wUNqjwywx2o~MaR9Lv7Ji2OyqnaLhwpoJkO2ftqam2ba4PzUUP2mUW7Q__'


export const navData = [
    {
        id: 0,
        label: 'Home',
        route: '/home',
        isDropDown: false,
    },
    {
        id: 1,
        label: 'Tests',
        route: '/all-tests',
        isDropDown: true,
        icon: '<Expand/>',
        options: [
            {
                label: 'Test 1',
                route: '/test1',
                subject: 'Test 1',

            },
            {
                label: 'Test 2',
                route: '/test1',
                subject: 'Test 1',

            },
            {
                label: 'Test 3',
                route: '/test1',
                subject: 'Test 1',

            },
        ]
    },
    {
        id: 3,
        label: 'Subjects',
        route: '/subject',
        isDropDown: true,
        icon: '<Expand/>',
        options: subject.map((subj) => ({
          ...subj,
        })),
    },
    {
        id: 4,
        label: 'Papers',
        route: '/past-papers',
        isDropDown: false,
    },
    {
        id: 5,
        label: 'Notes',
        route: '/notes',
        isDropDown: false,
    },
    {
        id: 6,
        label: 'Blogs',
        route: '/blogs',
        isDropDown: false,
    },
    {
        id: 7,
        label: 'Contact',
        route: '/contact',
        isDropDown: false,
    },
]

export const test =[
  {
    id: 1,
    label: "PPSC 2024",
    description: "Prepare for PPSC 2024 exams with these practice questions.",
    route: "/test1",
    icon: "��",
  },
  {
    id: 2,
    label: "CSS 2023",
    description: "Review the CSS 2023 exams with practice questions.",
    route: "/test1",
    icon: "��",
  },
  {
    id: 3,
    label: "HTML 2023",
    description: "Review the HTML 2023 exams with practice questions.",
    route: "/test1",
    icon: "��",
  }
]

export const Sidebar = {
    mcqs: [
      {
        id: 1,
        title: "PPSC 2024 MCQs",
        description: "Prepare for PPSC 2024 exams with these multiple-choice questions.",
        route: "/mcqs",
        icon: "📘",
      },
      {
        id: 2,
        title: "PPSC 2023 MCQs",
        description: "Review the MCQs from PPSC 2023 exams.",
        route: "/mcqs",
        icon: "📗",
      },
    ],
    pastPapers: [
      {
        id: 1,
        title: "PPSC 2024 Past Papers",
        description: "Access PPSC 2024 past papers for in-depth preparation.",
        route: "/past-papers",
        icon: "📚",
      },
      {
        id: 2,
        title: "CSS 2023 Past Papers",
        description: "Study CSS 2023 past papers to understand question patterns.",
        route: "/past-papers",
        icon: "📘",
      },
    ],
    notes: [
      {
        id: 1,
        title: "Physics Notes",
        description: "Comprehensive physics notes for exam preparation.",
        route: "/notes/physics",
        icon: "📖",
      },
      {
        id: 2,
        title: "Mathematics Notes",
        description: "Detailed mathematics notes for problem-solving practice.",
        route: "/notes/mathematics",
        icon: "📐",
      },
    ],
    blogs: [
      {
        id: 1,
        title: "How to Prepare for PPSC Exams",
        description: "A guide on effective preparation strategies for PPSC exams.",
        route: "/blogs/ppsc-prep",
        icon: "📝",
      },
      {
        id: 2,
        title: "Top Tips for CSS Exam Success",
        description: "Learn the best tips and tricks to excel in CSS exams.",
        route: "/blogs/css-tips",
        icon: "💡",
      },
    ],
  };
  

  export const blogs = [
    {
      id: 1,
      title: "Introduction to React",
      description: "Learn the basics of React and how it can revolutionize your web development workflow.",
      image: "https://picsum.photos/400/500",
      route: "/blogs/react-intro",
    },
    {
      id: 2,
      title: "Getting Started with Node.js",
      description: "Discover how to build backend applications using Node.js.",
      image: "https://picsum.photos/400/500",
      route: "/blogs/nodejs-start",
    },
    {
      id: 3,
      title: "State Management in Redux",
      description: "A deep dive into managing application state effectively with Redux.",
      image: "https://picsum.photos/400/500",
      route: "/blogs/redux-state",
    },
    {
      id: 4,
      title: "Material-UI Best Practices",
      description: "Explore tips and tricks for creating stunning UIs with Material-UI.",
      image: "https://picsum.photos/400/500",
      route: "/blogs/material-ui-tips",
    },
  ];
  
  

