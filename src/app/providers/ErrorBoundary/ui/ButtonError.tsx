import { useEffect, useState } from "react";
import { Button } from "shared/ui/Button/Button";

interface ButtonErrorProps {
  className?: string;
}

export const ButtonError = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  const onThrow = () => setError(true);

  return <Button onClick={onThrow}>ERROR PAGE</Button>;
};
