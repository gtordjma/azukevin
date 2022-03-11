import { Mainnet, Rinkeby, DAppProvider } from '@usedapp/core'
import { Header } from "./components/Header"
import { Mint } from './components/Mint';

function App() {
  return (
    <DAppProvider config={{
      networks: [Mainnet, Rinkeby]
    }}>
      <Header />
      <Mint />
    </DAppProvider>
  );
}

export default App;
