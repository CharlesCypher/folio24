interface Project {
  id: number;
  name: string;
  link: string;
  images: { id: number; link: string }[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Rebank Website for Banking",
    link: "/",
    images: [
      {
        id: 1,
        link: "https://images.unsplash.com/photo-1701743801469-57e71ae3da6c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        link: "https://images.unsplash.com/photo-1701743801469-57e71ae3da6c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 3,
        link: "https://images.unsplash.com/photo-1701743801469-57e71ae3da6c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
];
