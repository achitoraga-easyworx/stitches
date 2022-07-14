import { createStitches } from '../src/index.js'

describe('Issue #1000', () => {
	test('locally scoped token works 1 time', () => {
		const { css, getCssText } = createStitches({ prefix: 'fusion' })

		css({
			$$var1: 'red',
			$$var2: 'yellow',

			h1: {
				color: ['$$var1', '$$var2'],
			},
		})()

		expect(getCssText()).toBe(
			`--sxs{--sxs:2 fusion-c-iAWidG}@media{.fusion-c-iAWidG{--fusion--var1:red;--fusion--var2:yellow}.light .fusion-c-iAWidG h1{color:var(--fusion--var1)}.dark .fusion-c-iAWidG h1{color:var(--fusion--var2)}}`
		)
	})
})
