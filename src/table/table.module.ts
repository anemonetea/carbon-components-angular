import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { PopoverModule } from "./../popover/popover.module";
import { NFormsModule } from "./../forms/forms.module";

import { Table } from "./table.component";
import { TableModel } from "./table-model.class";
import { TablePagination } from "./table-pagination.component";
import { TableGotoPage } from "./table-goto-page.component";
import { TableItem } from "./table-item.class";
import { TableHeaderItem } from "./table-header-item.class";
import { IconModule } from "./../icon/icon.module";

export { Table } from "./table.component";
export { TableModel } from "./table-model.class";
export { TableItem } from "./table-item.class";
export { TableHeaderItem } from "./table-header-item.class";

@NgModule({
	declarations: [
		Table,
		TableGotoPage,
		TablePagination
	],
	exports: [
		Table,
		TableGotoPage,
		TablePagination
	],
	imports: [
		CommonModule,
		NFormsModule,
		FormsModule,
		IconModule,
		PopoverModule
	]
})
export class TableModule {}
