import "./posts.scss";
import Post from "../post/Post";
const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "John Lenard",
      userId: 1,
      profilePicture:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime accusantium assumenda vel magnam quas quidem tenetur odit ea at illum!",
      img: "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/tryitnow_GettyImages-1127515284_HR.jpg?w=1600&h=900",
    },
    {
      id: 2,
      name: "Namber2",
      userId: 2,
      profilePicture:
        "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/tryitnow_GettyImages-1127515284_HR.jpg?w=1600&h=900",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime accusantium assumenda vel magnam quas quidem tenetur odit ea at illum!",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
