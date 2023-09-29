import React, { useState, useEffect } from "react";
import ProjectForm from "./ProjectForm";
import ProductCard from "../products/ProductCard";
import '../products/Products.css'
import axios from "axios";

const Projects = () => {
  const [db, setDb] = useState([]);
  const [search, SetSearch] = useState("")

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

  const handleSearch = (data) => {
    SetSearch(data)
  }

  const projectfilterByName = (elFilter) => {
    if(db.data){
      const filter = db.data.filter((el) => {
        return el.nombre.toString().toLowerCase().includes(elFilter.toLowerCase())
      })
      return filter;
    }else{
      return [];
    }
  }
  return (
    <>
      <ProjectForm handleSearch={handleSearch}/>
      {projectfilterByName(search).map((el) => <ProductCard key={el._id} el = {el} className="product-card__tarjet"/>)}
      
    </>
  );
};

export default Projects;
