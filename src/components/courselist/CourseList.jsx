import Course from '../course/Course';
import styles from './CourseList.module.css';

function CourseList () {

    const courses = [
        {
            courseName: 'React - The Complete Guide (incl. Next.js, Redux)',
            courseDescription: 'Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!',
            coursePrice: 629.00,
            courseAuthor: 'Maniraj',
            rating: 5
        },
        {
            courseName: 'The Ultimate TypeScript Masterclass - interfaces, generics, advanced types',
            courseDescription: 'Master TypeScript from the ground up. Learn interfaces, generics, advanced types, and how to integrate it perfectly with React and Node.',
            coursePrice: 499.00,
            courseAuthor: 'Sarah Jenkins',
            rating: 4.8
        },
        {
            courseName: 'Next.js 14 Production-Ready Applications',
            courseDescription: 'Build fast, SEO-friendly full-stack apps using Next.js 14. Covers App Router, Server Actions, SSR, and deployment to Vercel.',
            coursePrice: 799.00,
            courseAuthor: 'Alex Rivera',
            rating: 4.7
        },
        {
            courseName: 'Node.js, Express & MongoDB: Dev to Deployment',
            courseDescription: 'Learn backend development by building powerful REST APIs. Master authentication, security best practices, and database optimization.',
            coursePrice: 549.00,
            courseAuthor: 'Maniraj',
            rating: 3.9
        },
        {
            courseName: 'Tailwind CSS From Zero to Hero - Includes grid layouts, animations',
            courseDescription: 'Design modern, responsive, and beautiful websites quickly using Tailwind CSS. Includes grid layouts, animations.',
            coursePrice: 329.00,
            courseAuthor: 'Emma Watson',
            rating: 4.5
        },
        {
            courseName: 'Advanced Redux Toolkit & State Management',
            courseDescription: 'Stop struggling with global state. Deep dive into Redux Toolkit, RTK Query, thunks, and middleware for applications.',
            coursePrice: 450.00,
            courseAuthor: 'David Kim',
            rating: 4.2
        },
        {
            courseName: 'Full-Stack Web Development Bootcamp 2026',
            courseDescription: 'The only course you need to learn web development. Covers HTML, CSS, JS, React, Node, PostgreSQL, and cloud hosting.',
            coursePrice: 1299.00,
            courseAuthor: 'Maniraj',
            rating: 4.9
        },
        {
            courseName: 'JavaScript: The Hard Parts Explained - Asynchronous programming',
            courseDescription: 'Demystify closures, prototypal inheritance, execution contexts, event loops, and asynchronous programming once and for all.',
            coursePrice: 399.00,
            courseAuthor: 'Carlos Mendez',
            rating: 4.6
        },
        {
            courseName: 'Testing React Apps with Jest and RTL',
            courseDescription: 'Write robust unit and integration tests using Jest and React Testing Library. Learn TDD, mocking APIs, and CI/CD integration.',
            coursePrice: 599.00,
            courseAuthor: 'Sophia Patel',
            rating: 4.4
        },
        {
            courseName: 'GraphQL & Apollo: The Modern API Layer',
            courseDescription: 'Move beyond REST. Learn how to design efficient schemas, write mutations, and manage client-side state using Apollo Client.',
            coursePrice: 699.00,
            courseAuthor: 'Marcus Vance',
            rating: 4.1
        },
        {
            courseName: 'UI/UX Design Essentials for Developers',
            courseDescription: 'Think like a designer. Learn color theory, typography, spacing, and wireframing in Figma to build beautiful user interfaces.',
            coursePrice: 349.00,
            courseAuthor: 'Elena Rostova',
            rating: 4.3
        },
        {
            courseName: 'Python for Web Developers (Django & FastAPI)',
            courseDescription: 'Build scalable and incredibly fast backends using Python. Master Django for monoliths and FastAPI for microservices architectures.',
            coursePrice: 629.00,
            courseAuthor: 'Maniraj',
            rating: 3.5
        },
        {
            courseName: 'Clean Code & Architecture in JavaScript',
            courseDescription: 'Write code your team will love. Learn SOLID principles, design patterns, refactoring techniques, and architectural best practices.',
            coursePrice: 499.00,
            courseAuthor: 'Robert Chen',
            rating: 4.8
        },
        {
            courseName: 'Docker & Kubernetes for Frontend Engineers',
            courseDescription: 'Containerize your React and Next.js applications. Learn multi-stage builds, orchestration, and seamless deployments.',
            coursePrice: 579.00,
            courseAuthor: 'Liam O\'Connor',
            rating: 4.0
        },
        {
            courseName: 'Web Performance Optimization - Master code-splitting, lazy loading',
            courseDescription: 'Analyze and fix slow websites. Master code-splitting, lazy loading, image optimization, and Core Web Vitals profiling.',
            coursePrice: 649.00,
            courseAuthor: 'Aisha Rahman',
            rating: 4.7
        }
    ];
    
    const courseList = courses.map(
        (course) => <Course 
                        courseName = {course.courseName}
                        courseDescription = {course.courseDescription}
                        coursePrice = {course.coursePrice}
                        courseAuthor = {course.courseAuthor}
                        courseImg = {course.courseImg}
                        rating = {course.rating}
                    />
    );
    return (
        <div className = {styles.cardContainer}>
            {courseList}
        </div>
    );
}

export default CourseList;