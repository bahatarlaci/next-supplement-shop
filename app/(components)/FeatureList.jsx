import React from "react";

const FeatureList = ({ items }) => {
  return (
    <div className="container-fluid mt-5 bg-light p-5">
      <div className="row">
        {items.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 text-center p-3 bg-light">
              <div className="card-body">
                <i className={`${item.icon} fature-list-icon`}></i>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;
