// hooks/useBooks.js
import { useState, useEffect } from "react";

const useBooks = (topic) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fallbackImage = "https://upload.wikimedia.org/wikipedia/en/7/73/Oldmansea.jpg"; // Dummy image URL
  const maxTitleLength = 30; // Maximum length for the title

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}${topic}`);
        if (!response.ok) {
          throw new Error("Can't fetch books");
        }
        const data = await response.json();
        setBooks(data.results || []);
        setFilteredBooks(data.results || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [topic]);

  useEffect(() => {
    const filtered = books.filter((book) => {
      const matchAuthor = book.authors.some((author) =>
        author.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const matchTitle = book.title.toLowerCase().includes(searchQuery.toLowerCase());

      return matchAuthor || matchTitle;
    });
    setFilteredBooks(filtered);
  }, [searchQuery, books]);

  const truncateTitle = (title) => {
    if (title.length > maxTitleLength) {
      return title.slice(0, maxTitleLength) + "...";
    }
    return title;
  };

  return {
    books,
    loading,
    error,
    filteredBooks,
    searchQuery,
    setSearchQuery,
    fallbackImage,
    truncateTitle,
  };
};

export default useBooks;
