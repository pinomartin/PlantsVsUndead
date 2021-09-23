import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import PlantsScreen from './screens/PlantsScreen';

function App() {
  return (
    <Container fluid>
      <HomeScreen /> 
      <PlantsScreen />
    </Container>
  );
}

export default App;
