import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ButtonError.module.scss";

import { PropsWithChildren, useEffect, useState } from "react";
import { Button } from "shared/ui/Button/Button";

interface ButtonErrorProps {
  className?: string;
}

export const ButtonError = (props: PropsWithChildren<ButtonErrorProps>) => {
  const { className } = props;

  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  const onThrow = () => setError(true);

  return <Button onClick={onThrow}>ERROR PAGE</Button>;
};
