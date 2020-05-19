import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { VideoPageDirect } from '../../video-play-mgrs.enum';
import { CommunicationService } from '../../services/communication.service';
import { Subscription } from 'rxjs';
import { MatVideoComponent } from 'src/app/_common/video/video.component';

@Component({
  selector: 'app-layout-type4',
  templateUrl: './layout-type4.component.html',
  styleUrls: ['./layout-type4.component.scss']
})
export class LayoutType4Component implements OnInit, OnDestroy {
  @ViewChild('video1', { static: true }) video1: MatVideoComponent;
  @ViewChild('video2', { static: true }) video2: MatVideoComponent;
  @ViewChild('video3', { static: true }) video3: MatVideoComponent;
  @ViewChild('video4', { static: true }) video4: MatVideoComponent;
  @ViewChild('video5', { static: true }) video5: MatVideoComponent;
  @ViewChild('video6', { static: true }) video6: MatVideoComponent;
  @ViewChild('video7', { static: true }) video7: MatVideoComponent;
  @ViewChild('video8', { static: true }) video8: MatVideoComponent;
  videolist = [];
  mailindex = 0;
  sub = new Subscription();
  flexChangePageSize = 100;
  pages = 2;
  //放大縮小相關
  bigScreen = false;
  //page0
  page0UhalfFlex = 50;  //pag0的上半部
  page0UhalfShow = true;//pag0的上半部

  page0LUFlex = 50;//page0的左上
  page0LUShow = true;//page0的左上

  page0RUFlex = 50;//page0的右上
  page0RUShow = true;//page0的右上

  page0DhalfFlex = 50;  //page0的下半部
  page0DhalfShow = true;//page0的下半部

  page0LDFlex = 50;//page0的左下
  page0LDShow = true;//page0的左下

  page0RDFlex = 50;//page0的右下
  page0RDShow = true;//page0的右下
  //page1
  page1UhalfFlex = 50;  //pag0的上半部
  page1UhalfShow = true;//pag0的上半部

  page1LUFlex = 50;//page0的左上
  page1LUShow = true;//page0的左上

  page1RUFlex = 50;//page0的右上
  page1RUShow = true;//page0的右上

  page1DhalfFlex = 50;  //page0的下半部
  page1DhalfShow = true;//page0的下半部

  page1LDFlex = 50;//page0的左下
  page1LDShow = true;//page0的左下

  page1RDFlex = 50;//page0的右下
  page1RDShow = true;//page0的右下


