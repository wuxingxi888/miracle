/**
 * 从URL中提取文件名
 * @param url - 文件的URL
 * @returns 文件名
 * @throws 如果URL无效或不包含有效路径，则抛出错误
 */
function getFileName(url: string): string {
    if (!url || typeof url !== 'string') {
        throw new Error('Invalid URL');
    }
    const num = url.lastIndexOf('/');
    if (num === -1) {
        throw new Error('URL does not contain a valid path');
    }
    let fileName = url.substring(num + 1);
    // 把参数和文件名分割开
    fileName = decodeURI(fileName.split('?')[0]);
    return fileName;
}

/**
 * 下载文件函数
 * @param url - 文件的URL
 * @param target - 下载链接的目标窗口，默认为'_blank'
 * @param fileName - 下载后的文件名，如果未提供则使用URL中的文件名
 * @returns 返回一个Promise，表示下载操作是否成功
 */
export function downloadFile({
    url,
    target = '_blank',
    fileName,
}: {
    url: string;
    target?: '_self' | '_blank';
    fileName?: string;
}): Promise<boolean> {
    // 是否同源
    const isSameHost = new URL(url).host === location.host;
    return new Promise<boolean>((resolve, reject) => {
        if (isSameHost) {
            // 同源下载逻辑
            const link = document.createElement('a');
            link.href = url;
            link.target = target;

            if (link.download !== undefined) {
                link.download = fileName || getFileName(url);
            }

            if (document.createEvent) {
                const event = document.createEvent('MouseEvents');
                event.initEvent('click', true, true);
                link.dispatchEvent(event);
                return resolve(true);
            }

            if (url.indexOf('?') === -1) {
                url += '?download';
            }

            window.open(url, target);
            return resolve(true);
        } else {
            // 跨域下载逻辑
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = url;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const context = canvas.getContext('2d')!;
                context.drawImage(img, 0, 0, img.width, img.height);
                canvas.toBlob((blob) => {
                    if (blob) {
                        const link = document.createElement('a');
                        link.href = window.URL.createObjectURL(blob);
                        link.download = fileName || getFileName(url);
                        link.click();
                        URL.revokeObjectURL(link.href);
                        resolve(true);
                    } else {
                        reject(new Error('Failed to create blob from image'));
                    }
                }, 'image/jpeg');
            };
            img.onerror = () => {
                reject(new Error('CORS request failed or image load error'));
            };
        }
    });
}
