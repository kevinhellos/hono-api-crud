interface Book {
  id: number;
  title: string;
  author: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Python programming",
    author: "Bob Jones",
  },
  {
    id: 2,
    title: "CSS basics",
    author: "Daniel Hardman",
  },
  {
    id: 3,
    title: "React 101",
    author: "Jessica Pearson",
  }
];