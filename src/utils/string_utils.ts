import { CoreUtils } from './core_utils'

export namespace StringUtils {
    export function nvl(src: string | undefined | null, other: string = '') {
        if (typeof src !== 'string') {
            return !(src === undefined || src === null) ? String(src) : other
        }

        return !CoreUtils.isEmpty(src) ? src : other
    }
}
