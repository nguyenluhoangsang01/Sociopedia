import CreatePost from "../../components/CreatePost";
import Post from "../../components/Post";

const Home = () => {
  return (
    <div className="mt-6 flex flex-col gap-4">
      <CreatePost />

      <Post />
    </div>
  );
};

export default Home;
