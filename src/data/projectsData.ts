interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Netflix Clone",
    description: "A full-stack application built with React and Firebase",
    tags: ["React", "Firebase", "Tailwind CSS"],
    image: "/images/projects/netflix-clone.jpg",
    link: "https://github.com/ars1mm/netflix-app"
  },
  {
    title: "Spotify Clone",
    description: "Spotify clone using React and Tailwind CSS",
    tags: ["React", "Tailwind CSS"],
    image: "/images/projects/spotfiy-clone.jpg",
    link: "https://github.com/ars1mm/spotify-clone"
  },
  {
    title: "Hotel Reservation Form",
    description: "Hotel reservation in C# Windows Forms",
    tags: ["C#", "Windows Forms"],
    image: "/images/projects/hotel_reservation.jpg",
    link: "https://github.com/ars1mm/hotel-reservation"
  },
  {
    title: "EasyUI",
    description: "Open Source Library for UI Built on C",
    tags: ["C","Open Source"],
    image: "/images/projects/netflix-clone.jpg",
    link: "#"
  },
  {
    title: "Weather App",
    description: "Real-time weather forecasting application",
    tags: ["JavaScript", "Weather API", "CSS"],
    image: "/images/projects/spotfiy-clone.jpg",
    link: "#"
  },
  {
    title: "Task Manager",
    description: "Personal task management application with reminders",
    tags: ["React", "Redux", "Firebase"],
    image: "/images/projects/hotel_reservation.jpg",
    link: "#"
  }
];
