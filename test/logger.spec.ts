import { logger } from '../src/components/logger';

describe('Logger()', () => {

	it('should log out a message to the console', () => {
		// setup
		let consoleLogWasCalledWith;
		const originalConsoleLog = console.log;
		const fakeConsoleLog = (message: unknown) => consoleLogWasCalledWith = message;
		console.log = fakeConsoleLog;
		// exercise
		logger('some message');
		expect(consoleLogWasCalledWith).toMatch('some message');
		// teardown
		console.log = originalConsoleLog;
	});

});
