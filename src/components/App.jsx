import user from './profile/user.json';
import { Profile } from './profile/Profile';


export const App = () => {
  return (
    <section>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </section>
  );
};
