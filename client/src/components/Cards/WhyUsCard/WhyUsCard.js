import classes from './WhyUsCard.module.css';

const WhyUsCard = (props) => {
  return (
    <div className={classes['whyUscard-container']}>
      <div className={classes['whyUscard-num']}>{props.numbers}</div>
      <div className={classes['whyUscard-category']}>{props.category}</div>
    </div>
  );
};

export default WhyUsCard;
