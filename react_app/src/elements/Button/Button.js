import style from './Button.module.css';

const Button = ({ children, onClick, className }) => {
    return (
      <button onClick={onClick} className={
        `${style['fill-btn']} ${className ? className : ''}`
        }>
        {children}
      </button>
    );
};

export default Button;
