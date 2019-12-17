const mockPressable = name => {
  const RealComponent = require.requireActual(name);

  class Component extends RealComponent {
    render() {
      return React.createElement(
        RealComponent.displayName || RealComponent.name,
        { ...this.props, onClick: this.props.onPress },
        this.props.children
      );
    }
  }

  return Component;
};

export default mockPressable;
