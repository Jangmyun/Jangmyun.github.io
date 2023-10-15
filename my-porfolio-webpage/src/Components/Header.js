import "../CSS/Header.css";

function Header() {
  return (
    <header id="header">
      <div className="flex p-4 justify-between">
        <a className="logo" href="*">
          <div className="span-wrapper">
            <span>S5cenes,</span>
          </div>
          <div className="span-wrapper">
            <span>The World</span>
          </div>
        </a>
        <div className="nav-container flex justify-center items-center">
          <div className="nav-wrapper">
            <a href="">PORTFOLIO</a>
          </div>
          <div className="nav-wrapper">
            <a href="">BLOG</a>
          </div>
          <div className="nav-wrapper">
            <a href="">CONTACT</a>
          </div>
          <div className="nav-wrapper">
            <a href="">ABOUT</a>
          </div>
        </div>
        <div className="icon-container flex justify-center items-center">
          <div className="icon-wrapper">
            <a href="https://github.com/Jangmyun" target="_blank"><img src="/img/logo/github.svg" alt=""  /></a>
          </div>
          <div className="icon-wrapper">
            <a href="https://velog.io/@cndlsrb2739" target="_blank"><img src="/img/logo/velog.svg" alt="" /></a>
          </div>
          <div className="icon-wrapper">
            <a href="mailto:prada2739@naver.com" target="_blank"><img src="/img/logo/mail.svg" alt="" /></a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
