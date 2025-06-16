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
    image: "/images/projects/behind-link.jpg", // Consider replacing with appropriate image
    link: "https://behindlink.vercel.app/"
  },

  {
    title: "Hotel Reservation System",
    description: "A desktop application for managing hotel bookings, room availability, and customer information with an intuitive interface and database integration.",
    tags: ["C#", "Windows Forms", ".NET Framework"],
    image: "/images/projects/Lucia-Hotel.png",
    link: "https://github.com/ars1mm/hotel-reservation"
  },
  {
    title: "Task Manager",
    description: "Currently working on this project, a cross-platform task managment application that allows users to create, update, and delete tasks with a user-friendly interface.",
    tags: [],
    image: "/images/projects/null.png", // TODO: Replace with actual image after finishing development
    link: "https://github.com/ars1mm" // Consider updating with actual link when available
  },
  {
    title: "Chatbot for Medical Use",
    description: "Built a chatbot for medical use that assists patients in finding information and scheduling appointments. It uses natural language processing to understand user queries and provide relevant responses.",
    tags: ["Machine Learning","Natural Language Processing"],
    image: "/images/projects/medical-chatbot.jpg", // Consider replacing with appropriate image
    link: "https://huggingface.co/ars1m/medical_chatbot_model",
  },
];
