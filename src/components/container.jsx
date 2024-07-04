import  './container.css'

const SplitContainer = ({ leftContent, rightContent }) => {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <div style={{
        flex: 1,
        color: 'white',
        padding: '20px', 
      }}>
        {leftContent}
      </div>
      <div style={{
        flex: 1,
        color: 'white',
        padding: '20px',
        overflowY: 'scroll',
        maxHeight: '100%',
        marginTop: '50px',
        scrollbarWidth: 'none',  // Firefox
        msOverflowStyle: 'none',  // IE 10+
      }}>
        <div style={{
          height: '100%',
          paddingRight: '17px',  // Compensate for scrollbar width
          boxSizing: 'content-box',  // Include padding in element's total width
        }}>
        {rightContent}
        </div>
      </div>
    </div>
  );
};

export default SplitContainer;