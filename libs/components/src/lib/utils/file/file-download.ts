import {HttpHeaders, HttpResponse} from "@angular/common/http";

export function saveAs(blob: Blob, fileName: string) {
  const a = document.createElement('a');
  const url = URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
}

// https://blog.csdn.net/qq_40044912/article/details/110475876
export function download(response: HttpResponse<Blob>) {
  const blob = response.body;
  const fileName = tryGetFilename(response.headers);
  if (blob) {
    saveAs(blob, decodeURI(fileName));
  }
}

export function tryGetFilename(headers: HttpHeaders) {
  const contentDisposition = headers.get("Content-Disposition");
  if (contentDisposition) {
    const tmpStr = contentDisposition?.split("filename*=")[1];
    const filename = decodeURI(tmpStr.split("'")[2]);
    if (filename) {
      return filename;
    }
  }
  return headers.get('downloadName') ?? Math.random().toString();
}
