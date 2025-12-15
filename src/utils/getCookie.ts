// エンコードのまま
// 例) user=%7B%22name%22%3A%22Alice%22%7D...'
export const getToken = (cookie: string) =>
    document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${cookie}=`))
        ?.split('=')[1]

// デコードされるのでそのまま JSON.parse できる
// 例) {"name":"Alice"...}
export function getCookie(name: string) {
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
    return match ? decodeURIComponent(match[1]) : null
}
