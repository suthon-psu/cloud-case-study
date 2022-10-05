const isProd = !(!process.env.NODE_ENV || process.env.NODE_ENV === 'development')

const conf = {
    isProd,
    apiPrefix: isProd ? '/api' : 'http://localhost:8000/api',
    imgPrefix: isProd ? '/public/img' : 'http://localhost:8000/static/img'
}

export default conf;