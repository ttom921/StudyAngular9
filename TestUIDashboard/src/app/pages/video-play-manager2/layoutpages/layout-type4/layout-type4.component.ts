import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideoPageDirect } from '../../video-play-mgrs.enum';
import { CommunicationService } from '../../services/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout-type4',
  templateUrl: './layout-type4.component.html',
  styleUrls: ['./layout-type4.component.scss']
})
export class LayoutType4Component implements OnInit, OnDestroy {
  sub = new Subscription();
  mailindex = 0;
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


  divlushow = true;//左上
  divlufxFlex = 50;
  div1show = true;
  div1fxFlex = 50;
  div2show = true;
  div2fxFlex = 50;
  //
  divldshow = true;//左下
  divldfxFlex = 50;
  div3show = true;
  div3fxFlex = 50;
  div4show = true;
  div4fxFlex = 50;
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
    console.log(`this.mailindex=${this.mailindex}`);
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
      default:
        break;
    }
  }
  //顯示page0
  private showPage0() {
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

}
