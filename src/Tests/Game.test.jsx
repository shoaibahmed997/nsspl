import { fireEvent, render, screen } from '@testing-library/react';
import Game from '../Components/Game';

test('renders the Memory game text', () => {
  render(<Game data={{india:"delhi"}} />);
  const gameHeading = screen.getByText(/memory game/i)
  expect(gameHeading).toBeInTheDocument();
});


test("render the input as buttons",()=>{
    render(<Game data={{india:"new delhi",kashmir:"srinagar",himachal:"shimla",maharashtra:"mumbai"}} />)
    const indiaButton = screen.getByRole('button', { name: /india/i })
    const newDelhiButton = screen.getByRole('button', { name: /new delhi/i })
    const mumbaiButton = screen.getByRole('button', { name: /mumbai/i })
    const maharashtraButton = screen.getByRole('button', { name: /maharashtra/i })
    const shimlaButton = screen.getByRole('button', { name: /shimla/i })
    const himachalButton = screen.getByRole('button', { name: /himachal/i })
    const srinagarButton = screen.getByRole('button', { name: /srinagar/i })
    const kashmirButton = screen.getByRole('button', { name: /kashmir/i })
    expect(indiaButton).toBeVisible();
    expect(mumbaiButton).toBeVisible();
    expect(maharashtraButton).toBeVisible();
    expect(shimlaButton).toBeVisible();
    expect(himachalButton).toBeVisible();
    expect(srinagarButton).toBeVisible();
    expect(kashmirButton).toBeVisible();
    expect(newDelhiButton).toBeVisible();
})

test('renders the Congratulations text',async () => {
    render(<Game data={{india:"new delhi"}} />);
    const indiaButton = screen.getByRole('button', { name: /india/i })
    const newDelhiButton = screen.getByRole('button', { name: /new delhi/i })
    fireEvent.click(indiaButton)
    fireEvent.click(newDelhiButton)
    const CongratulationsText = await screen.findByText(/Congratulations/i)
    expect(CongratulationsText).toBeInTheDocument();
  });

