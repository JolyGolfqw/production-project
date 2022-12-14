import { screen, fireEvent } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";

describe("Sidebar", () => {
  test("Test render", () => {
    componentRender(<Sidebar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    // screen.debug()
  });

  test("Test toogle", () => {
    componentRender(<Sidebar/>)
    const toggle = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggle)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    // screen.debug()
    fireEvent.click(toggle)
    expect(screen.getByTestId('sidebar')).toHaveClass('Sidebar')
  });
});
