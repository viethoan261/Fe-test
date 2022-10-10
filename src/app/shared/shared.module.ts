import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { AngularResizeEventModule } from 'angular-resize-event';
import { QRCodeModule } from 'angularx-qrcode';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { BadgeComponent } from './components/badge/badge.component';
import { ButtonActionComponent } from './components/button-action/button-action.component';
import { ButtonComponent } from './components/button/button.component';
import { DateRangePickerComponent } from './components/date-range-picker/date-range-picker.component';
import { EditorComponent } from './components/editor/editor.component';
import { FilePublicComponent } from './components/file-public/file-public.component';
import { FileComponent } from './components/file/file.component';
import { ModalFileComponent } from './components/modal-file/modal-file.component';
import { ModalComponent } from './components/modal/modal.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { NotBlankComponent } from './components/not-blank/not-blank.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SelectAllComponent } from './components/select-all/select-all.component';
import { TableTitleComponent } from './components/table-title/table-title.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { UploadSimpleComponent } from './components/upload-simple/upload-simple.component';
import { UploadComponent } from './components/upload/upload.component';
import { ValidateMessageComponent } from './components/validate-message/validate-message.component';
import { DirectiveModule } from './directive/directive.module';
import { PipeModule } from './pipe/pipe.module';
@NgModule({
  declarations: [
    ModalComponent,
    TableTitleComponent,
    UploadComponent,
    EditorComponent,
    UploadSimpleComponent,
    ButtonComponent,
    BadgeComponent,
    ButtonActionComponent,
    PaginationComponent,
    FilePublicComponent,
    ModalFileComponent,
    SelectAllComponent,
    NoDataComponent,
    NotBlankComponent,
    ValidateMessageComponent,
    DateRangePickerComponent,
    TreeViewComponent,
    UploadFileComponent,
  ],
  imports: [
    NzSpinModule,
    CommonModule,
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    TranslateModule,
    NzNotificationModule,
    NzFormModule,
    NzRadioModule,
    NzTableModule,
    NzDividerModule,
    NzSwitchModule,
    NzIconModule,
    NzToolTipModule,
    NzTabsModule,
    NzPaginationModule,
    NzCardModule,
    NzButtonModule,
    NzBadgeModule,
    NzInputModule,
    NzDropDownModule,
    NzModalModule,
    NzCheckboxModule,
    NzPopoverModule,
    NzUploadModule,
    NzMessageModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzSelectModule,
    NzCollapseModule,
    NzEmptyModule,
    NzBreadCrumbModule,
    NzImageModule,
    NzBackTopModule,
    NzCarouselModule,
    DirectiveModule,
    PipeModule,
    NzInputNumberModule,
    QRCodeModule,
    NzTreeViewModule,
    NzTreeSelectModule,
    AngularResizeEventModule,
    NzAvatarModule,
  ],
  exports: [
    ModalComponent,
    PaginationComponent,
    NotBlankComponent,
    SelectAllComponent,
    NoDataComponent,
    ModalFileComponent,
    EditorComponent,
    ButtonActionComponent,
    FilePublicComponent,
    ButtonComponent,
    BadgeComponent,
    UploadSimpleComponent,
    UploadComponent,
    TableTitleComponent,
    CommonModule,
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    TranslateModule,
    NzNotificationModule,
    NzFormModule,
    NzRadioModule,
    NzTableModule,
    NzDividerModule,
    NzSwitchModule,
    NzIconModule,
    NzToolTipModule,
    NzTabsModule,
    NzPaginationModule,
    NzCardModule,
    NzButtonModule,
    NzBadgeModule,
    NzInputModule,
    NzDropDownModule,
    NzModalModule,
    NzCheckboxModule,
    NzPopoverModule,
    NzUploadModule,
    NzMessageModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzSelectModule,
    NzCollapseModule,
    NzEmptyModule,
    NzBreadCrumbModule,
    NzImageModule,
    NzBackTopModule,
    ValidateMessageComponent,
    NzCarouselModule,
    DirectiveModule,
    PipeModule,
    NzInputNumberModule,
    DateRangePickerComponent,
    QRCodeModule,
    TreeViewComponent,
    NzTreeSelectModule,
    AngularResizeEventModule,
    UploadFileComponent,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
