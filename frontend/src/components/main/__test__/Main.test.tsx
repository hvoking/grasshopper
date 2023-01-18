// React imports
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// App imports
import { Main } from '../';

// Third-party imports
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup)
it("renders without crashing", () => {
	const div = document.createElement('div');
	ReactDOM.render(<Main></Main>, div)
})

// it("renders Main correctly", () => {
// 	const {getByTestId} = render(<Main></Main>)
// 	expect(getByTestId('main')).toHaveTextContent("#")

// })

// it("matches snapshot", () => {
// 	const tree = renderer.create(<Main></Main>).toJSON()
// 	expect(tree).toMatchSnapshot();
// })