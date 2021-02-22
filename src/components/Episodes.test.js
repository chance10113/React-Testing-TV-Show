import React from "react";
import { render, screen } from "@testing-library/react";
import Episodes from "./Episodes";

test("renders without errors", () => {
  render(<Episodes episodes={[]} />);
});

test("re-render properly with episode data", () => {
    const { rerender } = render(<Episodes episodes={[]} />)
    
    // First, no episodes in UI
    expect(screen.queryByText(/episode/i)).toBeNull()
})