import renderer from "react-test-renderer";

export const renderAndSnap = component => {
  const output = renderer.create(component).toJSON();
  expect(output).toMatchSnapshot();
};
