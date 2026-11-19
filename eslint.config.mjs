import next from 'eslint-config-next'

const config = [
    ...next,
    { ignores: ['.next/**', 'node_modules/**'] },
    {
        rules: {
            'no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
            ],
            'react/display-name': 0
        }
    }
]

export default config
