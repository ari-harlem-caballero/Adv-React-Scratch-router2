// test: MemoryRouter/initialEntries for details (event: click)
import { screen, render, waitForElementToBeRemoved, findByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('should display detail page after clicking link on list page', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    screen.getByText(/loading.../i);

    await waitForElementToBeRemoved(screen.getByText(/loading.../i), {timeout: 8000});

    // // find item
    const link = await screen.findAllByText('Ingredients...');
    // // click item
    userEvent.click(link[0]);
    // // find detail
    await screen.findAllByRole('listitem');
  });

  it('should display detail page of ingredients list', async () => {
    render(
      <MemoryRouter
        initialEntries={['/ingredients/0106fb32-b00d-4d70-9841-4b7c2d2cca71']}
        >
        <App />
      </MemoryRouter>
    );

    screen.getByText(/loading.../i);

    await waitForElementToBeRemoved(screen.getByText(/loading.../i), {timeout: 3000});

    // // find detail
    await screen.findByText('Neem oil');
  })
})