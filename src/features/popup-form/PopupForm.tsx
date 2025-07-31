'use client';
import Button from '@/shared/ui/button/Button';
import s from './PopupForm.module.css';
import Image from 'next/image';
import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';

const nameRegex = /^[a-zA-Zа-яА-ЯёЁ-]{2,40}$/;
const phoneRegex = /^\+[0-9]{1,15}$/;

const PopupForm = ({ onClose }: { onClose?: () => void }) => {
  const [checked, setChecked] = useState(false);

  const [formValues, setFormValues] = useState({ name: '', phone: '' });
  const [errorMessage, setErrorMessage] = useState({ nameError: '', phoneError: '' });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    const { name, phone } = formValues;

    const isValidName = nameRegex.test(name.trim());
    const isValidPhone = phoneRegex.test(phone.trim());

    setErrorMessage({
      nameError: isValidName || name.trim() === '' ? '' : 'Введено некорректное имя :(',
      phoneError:
        (isValidPhone && phone.length > 10) || phone.trim() === ''
          ? ''
          : phone.length < 10
            ? 'Минимум 10 символов'
            : 'Введён некорректный номер телефона :(',
    });

    setIsButtonDisabled(!(isValidName && isValidPhone && checked));
  }, [formValues.name, formValues.phone, checked]);

  const formSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!isButtonDisabled) {
      setIsFetching(true);
      setIsSuccess(false);
      setTimeout(() => {
        console.log('Данные формы:', formValues);
        setFormValues({ name: '', phone: '' });
        setChecked(false);
        setIsFetching(false);
        setIsSuccess(true);
      }, 2000);
    }
  };

  return (
    <section className={s.popup}>
      <p className={s.popupTitle}>Готовы доверить своё здоровье профессионалу?</p>
      <p className={s.popupDescription}>
        Не откладывайте заботу о зрении — запишитесь на приём к врачу уже сегодня.
      </p>
      <div className={s.closeButton}>
        <Button onClick={onClose} style={{ borderRadius: '50%' }} variant="black button">
          <Image src="/close.svg" alt="close-button" width={24} height={24} />
        </Button>
      </div>
      <form onSubmit={formSubmit}>
        <div className={s.formInputs}>
          <input
            value={formValues.phone}
            onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
            placeholder="Телефон"
            type="text"
            name="phone"
          />

          <input
            value={formValues.name}
            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
            placeholder="Имя"
            type="text"
            name="name"
          />
        </div>
        {(errorMessage.nameError || errorMessage.phoneError) && (
          <div className={s.formErrors}>
            <p>{errorMessage.phoneError}</p>
            <p>{errorMessage.nameError}</p>
          </div>
        )}
        <label className={s.checkboxWrapper}>
          <input
            type="checkbox"
            name="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className={s.inputCheckbox}
          />
          <span className={s.customCheckbox}></span>
          <span className={s.checkboxText}>
            Я даю согласие на обработку <Link href="">персональных данных</Link>
          </span>
        </label>
        <div className={s.signUp}>
          <Button isDisabled={isButtonDisabled || isFetching} variant="sign up">
            {isFetching ? 'Отправка...' : 'Записаться'}
          </Button>
        </div>
        {isSuccess && <p className={s.success}>{'Данные отправлены'}</p>}
      </form>
    </section>
  );
};

export default PopupForm;
