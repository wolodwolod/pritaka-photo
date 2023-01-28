// <!-- FEEDBACK -->
import React, { useState } from 'react';

import './feedback-form.scss';
import envelope from '../../shared/icons/envelope.svg';
// import formValidation from 'shared/services/formValidation';

const FeedbackFormUA = ({ onSubmit }) => {
  // formValidation();
  const [formMessage, setFormMessage] = useState({
    formEmail: '',
    formName: '',
    formText: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormMessage(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      email: formMessage.formEmail,
      name: formMessage.formName,
      text: formMessage.formText,
    });

    setFormMessage({
      formEmail: '',
      formName: '',
      formText: '',
    });
  };

  return (
    <section className="message">
      <div className="container">
        <div className="row mb-5">
          <h3>
            Надішліть Ваш відгук
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <form
              onSubmit={handleSubmit}
              className="bold text-uppercase needs-validation"
              id="message-form"
              noValidate
            >
              <div className="mb-3">
                <label htmlFor="validationInput1" className="form-label">
                  Ваша електронна адреса
                </label>
                <input
                  type="email"
                  name="formEmail"
                  value={formMessage.formEmail}
                  className="form-control"
                  id="validationInput1"
                  onChange={handleChange}
                  placeholder="name@example.com"
                  title="ВВЕДІТЬ ЕЛЕКТРОННУ АДРЕСУ ДЛЯ ВІДПОВІДІ"
                  required
                />
                <div className="invalid-feedback">
                  Введіть правильну адресу електронної пошти
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="validationInput2" className="form-label">
                  Ваше ім'я
                </label>
                <input
                  type="text"
                  name="formName"
                  value={formMessage.formName}
                  className="form-control"
                  id="validationInput2"
                  onChange={handleChange}
                  placeholder="Ім'я"
                  title="ВВЕДІТЬ ІМ'Я"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="validationTextarea1" className="form-label">
                  Ваш відгук
                </label>
                <textarea
                  name="formText"
                  value={formMessage.formText}
                  className="form-control"
                  id="validationTextarea1"
                  onChange={handleChange}
                  placeholder="Текст"
                  title="НАДІШЛІТЬ ВІДГУК, ВСЕ БУДЕ ДОБРЕ"
                  rows="5"
                ></textarea>
              </div>

              {/* <!-- Checkbox --> */}
              {/* <div className="form-check mb-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form4Example4"
                  checked
                />
                <label htmlFor="form4Example4">
                  Надішліть мені копію цього повідомлення
                </label>
              </div> */}
              <button
                type="submit"
                className="btn btn-go btn-lg text-uppercase bold"
              >
                <img
                  src={envelope}
                  alt="Logo"
                  width="38"
                  height="24"
                  className="d-inline-block align-text-top"
                />
                &nbsp;&nbsp;Надіслати відгук
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackFormUA;