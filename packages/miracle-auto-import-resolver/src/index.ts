export interface MiracleResolverOptions {
    /**
     * Whether to automatically import the corresponding styles of the components.
     *
     * @default true
     */
    importStyle?:
        | boolean
        | 'css'
        /** Compatible with Miracle */
        | 'less';

    /**
     * Set the referenced module type.
     *
     * @default 'esm'
     */
    module?: 'esm' | 'cjs';

    /**
     * @deprecated Please use `module` option instead.
     */
    ssr?: boolean;
}

export type MiracleImportsOptions = Pick<
    MiracleResolverOptions,
    'module' | 'ssr'
>;

/**
 * Button->button; ButtonGroup->button-group
 */
function kebabCase(key: string) {
    const result = key.replace(/([A-Z])/g, ' $1').trim();
    return result.split(' ').join('-').toLowerCase();
}

function getModuleType(options: MiracleResolverOptions): string {
    const { ssr, module = 'esm' } = options;

    // compatible with the deprecated `ssr` option
    if (ssr !== undefined) {
        return ssr ? 'lib' : 'es';
    }

    return module === 'cjs' ? 'lib' : 'es';
}

function getSideEffects(dirName: string, options: MiracleResolverOptions) {
    const { importStyle = true } = options;

    if (!importStyle) {
        return;
    }

    const moduleType = getModuleType(options);

    if (importStyle === 'less')
        return `@miracle-web/ui/${moduleType}/${dirName}/style/less`;

    return `@miracle-web/ui/${moduleType}/${dirName}/style/index`;
}

function getAPIMap() {
    const apiMap = new Map<string, string>();

    const api = {
        dialog: [
            'showDialog',
            'closeDialog',
            'showConfirmDialog',
            'setDialogDefaultOptions',
            'resetDialogDefaultOptions',
        ],
        imagePreview: ['showImagePreview'],
        notify: [
            'showNotify',
            'closeNotify',
            'setNotifyDefaultOptions',
            'resetNotifyDefaultOptions',
        ],
        toast: [
            'showToast',
            'closeToast',
            'showFailToast',
            'showLoadingToast',
            'showSuccessToast',
            'allowMultipleToast',
            'setToastDefaultOptions',
            'resetToastDefaultOptions',
        ],
    };

    Object.entries(api).forEach(([importName, apiList]) => {
        apiList.forEach((api) => {
            apiMap.set(api, importName);
        });
    });

    return apiMap;
}

export function MiracleResolver(options: MiracleResolverOptions = {}) {
    const moduleType = getModuleType(options);
    const apiMap = getAPIMap();

    return {
        type: 'component' as const,

        resolve: (name: string) => {
            if (name.startsWith('Mi')) {
                const partialName = name.slice(2);
                return {
                    name: partialName,
                    from: `@miracle-web/ui/${moduleType}`,
                    sideEffects: getSideEffects(
                        kebabCase(partialName),
                        options,
                    ),
                };
            }

            // import API
            if (apiMap.has(name)) {
                const partialName = apiMap.get(name)!;
                return {
                    name,
                    from: `@miracle-web/ui/${moduleType}`,
                    sideEffects: getSideEffects(
                        kebabCase(partialName),
                        options,
                    ),
                };
            }
        },
    };
}

export function MiracleImports(options: MiracleImportsOptions = {}) {
    const moduleType = getModuleType(options);

    return {
        [`@miracle-web/ui/${moduleType}`]: [...getAPIMap().keys()],
    };
}
