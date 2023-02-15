import { About } from '../sections/About';
import { Customers } from '../sections/Customers';
import { Portfolio } from '../sections/Portfolio';
import { Services } from '../sections/Services';

export const Main = () => {
  return (
    <main>
      <About />
      <Portfolio />
      <Customers />
      <Services />
    </main>
  );
};
