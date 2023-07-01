import { FC, memo } from "react";
import css from "./Spinner.module.scss";

const Spinner: FC = memo(() => (
  <div className={css.spinner}>
    <div className={css.spinnerInner}>
      <div className={css.spinner__child} />
      <div className={css.spinner__child} />
      <div className={css.spinner__child} />
      <div className={css.spinner__child} />
    </div>
  </div>
));

export { Spinner };
