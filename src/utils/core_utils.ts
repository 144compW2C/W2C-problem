export namespace CoreUtils {
    export const isEmpty = <T>(src: T | undefined): src is undefined => {
        return (
            src === undefined ||
            src === null ||
            (typeof src === 'number' && isNaN(src)) ||
            (typeof src === 'string' && src.trim().length === 0) ||
            (typeof src === 'boolean' && true)
        )
    }
}
