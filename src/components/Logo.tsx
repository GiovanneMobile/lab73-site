import React from 'react';
import logoIcon from '../assets/logo_icon.svg';
import logoLab from '../assets/logo_lab.svg';

interface LogoProps {
  className?: string;
  iconHeight?: string;
  labHeight?: string;
  gap?: string;
}

const Logo: React.FC<LogoProps> = ({
  className = "",
  iconHeight = "h-8",
  labHeight = "h-5",
  gap = "gap-3"
}) => {
  return (
    <div className={`flex items-center ${gap} ${className}`}>
      <img alt="Lab 73 Icon" className={iconHeight} src={logoIcon} />
      <img alt="Lab 73 Logo" className={labHeight} src={logoLab} />
    </div>
  );
};

export default Logo;
