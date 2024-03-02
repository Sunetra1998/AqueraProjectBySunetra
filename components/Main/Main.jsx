import React, { useEffect, useState } from "react";
import "./Main.css";
import PlanetCard from "../PlanetCard/PlanetCard";
import Pagination from "../Pagination/Paginatgion";

const Main = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanets = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPlanets(data.results);
        setNextPage(data.next);
        setPrevPage(data.previous);
        setTotalPages(Math.ceil(data.count / 10));
      } catch (error) {
        console.error("Error fetching planets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets("https://swapi.dev/api/planets/?format=json");
  }, []);

  const handlePagination = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPlanets(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
      setCurrentPage(getPageNumber(url));
    } catch (error) {
      console.error("Error fetching planets:", error);
    } finally {
      setLoading(false);
    }
  };

  const getPageNumber = (url) => {
    const pageNumber = url.match(/page=(\d+)/);
    return pageNumber ? parseInt(pageNumber[1]) : 1;
  };

  return (
    <div className="main">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {planets.map((planet, index) => (
            <PlanetCard key={index} planet={planet} />
          ))}
          <Pagination
            next={nextPage}
            prev={prevPage}
            onPageChange={handlePagination}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default Main;
