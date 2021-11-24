import { Post } from "@/domain";

const add = (number: number) => number + 1;
const numbersFromZeroTo = (number: number) => [...Array(number).keys()];
const fakePost = (id: number) => ({
  id,
  title: `Post ${id.toString().padStart(2, "0")}`,
  content: "...",
});

type Compose<I0, I1, I2> = (
  f: (argument: I1) => I2
) => (g: (argument: I0) => I1) => (argument: I0) => I2;

const compose: Compose<number, number, Post> = (f) => (g) => (n) => f(g(n));
const createPost = compose(fakePost)(add);

export default class PostService {
  private posts: Post[] = numbersFromZeroTo(100).map(createPost);

  async list(): Promise<Post[]> {
    return this.posts;
  }
}
