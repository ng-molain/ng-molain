// @return Promise<boolean>
async function askWritePermission() {
  try {
    // The clipboard-write permission is granted automatically to pages
    // when they are the active tab. So it's not required, but it's more safe.
    const { state } = await navigator.permissions.query({ name: 'clipboard-write' } as any)
    return state === 'granted'
  } catch (error) {
    // Browser compatibility / Security error (ONLY HTTPS) ...
    return false
  }
}

// @params blob - The ClipboardItem takes an object with the MIME type as key, and the actual blob as the value.
// @return Promise<void>
export const setToClipboard = async (blob: any) => {
  const data = [new ClipboardItem({ [blob.type]: blob })]
  await navigator.clipboard.write(data)
}
