import { createStitches } from '../src/index.js'

describe('emerson', () => {
	test('lake', () => {
		const { restyled, toString } = createStitches({
			utils: {
				px: (value) => ({
					paddingLeft: value,
					paddingRight: value,
				}),
			},
		})

		const component = restyled('span', {
			variants: {
				size: {
					'1': {
						px: '$1',
					},
					'2': {
						px: '$2',
					},
				},
			},
		})

		const cssText = (
			`--sxs{--sxs:3 c-PJLV-efCiES-size-1}@media{` +
				`.c-PJLV-efCiES-size-1{padding-left:var(--space-1);padding-right:var(--space-1)}` +
			`}`
		)

		component.render({ size: '1' })

		expect(toString()).toBe(cssText)

		component.render({ size: '1' })

		expect(toString()).toBe(cssText)

		component.render({ size: '1' })

		expect(toString()).toBe(cssText)
	})
})
