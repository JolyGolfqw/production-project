import { screen, fireEvent } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";

describe("Sidebar", () => {
  test("Test render", () => {
    renderWithTranslation(<Sidebar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    // screen.debug()
  });

  test("Test toogle", () => {
    renderWithTranslation(<Sidebar/>)
    const toggle = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggle)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    // screen.debug()
    fireEvent.click(toggle)
    expect(screen.getByTestId('sidebar')).toHaveClass('Sidebar')
  });
});
