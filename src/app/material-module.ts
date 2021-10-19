import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    exports: [
      MatButtonModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatDialogModule,
      MatIconModule,
      MatInputModule,
      MatNativeDateModule,
      MatTableModule,
    ]
  })
  export class MaterialModule {}
