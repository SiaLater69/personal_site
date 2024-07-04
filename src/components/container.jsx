import  './container.css'

const SplitContainer = ({ leftContent, rightContent }) => {
  return (
    <div className="splitContainer">
      <div className="leftContainer">
        {leftContent}
      </div>

      <div className="rightContainer" >
        <div className='rightContent'>
        {rightContent}
        </div>
      </div>
    </div>
  );
};

export default SplitContainer;