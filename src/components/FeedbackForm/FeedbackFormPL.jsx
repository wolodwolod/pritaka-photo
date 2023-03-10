// <!-- FEEDBACK -->
import React, { useState, useEffect } from 'react';

import Loader from 'components/Loader';

import {
  MessageSuccessSendPL,
  MessageErrorSendPL,
} from 'components/MessageForm/MessageFormContent';
import './feedback_form.scss';
import envelope from 'shared/icons/envelope.svg';
import formValidation from 'shared/services/formValidation';
import { emailRegexp, nameRegexp } from 'shared/services/patterns';

const FeedbackFormPL = ({ onSubmit }) => {
  useEffect(() => {
    sessionStorage.setItem('sent', null);
    sessionStorage.setItem('err', null);
  }, []);

  formValidation();

  const [wasSent, setWasSent] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formMessage, setFormMessage] = useState({
    formEmail: '',
    formName: '',
    formText: '',
  });

  const { formEmail, formName, formText } = formMessage;

  const [disButton, setDisButton] = useState(true);

  useEffect(() => {
    if (
      emailRegexp.test(formEmail) &&
      nameRegexp.test(formName) &&
      formText.length > 5
    )
      setDisButton(false);
    else setDisButton(true);
  }, [formEmail, formName, formText]);

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

    setDisButton(true);
    setLoading(true);

    const toDoWithTimeout = () => {
      setWasSent(true);
      setLoading(false);
      setFormMessage({
        formEmail: '',
        formName: '',
        formText: '',
      });
    };

    setTimeout(() => {
      toDoWithTimeout();
    }, 5000);
  };

  const backToForm = () => {
    setWasSent(false);
    sessionStorage.setItem('sent', null);
    sessionStorage.setItem('err', null);
  };

  const FeedbackFormContent = (
    <div>
      <div className="row">
        <div className="col-12">
          <h4 className="feedbacks_form-title">Wy??lij swoj?? opini??</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-sm-12">
          <form
            onSubmit={handleSubmit}
            className="bold text-uppercase needs-validation"
            id="message-form"
            noValidate
          >
            <div className="mb-3">
              <label htmlFor="validationInput1" className="form-label">
              Tw??j adres e-mail
              </label>
              <input
                type="email"
                name="formEmail"
                value={formMessage.formEmail}
                className="form-control"
                id="validationInput1"
                onChange={handleChange}
                placeholder="name@example.com"
                title="WPROWAD?? ADRES E-MAIL"
                required
              />
              <div className="invalid-feedback">
              Prosz?? wpisa?? aktualny adres e-mail
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="validationInput2" className="form-label">
              Imi??
              </label>
              <input
                type="text"
                name="formName"
                value={formMessage.formName}
                className="form-control"
                id="validationInput2"
                onChange={handleChange}
                placeholder="Imi??"
                title="WPROWAD?? IMI??"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="validationTextarea1" className="form-label">
              Opinia
              </label>
              <textarea
                name="formText"
                value={formMessage.formText}
                className="form-control"
                id="validationTextarea1"
                onChange={handleChange}
                placeholder="Tekst"
                title="WY??LIJ KOMENTARZ, WSZYSTKO B??DZIE DOBRZE"
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
                  ?????????????????? ???????? ?????????? ?????????? ????????????????????????
                </label>
              </div> */}
            <button
              id="message-button"
              disabled={disButton}
              type="submit"
              className="btn btn-go btn-lg bold"
            >
              <img
                src={envelope}
                alt="Svg"
                width="25"
                height="20"
                className="d-inline-block align-text-top"
              />
              &nbsp;&nbsp;Wy??lij
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="feedbacks_form mt-5">
      {loading && <Loader />}

      {!wasSent && FeedbackFormContent}
      {sessionStorage.getItem('sent') === 'true' && (
        <MessageSuccessSendPL backToForm={backToForm} />
      )}
      {sessionStorage.getItem('err') === 'true' && (
        <MessageErrorSendPL
        
         backToForm={backToForm} />
      )}
    </div>
  );
};

export default FeedbackFormPL;
