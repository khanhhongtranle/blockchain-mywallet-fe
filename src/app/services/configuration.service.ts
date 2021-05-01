export class ConfigurationService {

    public apiUrl: string;
    public data: any = {
        autoLogout: 1
    };

    constructor() {
    }
}

export const ConfigurationServiceFactory = () => {
    // Create env
    const env = new ConfigurationService();

    // Read environment variables from browser window
    const browserWindow = window || {};
    const envKey = '__env';
    const browserWindowEnv = browserWindow[envKey] || {};

    // Assign environment variables from browser window to env
    // In the current implementation, properties from env.js overwrite defaults from the EnvService.
    // If needed, a deep merge can be performed here to merge properties instead of overwriting them.
    for (const key in browserWindowEnv) {
        if (browserWindowEnv.hasOwnProperty(key)) {
            env[key] = window[envKey][key];
        }
    }

    return env;
};

export const ConfigurationServiceProvider = {
    provide: ConfigurationService,
    useFactory: ConfigurationServiceFactory,
    deps: [],
};
