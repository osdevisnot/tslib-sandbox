import { sum } from '../src';

describe('tslib-sandbox', () => {
	test('exports', () => {
		expect(sum).toBeDefined();
		expect(typeof sum).toEqual('function');
	});
});
