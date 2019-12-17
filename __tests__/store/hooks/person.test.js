import testHook from "./_testHook";
import personReducer from "../../../src/store/hooks/person";

describe("personReducer", () => {
  it("render", () => {
    expect(testHook(() => personReducer(1))).toMatchSnapshot();
  });
});
