// helloworld.test.js

import Main from "../src/components/Main.vue";
import { mount } from "@vue/test-utils";

test("HelloWorld Component renders the correct text", () => {
  const wrapper = mount(Main, {
    global: {
      mocks: {
        $hello: "hello",
      },
    },
  });

  console.log(wrapper.html());

  expect(wrapper.text()).toBe("hello world");
});