  constructor(
    private communicationService: CommunicationService
  ) { }
  ngOnDestroy(): void {
    //console.log(`LayoutType4Component=>ngOnDestroy`);
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    const obsSub = this.communicationService.pagechange$.subscribe((data: VideoPageDirect) => {
      //console.log(`LayoutType4Component=>${data}`);
      this.changePage(data);
    });
    this.sub.add(obsSub);
    const obssub1 = this.communicationService.videolist$.subscribe((data: any[]) => {
      this.videolist = data;
      for (let index = 0; index < this.videolist.length; index++) {
        let elm = this.videolist[index];
        this[`video${index + 1}`]['src'] = elm.src;
        this[`video${index + 1}`]['title'] = `ch${index + 1}`;
      }
    });
    this.sub.add(obssub1);
  }
  changePage(direct: VideoPageDirect) {
    //console.log(`LayoutType4Component=>${direct}`);
    switch (direct) {
      case VideoPageDirect.Left:
        //console.log("<<");
        this.mailindex = (this.mailindex + this.pages - 1) % this.pages;
        //this.communicationService.videoSrcChange(this.video1, this.videolist[this.mailindex].src);
        break;
      case VideoPageDirect.Right:
        //console.log(">>");
        this.mailindex = (this.mailindex + 1) % this.pages;
        //this.communicationService.videoSrcChange(this.video1, this.videolist[this.mailindex].src);
        break;
    }
    //console.log(`this.mailindex=${this.mailindex}`);
    if (this.mailindex == 0) {
      this.showPage0();
    } else {
      this.showPage1();
    }
  }
  Dbclick(whoclick: string, whovideo: any) {
    //console.dir(whoclick);
    console.log(`Dbclick ${whoclick}`);
    //if (whovideo.src == null) return;
    this.bigScreen = !this.bigScreen;
    console.log(`bigScreen ${this.bigScreen}`);
    switch (whoclick) {
      case "video1":
        this.selectvideo1();
        break;
      case "video2":
        this.selectvideo2();
        break;
      case "video3":
        this.selectvideo3();
        break;
      case "video4":
        this.selectvideo4();
        break;
      //------------------
      case "video5":
        this.selectvideo5();
        break;
      case "video6":
        this.selectvideo6();
        break;
      case "video7":
        this.selectvideo7();
        break;
      case "video8":
        this.selectvideo8();
        break;
      default:
        break;
    }
  }
  //#region page0相關
  //顯示page0
  private showPage0() {
    this.bigScreen = false;
    this.page0UhalfFlex = 50;  //pag0的上半部
    this.page0UhalfShow = true;//pag0的上半部
    //
    this.page0DhalfFlex = 50;  //page0的下半部
    this.page0DhalfShow = true;//page0的下半部
    //
    this.page0LUFlex = 50;//page0的左上
    this.page0LUShow = true;//page0的左上

    this.page0RUFlex = 50;//page0的右上
    this.page0RUShow = true;//page0的右上

    this.page0LDFlex = 50;//page0的左下
    this.page0LDShow = true;//page0的左下

    this.page0RDFlex = 50;//page0的右下
    this.page0RDShow = true;//page0的右下

  }

  //只顯示page0的上半部
  private showPage0UpHalf() {
    this.page0UhalfFlex = 100;  //pag0的上半部
    this.page0UhalfShow = true;//pag0的上半部
    //
    this.page0DhalfFlex = 0;  //page0的下半部
    this.page0DhalfShow = false;//page0的下半部
  }
  //只顯示page0的下半部
  private showPage0DownHalf() {
    this.page0UhalfFlex = 0;  //pag0的上半部
    this.page0UhalfShow = false;//pag0的上半部
    //
    this.page0DhalfFlex = 100;  //page0的下半部
    this.page0DhalfShow = true;//page0的下半部
  }
  //只顯示page0的左上
  private showPage0LeftUp() {
    this.page0LUFlex = 100;//page0的左上
    this.page0LUShow = true;//page0的左上

    this.page0RUFlex = 50;//page0的右上
    this.page0RUShow = false;//page0的右上
  }
  //只顯示page0的右上
  private showPage0RightUp() {
    this.page0LUFlex = 50;//page0的左上
    this.page0LUShow = false;//page0的左上

    this.page0RUFlex = 100;//page0的右上
    this.page0RUShow = true;//page0的右上
  }
  //只顯示page0的左下
  private showPage0LeftDown() {
    this.page0LDFlex = 100;//page0的左下
    this.page0LDShow = true;//page0的左下

    this.page0RDFlex = 50;//page0的右下
    this.page0RDShow = false;//page0的右下
  }
  //只顯示page0的右下
  private showPage0RightDown() {
    this.page0LDFlex = 50;//page0的左下
    this.page0LDShow = false;//page0的左下

    this.page0RDFlex = 100;//page0的右下
    this.page0RDShow = true;//page0的右下
  }
  //#endregion page0相關

