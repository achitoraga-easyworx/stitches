import { createStitches } from '../src/index.js'

describe('className prop', () => {
	test('Renders a DOM Element with a class matching the className prop', () => {
		const { restyled } = createStitches()

		const component = restyled('div')
		const className = 'myClassName'
		const expression = component.render({ className })

		expect(expression.props.className).toBe(`PJLV ${className}`)
	})

	test('Renders a DOM Element with multiple classes passed as className', () => {
		const { restyled } = createStitches()

		const component = restyled('div')
		const className = 'myClassName1 myClassName2 myClassName3'
		const expression = component.render({ className })

		expect(expression.props.className).toBe(`PJLV ${className}`)
	})

	test('Renders a DOM Element withoup adding an undefined class', () => {
		const { restyled } = createStitches()

		const component = restyled('div')
		const className = undefined
		const expression = component.render({ className })

		expect(expression.props.className).toNotBe('undefined')
	})
})
