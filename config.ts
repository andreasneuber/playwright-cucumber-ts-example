import 'dotenv/config';

export interface TestConfig {
    baseUrl: string;
    browser: 'chromium' | 'firefox' | 'webkit';
    headless: boolean;
    slowMo: number;
    timeout: number;
    viewport: {
        width: number;
        height: number;
    };
    screenshot: {
        onFailure: boolean;
        path: string;
    };
    video: {
        enabled: boolean;
        path: string;
    };
}

export const config: TestConfig = {
    baseUrl: process.env.BASE_URL || 'http://localhost:8000/index.php',
    browser: (process.env.BROWSER as 'chromium' | 'firefox' | 'webkit') || 'chromium',
    headless: process.env.HEADLESS === 'true',
    slowMo: parseInt(process.env.SLOW_MO || '100'),
    timeout: parseInt(process.env.TIMEOUT || '60000'),
    viewport: {
        width: parseInt(process.env.VIEWPORT_WIDTH || '1920'),
        height: parseInt(process.env.VIEWPORT_HEIGHT || '1080')
    },
    screenshot: {
        onFailure: process.env.SCREENSHOT_ON_FAILURE !== 'false',
        path: process.env.SCREENSHOT_PATH || 'reports/screenshots'
    },
    video: {
        enabled: process.env.VIDEO_ENABLED === 'true',
        path: process.env.VIDEO_PATH || 'reports/videos'
    }
};
