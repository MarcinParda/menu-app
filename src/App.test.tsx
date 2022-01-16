import React from 'react';
import {act, render, screen} from '@testing-library/react';
import App from './App';
import {DishData} from "interfaces/globalInterfaces";

// @ts-ignore
global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve([])
}))

test('renders loading page on start', () => {
    render(<App/>);
    const linkElement = screen.getByText("Loading...");
    expect(linkElement).toBeInTheDocument();
});

test('fetching data', async () => {
    // @ts-ignore
    await act(async () => render(<App/>));
    expect(fetch).toBeCalledTimes(1);
});

it("displaying no data text", async () => {
    const data: DishData[] = [];

    // @ts-ignore
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(data)
        })
    );

    await act(async () => {
        render(<App />);
    });

    expect(screen.getByText("Brak dań")).toBeInTheDocument();
});


it("displaying dish card", async () => {
    const data: DishData[] = [{
        id: 1,
        name: "mockName",
        origin: "originName",
        starRating: 5,
        image: "mockImage.png"
    }];

    // @ts-ignore
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(data)
        })
    );

    await act(async () => {
        render(<App />);
    });

    expect(screen.getByText("mockName")).toBeInTheDocument();
    expect(screen.getByText("originName")).toBeInTheDocument();
    expect(screen.getByText("★★★★★")).toBeInTheDocument();
});
