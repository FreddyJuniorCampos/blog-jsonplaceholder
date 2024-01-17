import { render, fireEvent, RenderResult } from "@testing-library/react";

import { PostCard } from "./PostCard";

const postMock = {
  userId: 1,
  id: 1,
  title: "Post 1",
  body: "Body post 1",
  comments: [],
};

describe("<PostCard variant='DEFAULT' />", () => {
  const mockHandler = jest.fn();

  test("click button", () => {
    const component = render(
      <PostCard post={postMock} handleSeeMore={mockHandler} variant="DEFAULT" />
    );
    const button = component.getByText("See More");

    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test("Don't show button if handler isn't passed by pros ", () => {
    const component = render(<PostCard post={postMock} variant="DEFAULT" />);
    const button = component.queryByText("See More");

    expect(button).toBeNull();
  });
});

describe("<PostCard variant='FULL' />", () => {
  let component: RenderResult<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement,
    HTMLElement
  >;

  beforeEach(() => {
    component = render(<PostCard post={postMock} variant="FULL" />);
  });

  test("Don't show button if variant === FULL", () => {
    const button = component.queryByText("See More");

    expect(button).toBeNull();
  });
});
