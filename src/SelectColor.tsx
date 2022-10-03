import { useEffect, useState } from 'react';

type Props = {
  key?: any;
  color: string;
  onClick: () => void;
};

function SelectColor(props: Props) {
  const [disabled, setDisable] = useState(() => false);

  useEffect(() => {
    setDisable(false)
  }, []);

  return (
    <button
      onClick={() => {
        setDisable(true);
        props.onClick();
      }}
      className="btn-rose"
      disabled={disabled}
    >
      {props.color}
    </button>
  );
}

export default SelectColor;

