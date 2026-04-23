import localFont from 'next/font/local';

export const telegraf = localFont({
    src: [
        {
            path: './fonts/Telegraf Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/Telegraf UltraBold 800.otf',
            weight: '800',
            style: 'normal',
        },
        {
            path: './fonts/Telegraf UltraLight 200.otf',
            weight: '200',
            style: 'normal',
        },
    ],
    variable: '--font-telegraf',
});