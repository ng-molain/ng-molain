import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ml-web-camera',
  templateUrl: './web-camera.component.html',
  styleUrls: ['./web-camera.component.scss']
})
export class WebCameraComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() autoOn = true;
  @Input() echo?: HTMLVideoElement;
  @ViewChild('videoElement') videoElement: ElementRef<HTMLVideoElement> | undefined;
  _interval: any;
  streaming?: boolean;
  streamSwitch?: boolean;
  stream?: MediaStream;

  constructor() { }

  ngOnInit(): void {
    if (this.autoOn) {
      this.switchOn();
    }
  }

  ngOnDestroy() {
    // TODO 关闭相机，清除 stream 跟踪
    // 参考 Webcam.js, https://www.cnblogs.com/wlor/p/13372189.html
    this.switchOff();
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Taking_still_photos
  // http://www.atyun.com/25188.html 前端头像分析
  ngAfterViewInit() {
    this._setupCamera();

    // this._getMedia();
  }

  public switchOn() {
    console.log("Camera on...")
    this.streamSwitch = true;
    setTimeout(() => {
      this._getMedia();
    }, 100);
    // this._getMedia();
  }

  public switchOff() {
    console.log("Camera off...")
    this.streamSwitch = false;
    if (this.stream) {
      this.stream.getTracks().forEach(it => it.stop())
    }
    // 用这种获取新的的方式，好像不能stop之前的，没有生效
    // navigator.mediaDevices.getUserMedia({video: true}).then(...)
  }

  private _setupCamera() {
    const video = this.videoElement?.nativeElement as HTMLVideoElement;
    if (!video) {
      return;
    }
    const containerWidth = video.parentElement?.clientWidth || 168;

    const width = containerWidth;// 320;
    let height = 0;
    video.addEventListener('canplay', (ev) => {
      if (!this.streaming) {
        height = video.videoHeight / (video.videoWidth / width);

        video.setAttribute('width', String(width));
        video.setAttribute('height', String(height));
        // canvas.setAttribute('width', width);
        // canvas.setAttribute('height', height);
        this.streaming = true;
      }
    }, false);
    video.addEventListener('emptied', (ev) => {
      console.log("emptied", ev)
    })
    video.addEventListener('error', (ev) => {
      console.log("error", ev)
    })

    navigator.mediaDevices.enumerateDevices()
      .then((devices: MediaDeviceInfo[]) => {
        console.log('Devices: ', devices);
      })
      .catch((reason) => {
        console.warn('获取设备信息失败: ', typeof reason, reason);
      });

    navigator.mediaDevices.addEventListener('devicechange', (ev) => {
      console.warn('devicechange: ', ev);
    })
  }

  private _getMedia() {
    const video = this.videoElement?.nativeElement;
    if (!video) {
      return;
    }

    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then((stream) => {
        this.stream = stream;

        stream.addEventListener('removetrack', (evt) => {
          console.log("stream removetrack", evt)
        });
        stream.onremovetrack = function() {
          console.log('Stream ended');
        };

        stream.addEventListener('active', (evt) => {
          console.log("stream active", evt)
        });
        stream.addEventListener('inactive', (evt) => {
          console.warn("stream inactive", evt)
          this.streaming = false;

          // destroy 的时候主动关闭也会触发此事件，因此这里需要判定是否主动触发的
          if (this.streamSwitch && !this._interval) {
            this._interval = setInterval(() => this._getMedia(), 800);
          }

        });

        clearInterval(this._interval);
        console.log(this._interval);
        this._interval = null;

        video.srcObject = stream;
        video.play();

        if (this.echo) {
          this.echo.srcObject = stream;
          this.echo.play();
        }
      })
      .catch((reason: any) => {
        console.warn('加载摄像头失败:', typeof reason, reason.name,  reason);
        if (!this._interval) {
          this._interval = setInterval(() => this._getMedia(), 800);
        }
      });


  }
}
