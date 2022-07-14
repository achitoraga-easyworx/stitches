import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { createStitches } from '../src/index.js'

describe('Basic', () => {
	test('Functionality of restyled()', () => {
		const { restyled, getCssText } = createStitches({
			utils: {
				userSelect: () => (value) => ({
					WebkitUserSelector: value,
					userSelect: value,
				}),
			},
		})

		let Button = restyled('button', {
			'backgroundColor': 'gainsboro',
			'borderRadius': '9999px',
			'fontWeight': 500,
			'padding': '0.75em 1em',
			'border': 0,

			'&:hover': {
				transform: 'translateY(-2px)',
				boxShadow: '0 10px 25px rgba(0, 0, 0, .3)',
			},
		}, (props) => ({
			'transition': `${props.test} 200ms ease`,
		}))

		const vdom = renderer.create(React.createElement(React.Fragment))

		renderer.act(() => {
			vdom.update(React.createElement(Button, { test: '1234' }, 'Hello, World!'))
		})

		expect(vdom.toJSON()).toEqual({
			type: 'button',
			props: {
				className: 'c-iRObmc c-itnrYr',
				test: true,
			},
			children: ['Hello, World!'],
		})

		expect(getCssText()).toBe(
			`--sxs{--sxs:2 c-iRObmc c-itnrYr}@media{.c-iRObmc{background-color:gainsboro;border-radius:9999px;font-weight:500;padding:0.75em 1em;border:0}.c-iRObmc:hover{transform:translateY(-2px);box-shadow:0 10px 25px rgba(0, 0, 0, .3)}.c-itnrYr{transition:all 200ms ease}}`,
		)
	})
})
