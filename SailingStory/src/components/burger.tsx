const Burger = () => {
  const isBurger = (event: Event) => {
    const burger = document.querySelector('.burger') as HTMLElement;
    const navigation = document.querySelector('.nav') as HTMLElement;
    if (event.target != navigation && event.target != burger) closeMenu();
  };

  const closeMenu = () => {
    const burger = document.querySelector('.burger') as HTMLElement;
    const navigation = document.querySelector('.nav') as HTMLElement;
    burger.classList.remove('open');
    navigation.classList.remove('open');
    window.removeEventListener('click', isBurger);
  };

  const openMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    const burger = document.querySelector('.burger') as HTMLElement;
    const navigation = document.querySelector('.nav') as HTMLElement;
    burger.classList.toggle('open');
    navigation.classList.toggle('open');
    window.addEventListener('click', isBurger);
  };

  return (
    <div className="burger" onClick={openMenu}>
      <span className="burgerSVG">
        <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 8H13.75M5 12H19M10.25 16L19 16" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </span>
      <div className="burger_close"> ✕ </div>
    </div>
  );
};

export default Burger;
