import React, { useEffect, useState } from "react";
import back from "../Assets/Back.svg";
import "../Css/Fiction.css";
import { FaSearch } from "react-icons/fa";

function DramaBookCards() {
  const topic = "drama"
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fallbackImage =
    "https://upload.wikimedia.org/wikipedia/en/7/73/Oldmansea.jpg"; // Dummy image URL
  const maxTitleLength = 30;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}${topic}`
        );
        if (!response.ok) {
          throw new Error("can't fetch books");
        }
        const data = await response.json();
        console.log("api data: ", data);

        setBooks(data.results || []);
        setFilteredBooks(data.results || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const filtered = books.filter((book) => {
      const matchAuthor = book.authors.some((author) =>
        author.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      const matchTitle = book.title.toLowerCase().includes(searchQuery.toLowerCase());
  
      return matchAuthor || matchTitle; // Return true if it matches either the author or the title
    });
    setFilteredBooks(filtered);
  }, [searchQuery, books]);

  const truncateTitle = (title) => {
    if (title.length > maxTitleLength) {
      return title.slice(0, maxTitleLength) + "...";
    }
    return title;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="fiction-main">
      <div className="header-main">
        <a href="/" className="back-link">
          <img src={back} className="back" width={20} />
        </a>
        <span>Drama</span>
      </div>

      <div className="search-container">
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="container frictionbookCard">
        {filteredBooks.map((book) => (
          <div className="BookCard-Section" key={book.id}>
            <div className="BookImage">
              <img
                className="Rectangle"
                src={book.formats["image/jpeg"] || fallbackImage}
                alt={book.title}
              />
            </div>
            <div className="BookName">
              <span>
                <strong>{truncateTitle(book.title.split(":")[0])}</strong>
              </span>
            </div>
            <div className="AuthorName">
              {book.authors &&
                book.authors.map((author, idx) => (
                  <p key={idx}>{author.name}</p>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DramaBookCards;
