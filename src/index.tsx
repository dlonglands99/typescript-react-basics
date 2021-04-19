import ReactDOM from 'react-dom';
import UserSearchWithRef from './refs/UserSearchWithRef';

const App = () => {
  return (
    <div>
      <UserSearchWithRef />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
