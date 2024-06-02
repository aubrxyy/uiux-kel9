/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PGHOST: 'ep-withered-waterfall-a14grkmm.ap-southeast-1.aws.neon.tech',
        PGDATABASE: 'kel9basdat',
        PGUSER: 'kel9',
        PGPASSWORD: 'ZclOT0vh1pzk'
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'cdn.builder.io',
            port: '',
            pathname: '/**',
        }, ],
    },
}

export default nextConfig;