import "./App.css";
import ocean from "./images/ocean.jpg";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <a href="#">Start Bootstrap</a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </header>
      <section id="homeSection">
        <div className="container">
          <img src={ocean} width="150px" height="auto" />
          <h1>Full Width Pics</h1>
          <p>Landing Page Template</p>
        </div>
      </section>
      <section id="text">
        <div className="containerMini">
          <h1>Full Width Backgrounds</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            similique vero molestiae excepturi aut
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            laboriosam.
          </p>
        </div>
      </section>

      <section className="imageSection imageSection1"></section>

      <section id="text">
        <div className="containerMini">
          <h1>Full Width Backgrounds</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            similique vero molestiae excepturi aut
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            laboriosam.
          </p>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>Copyright © Your Website 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
