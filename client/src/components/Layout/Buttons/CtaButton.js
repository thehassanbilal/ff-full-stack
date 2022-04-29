import classes from './CtaButton.module.css';

export const CtaButton = (props) => {
  return (
    <button className={classes['globle-ctaButton']}>{props.btnTxt}</button>
  );
};
