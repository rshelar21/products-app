import React, { useState, useEffect, useMemo } from "react";
import "../Styles/SearchResult.css";
import SearchField from "../components/global/SearchField";
import SideBar from "../components/SearchResult/SideBar";
import ProductsBoard from "../components/SearchResult/ProductsBoard";
import axios from "axios";

const SearchResult = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleGetProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res?.data);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  // useEffect(() => {
  //   const filteredProducts = products.filter((product) =>
  //     product.title.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setProducts(filteredProducts);
  // }, [searchQuery]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // console.log(filteredProducts, 's')







  return (
    <>
      <div className="result__body">
        <div className="search__container">
          <SearchField
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            handleChangeInput={handleChangeInput}
          />
        </div>

        <div className="result_container">
          <h1 className="heading">Search Result</h1>

          <div className="show_result">
            <SideBar />
            <ProductsBoard products={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
