import {
  render,
  fireEvent,
  screen,
  RenderResult,
} from "@testing-library/react";

import { PostCard } from "./PostCard";

const postMock = {
  userId: 1,
  id: 1,
  title: "Post 1",
  body: "Body post 1",
  comments: [],
};

describe("<PostCard variant='DEFAULT' />", () => {
  let component: RenderResult<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement,
    HTMLElement
  >;

  beforeEach(() => {
    component = render(
      <PostCard post={postMock} handleSeeMore={() => {}} variant="DEFAULT" />
    );
  });

  test("show button See More", () => {
    expect(component.getByText("See More"));
  });
});
