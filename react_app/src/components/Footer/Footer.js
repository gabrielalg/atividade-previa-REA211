import style from './Footer.module.css';

const Footer = () => { 

  return (
    <footer>
      <div className="content">
        <div id={style.copyright}>
          <small>
            &copy; 2021 - All Rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;