import React from "react";

const IconEyeClose = ({ className = "", onClick = () => {} }) => {
  return (
    <span className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="14"
        viewBox="0 0 22 14"
        fill="none"
      >
        <path
          d="M11 1C7.04003 1 4.01115 3.27449 1.4755 6.39738C1.19014 6.74883 1.19009 7.2511 1.47544 7.60254C2.18711 8.47904 2.93763 9.2887 3.73669 10M6.74043 12.0348C8.03446 12.6495 9.44549 13 11 13C11.2884 13 11.5719 12.9879 11.8507 12.9643L12.2607 12.9122M15.7029 2.18844C17.5178 3.15443 19.0991 4.64187 20.5245 6.39741C20.8099 6.74885 20.8099 7.25116 20.5245 7.6026C19.1774 9.26166 17.6911 10.6813 16 11.6476"
          stroke="#999999"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default IconEyeClose;
