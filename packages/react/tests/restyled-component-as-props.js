import { createStitches } from '../src/index.js'

describe('As prop', () => {
	test('The "as" property can be used or overridden', () => {
		const { restyled } = createStitches()
		const component1 = restyled()

		const expression1 = component1.render()

		expect(expression1.type).toBe('span')

		const component2 = restyled('div')
		const expression2 = component2.render()

		expect(expression2.type).toBe('div')

		const expression2a = component2.render({ as: 'span' })

		expect(expression2a.type).toBe('span')
	})

	test('The "as" property is followed during extension', () => {
		const { restyled } = createStitches()
		const component1 = restyled('div')
		const component2 = restyled(component1)
		const expression = component2.render()

		expect(expression.type).toBe('div')

		const expression2a = component2.render({ as: 'span' })

		expect(expression2a.type).toBe('span')
	})
})
