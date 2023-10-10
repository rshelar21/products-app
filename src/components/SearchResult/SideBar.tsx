import React from "react";
import "../../Styles/Sidebar.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlined} from "@heroicons/react/24/outline";




const SideBar = () => {
  return (
    <>
      <div className="sidear__body">
        <div className="filter_body">
          <div className="filter_header">
            <h5 className="filter_title">Brand</h5>
            <ChevronDownIcon className="down_arrow" />
          </div>

          <div className="filter_option">
            <input type="checkbox" className="label" />
            <label htmlFor="" className="label">
              Mango
            </label>
          </div>
          <div className="filter_option">
            <input type="checkbox" className="" />
            <label htmlFor="" className="label">
              H&M
            </label>
          </div>
        </div>

        <div className="filter_body">
          <div className="filter_header">
            <h5 className="filter_title">Pricing</h5>
            <ChevronDownIcon className="down_arrow" />
          </div>

          <div className="filter_option">
            <input type="checkbox" className="" />
            <label htmlFor="" className="label">
              Under $100
            </label>
          </div>
          <div className="filter_option">
            <input type="checkbox" className="" />
            <label htmlFor="" className="label">
              $100 - $200
            </label>
          </div>
        </div>

        <div className="filter_body">
          <div className="filter_header">
            <h5 className="filter_title">Ratings</h5>
            <ChevronDownIcon className="down_arrow" />
          </div>

          <div className="filter_option">
            <input type="checkbox" className="" />
            <label htmlFor="" className="">
              <StarIcon className="star_icon" />
              <StarIcon className="star_icon" />
              <StarIcon className="star_icon" />
              <StarIcon className="star_icon" />
              <StarIcon className="star_icon" />
            </label>
          </div>

          
          <div className="filter_option">
            <input type="checkbox" className="" />
            <label htmlFor="" className="">
              <StarIcon className="star_icon" />
              <StarIcon className="star_icon" />
              <StarIcon className="star_icon" />
              <StarIcon className="star_icon" />
              <StarOutlined className="star-outline" />
            </label>
          </div>

          
          <div className="filter_option">
            <input type="checkbox" className="" />
            <label htmlFor="" className="">
              <StarIcon className="star_icon" />
              <StarIcon className="star_icon" />
              <StarIcon className="star_icon" />
              <StarOutlined className="star-outline" />
              <StarOutlined className="star-outline" />
            </label>
          </div>

          <div className="filter_option">
            <input type="checkbox" className="" />
            <label htmlFor="" className="">
              <StarIcon className="star_icon" />
              <StarIcon className="star_icon" />
              <StarOutlined className="star-outline" />
              <StarOutlined className="star-outline" />
              <StarOutlined className="star-outline" />
            </label>
          </div>

          <div className="filter_option">
            <input type="checkbox" className="" />
            <label htmlFor="" className="">
              <StarIcon className="star_icon" />
              <StarOutlined className="star-outline" />
              <StarOutlined className="star-outline" />
              <StarOutlined className="star-outline" />
              <StarOutlined className="star-outline" />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
