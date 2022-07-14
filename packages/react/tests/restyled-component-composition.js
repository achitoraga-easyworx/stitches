import { createStitches } from '../src/index.js'

describe('Composition', () => {
	test('Renders an empty component', () => {
		const { restyled, getCssText } = createStitches()
		const generic = restyled()
		expect(generic.render().props).toEqual({ className: 'PJLV' })
		expect(getCssText()).toBe('')
	})

	test('Does not render a component without an explicit rendering', () => {
		const { restyled, getCssText } = createStitches()
		const red = restyled({ color: 'red' })
		const size14 = restyled({ fontSize: '14px' })
		const bold = restyled({ fontWeight: 'bold' })
		const title = restyled(red, size14, bold, { fontFamily: 'monospace' })
		expect(`${title}`).toBe('.c-gmqXFB:where(.c-hzkWus.c-cQFdVt.c-kngyIZ)')
		expect(getCssText()).toBe('')
	})

	test('Renders a component with all compositions', () => {
		const { restyled, getCssText } = createStitches()
		const red = restyled({ color: 'red' })
		const size14 = restyled({ fontSize: '14px' })
		const bold = restyled({ fontWeight: 'bold' })
		const title = restyled(red, size14, bold, { fontFamily: 'monospace' })
		expect(title.render().props.className).toBe('c-gmqXFB c-hzkWus c-cQFdVt c-kngyIZ')
		expect(getCssText()).toBe('--sxs{--sxs:2 c-gmqXFB c-hzkWus c-cQFdVt c-kngyIZ}@media{.c-gmqXFB{color:red}.c-hzkWus{font-size:14px}.c-cQFdVt{font-weight:bold}.c-kngyIZ{font-family:monospace}}')
	})
})
