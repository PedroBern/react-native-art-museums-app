import testHook from "./_testHook";
import detailsReducer from "../../../src/store/hooks/details";

describe("detailsReducer", () => {
  it("render", () => {
    expect(testHook(() => detailsReducer(1))).toMatchSnapshot();
  });
});
