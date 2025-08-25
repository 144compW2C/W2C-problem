import { v4 as uuidv4 } from 'uuid'

export namespace CoreUtils {
  /**
   * あなたIE？
   * @returns
   */
  export const isIE = () => {
    const ua = window.navigator.userAgent.toLowerCase()
    return ua.match(/(msie|trident)/) ? true : false
  }

  /**
   * クライアントのオリジンを取得
   * 当然サーバーサイドでは動作しません。
   * @returns
   */
  export const getHost = () => {
    if (location !== undefined) {
      return location.protocol + '//' + location.host
    }

    return undefined
  }

  /**
   * UUID生成
   * uuidを直接生成させずにラッパーを提供するのは、途中で実装を変更する可能性があるため。
   * （例：uuidv4?uuidv5?何桁？）
   * @returns
   */
  export function genUUID(): string {
    return uuidv4()
  }

  /**
   * オブジェクトからnullまたはundefinedの項目を除去
   * @param obj
   * @returns
   */
  export function filterNulls<T>(obj: T): T | undefined {
    if (obj === undefined || obj === null) {
      return undefined
    }

    const keyList = Object.keys(obj)
    for (const key of keyList) {
      /* eslint-disable */
      if ((obj as any)[key] === null || (obj as any)[key] === undefined) {
        delete (obj as any)[key]
      }
      /* eslint-enable */
    }

    return obj
  }

  /**
   * undefined/null/NaN/空文字(trim後)か否か判定する
   * @param src
   * @returns
   */
  export const isEmpty = <T>(src: T | undefined): src is undefined => {
    return (
      src === undefined ||
      src === null ||
      (typeof src === 'number' && isNaN(src)) ||
      (typeof src === 'string' && src.trim().length === 0)
    )
  }
}
