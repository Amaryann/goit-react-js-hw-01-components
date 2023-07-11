 import { FriendList } from "./friendlist/FriendList";
 import { Profile } from "./profile/Profile";
 import { Transactions } from "./transactions/Transactions";
 import { Statistics } from "./statistics/Statistics";
 import user from "../user.json";

 import data from "../data.json";
 import friends from "../friends.json"
 import transactions from "../transactions.json"

export const App = () => {
  return (
    <div
  
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
        
      }}

    >
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics
      title="Upload stats"
      stats={data}
      /> 
      <FriendList
      friends={friends}
      />
       <Transactions
      items={transactions}
      /> 
    </div>
  );
};
export default App