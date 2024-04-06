import React from 'react';
import Form from '../Form/Form';
import Input from '../Input';
import Section from '../Section';
import {
  PERSONAL_DETAILS,
  DIPLOMA_DETAILS,
  EXP_DETAILS,
  LANG_DETAILS,
  LEVEL_DETAILS,
  OFFICIAL_LANGUAGES,
  LEVELS,
} from '../../constants';

import SelectInput from '../SelectInput/SelectInput';

function Main() {
  const [numOfDiploma, setNumOfDiploma] = React.useState([
    0,
  ]);
  const [numOfExp, setNumOfExp] = React.useState([0]);
  const [numOfLang, setNumOfLang] = React.useState([0]);

  function handleAddDiploma() {
    const lastValue = numOfDiploma[numOfDiploma.length - 1];
    const nextDiplomaArray = [
      ...numOfDiploma,
      lastValue + 1,
    ];
    setNumOfDiploma(nextDiplomaArray);
  }

  function handleAddExp() {
    const lastValue = numOfExp[numOfExp.length - 1];
    const nextExpArray = [...numOfExp, lastValue + 1];
    setNumOfExp(nextExpArray);
  }

  function handleAddLang() {
    const lastValue = numOfLang[numOfLang.length - 1];
    const nextNumOfLang = [...numOfLang, lastValue + 1];
    setNumOfLang(nextNumOfLang);
  }

  return (
    <>
      {/* Personal Section */}
      <Section
        id='personal-details'
        label={undefined}
      >
        <div className='subsection-wrapper'>
          {PERSONAL_DETAILS.map(
            ({
              key,
              type,
              id,
              label,
              className,
              placeholder,
            }) => (
              <Form className={`${className}-form`}>
                <Input
                  placeholder={placeholder}
                  key={key}
                  type={type}
                  id={id}
                  label={label}
                  className={className}
                />
              </Form>
            )
          )}
        </div>
      </Section>
      {/* Education Section */}
      <Section
        id='diploma-details'
        label={'EDUCATION'}
      >
        {numOfDiploma.map((value) => {
          return (
            <div className='subsection-wrapper'>
              {DIPLOMA_DETAILS.map(
                ({
                  key,
                  type,
                  id,
                  label,
                  className,
                  placeholder,
                }) => (
                  <Form className={`${className}-form`}>
                    <Input
                      placeholder={placeholder}
                      key={key}
                      type={type}
                      id={`${id}-${value}`}
                      label={label}
                      className={`${className}`}
                    />
                  </Form>
                )
              )}
            </div>
          );
        })}

        <button onClick={handleAddDiploma}>
          Add Degree
        </button>
      </Section>
      {/* Experience Section */}
      <Section
        id='exp-details'
        label={'PROFESSIONAL EXPERIENCE'}
      >
        {numOfExp.map((value) => {
          return (
            <div className='subsection-wrapper'>
              {EXP_DETAILS.map(
                ({
                  key,
                  type,
                  id,
                  label,
                  className,
                  placeholder,
                }) => (
                  <Form className={`${className}-form`}>
                    <Input
                      placeholder={placeholder}
                      key={key}
                      type={type}
                      id={`${id}-${value}`}
                      label={label}
                      className={`${className}`}
                    />
                  </Form>
                )
              )}
            </div>
          );
        })}

        <button onClick={handleAddExp}>
          Add Experience
        </button>
      </Section>
      {/* Language Section */}
      <Section
        id='exp-details'
        label={'Languages'}
      >
        {numOfLang.map((value) => {
          return (
            <div className='language-wrapper'>
              <div>
                {LANG_DETAILS.map(
                  ({
                    key,
                    type,
                    id,
                    label,
                    className,
                    placeholder,
                  }) => (
                    <Form className={`${className}-form`}>
                      <SelectInput
                        options={OFFICIAL_LANGUAGES}
                        placeholder={placeholder}
                        key={key}
                        type={type}
                        id={`${id}-${value}`}
                        label={label}
                        className={`${className}`}
                      />
                    </Form>
                  )
                )}
                </div>
                <div>
                {LEVEL_DETAILS.map(
                  ({
                    key,
                    type,
                    id,
                    label,
                    className,
                    placeholder,
                  }) => (
                    <Form className={`${className}-form`}>
                      <SelectInput
                        options={LEVELS}
                        placeholder={placeholder}
                        key={key}
                        type={type}
                        id={`${id}-${value}`}
                        label={label}
                        className={`${className}`}
                      />
                    </Form>
                  )
                )}
              </div>
            </div>
          );
        })}
        <button onClick={handleAddLang}>
          Add Language
        </button>
      </Section>
    </>
  );
}

export default Main;
