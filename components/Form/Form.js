import {
  years,
  countries,
} from "../../helpers/data";
import { getName } from "../../helpers/data";
import content from "../../translate/es.json";
import styles from "./Page1.module.scss";

export default function Form({
  onChange,
  form,
  activeYear,
  activeMonth,
  errors,
  onBlur,
  onFocus,
  touched,
  onDate
}) {
  return (
    <div className={styles.Page1__content__form}>
      <div className={styles.Page1__content__form__inputs}>
        <div className={styles.Page1__content__form__inputs__row}>
          <div className={styles.Page1__content__form__inputs__row__name}>
            <label
              className={styles.Page1__content__form__inputs__row__name__label}
            >
              {content.form.name}
            </label>
            <input
              name="firstname"
              onChange={(e) => onChange(e)}
              className={styles.Page1__content__form__inputs__row__name__input}
              type="text"
              placeholder="Enrique"
              value={form.firstName}
            />
          </div>
          <div className={styles.Page1__content__form__inputs__row__surname}>
            <label
              className={
                styles.Page1__content__form__inputs__row__surname__label
              }
            >
              {content.form.surname}
            </label>
            <input
              value={form.lastName}
              name="lastname"
              onChange={(e) => onChange(e)}
              className={
                styles.Page1__content__form__inputs__row__surname__input
              }
              type="text"
              placeholder="Pérez Martínez"
            />
          </div>
        </div>

        <div className={styles.Page1__content__form__inputs__row}>
          <div className={styles.Page1__content__form__inputs__row__day}>
            <label
              className={styles.Page1__content__form__inputs__row__day__label}
            >
              {content.form.birth.day}
            </label>
            <select
              value={form.birthdate.day}
              onFocus={onFocus}
              onBlur={onBlur}
              name="birthdate"
              id={0}
              onChange={(e) => onDate(e)}
              className={styles.Page1__content__form__inputs__row__day__input}
            >
              {years[activeYear].months[activeMonth].days.map((elem, i) => {
                return (
                  <option key={i} value={elem}>
                    {elem}
                  </option>
                );
              })}
            </select>
          </div>

          <div className={styles.Page1__content__form__inputs__row__month}>
            <label
              className={styles.Page1__content__form__inputs__row__month__label}
            >
              {content.form.birth.month}
            </label>
            <select
              value={getName(form.birthdate.month)}
              onFocus={onFocus}
              onBlur={onBlur}
              name="birthdate"
              id={1}
              onChange={(e) => onDate(e)}
              className={styles.Page1__content__form__inputs__row__month__input}
            >
              {years[activeYear].months.map((elem, i) => {
                return (
                  <option key={i} value={elem.value}>
                    {elem.value}
                  </option>
                );
              })}
            </select>
          </div>

          <div className={styles.Page1__content__form__inputs__row__year}>
            <label
              className={styles.Page1__content__form__inputs__row__year__label}
            >
              {content.form.birth.year}
            </label>
            <select
              value={form.birthdate.year}
              onFocus={onFocus}
              onBlur={onBlur}
              name="birthdate"
              id={2}
              onChange={(e) => onDate(e)}
              className={styles.Page1__content__form__inputs__row__year__input}
            >
              {years.map((elem, i) => {
                return (
                  <option key={i} value={elem.value}>
                    {elem.value}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {touched["birthdate"] &&
          errors["birthdate"] && (
            <div className={`w-full flex flex-row justify-start text-red-600`}>
              Debes ser menor de edad.
            </div>
          )}

        <div className={styles.Page1__content__form__inputs__row}>
          <div className={styles.Page1__content__form__inputs__row__email}>
            <label
              className={styles.Page1__content__form__inputs__row__email__label}
            >
              {content.form.mail}
            </label>
            <input
              value={form.email}
              name="email"
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={(e) => onChange(e)}
              placeholder="nombre@dominio.com"
              type="mail"
              className={styles.Page1__content__form__inputs__row__email__input}
            />
          </div>

          <div className={styles.Page1__content__form__inputs__row__phone}>
            <label
              className={styles.Page1__content__form__inputs__row__phone__label}
            >
              {content.form.phone}
            </label>
            <input
              value={form.phone}
              name="phone"
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={(e) => onChange(e)}
              placeholder="618 316 566"
              type="phone"
              className={styles.Page1__content__form__inputs__row__phone__input}
            />
          </div>
        </div>

        <div className={`w-full flex flex-row justify-between text-red-600	`}>
          <div>
            {touched["email"] && errors["email"] && (
              <div>Formato invalido.</div>
            )}
          </div>
          <div>
            {touched["phone"] && errors["phone"] && (
              <div>Formato invalido.</div>
            )}
          </div>
        </div>

        <div className={styles.Page1__content__form__inputs__row}>
          <div className={styles.Page1__content__form__inputs__row__dni}>
            <label
              className={styles.Page1__content__form__inputs__row__dni__label}
            >
              {content.form.id}
            </label>
            <input
              value={form.legalId}
              name="legalId"
              onChange={(e) => onChange(e)}
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder="123123123A"
              type="text"
              className={styles.Page1__content__form__inputs__row__dni__input}
            />
          </div>

          <div
            className={styles.Page1__content__form__inputs__row__nationality}
          >
            <label
              className={
                styles.Page1__content__form__inputs__row__nationality__label
              }
            >
              {content.form.nationality}
            </label>
            <select
              value={form.nationality}
              name="nationality"
              onChange={(e) => onChange(e)}
              className={
                styles.Page1__content__form__inputs__row__nationality__input
              }
            >
              {countries.map((country, i) => {
                return (
                  <option key={i} value={country.label}>
                    {country.label}
                  </option>
                );
              })}
            </select>
          </div>

          <div className={styles.Page1__content__form__inputs__row__genre}>
            <label
              className={styles.Page1__content__form__inputs__row__genre__label}
            >
              {content.form.genre}
            </label>
            <select
              value={form.gender}
              name="gender"
              onChange={(e) => onChange(e)}
              className={styles.Page1__content__form__inputs__row__genre__input}
            >
              <option value={"M"}>{"Masculino"}</option>
              <option value={"F"}>{"Femenino"}</option>
              <option value={"X"}>{"Otro"}</option>
            </select>
          </div>
        </div>

        <div className={`w-full flex flex-row justify-start text-red-600	`}>
          <div>
            {touched["legalId"] &&
              errors["legalId"] && (
                <div>Formato invalido.</div>
              )}
          </div>
        </div>

        <div className={styles.Page1__content__form__inputs__row}>
          <div className={styles.Page1__content__form__inputs__row__address}>
            <label
              className={
                styles.Page1__content__form__inputs__row__address__label
              }
            >
              {content.form.postal.street}
            </label>
            <input
              value={form.postalAddress.street}
              name="postalAddress.street"
              onChange={(e) => onChange(e)}
              placeholder="Calle nº, piso-puerta"
              type="text"
              className={
                styles.Page1__content__form__inputs__row__address__input
              }
            />
          </div>
        </div>

        <div className={styles.Page1__content__form__inputs__row}>
          <div className={styles.Page1__content__form__inputs__row__code}>
            <label
              className={styles.Page1__content__form__inputs__row__code__label}
            >
              {content.form.postal.code}
            </label>
            <input
              value={form.postalAddress.zip}
              name="postalAddress.zip"
              onChange={(e) => onChange(e)}
              placeholder="36001"
              type="text"
              className={styles.Page1__content__form__inputs__row__code__input}
            />
          </div>

          <div className={styles.Page1__content__form__inputs__row__city}>
            <label
              className={styles.Page1__content__form__inputs__row__city__label}
            >
              {content.form.postal.city}
            </label>
            <input
              value={form.postalAddress.city}
              name="postalAddress.city"
              onChange={(e) => onChange(e)}
              placeholder="Pontevedra"
              type="text"
              className={styles.Page1__content__form__inputs__row__city__input}
            />
          </div>

          <div className={styles.Page1__content__form__inputs__row__country}>
            <label
              className={
                styles.Page1__content__form__inputs__row__country__label
              }
            >
              {content.form.postal.country}
            </label>
            <input
              value={form.postalAddress.country}
              name="postalAddress.country"
              onChange={(e) => onChange(e)}
              placeholder="España"
              type="text"
              className={
                styles.Page1__content__form__inputs__row__country__input
              }
            />
          </div>
        </div>

        <div className={styles.Page1__content__form__inputs__row}>
          <div className={styles.Page1__content__form__inputs__row__profession}>
            <label
              className={
                styles.Page1__content__form__inputs__row__profession__label
              }
            >
              {content.form.job}
            </label>
            <input
              value={form.job}
              name="job"
              onChange={(e) => onChange(e)}
              placeholder="Empleado de Banca"
              type="text"
              className={
                styles.Page1__content__form__inputs__row__profession__input
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
