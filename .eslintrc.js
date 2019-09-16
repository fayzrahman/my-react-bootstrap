module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
		"eslint:recommended",
		"plugin:react/recommended"         
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
		"react",
        "react-hooks"
    ],
    "rules": {
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",  
        "indent": [
            "error",
            "tab",
            { "SwitchCase": 1 }

        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};