import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        MatProgressSpinnerModule
    ],
    declarations: []
})
export class MaterialModule { }
