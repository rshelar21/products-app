import React, { useState, useEffect, useMemo } from "react";
import "../Styles/SearchResult.css";
import SearchField from "../components/global/SearchField";
import SideBar from "../components/SearchResult/SideBar";
import ProductsBoard from "../components/SearchResult/ProductsBoard";
import axios from "axios";

const SearchResult = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [checkBoxPrice, setCheckBoxPrice] = useState<string>("");
  const [checkBoxCategory, setCheckBoxCategory] = useState<string>("");
  const [checkBoxRating, setCheckBoxRating] = useState<string>("");
  const [filterdList, setFilterdList] = useState<IProducts[]>([]);

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleGetProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res?.data);
    setFilterdList(res?.data);
    // console.log(res?.data);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const handleSelectPrice = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const { value, name } = e.target;
    if (type === "price") {
      setCheckBoxPrice(value);
    }
    if (type === "category") {
      setCheckBoxCategory(value);
    }
    if (type === "rate") {
      setCheckBoxRating(value);
    }
  };

  // using useMemo to filter products

  // const filteredProducts = useMemo(() => {
  //   const productsArr = [...products];
  //   // console.log(productsArr);
  //   if (searchQuery) {
  //     console.log('search');
  //     return productsArr.filter((product) =>
  //     searchQuery === "" || null ? product : product.title.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //   }
  //   if(checkBoxPrice){
  //     console.log('pri');
  //     return productsArr.filter((product) => product.price < Number(checkBoxPrice));
  //   }
  //   if(checkBoxCategory){
  //     console.log('cat');
  //     return productsArr.filter((product) => product.category === checkBoxCategory);
  //   }
  //   if(checkBoxRating){
  //     console.log('rate');
  //     return productsArr.filter((product) => product.rating.rate === Math.floor(Number(checkBoxRating)) + 1);
  //   }
  //   console.log('sdd');
  //   return productsArr;
  // }, [searchQuery, checkBoxPrice, checkBoxCategory, checkBoxRating, products]);

  // console.log(checkBoxPrice, checkBoxCategory, checkBoxRating);
  // console.log(filteredProducts);

  // using useEffect to filter products

  useEffect(() => {
    handleFilterProducts();
  }, [searchQuery, checkBoxPrice, checkBoxCategory, checkBoxRating]);

  const handleFilterProducts = () => {
    let productsArr = [...products];
    if (searchQuery != "") {
      console.log("search");
      productsArr = productsArr.filter((product) =>
        searchQuery === "" || null
          ? product
          : product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (checkBoxPrice != "") {
      console.log("pri");
      productsArr = productsArr.filter(
        (product) => product.price < Number(checkBoxPrice)
      );
    }
    if (checkBoxCategory != "") {
      console.log("cat");
      productsArr = productsArr.filter(
        (product) => product.category === checkBoxCategory
      );
    }
    if (checkBoxRating != "") {
      console.log("rate", typeof checkBoxRating);
      productsArr = productsArr.filter(
        (product) =>
          Math.floor(Number(product.rating.rate)) + 1 ===
          Math.floor(Number(checkBoxRating))
      );
    }

    setFilterdList(productsArr);
  };

  const handleClearFilter = () => {
    setFilterdList(products);
    setSearchQuery("");
    setCheckBoxPrice("");
    setCheckBoxCategory("");
    setCheckBoxRating("");
  };

  console.log(filterdList, "f");

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
            <SideBar
              checkBoxPrice={checkBoxPrice}
              handleSelectPrice={handleSelectPrice}
              checkBoxCategory={checkBoxCategory}
              checkBoxRating={checkBoxRating}
              handleClearFilter={handleClearFilter}
            />
            <ProductsBoard products={filterdList} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
