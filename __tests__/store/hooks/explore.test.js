import testHook from "./_testHook";
import exploreReducer from "../../../src/store/hooks/explore";

describe("exploreReducer", () => {
  it("render", () => {
    expect(testHook(() => exploreReducer("target"))).toMatchSnapshot();
  });
});
