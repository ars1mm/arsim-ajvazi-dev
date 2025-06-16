interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [

  {
    title: "BehindLink",
    description: "A Software as a Service platform for link management that provides secure navigation and detailed analytics. Features include link shortening, click tracking, and real-time data for premium users.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Spring Boot", "Java", "AWS"],
    image: "/images/projects/netflix-clone.jpg", // Consider replacing with appropriate image
    link: "https://behindlink.vercel.app/"
  },

  {
    title: "Hotel Reservation System",
    description: "A desktop application for managing hotel bookings, room availability, and customer information with an intuitive interface and database integration.",
    tags: ["C#", "Windows Forms", ".NET Framework"],
    image: "/images/projects/hotel_reservation.jpg",
    link: "https://github.com/ars1mm/hotel-reservation"
  },
  {
    title: "Task Manager",
    description: "A personal productivity tool for organizing tasks with priority levels, due dates, and automated reminder notifications to help users stay on track.",
    tags: ["React", "Redux", "Firebase"],
    image: "/images/projects/hotel_reservation.jpg", // Consider replacing with appropriate image
    link: "#" // Consider updating with actual link when available
  },
  {
    title: "Chatbot for Medical Use",
    description: "Built a chatbot ###",
    tags: ["Machine Learning","Natural Language Processing"],
    image: "/images/projects/spotfiy-clone.jpg",
    link: "#",
  },
];
