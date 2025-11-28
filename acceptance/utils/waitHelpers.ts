import { Locator } from '@playwright/test';

/**
 * Wait utilities for better handling of asynchronous operations
 */

export interface WaitOptions {
    timeout?: number;
    interval?: number;
}

/**
 * Wait for an element to be visible
 */
export async function waitForVisible(
    locator: Locator,
    timeout: number = 5000
): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
}

/**
 * Wait for an element to be hidden
 */
export async function waitForHidden(
    locator: Locator,
    timeout: number = 5000
): Promise<void> {
    await locator.waitFor({ state: 'hidden', timeout });
}

/**
 * Wait for an element to be attached to DOM
 */
export async function waitForAttached(
    locator: Locator,
    timeout: number = 5000
): Promise<void> {
    await locator.waitFor({ state: 'attached', timeout });
}

/**
 * Wait for an element to be detached from DOM
 */
export async function waitForDetached(
    locator: Locator,
    timeout: number = 5000
): Promise<void> {
    await locator.waitFor({ state: 'detached', timeout });
}

/**
 * Wait for a condition to be true
 */
export async function waitForCondition(
    condition: () => Promise<boolean> | boolean,
    options: WaitOptions = {}
): Promise<void> {
    const { timeout = 5000, interval = 100 } = options;
    const startTime = Date.now();

    while (Date.now() - startTime < timeout) {
        if (await condition()) {
            return;
        }
        await new Promise(resolve => setTimeout(resolve, interval));
    }

    throw new Error(`Condition not met within ${timeout}ms`);
}

/**
 * Wait for element to have text
 */
export async function waitForText(
    locator: Locator,
    expectedText: string | RegExp,
    timeout: number = 5000
): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
    
    await waitForCondition(async () => {
        const text = await locator.textContent();
        if (!text) return false;
        
        if (typeof expectedText === 'string') {
            return text.includes(expectedText);
        }
        return expectedText.test(text);
    }, { timeout });
}

/**
 * Retry an action with exponential backoff
 */
export async function retryAction<T>(
    action: () => Promise<T>,
    maxAttempts: number = 3,
    initialDelay: number = 1000
): Promise<T> {
    let lastError: Error;
    
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await action();
        } catch (error) {
            lastError = error as Error;
            
            if (attempt === maxAttempts) {
                break;
            }
            
            const delay = initialDelay * Math.pow(2, attempt - 1);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
    
    throw new Error(`Action failed after ${maxAttempts} attempts. Last error: ${lastError!.message}`);
}
