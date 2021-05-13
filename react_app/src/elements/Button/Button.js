import style from './Button.module.css';

const Button = ({ children, onClick, className }) => {
    return (
      <button onClick={onClick} className={
        `${style['fill-btn']} ${style['only-icon']} ${className ? className : ''}`
        }>
        {children}
      </button>
    );
};

export default Button;
