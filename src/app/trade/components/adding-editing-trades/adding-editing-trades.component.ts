import { Component, Inject, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    ValidatorFn,
    Validators,
} from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Trade } from '../../model/trade';

@Component({
    selector: 'app-adding-editing-trades',
    templateUrl: './adding-editing-trades.component.html',
    styleUrls: ['./adding-editing-trades.component.scss'],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }]
})
export class AddingEditingTradesComponent implements OnInit {
    public tradesGroup: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<AddingEditingTradesComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { trade: Trade, id: number; }
    ) { }

    public ngOnInit(): void {
        this.initForm(this.data.trade);
    }

    private initForm(trade: Trade): void {
        this.tradesGroup = this.formBuilder.group({
            id: this.data.id,
            entryPrice: [
                trade?.entryPrice,
                [this.validatePrice(), Validators.required, Validators.pattern(/^(0|[1-9]\d*)?$/)],
            ],
            exitPrice: [
                trade?.exitPrice,
                [this.validatePrice(), Validators.required, Validators.pattern(/^(0|[1-9]\d*)?$/)],
            ],
            entryDate: [trade?.entryDate, Validators.required],
            exitDate: [trade?.exitDate, Validators.required]
        });
    }

    private validatePrice(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean; } | null => {
            if (control.value < 0) {
                return { invalidNumber: true };
            }
            return null;
        };
    }

    public submit(): void {
        if (this.tradesGroup.valid) {
            this.dialogRef.close({ ...this.tradesGroup.getRawValue(), profit: this.profit });
        }
    }

    private get profit(): number {
        return this.tradesGroup.get('exitPrice')?.value - this.tradesGroup.get('entryPrice')?.value;
    }

    public get textButton(): string {
        return this.data.trade ? "Edit Trade" : "Add Trade";
    }
}
