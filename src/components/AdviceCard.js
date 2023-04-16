import React from "react";

const AdviceCard = ({ data, changeAdvice,loading }) => {
  return (
    <div class="advise-card">
      <div class="advise-tag">Advice #{data?.slip?.id}</div>
      <p>{data?.slip.advice}</p>
      <div class="line">
        {/* <div class="left-line"></div>
        <div class="icon"></div>
        <div class="right-line"></div> */}
      </div>
      <div onClick={() => changeAdvice()} aria-disabled={loading} className="icon-box">
        {!loading ? (
          <div className="icon"></div>
        ) : (
          <div className="loading"></div>
        )}
      </div>
    </div>
  );
};

export default AdviceCard;
