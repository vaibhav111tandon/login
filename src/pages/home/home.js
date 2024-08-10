import { Salutation } from "../../components/Salutation/Salutation";
import { CreatePost } from "../../components/CreatePost/CreatePost";
import { Post } from "../../components/Post/Post";

import { homeData } from "../../service/home.data";

import './home.css';

function Home() {

  const {salutation, createPostCard, cardsList} = homeData;

  return (
    <div className="atl-home">
        <Salutation {...salutation}/>
        <CreatePost {...createPostCard}/>
        <div className="atl-home__posts">
          {
            cardsList.map((post, index) => {
              const { name } = post;
              const key = `${name}_${index}`;

              return <Post key={key} {...post}/>
            })
          }
        </div>
    </div>
  );
}

export default Home;
