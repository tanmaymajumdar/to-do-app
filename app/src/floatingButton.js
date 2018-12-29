import React from 'react';

const floatingButton = ({buttonClicked}) => {


  return (
    <div className="FloatingButton-container">

      <div className="myFloatingButton" onClick={() => {buttonClicked()}}>+</div>

    </div>
  );
}

export default floatingButton;
