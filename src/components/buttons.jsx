export default function HeaderButtons() {
    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    return (
      <>
        <button>Résumé</button>
        <button onClick={() => handleClick('https://github.com/MasterSebas04')}>Github</button>
        <button onClick={() => handleClick('https://www.linkedin.com/in/sebastian-vahe-lange/')}>Linkedin</button>
      </>
    );
  }