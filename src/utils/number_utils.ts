export namespace NumberUtils {
  export function formatNumber(
    src: number | undefined,
    maxFractionDigits: number = 0,
  ): string {
    if (src === undefined || src === null || isNaN(src)) {
      return ''
    }
  }
}
