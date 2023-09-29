import "./Products.css";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useEffect } from "react";
import axios from "axios";

function Products() {
  const [db, setDb] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/api/projects"
      )
      .then((res) => {
        setDb(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const lastThreeProjects = () => {
    if (db.data) {
      let filterThree = db.data.slice(-3);
      return filterThree;
    } else {
      return [];
    }
  };

  return (
    <>
      <section className="card-section">
        <aside className="section-proyect-title">
          <h2>Proyectos</h2>
          <h3>Ejecutados</h3>
        </aside>
        <section className="product-card">
          {lastThreeProjects().map((el) => (
            <ProductCard el={el} key={el.id} className="product-card__tarjet" />
          ))}
        </section>
        <Link to="/current-projects" className="ver-todos__icon">
          <p>
            Ver Todos <FaArrowRightLong />{" "}
          </p>
        </Link>
      </section>
    </>
  );
}

export default Products;
