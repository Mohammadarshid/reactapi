import react, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [Users, setUsers] = useState("");

  //get user

  const af = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    af();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center">Post Users Api</h1>
        <div className="container">
          {Users &&
            Users.map((user) => (
              <div className="card p-3 mt-2" key={user.id}>
                <p>{user.id}</p>
                <p>{user.name}</p>
                <p>{user.username}</p>

                <p>{user.city}</p>
                <p>{user.email}</p>
                <p>{user.suit}</p>
                <p>{user.company.name}</p>
                <p>{user.geo}</p>
                <p>{user.zipcode}</p>
                <p>{user.id2}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
