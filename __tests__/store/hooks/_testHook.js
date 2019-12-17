// https://dev.to/itsjoekent/write-functional-tests-for-react-hooks-4b07
import React from "react";
import { shallow, mount } from "enzyme";

export default function testHook(runHook, args, flushEffects = true) {
  function HookWrapper() {
    const output = runHook(args);

    return <span output={output} />;
  }

  const wrapperFunc = flushEffects ? mount : shallow;
  const wrapper = wrapperFunc(<HookWrapper />);

  return wrapper.find("span").props().output;
}
