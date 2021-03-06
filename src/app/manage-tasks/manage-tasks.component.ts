import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgGrid, NgGridItem, NgGridConfig, NgGridItemConfig, NgGridItemEvent} from 'angular2-grid';

interface Box {
  id: number;
  config: any;
}

@Component({
  selector: 'app-manage-tasks',
  templateUrl: './manage-tasks.component.html',
  styleUrls: ['./manage-tasks.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ManageTasksComponent implements OnInit {

  ngOnInit() {
  }

  private boxes: Array<Box> = [];
	private rgb: string = '#efefef';
	private curNum;
	private gridConfig: NgGridConfig = <NgGridConfig>{
		'margins': [5],
		'draggable': true,
		'resizable': true,
		'max_cols': 3,
		'max_rows': 0,
		'visible_cols': 0,
		'visible_rows': 0,
		'min_cols': 1,
		'min_rows': 1,
		'col_width': 2,
		'row_height': 2,
		'cascade': "up",
		'min_width': 50,
		'min_height': 30,
		'fix_to_grid': true,
		'auto_style': true,
		'auto_resize': false,
		'maintain_ratio': false,
		'prefer_new': false,
		'zoom_on_drag': false,
    'limit_to_screen': true,
    'fix_item_position_direction': 'horizontal',
    'fix_collision_position_direction': 'horizontal'
	};
	private itemPositions: Array<any> = [];

	constructor() {
		const dashconf = this._generateDefaultDashConfig();
		for (var i = 0; i < dashconf.length; i++) {
			const conf = dashconf[i];
			conf.payload = 1 + i;
			this.boxes[i] = { id: i + 1, config: conf };
		}
		this.curNum = dashconf.length + 1;
	}

	addBox(): void {
		const conf: NgGridItemConfig = this._generateDefaultItemConfig();
		conf.payload = this.curNum++;
		this.boxes.push({ id: conf.payload, config: conf });
	}

	removeWidget(index: number): void {
		if (this.boxes[index]) {
			this.boxes.splice(index, 1);
		}
	}

	updateItem(index: number, event: NgGridItemEvent): void {
		// Do something here
	}

	onDrag(index: number, event: NgGridItemEvent): void {
		// Do something here
	}

	onResize(index: number, event: NgGridItemEvent): void {
		// Do something here
	}

	private _generateDefaultItemConfig(): NgGridItemConfig {
		return { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 };
	}

	private _generateDefaultDashConfig(): NgGridItemConfig[] {
		return [{ 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 10, 'sizey': 10 },
		{ 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 }];
	}

}
