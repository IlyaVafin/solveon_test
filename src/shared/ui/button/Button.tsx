import { HTMLAttributes, ReactNode } from 'react';
import s from './Button.module.css';
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'sign up' | 'more services' | 'black button';
  isDisabled?: boolean;
}

const Button = ({ children, isDisabled, variant, ...rest }: ButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      className={`${s.button} ${variant === 'sign up' ? s.signUp : variant === 'black button' ? s.blackButton : s.moreServices}`}
      style={{ opacity: isDisabled ? '0.5' : '1' }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
