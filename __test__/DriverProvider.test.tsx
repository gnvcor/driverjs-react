import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DriverProvider } from '../src';
import { DriverJsReactContainer } from '../example/DriverJsReactContainer';
import { driverOptions } from '../example/driverOptions';

const setup = () => ({
  ...render(<DriverProvider driverOptions={driverOptions}><DriverJsReactContainer /></DriverProvider>),
});

test('Show tour step 1', async () => {
  setup();

  expect(await screen.findByText(/Title Tour Example 1/i)).toBeInTheDocument();
  expect(await screen.findByText(/Description Tour Example 1/i)).toBeInTheDocument();
  expect(await screen.findByText(/1 of 4/i)).toBeInTheDocument();
});

test('Show tour step 2', async () => {
  setup();

  fireEvent.click(await screen.findByText(/Next →/i));

  expect(await screen.findByText(/Title Tour Example 2/i)).toBeInTheDocument();
  expect(await screen.findByText(/Description Tour Example 2/i)).toBeInTheDocument();
  expect(await screen.findByText(/2 of 4/i)).toBeInTheDocument();
});

test('Show tour step 3', async () => {
  setup();

  fireEvent.click(await screen.findByText(/Next →/i));
  fireEvent.click(await screen.findByText(/Next →/i));

  expect(await screen.findByText(/Title Tour Example 3/i)).toBeInTheDocument();
  expect(await screen.findByText(/Description Tour Example 3/i)).toBeInTheDocument();
  expect(await screen.findByText(/3 of 4/i)).toBeInTheDocument();

  screen.debug(undefined, 1000000);
});

test('Show tour step 4', async () => {
  setup();

  fireEvent.click(await screen.findByText(/Next →/i));
  fireEvent.click(await screen.findByText(/Next →/i));
  fireEvent.click(await screen.findByText(/Next →/i));

  expect(await screen.findByText(/Title Tour Example 4/i)).toBeInTheDocument();
  expect(await screen.findByText(/Description Tour Example 4/i)).toBeInTheDocument();
  expect(await screen.findByText(/4 of 4/i)).toBeInTheDocument();
});

test('Close tour after click button "Done" at last step', async () => {
  setup();

  fireEvent.click(await screen.findByText(/Next →/i));
  fireEvent.click(await screen.findByText(/Next →/i));
  fireEvent.click(await screen.findByText(/Next →/i));
  fireEvent.click(await screen.findByText(/Done/i));

  expect(await screen.queryByText(/Title Tour Example 4/i)).not.toBeInTheDocument();
  expect(await screen.queryByText(/Description Tour Example 4/i)).not.toBeInTheDocument();
  expect(await screen.queryByText(/4 of 4/i)).not.toBeInTheDocument();
});

test('Close tour after click button "×"', async () => {
  setup();

  expect(await screen.findByText(/Title Tour Example 1/i)).toBeInTheDocument();
  expect(await screen.findByText(/Description Tour Example 1/i)).toBeInTheDocument();
  expect(await screen.findByText(/1 of 4/i)).toBeInTheDocument();

  fireEvent.click(await screen.findByText(/×/i));

  expect(await screen.queryByText(/Title Tour Example 1/i)).not.toBeInTheDocument();
  expect(await screen.queryByText(/Description Tour Example 1/i)).not.toBeInTheDocument();
  expect(await screen.queryByText(/1 of 4/i)).not.toBeInTheDocument();
});

test('Show tour after click button "Show tour"', async () => {
  setup();

  fireEvent.click(await screen.findByText(/×/i));
  fireEvent.click(await screen.findByText(/Show tour/i));

  expect(await screen.findByText(/Title Tour Example 1/i)).toBeInTheDocument();
  expect(await screen.findByText(/Description Tour Example 1/i)).toBeInTheDocument();
  expect(await screen.findByText(/1 of 4/i)).toBeInTheDocument();
});
