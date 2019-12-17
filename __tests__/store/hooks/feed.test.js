import testHook from "./_testHook";
import feedReducer from "../../../src/store/hooks/feed";

describe("feedReducer", () => {
  it("render", () => {
    expect(testHook(() => feedReducer())).toMatchSnapshot();
  });

  it("render with argument", () => {
    expect(testHook(() => feedReducer("filter"))).toMatchSnapshot();
  });
});
