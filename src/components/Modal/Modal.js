import css from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { BsXLg } from 'react-icons/bs';
import React, { useEffect, useState, useRef } from 'react';

const modalRoot = document.querySelector('#modal-root');

const Modal = props => {
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      props.closeModal();
    }
  };

  const handleClickOutside = event => {
    if (event.target === event.currentTarget) {
      props.closeModal();
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    partnershipType: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const [isActive, setIsActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsActive(!isActive);
  };

  const handleItemClick = item => {
    setSelectedItem(item);
    setFormData({ ...formData, partnershipType: item });

    setIsActive(false);
  };

  const handleClickOutsideDropDown = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideDropDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDropDown);
    };
  }, []);

  return createPortal(
    <div className={css.modal__backdrop} onClick={handleClickOutside}>
      <div className={css.modal__content}>
        <button className={css.btnClose} onClick={props.closeModal}>
          <BsXLg className={css.btnClose__icon} />
        </button>
        <h2 className={css.modal__title}>
          Let's stay in touch! Leave your details
        </h2>

        <form onSubmit={handleSubmit}>
          <div className={css.modal__form_row}>
            <div className={css.modal__labelBlock}>
              <label htmlFor="name" className={css.modal__label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={css.modal__input}
              />
            </div>
            <div className={css.modal__labelBlock}>
              <label htmlFor="email" className={css.modal__label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={css.modal__input}
              />
            </div>
          </div>
          <div className={css.modal__form_row}>
            <div className={css.modal__labelBlock}>
              <label htmlFor="phone" className={css.modal__label}>
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={css.modal__input}
              />
            </div>
            <div className={css.modal__labelBlock}>
              <label htmlFor="companyName" className={css.modal__label}>
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className={css.modal__input}
              />
            </div>
          </div>
          <div className={`${css.modal__form_row} ${css.modal__labelBlock}`}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="partnershipType" className={css.modal__label}>
                Partnership Type
              </label>
              {/*  */}
              <div
                className={`${css.dropdown} ${
                  isActive ? css.dropdown_active : ''
                }`}
                onClick={handleDropdownToggle}
                ref={dropdownRef}
              >
                <div className={css.select}>
                  <span>{selectedItem || 'SELECT TYPE'}</span>
                  <i></i>
                </div>
                <ul
                  className={css.dropdown_menu}
                  style={{ display: isActive ? 'block' : 'none' }}
                >
                  <li onClick={() => handleItemClick('AFFILATE')}>AFFILATE</li>
                  <li onClick={() => handleItemClick('WHOLESALE SALES')}>
                    WHOLESALE SALES
                  </li>
                  <li onClick={() => handleItemClick('RETAIL')}>RETAIL</li>
                </ul>
              </div>
            </div>
            {/*  */}
            {/* <select
              id="partnershipType"
              name="partnershipType"
              value={formData.partnershipType}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Type 1">AFFILATE</option>
              <option value="Type 2">WHOLESALE SALES</option>
              <option value="Type 3">RETAIL</option>
            </select> */}
          </div>
          <div
            className={`${css.modal__form_row_full} ${css.modal__labelBlock}`}
          >
            <label htmlFor="message" className={css.modal__label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={css.modal__input}
            ></textarea>
          </div>
          <div className={css.modal__buttonBox}>
            <button
              type="submit"
              className={css.modal__button}
              onClick={e => {
                handleSubmit(e);
                props.closeModal();
              }}
            >
              request a call back
            </button>
          </div>
        </form>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
