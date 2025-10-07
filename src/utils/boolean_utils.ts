export namespace BooleanUtils {
    export function ensureBool(
        src: boolean | null,
        other: boolean = true,
    ): boolean {
        // srcがbooleanの場合はそのまま返す（true/falseをそのまま保持）
        if (typeof src === 'boolean') {
            return src
        }

        // srcがnullまたはundefinedの場合はデフォルト値（other）を返す
        return other
    }
}
