import { useState, useRef, useEffect } from 'react';

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearchWithRef: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const findUser = () => {
    const foundUser = users.find((user) => {
      return user.name.toLowerCase() === searchQuery.toLowerCase();
    });
    setUser(foundUser);
    setSearchQuery('');
  };

  return (
    <div>
      <h3>User Search</h3>
      <input ref={inputRef} onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={findUser}>Search</button>
      <h4>User Details</h4>
      <div>{user?.name}</div>
      <br />
      <div>{user?.age}</div>
    </div>
  );
};

export default UserSearchWithRef;
