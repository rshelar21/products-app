import React from "react";
import "../../Styles/SearchBox.css";
import ProductCard from "./ProductCard";

const SearchBox = () => {
  return (
    <>
      <div className="box__body">
        <h3 className="title">Latest Trends</h3>
        <div className="box__container">
          <ProductCard />
        </div>

        <div className="pop_container">
          <h3 className="title">Popular Suggestions</h3>
          <div className="suggestion_lists">
            <ul>
              <li>Striped shirt Dress</li>
              <li>Satin Shirts</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
