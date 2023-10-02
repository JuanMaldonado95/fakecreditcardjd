import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'interactiveCards';

  cardName?: string;
  cardNumber?: string;
  cardMM?: number;
  cardYY?: number;
  cardCVC?: number;

  formCard!: FormGroup;
  savedForm: any;

  submit: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formCard = this.fb.group({
      cardName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      cardNumber: [
        '',
        [Validators.required],
      ],
      cardMM: [
        '',
        [Validators.required, Validators.pattern('^(0?[1-9]|1[0-2])$')],
      ],
      cardYY: [
        '',
        [
          Validators.required,
          Validators.pattern('^(10|21|12|13|14|15|16|17|18|19|20|21|22|23)$'),
        ],
      ],
      cardCVC: ['', Validators.required],
    });
  }

  onInputChange() {
    const cardNumberControl = this.formCard.get('cardNumber');
    if (cardNumberControl) {
      let inputValue = cardNumberControl.value.replace(/\s/g, '');
      if (inputValue.length > 0) {
        inputValue = inputValue.match(new RegExp('.{1,4}', 'g')).join(' ');
      }
      cardNumberControl.setValue(inputValue, { emitEvent: false });
    }
  }

  onSubmit() {
    console.log(this.formCard);
    if (this.formCard.valid) {
      this.submit = true;
    } else {
    }
  }

  buttonContinue(){
    this.submit = false;
    this.formCard.reset();
  }
}
