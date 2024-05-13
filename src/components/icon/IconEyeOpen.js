import React from "react";

const IconEyeOpen = ({ className = "", onClick = () => {} }) => {
  return (
    <span className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="17"
        viewBox="0 0 21 17"
        fill="none"
      >
        <path
          d="M20.8853 7.67227C18.866 2.98227 15.0673 0.0722656 10.9688 0.0722656C6.87018 0.0722656 3.0715 2.98227 1.05221 7.67227C0.997162 7.79843 0.96875 7.93461 0.96875 8.07227C0.96875 8.20992 0.997162 8.3461 1.05221 8.47227C3.0715 13.1623 6.87018 16.0723 10.9688 16.0723C15.0673 16.0723 18.866 13.1623 20.8853 8.47227C20.9403 8.3461 20.9688 8.20992 20.9688 8.07227C20.9688 7.93461 20.9403 7.79843 20.8853 7.67227ZM10.9688 14.0723C7.79985 14.0723 4.8009 11.7823 3.0715 8.07227C4.8009 4.36227 7.79985 2.07227 10.9688 2.07227C14.1376 2.07227 17.1366 4.36227 18.866 8.07227C17.1366 11.7823 14.1376 14.0723 10.9688 14.0723ZM10.9688 4.07227C10.1779 4.07227 9.40481 4.30686 8.74724 4.74639C8.08968 5.18591 7.57716 5.81063 7.27452 6.54153C6.97187 7.27244 6.89269 8.0767 7.04698 8.85263C7.20126 9.62855 7.58209 10.3413 8.14131 10.9007C8.70052 11.4601 9.41301 11.8411 10.1887 11.9954C10.9643 12.1497 11.7683 12.0705 12.499 11.7678C13.2296 11.465 13.8541 10.9523 14.2935 10.2945C14.7328 9.63675 14.9674 8.86339 14.9674 8.07227C14.9674 7.0114 14.5461 5.99398 13.7962 5.24384C13.0463 4.49369 12.0292 4.07227 10.9688 4.07227ZM10.9688 10.0723C10.5733 10.0723 10.1868 9.95497 9.858 9.7352C9.52921 9.51544 9.27296 9.20308 9.12163 8.83763C8.97031 8.47218 8.93072 8.07005 9.00786 7.68209C9.08501 7.29412 9.27542 6.93776 9.55503 6.65805C9.83464 6.37835 10.1909 6.18787 10.5787 6.11069C10.9665 6.03352 11.3685 6.07313 11.7339 6.22451C12.0992 6.37588 12.4114 6.63223 12.6311 6.96113C12.8508 7.29002 12.9681 7.6767 12.9681 8.07227C12.9681 8.6027 12.7574 9.11141 12.3825 9.48648C12.0075 9.86155 11.499 10.0723 10.9688 10.0723Z"
          fill="#B1B5C4"
        />
      </svg>
    </span>
  );
};

export default IconEyeOpen;