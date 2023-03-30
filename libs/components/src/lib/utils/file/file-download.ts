import {HttpResponse} from "@angular/common/http";

export function saveAs(blob: Blob, fileName: string) {
  const a = document.createElement('a');
  const url = URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
}

export function download(response: HttpResponse<Blob>) {
  const blob = response.body;
  const fileName = response.headers.get('downloadName') ?? Math.random().toString();
  if (blob) {
    saveAs(blob, decodeURI(fileName));
  }
}
