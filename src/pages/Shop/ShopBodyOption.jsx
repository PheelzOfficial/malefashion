// import React from 'react'

const ShopBodyOption = () => {
  return (
      <div className="shop__product__option">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="shop__product__option__left">
              <p>Showing 1–12 of 126 results</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="shop__product__option__right">
              <p>Sort by Price:</p>
              <select>
                <option value="">Low To High</option>
                <option value="">$0 - $55</option>
                <option value="">$55 - $100</option>
              </select>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ShopBodyOption;
