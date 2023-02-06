// import './button.style.css'
import { Button } from './button.styled';

export const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </Button>
  );
};
IconButton.defaultProps = {
  onClick: null,
  children: null,
};
