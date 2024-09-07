import { useState, useEffect } from "react";

// 1. useFetchBooks for fetching data from api to get all books
export const useFetchBooks = (topic) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}${topic}`
        );
        if (!response.ok) {
          throw new Error("Can't fetch books");
        }
        const data = await response.json();

        // Filter out books without image MIME types
        const booksWithCovers = data.results.filter(
          (book) => book.formats["image/jpeg"] || book.formats["image/png"]
        );

        setBooks(booksWithCovers);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [topic]); // Depend on `topic` to refetch when it changes

  return { books, error, loading };
};

// 2. filter books based on author name or title of book

export const useFilteredBooks = (books, searchQuery) => {
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const filtered = books.filter((book) => {
      const matchAuthor = book.authors.some((author) =>
        author.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const matchTitle = book.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchAuthor || matchTitle;
    });
    setFilteredBooks(filtered);
  }, [searchQuery, books]);

  return filteredBooks;
};

// 3. handling image click and redirection based on format
export const handleBookClick = (book) => {
  const formats = ["text/plain", "application/pdf", "application/epub+zip"];
  let formatFound = false;

  for (const format of formats) {
    if (book.formats[format]) {
      window.open(book.formats[format], "_blank");
      formatFound = true;
      break;
    }
  }

  if (!formatFound) {
    alert("No viewable version available");
  }
};

// 4. handling lengthy titles
export const truncateTitle = (title) => {
  const maxTitleLength = 30;
  if (title.length > maxTitleLength) {
    return title.slice(0, maxTitleLength) + "...";
  }
  return title;
};
