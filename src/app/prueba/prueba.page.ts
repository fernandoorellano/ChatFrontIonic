import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    console.log('[scroll]', scrollPosition);
 
  }

  ngOnInit() {
    // this.scroll();
  }

 

scrollTo2() {
  console.log("click")
  window.scroll({
    top: 1110,
    left: 0,
    behavior: 'smooth',
  });
}

scrollTo0() {
  const elementList = document.querySelectorAll('.footer');
  const element = elementList[0] as HTMLElement;
  element.scrollIntoView({ behavior: 'smooth' });
}


scrollTo() {
  const elementList = document.querySelectorAll('.footer');
  const element = elementList[0] as HTMLElement;

  // window.scrollTo(0,0);
  element.scrollIntoView({ behavior: 'smooth', block: 'center'  });
}

}
