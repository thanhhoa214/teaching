import { useEffect, useState } from "react";
import type { ItemProps } from "./Deals";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type PostsResponse = Post[];

export const useItems = () => {
  const [posts, setPosts] = useState<PostsResponse>([]);
  const items: ItemProps[] = posts.map((post) => {
    return {
      id: post.id,
      item: post.title,
      image: "https://picsum.photos/200",
      price: post.id * 10,
      newPrice: post.id * 9,
      markdown_perc: "10%",
      rating: "4/5",
    };
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => {
        return response.json();
      })
      .then((data: Post[]) => {
        setPosts(data);
      });
  });

  return items;
};
