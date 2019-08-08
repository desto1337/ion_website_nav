import { Component, OnInit } from '@angular/core';
import * as ProgressBar from 'progressbar.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {

  circleVisuality = {
    color: 'var(--ion-color-primary)',
    easing: 'easeInOut',
    strokeWidth: 2.0,
    trailWidth: 0.5,
    step: (state, shape) => {
      shape.path.setAttribute('strokeWidth', state.color);
      shape.setText(Math.round(shape.value() * 100) + ' %');
    }
  };

  constructor() { }

  ngOnInit() {
    const nodejsCircle = new ProgressBar.Circle('#nodejs', this.circleVisuality);
    const ionicCircle = new ProgressBar.Circle('#ionic4', this.circleVisuality);
    const angularCircle = new ProgressBar.Circle('#angular', this.circleVisuality);
    const vuejsCircle = new ProgressBar.Circle('#vuejs', this.circleVisuality);
    const bootstrapCircle = new ProgressBar.Circle('#bootstrap', this.circleVisuality);
    const microsoftBotCircle = new ProgressBar.Circle('#mbotframework', this.circleVisuality);
    const fioriCircle = new ProgressBar.Circle('#fiori', this.circleVisuality);
    const typescriptCircle = new ProgressBar.Circle('#typescript', this.circleVisuality);
    const javascriptCircle = new ProgressBar.Circle('#javascript', this.circleVisuality);
    const aspnetCircle = new ProgressBar.Circle('#aspnet', this.circleVisuality);
    const javaCircle = new ProgressBar.Circle('#java', this.circleVisuality);
    const abapCircle = new ProgressBar.Circle('#abap', this.circleVisuality);

    nodejsCircle.animate(0.8, {
      duration: 1200
    });
    ionicCircle.animate(0.8, {
      duration: 1200
    });
    angularCircle.animate(0.7, {
      duration: 1200
    });
    vuejsCircle.animate(0.7, {
      duration: 1200
    });
    bootstrapCircle.animate(0.7, {
      duration: 1200
    });
    microsoftBotCircle.animate(0.6, {
      duration: 1200
    });

    fioriCircle.animate(0.6, {
      duration: 1200
    });

    typescriptCircle.animate(0.8, {
      duration: 1200
    });

    javascriptCircle.animate(0.8, {
      duration: 1200
    });

    aspnetCircle.animate(0.6, {
      duration: 1200
    });

    javaCircle.animate(0.7, {
      duration: 1200
    });

    abapCircle.animate(0.7, {
      duration: 1200
    });

    console.log('Skills-Page initialized');
  }

}
