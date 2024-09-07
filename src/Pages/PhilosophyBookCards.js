import React, { useState } from "react";
import back from "../Assets/Back.svg";
import "../Css/Fiction.css";
import {
  handleBookClick,
  truncateTitle,
  useFetchBooks,
  useFilteredBooks,
} from "../Common/utils";
import Search from "../Common/Search";

function PhilosophyBookCards({topic}) {

  const { books, error, loading } = useFetchBooks(topic);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredBooks = useFilteredBooks(books, searchQuery);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  console.log("Topic is: ", topic); // Debugging line
  console.log("Books are: ", books); // Debugging line

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="fiction-main">
      <div className="header-main">
        <a href="/" className="back-link">
          <img src={back} className="back" width={20} />
        </a>
        <span>Philosophy</span>
      </div>

      <Search value={searchQuery} onChange={handleSearchChange} />

      <div className="container frictionbookCard">
        {filteredBooks.map((book) => (
            
          <div className="BookCard-Section" key={book.id} onClick={() => handleBookClick(book)}>
            {book.formats["image/jpeg"] && (
              <>
                <div className="BookImage">
                  <img
                    className="Rectangle"
                    src={book.formats["image/jpeg"]}
                    alt={book.title}
                  />
                </div>
                <div className="BookName">
                  <span>
                  <strong>{truncateTitle(book.title.split(":")[0])}</strong>
                  </span>
                </div>
              </>
            )}
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

export default PhilosophyBookCards;
