import * as renderer from "react-test-renderer";
import SampleComponent from "..";
test("component testing'", function () {
    var component = renderer.create(text, "World" /  > );
    var testInstance = component.root;
    expect(testInstance.findByType(SampleComponent).props.text).toBe("World");
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=datepciker.spec.js.map