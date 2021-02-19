import { fetchPostAPI, fetchUsersAPI } from './services/common'
import { ReusableListing } from './components/reusableComponent/ReusableListing'
import UserCard from './components/usercard/UserCard';
import PostCard from './components/postcard/PostCard';
function App() {
  return (
    <div>
      <ReusableListing url={fetchPostAPI} component={PostCard}/>
      <ReusableListing url={fetchUsersAPI} component={UserCard}/>
    </div>
  );
}

export default App;
