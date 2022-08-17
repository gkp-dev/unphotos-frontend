module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                "med": "50vh",
                "large": "65vh",
            },
            backgroundImage: theme => ({
                'logo': "url('/src/images/logo-un.png')",
                'lg': "url('/src/images/banner-large.png')",
                'med': "url('/src/images/banner-medium.png')",
                'mini': "url('/src/images/bg-mini.jpg')",
                'wallpaper-mini': "url('/src/images/wallpaper-mini.jpg')",
                'wallpaper-med': "url('/src/images/wallpaper-med.jpg')",
                'wallpaper-lg': "url('/src/images/wallpaper-large.jpg')",
                'nature-mini': "url('/src/images/nature-mini.jpg')",
                'nature-med': "url('/src/images/nature-med.jpg')",
                'nature-lg': "url('/src/images/nature-large.jpg')",
                'water-mini': "url('/src/images/water-mini.jpg')",
                'water-med': "url('/src/images/water-med.jpg')",
                'water-lg': "url('/src/images/water-large.jpg')",
                'people-mini': "url('/src/images/people-mini.jpg')",
                'people-med': "url('/src/images/people-med.jpg')",
                'people-lg': "url('/src/images/people-large.jpg')",
                'errorBtn': "url('/src/images/errorBtn.png')"
            }),
            fontFamily: {
                'satisfy': 'Satisfy , cursive',
                'poppins': 'Poppins , sans-serif'
            }

        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}