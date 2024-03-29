import React from 'react';
import './html/style.css';
import logo from './html/logo.png';
import serviceImg1 from './html/OIP (2).jpg';
import serviceImg2 from './html/OIP (1).jpg';
import serviceImg3 from './html/OIP.jpg';
import { Button, Link } from '@mui/material';

class M extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <img src={logo} alt="Logo" />
          </nav>
        </header>

        <section id="hero">
          <h1>Welcome to Book's Corner</h1>
          <p>The more you Read. The more you Rich </p>
          <Button onClick={() => window.location.href = "/login"} > <Link to="/login">
          SIGN UP
          </Link>
        </Button>
          
        </section>

        <section id="services">
          <h2>Our Services</h2>
          <div className="service">
            <img src={serviceImg1} alt="Service 1" />
            <h3>VAST COLLECTION OF BOOKS</h3>
            <p> Digital Book Collection: Online libraries offer a vast collection of digital books, including e-books and audiobooks, covering various genres and subjects.
            </p>
          </div>
          <div className="service">
            <img src={serviceImg2} alt="Service 2" />
            <h3>BUY / RENT THE BOOKS</h3>
            <p>Online Reading Platform: Online libraries provide a dedicated platform or website where users can access their borrowed or purchased books. This platform may include features such as personalized bookshelves, bookmarking, highlighting, and note-taking functionalities
            </p>
          </div>
          <div className="service">
            <img src={serviceImg3} alt="Service 3" />
            <h3>DISCOVAR MANY RESOURCES</h3>
            <p>Resource Discovery and Search: Online libraries often provide advanced search tools and filters to help users discover books and resources of interest. Users can search by title, author, genre, keywords, and other criteria to find relevant books quickly.
            </p>
          </div>
        </section>

        <section id="about">
          <h2>About Us</h2>
          <p>Welcome to BOOKS CORNER. We are your one-stop destination for all things related to books. Whether you're an avid reader, a student, or simply looking to explore new literary worlds, our website offers a comprehensive platform to rent, buy, and review books.

            Discover a vast collection of books spanning various genres, from thrilling mysteries to captivating romance novels, thought-provoking non-fiction, and everything in between. Our extensive catalog ensures that there's something for every taste and interest.
            
            Renting books has never been easier with our seamless and convenient process. Simply browse through our virtual shelves, select the titles that pique your curiosity, and have them delivered right to your doorstep. Enjoy the pleasure of diving into captivating stories without the burden of long-term ownership.
            
            If you're someone who prefers to build a personal library, we also provide the option to buy books. Explore our wide range of editions, from classic hardcovers to affordable paperbacks, and add them to your collection. Owning the books you love allows you to delve into their pages whenever inspiration strikes.
            
            We value the power of opinions and believe in fostering a vibrant reading community. That's why we provide a platform for you to share your thoughts and insights through book reviews. Share your experiences, recommend hidden gems, and engage in discussions with fellow book enthusiasts.
            
            Whether you're a passionate reader, a lifelong learner, or someone seeking solace within the pages of a book, our online library is here to enhance your reading journey. Join us today and embark on a literary adventure that will expand your horizons, feed your imagination, and ignite your love for books.
          </p>
        </section>

        <footer>
          <p>&copy; 2023 Your Startup. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default M;
