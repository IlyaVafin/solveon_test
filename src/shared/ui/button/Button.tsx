import { HTMLAttributes, ReactNode } from 'react';
import s from './Button.module.css';
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'sign up' | 'more services' | 'black button';
}

const Button = ({ children, variant, ...rest }: ButtonProps) => {
  return (
    <button
      className={`${s.button} ${variant === 'sign up' ? s.signUp : variant === 'black button' ? s.blackButton : s.moreService}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
