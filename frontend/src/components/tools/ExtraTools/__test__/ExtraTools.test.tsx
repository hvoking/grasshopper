import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ExtraTools from '../ExtraTools';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup)
it("renders without crashing", () => {
	const div = document.createElement('div');
	ReactDOM.render(<ExtraTools></ExtraTools>, div)
})

it("renders Extra Tools correctly", () => {
	const {getByTestId} = render(<ExtraTools></ExtraTools>)
	expect(getByTestId('extraTools')).toHaveTextContent("#")

})

it("matches snapshot", () => {
	const tree = renderer.create(<ExtraTools></ExtraTools>).toJSON()
	expect(tree).toMatchSnapshot();
})