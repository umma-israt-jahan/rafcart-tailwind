/** @type {import('windcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px'
        },
        container: {
            center: true,
            padding: '1rem'
        },
        extend: {
            fontFamily: {
                kalam: "'Kalam', cursive"
                    // poppins: " 'poppins',cursive",
                    // roboto: "'roboto', cursive"
            },
            colors: {
                'primary': '#FD3D57'
            }
        },
    },
    variants: {
        extend: {
            display: ['group-hover']
        },
    },
    plugins: [require('@windcss/forms')],
}