  //#region page1相關
  //顯示page1---------------------
  private showPage1() {
    this.bigScreen = false;
    this.page1UhalfFlex = 50;  //pag1的上半部
    this.page1UhalfShow = true;//pag1的上半部
    //
    this.page1DhalfFlex = 50;  //page1的下半部
    this.page1DhalfShow = true;//page1的下半部
    //
    this.page1LUFlex = 50;//page1的左上
    this.page1LUShow = true;//page1的左上

    this.page1RUFlex = 50;//page1的右上
    this.page1RUShow = true;//page1的右上

    this.page1LDFlex = 50;//page1的左下
    this.page1LDShow = true;//page1的左下

    this.page1RDFlex = 50;//page1的右下
    this.page1RDShow = true;//page1的右下
  }
  //只顯示page1的上半部
  private showPage1UpHalf() {
    this.page1UhalfFlex = 100;  //pag1的上半部
    this.page1UhalfShow = true;//pag1的上半部
    //
    this.page1DhalfFlex = 0;  //page1的下半部
    this.page1DhalfShow = false;//page1的下半部
  }
  //只顯示page1的下半部
  private showPage1DownHalf() {
    this.page1UhalfFlex = 0;  //pag1的上半部
    this.page1UhalfShow = false;//pag1的上半部
    //
    this.page1DhalfFlex = 100;  //page1的下半部
    this.page1DhalfShow = true;//page1的下半部
  }
  //只顯示page1的左上
  private showPage1LeftUp() {
    this.page1LUFlex = 100;//page1的左上
    this.page1LUShow = true;//page1的左上

    this.page1RUFlex = 50;//page1的右上
    this.page1RUShow = false;//page1的右上
  }
  //只顯示page1的右上
  private showPage1RightUp() {
    this.page1LUFlex = 50;//page1的左上
    this.page1LUShow = false;//page1的左上

    this.page1RUFlex = 100;//page1的右上
    this.page1RUShow = true;//page1的右上
  }
  //只顯示page1的左下
  private showPage1LeftDown() {
    this.page1LDFlex = 100;//page1的左下
    this.page1LDShow = true;//page1的左下

    this.page1RDFlex = 50;//page1的右下
    this.page1RDShow = false;//page1的右下
  }
  //只顯示page0的右下
  private showPage1RightDown() {
    this.page1LDFlex = 50;//page1的左下
    this.page1LDShow = false;//page1的左下

    this.page1RDFlex = 100;//page1的右下
    this.page1RDShow = true;//page1的右下
  }
  //#endregion page1相關

  //
  private selectvideo1() {
    if (this.bigScreen) {
      //只顯示page0的上半部
      this.showPage0UpHalf();
      //只顯示page0的左上
      this.showPage0LeftUp();
    } else {
      //顯示page0
      this.showPage0();
    }
  }
  private selectvideo2() {
    if (this.bigScreen) {
      //只顯示page0的上半部
      this.showPage0UpHalf();
      //只顯示page0的右上
      this.showPage0RightUp();
    } else {
      //顯示page0
      this.showPage0();
    }
  }
  private selectvideo3() {
    if (this.bigScreen) {
      //只顯示page0的下半部
      this.showPage0DownHalf();
      //只顯示page0的左下
      this.showPage0LeftDown();
    } else {
      //顯示page0
      this.showPage0();
    }
  }
  private selectvideo4() {
    if (this.bigScreen) {
      //只顯示page0的下半部
      this.showPage0DownHalf();
      //只顯示page0的右下
      this.showPage0RightDown();
    } else {
      //顯示page0
      this.showPage0();
    }
  }
  //
  private selectvideo5() {
    if (this.bigScreen) {
      //只顯示page1的上半部
      this.showPage1UpHalf();
      //只顯示page1的左上
      this.showPage1LeftUp();
    } else {
      //顯示page1
      this.showPage1();
    }
  }
  private selectvideo6() {
    if (this.bigScreen) {
      //只顯示page1的上半部
      this.showPage1UpHalf();
      //只顯示page1的右上
      this.showPage1RightUp();
    } else {
      //顯示page1
      this.showPage1();
    }
  }
  private selectvideo7() {
    if (this.bigScreen) {
      //只顯示page1的下半部
      this.showPage1DownHalf();
      //只顯示page1的左下
      this.showPage1LeftDown();
    } else {
      //顯示page1
      this.showPage1();
    }
  }
  private selectvideo8() {
    if (this.bigScreen) {
      //只顯示page1的下半部
      this.showPage1DownHalf();
      //只顯示page1的右下
      this.showPage1RightDown();
    } else {
      //顯示page1
      this.showPage1();
    }
  }

}
