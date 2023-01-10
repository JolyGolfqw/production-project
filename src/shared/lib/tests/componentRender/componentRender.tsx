import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18nTests from "shared/config/i18n/i18nTests";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

export interface componentRenderOptions {
  route?: string;
}

export function componentRender(
  component: ReactNode,
  options: componentRenderOptions = {}
) {
  const { route = '/' } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nTests}>{component}</I18nextProvider>
    </MemoryRouter>
  );
}
