import { createStitches } from '../src/index.js'

const internal = Symbol.for('sxs.internal')

describe('Components', () => {
	test('The `restyled` function returns an implicit span component', () => {
		const { restyled } = createStitches()
		const component = restyled()

		expect(component.$$typeof).toBe(Symbol.for('react.forward_ref'))
		expect(component[internal].type).toBe('span')
	})

	test('The `restyled` function can return an explicit div component', () => {
		const { restyled } = createStitches()
		const component = restyled('div')

		expect(component.$$typeof).toBe(Symbol.for('react.forward_ref'))
		expect(component[internal].type).toBe('div')
	})

	test('The `restyled` function can return an explicit React component', () => {
		function TextComponent() {
			return 'text'
		}

		const { restyled } = createStitches()
		const component = restyled(TextComponent)

		expect(component.$$typeof).toBe(Symbol.for('react.forward_ref'))
		expect(component[internal].type).toBe(TextComponent)
	})

	test('The `restyled` function can return an explicit forwarded React component', () => {
		const ForwardedComponent = {
			$$typeof: Symbol.for('react.forward_ref'),
			render: () => 'text',
		}

		const { restyled } = createStitches()
		const component = restyled(ForwardedComponent)

		expect(component.$$typeof).toBe(Symbol.for('react.forward_ref'))
		expect(component[internal].type).toBe(ForwardedComponent)
	})
})
