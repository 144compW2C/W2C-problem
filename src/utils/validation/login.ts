export function validateLogin(email: string, password: string): string | null {
    if (!email || !password) {
        return '未入力項目があります'
    }

    const emailPattern = /^[^@\s]+@ecc\.ac\.jp$/
    if (!emailPattern.test(email)) {
        return '学校のメールアドレスを入力してください'
    }

    if (password.length < 8) {
        return 'パスワードは8文字以上で入力してください'
    }

    const hasUpper = /[A-Z]/.test(password)
    const hasLower = /[a-z]/.test(password)
    const hasDigit = /[0-9]/.test(password)
    if (!hasUpper || !hasLower || !hasDigit) {
        return 'パスワードは大文字+小文字+数字を含めてください'
    }

    return null
}
