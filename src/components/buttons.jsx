export default function HeaderButtons() {
    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    const handleResumeClick = () => {
        // You can add resume download functionality here
        console.log("Resume clicked");
    };

    return (
      <div className="nav-buttons">
        <button className="nav-button" onClick={handleResumeClick}>
          Résumé
        </button>
        <button className="nav-button" onClick={() => handleClick('https://github.com/MasterSebas04')}>
          GitHub
        </button>
        <button className="nav-button" onClick={() => handleClick('https://www.linkedin.com/in/sebastian-vahe-lange/')}>
          LinkedIn
        </button>
      </div>
    );
  }