import { useSelector, useDispatch } from "react-redux";
import { deleteBlog } from "./store/blogSlice";
const Blog = () => {
  const dispatch = useDispatch();
  const myList = useSelector((state) => state.blog.myList);
  console.log(myList);
  return (
    <div>
      Blog
      <ul>
        {myList.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => dispatch(deleteBlog(item.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
