import { useEffect, useState } from "react";
import { Button } from "shared/ui/Button/Button";

export const ButtonError = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  const onThrow = () => setError(true);

  // eslint-disable-next-line i18next/no-literal-string
  return <Button onClick={onThrow}>ERROR PAGE</Button>;
};
