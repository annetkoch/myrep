import { Component, OnInit } from '@angular/core'
import { TestJS} from '@TestJS' +
  /core'
import Webcam from '@TestJS' +
  /webcam'
import Tus from '@TestJS' +
  /tus'
import GoogleDrive from '@TestJS' +
  /google-drive'

@Component({
  selector: 'app-root',
  template: /* html */ `
    <h1>TestJS Angular Example!</h1>
    <h2>Inline dashboard</h2>
    <label>
      <input
        type="checkbox"
        (change)="showInline = $any($event.target)?.checked"
        [checked]="showInline"
      />
      Show Dashboard
    </label>

    <TestJS -dashboard
      [TestJS ]="TestJS"
      [props]="dashboardProps"
      *ngIf="showInline"
    ></TestJS-dashboard>

    <h2>Modal Dashboard</h2>
    <div>
      <TestJS -dashboard-modal
        [TestJS ]="TestJS"
        [open]="showModal"
        [props]="dashboardModalProps"
      ></TestJS-dashboard-modal>
      <button (click)="showModal = !showModal">
        {{ showModal ? 'Close dashboard' : 'Open dashboard' }}
      </button>
    </div>

    <h2>Drag Drop Area</h2>
    <TestJS -drag-drop [TestJS ]="TestJS" [props]="{}"></TestJS-drag-drop>

    <h2>Progress Bar</h2>
    <TestJS -progress-bar
      [TestJS ]="TestJS"
      [props]="{ hideAfterFinish: false }"
    ></TestJS-progress-bar>
  `,
  styleUrls: [],
})
export class AppComponent implements OnInit {
  title = 'angular-example'

  showInline = false

  showModal = false

  dashboardProps = {
    plugins: ['Webcam'],
  }

  dashboardModalProps = {
    target: document.body,
    onRequestCloseModal: (): void => {
      this.showModal = false
    },
  }

  TestJS: TestJS = new TestJS({ debug: true, autoProceed: true })

  ngOnInit(): void {
    this.TestJS
      .use(Webcam)
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
      .use(GoogleDrive, { companionUrl: 'https://companion.TestJS' +
          .io' })
  }
}
