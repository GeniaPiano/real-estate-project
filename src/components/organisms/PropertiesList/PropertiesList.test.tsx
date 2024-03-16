import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { PropertiesList } from "./ProperstiesList.js";
import { useNavigate } from "react-router";
import { usePropertiesStore } from "../../../stores/usePropertiesStore.js";

const mockProperties = [
  {
    id: 1,
    name: "Property 1",
    city: "City 1",
    price: "1000",
    images: ["url1"],
    description: "Description 1",
  },
];

describe("PropertiesList", () => {
  it("renders loading spinner when fetching properties", async () => {
    usePropertiesStore.mockImplementation(() => ({
      properties: [],
      fetchProperties: jest.fn(),
      isLoading: true,
      filteredProperties: [],
    }));

    render(<PropertiesList />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders properties when data is fetched", async () => {
    usePropertiesStore.mockImplementation(() => ({
      properties: mockProperties,
      fetchProperties: jest.fn(),
      isLoading: false,
      filteredProperties: mockProperties,
    }));

    render(<PropertiesList />);

    await waitFor(() => {
      expect(screen.getByText("Property 1")).toBeInTheDocument();
      expect(screen.getByText("City 1")).toBeInTheDocument();
      expect(screen.getByText("1000 PLN")).toBeInTheDocument();
    });
  });
});

jest.mock("../../../stores/usePropertiesStore", () => ({
  usePropertiesStore: jest.fn(),
}));

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: jest.fn(),
}));

describe("PropertiesList", () => {
  it('redirects to property detail page when "View more" button is clicked', async () => {
    usePropertiesStore.mockReturnValue({
      properties: mockProperties,
      fetchProperties: jest.fn(),
      isLoading: false,
      filteredProperties: mockProperties,
    });

    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(<PropertiesList />);

    const viewMoreButton = screen.getByRole("button", { name: /view more/i });
    fireEvent.click(viewMoreButton);

    expect(mockNavigate).toHaveBeenCalledWith(
      `/property/${mockProperties[0].id}`
    );
  });
});
